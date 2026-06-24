'use server'

import { createClient } from '@/lib/supabase/server'
import { revalidatePath } from 'next/cache'
import { z } from 'zod'
import { uploadToCloudinary } from '@/lib/cloudinary'

export interface Program {
  id: string;
  title: string;
  description: string;
  badges: string[];
  image_url: string;
  display_order: number;
  created_at?: string;
}

const ProgramSchema = z.object({
  title: z.string().min(2, "Title must be at least 2 characters"),
  description: z.string().min(5, "Description must be at least 5 characters"),
  badges: z.array(z.string()).min(1, "At least one badge is required"),
  image_url: z.string().min(1, "Image is required"),
  display_order: z.number().int().default(0),
})

const FALLBACK_PROGRAMS: Program[] = [
  {
    id: '1',
    title: "Kick Boxing training",
    badges: ["13-40 Years", "All Levels"],
    description: "Backed by over three decades of national and international martial arts experience.",
    image_url: "/images/who_we_are_image1.webp",
    display_order: 1
  },
  {
    id: '2',
    title: "Full contract fight training",
    badges: ["13-40 Years", "All Levels"],
    description: "Backed by over three decades of national and international martial arts experience.",
    image_url: "/images/who_we_are_image2.webp",
    display_order: 2
  },
  {
    id: '3',
    title: "Self Defense training",
    badges: ["13-40 Years", "All Levels"],
    description: "Backed by over three decades of national and international martial arts experience.",
    image_url: "/images/who_we_are_image1.webp",
    display_order: 3
  },
  {
    id: '4',
    title: "Sports Karate training",
    badges: ["13-40 Years", "All Levels"],
    description: "Backed by over three decades of national and international martial arts experience.",
    image_url: "/images/who_we_are_image2.webp",
    display_order: 4
  },
];

export async function getPrograms(): Promise<Program[]> {
  try {
    const supabase = await createClient()
    const { data, error } = await supabase
      .from('programs')
      .select('*')
      .order('display_order', { ascending: true })

    if (error) {
      console.warn("Table programs query failed (might not exist yet), using fallback:", error.message);
      return FALLBACK_PROGRAMS;
    }

    return (data && data.length > 0) ? data : FALLBACK_PROGRAMS;
  } catch (err) {
    if (err instanceof Error && (err.message.includes('DYNAMIC_SERVER_USAGE') || (err as any).digest === 'DYNAMIC_SERVER_USAGE')) {
      throw err;
    }
    console.warn("Exception fetching programs, using fallback:", err);
    return FALLBACK_PROGRAMS;
  }
}

export async function addProgram(formData: FormData) {
  try {
    const supabase = await createClient()
    const imageFile = formData.get('image_file') as File;
    let image_url = formData.get('image_url') as string;

    if (imageFile && imageFile.size > 0) {
      image_url = await uploadToCloudinary(imageFile) as string;
    }

    const badgesInput = formData.get('badges') as string || '[]';
    let badges: string[] = [];
    try {
      badges = JSON.parse(badgesInput);
    } catch {
      badges = badgesInput.split(',').map(b => b.trim()).filter(Boolean);
    }

    const displayOrderInput = formData.get('display_order');
    const display_order = displayOrderInput ? parseInt(displayOrderInput as string, 10) : 0;

    const validatedData = ProgramSchema.parse({
      title: formData.get('title'),
      description: formData.get('description'),
      badges,
      image_url,
      display_order,
    })

    const { error } = await supabase.from('programs').insert([validatedData])

    if (error) throw error

    revalidatePath('/')
    revalidatePath('/admin/programs')

    return { success: true }
  } catch (error) {
    console.error('SERVER ACTION ERROR (addProgram):', error)
    if (error instanceof z.ZodError) {
      return { success: false, error: error.issues[0].message }
    }
    return { success: false, error: error instanceof Error ? error.message : "Failed to add program" }
  }
}

export async function updateProgram(id: string, formData: FormData) {
  try {
    const supabase = await createClient()
    const imageFile = formData.get('image_file') as File;
    let image_url = formData.get('image_url') as string;

    // Handle string value 'undefined' or 'null' from form
    if (image_url === 'undefined' || image_url === 'null') {
      image_url = '';
    }

    // Proactive Image Preservation:
    if (id && (!image_url || (!image_url.startsWith('http') && !image_url.startsWith('/'))) && !(imageFile && imageFile.size > 0)) {
      const { data: existing } = await supabase
        .from('programs')
        .select('image_url')
        .match({ id })
        .maybeSingle();
      
      if (existing?.image_url) {
        image_url = existing.image_url;
      }
    }

    if (imageFile && imageFile.size > 0) {
      image_url = await uploadToCloudinary(imageFile) as string;
    }

    // Final Validation Check for image
    if (!image_url) {
      return { success: false, error: "Photo/Image is required." }
    }

    const badgesInput = formData.get('badges') as string || '[]';
    let badges: string[] = [];
    try {
      badges = JSON.parse(badgesInput);
    } catch {
      badges = badgesInput.split(',').map(b => b.trim()).filter(Boolean);
    }

    const displayOrderInput = formData.get('display_order');
    const display_order = displayOrderInput ? parseInt(displayOrderInput as string, 10) : 0;

    const validatedData = ProgramSchema.parse({
      title: formData.get('title'),
      description: formData.get('description'),
      badges,
      image_url,
      display_order,
    })

    const { error } = await supabase
      .from('programs')
      .update(validatedData)
      .match({ id })

    if (error) throw error

    revalidatePath('/')
    revalidatePath('/admin/programs')

    return { success: true }
  } catch (error) {
    console.error('SERVER ACTION ERROR (updateProgram):', error)
    if (error instanceof z.ZodError) {
      return { success: false, error: error.issues[0].message }
    }
    return { success: false, error: error instanceof Error ? error.message : "Failed to update program" }
  }
}

export async function deleteProgram(id: string) {
  try {
    const supabase = await createClient()
    const { error } = await supabase
      .from('programs')
      .delete()
      .match({ id })

    if (error) throw error

    revalidatePath('/')
    revalidatePath('/admin/programs')

    return { success: true }
  } catch (error) {
    console.error('Error deleting program:', error)
    return { success: false, error: "Failed to delete program" }
  }
}

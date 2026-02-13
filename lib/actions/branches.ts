'use server'

import { createClient } from '@/lib/supabase/server'
import { revalidatePath } from 'next/cache'
import { z } from 'zod'
import { uploadToCloudinary } from '@/lib/cloudinary'


const BranchSchema = z.object({
  country_name: z.string().min(2, "Country name is required"),
  place_name: z.string().min(2, "Place name is required"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  instructor_name: z.string().min(2, "Instructor name is required"),
  image_url: z.string().url("Invalid image URL"),
})

export async function getBranches() {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('branches')
    .select('*')
    .order('display_order', { ascending: true })

  if (error) throw error
  return data
}

export async function addBranch(formData: FormData) {
  try {
    const supabase = await createClient()
    const imageFile = formData.get('image_file') as File;
    let image_url = formData.get('image_url') as string;

    if (imageFile && imageFile.size > 0) {
        image_url = await uploadToCloudinary(imageFile) as string;
    }

    const validatedData = BranchSchema.parse({
      country_name: formData.get('country_name'),
      place_name: formData.get('place_name'),
      description: formData.get('description'),
      instructor_name: formData.get('instructor_name'),
      image_url: image_url,
    })

    const { error } = await supabase.from('branches').insert([validatedData])

    if (error) throw error
    revalidatePath('/admin/branches')
    revalidatePath('/branches')
    return { success: true }
  } catch (error) {
    console.error('Error adding branch:', error)
    if (error instanceof z.ZodError) {
      return { success: false, error: error.issues[0].message }
    }
    return { success: false, error: "Failed to add branch" }
  }
}

export async function updateBranch(id: string, formData: FormData) {
  try {
    if (!id) throw new Error("Branch ID is required for update");
    
    const supabase = await createClient()
    const imageFile = formData.get('image_file') as File;
    let image_url = formData.get('image_url') as string;

    // Handle string value 'undefined' or 'null' from form
    if (image_url === 'undefined' || image_url === 'null') {
      image_url = '';
    }

    // Proactive Image Preservation:
    // If we have an ID but no valid image_url in form, fetch the current one from DB
    if (id && (!image_url || !image_url.startsWith('http')) && !(imageFile && imageFile.size > 0)) {
        const { data: existing } = await supabase
            .from('branches')
            .select('image_url')
            .match({ id })
            .maybeSingle();
        
        if (existing?.image_url) {
            image_url = existing.image_url;
        }
    }

    // Handle File Upload
    if (imageFile && imageFile.size > 0) {
        image_url = await uploadToCloudinary(imageFile) as string;
    }

    // Final Validation Check
    if (!image_url || !image_url.startsWith('http')) {
        return { success: false, error: "Photo is required. If photo already exists, please refresh the page." }
    }

    const validatedData = BranchSchema.parse({
      country_name: formData.get('country_name'),
      place_name: formData.get('place_name'),
      description: formData.get('description'),
      instructor_name: formData.get('instructor_name'),
      image_url: image_url,
    })

    const { error } = await supabase
      .from('branches')
      .update(validatedData)
      .match({ id })

    if (error) {
        throw error;
    }

    revalidatePath('/admin/branches')
    revalidatePath('/branches')
    return { success: true }
  } catch (error) {
    console.error('SERVER ACTION ERROR (updateBranch):', error)
    if (error instanceof z.ZodError) {
      return { success: false, error: error.issues[0].message }
    }
    return { success: false, error: error instanceof Error ? error.message : "Failed to update branch" }
  }
}

export async function deleteBranch(id: string) {
  try {
    const supabase = await createClient()
    const { error } = await supabase
      .from('branches')
      .delete()
      .match({ id })

    if (error) throw error
    revalidatePath('/admin/branches')
    revalidatePath('/branches')
    return { success: true }
  } catch (error) {
    console.error('Error deleting branch:', error)
    return { success: false, error: "Failed to delete branch" }
  }
}

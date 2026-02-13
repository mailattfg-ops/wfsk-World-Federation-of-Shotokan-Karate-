'use server'

import { createClient } from '@/lib/supabase/server'
import { revalidatePath } from 'next/cache'
import { z } from 'zod'
import { uploadToCloudinary } from '@/lib/cloudinary'


const WorldRecordSchema = z.object({
  id: z.string().uuid().optional().or(z.literal('')),
  title: z.string().min(2, "Title is required").max(30, "Title must be 30 characters or less"),
  description: z.string().min(10, "Description must be at least 10 characters").max(200, "Description must be 200 characters or less"),
  image_url: z.string().url("Invalid image URL"),
})

export async function getWorldRecord() {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('world_record')
    .select('*')
    .single()

  if (error && error.code !== 'PGRST116') throw error
  return data
}

export async function updateWorldRecord(formData: FormData) {
  try {
    const supabase = await createClient()
    const imageFile = formData.get('image_file') as File;
    let image_url = formData.get('image_url') as string;
    const id = formData.get('id') as string;

    // Handle string value 'undefined' or 'null' from form
    if (image_url === 'undefined' || image_url === 'null') {
      image_url = '';
    }

    // Proactive Image Preservation:
    // If we have an ID but no valid image_url in form, fetch the current one from DB
    if (id && (!image_url || !image_url.startsWith('http')) && !(imageFile && imageFile.size > 0)) {
        const { data: existing } = await supabase
            .from('world_record')
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

    const validatedData = WorldRecordSchema.parse({
      id,
      title: formData.get('title'),
      description: formData.get('description'),
      image_url,
    })

    const { id: validatedId, ...updateData } = validatedData

    // Perform Update
    const { error } = await supabase
      .from('world_record')
      .update(updateData)
      .match({ id: validatedId })

    if (error) throw error
    
    revalidatePath('/admin/world-record')
    revalidatePath('/')
    
    return { success: true }
  } catch (error) {
    console.error('SERVER ACTION ERROR (updateWorldRecord):', error)
    if (error instanceof z.ZodError) {
      return { success: false, error: error.issues[0].message }
    }
    return { success: false, error: "Failed to update record" }
  }
}

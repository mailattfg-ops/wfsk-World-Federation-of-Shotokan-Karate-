'use server'

import { createClient } from '@/lib/supabase/server'
import { revalidatePath } from 'next/cache'
import { z } from 'zod'
import { uploadToCloudinary } from '@/lib/cloudinary'

const NewsSchema = z.object({
    title: z.string().min(2, "Title must be at least 2 characters"),
    subtitle: z.string().optional(),
    description: z.string().min(10, "Description must be at least 10 characters"),
    image_url: z.string().optional(),
    video_url: z.string().optional(),
    media_type: z.enum(['image', 'video']).default('image'),
})

export interface NewsEvent {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  image_url?: string;
  video_url?: string;
  media_type: 'image' | 'video';
  created_at?: string;
}

export async function getNewsEvents() {
    const supabase = await createClient()
    const { data, error } = await supabase
        .from('news_events')
        .select('*')
        .order('created_at', { ascending: false })

    if (error) throw error
    return data
}

export async function addNewsEvent(formData: FormData) {
    try {
        const supabase = await createClient()
        const imageFile = formData.get('image_file') as File;
        let image_url = formData.get('image_url') as string;
        const media_type = (formData.get('media_type') as 'image' | 'video') || 'image';

        if (media_type === 'image' && imageFile && imageFile.size > 0) {
            image_url = await uploadToCloudinary(imageFile) as string;
        }

        const validatedData = NewsSchema.parse({
            title: formData.get('title'),
            subtitle: formData.get('subtitle') || undefined,
            description: formData.get('description'),
            image_url: image_url || undefined,
            video_url: formData.get('video_url') || undefined,
            media_type: media_type,
        })

        const { error } = await supabase.from('news_events').insert([validatedData])

        if (error) throw error

        revalidatePath('/admin/news')
        revalidatePath('/news')
        revalidatePath('/')

        return { success: true }
    } catch (error) {
        console.error('SERVER ACTION ERROR (addNewsEvent):', error)
        if (error instanceof z.ZodError) {
            return { success: false, error: error.issues[0].message }
        }
        return { success: false, error: "Failed to add news event" }
    }
}

export async function updateNewsEvent(id: string, formData: FormData) {
    try {
        if (!id) throw new Error("ID is required for update");
        
        const supabase = await createClient()
        const imageFile = formData.get('image_file') as File;
        let image_url = formData.get('image_url') as string;
        const media_type = (formData.get('media_type') as 'image' | 'video') || 'image';

        // Handle string value 'undefined' or 'null' from form
        if (image_url === 'undefined' || image_url === 'null') {
            image_url = '';
        }

        // Proactive Image Preservation:
        if (media_type === 'image' && id && (!image_url || !image_url.startsWith('http')) && !(imageFile && imageFile.size > 0)) {
            const { data: existing } = await supabase
                .from('news_events')
                .select('image_url')
                .match({ id })
                .maybeSingle();
            
            if (existing?.image_url) {
                image_url = existing.image_url;
            }
        }

        if (media_type === 'image' && imageFile && imageFile.size > 0) {
            image_url = await uploadToCloudinary(imageFile) as string;
        }

        const validatedData = NewsSchema.parse({
            title: formData.get('title'),
            subtitle: formData.get('subtitle') || undefined,
            description: formData.get('description'),
            image_url: image_url || undefined,
            video_url: formData.get('video_url') || undefined,
            media_type: media_type,
        })

        const { error } = await supabase
            .from('news_events')
            .update(validatedData)
            .match({ id })

        if (error) throw error

        revalidatePath('/admin/news')
        revalidatePath('/news')
        revalidatePath('/')

        return { success: true }
    } catch (error) {
        console.error('SERVER ACTION ERROR (updateNewsEvent):', error)
        if (error instanceof z.ZodError) {
            return { success: false, error: error.issues[0].message }
        }
        return { success: false, error: "Failed to update news event" }
    }
}

export async function deleteNewsEvent(id: string) {
    try {
        const supabase = await createClient()
        const { error } = await supabase
            .from('news_events')
            .delete()
            .match({ id })

        if (error) throw error

        revalidatePath('/admin/news')
        revalidatePath('/news')
        
        return { success: true }
    } catch (error) {
        console.error('Error deleting news event:', error)
        return { success: false, error: "Failed to delete news event" }
    }
}

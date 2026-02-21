'use server'

import { createClient } from '@/lib/supabase/server'
import { revalidatePath } from 'next/cache'
import { z } from 'zod'
import { uploadToCloudinary } from '@/lib/cloudinary'



export type MemberRole = 'director' | 'executive' | 'instructor' | 'black_belt';

export interface Member {
  id: string;
  name: string;
  position: string;
  belt_dan?: string;
  image_url: string;
  role: MemberRole;
  country?: string;
  show_belt: boolean;
  belt_color?: string;
  achievements?: string[];
  display_order: number;
  created_at?: string;
}

const MemberSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    position: z.string().min(2, "Position must be at least 2 characters"),
    belt_dan: z.string().optional(),
    image_url: z.string().url("Invalid image URL"),
    role: z.enum(['director', 'executive', 'instructor', 'black_belt']),
    country: z.string().optional(),
    show_belt: z.boolean().default(true),
    belt_color: z.string().optional().default('#E81E26'),
    achievements: z.array(z.string()).max(3).optional().default([]),
}).refine((data) => {
    if (data.show_belt) {
        return !!data.belt_dan && !!data.belt_color;
    }
    return true;
}, {
    message: "Belt and belt color are required when 'Show Rank/Belt' is enabled",
    path: ["belt_dan"],
})


export async function getMembers(role?: MemberRole, country?: string) {
    const supabase = await createClient()
    let query = supabase
        .from('members')
        .select('*')
        .order('display_order', { ascending: true })

    if (role) query = query.eq('role', role)
    if (country) query = query.eq('country', country)

    const { data, error } = await query

    if (error) throw error
    return data
}

export async function addMember(formData: FormData) {
    try {
        const supabase = await createClient()
        const imageFile = formData.get('image_file') as File;
        let image_url = formData.get('image_url') as string;

        if (imageFile && imageFile.size > 0) {
            image_url = await uploadToCloudinary(imageFile) as string;
        }

        const validatedData = MemberSchema.parse({
            name: formData.get('name'),
            position: formData.get('position'),
            belt_dan: formData.get('belt_dan') || undefined,
            image_url: image_url,
            role: formData.get('role'),
            country: formData.get('country') || undefined,
            show_belt: formData.get('show_belt') === 'true',
            belt_color: formData.get('belt_color') || undefined,
            achievements: JSON.parse(formData.get('achievements') as string || '[]'),
        })

        const { error } = await supabase.from('members').insert([validatedData])

        if (error) throw error

        revalidatePath('/admin/team')
        revalidatePath('/team')
        revalidatePath('/black-belts')

        return { success: true }
    } catch (error) {
        if (error instanceof z.ZodError) {
            return { success: false, error: error.issues[0].message }
        }
        return { success: false, error: "Failed to add member" }
    }
}

export async function updateMember(id: string, formData: FormData) {
    try {
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
                .from('members')
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

        // Final Validation Check
        if (!image_url || !image_url.startsWith('http')) {
            return { success: false, error: "Photo is required. If photo already exists, please refresh the page." }
        }

        const validatedData = MemberSchema.parse({
            name: formData.get('name'),
            position: formData.get('position'),
            belt_dan: formData.get('belt_dan') || undefined,
            image_url: image_url,
            role: formData.get('role'),
            country: formData.get('country') || undefined,
            show_belt: formData.get('show_belt') === 'true',
            belt_color: formData.get('belt_color') || undefined,
            achievements: JSON.parse(formData.get('achievements') as string || '[]'),
        })

        const { error } = await supabase
            .from('members')
            .update(validatedData)
            .match({ id })

        if (error) throw error

        revalidatePath('/admin/team')
        revalidatePath('/team')
        revalidatePath('/black-belts')

        return { success: true }
    } catch (error) {
        if (error instanceof z.ZodError) {
            return { success: false, error: error.issues[0].message }
        }
        return { success: false, error: "Failed to update member" }
    }
}

export async function deleteMember(id: string) {
    try {
        const supabase = await createClient()
        const { error } = await supabase
            .from('members')
            .delete()
            .match({ id })

        if (error) throw error

        revalidatePath('/admin/team')
        revalidatePath('/team')
        revalidatePath('/black-belts')

        return { success: true }
    } catch (error) {
        console.error('Error deleting member:', error)
        return { success: false, error: "Failed to delete member" }
    }
}

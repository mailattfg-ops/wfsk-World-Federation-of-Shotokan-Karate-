'use server'

import { createClient } from '@/lib/supabase/server'
import { revalidatePath } from 'next/cache'
import { z } from 'zod'
import { uploadToCloudinary } from '@/lib/cloudinary'

const WhoWeAreSchema = z.object({
  id: z.string().uuid().optional().or(z.literal('')),
  title: z.string().min(2, "Title is required"),
  subtitle: z.string().min(2, "Subtitle is required"),
  certified_box: z.string().min(2, "Certification text is required"),
  hq: z.string().min(2, "Headquarters location is required"),
  paragraphs: z.array(z.string()).min(1, "At least one paragraph of content is required"),
  image1_url: z.string().url("Invalid image 1 URL"),
  image2_url: z.string().url("Invalid image 2 URL"),
})

const FALLBACK_DATA = {
  id: '',
  title: 'World Federation of Shotokan Karate',
  subtitle: 'ショトカン空手の世界連盟',
  certified_box: 'AN ISO 9001:2015 CERTIFIED KARATE FEDERATION\nWORLD RECORDS HOLDING KARATE FEDERATION – UNIVERSAL RECORDS FORUM 2024 & 2025',
  hq: 'World Headquarters - Dubai , UAE',
  paragraphs: [
    'World Federation of Shotokan Karate (WFSK) was established in 2012 to deliver an authentic and complete martial arts experience. Today, WFSK operates internationally across India, UAE, Qatar, Saudi Arabia, Bahrain, U.K and Gambia, following global training standards.',
    'An ISO 9001:2015 certified federation, WFSK offers training in Karate-Do, self-defense, oriental weapons, and fitness, led by expert instructors with over 37 years of national and international experience.',
    'With authorized certifications, structured gradings, and a strong global network, WFSK is committed to discipline, excellence, and the true spirit of Shotokan Karate. World Headquarters: UAE.'
  ],
  image1_url: '/images/who_we_are_image1.webp',
  image2_url: '/images/who_we_are_image2.webp'
}

export async function getWhoWeAre() {
  try {
    const supabase = await createClient()
    const { data, error } = await supabase
      .from('who_we_are')
      .select('*')
      .maybeSingle()

    if (error) {
      console.warn("Table who_we_are query failed (might not exist yet), using fallback:", error.message);
      return FALLBACK_DATA;
    }
    
    return data || FALLBACK_DATA;
  } catch (err) {
    if (err instanceof Error && (err.message.includes('DYNAMIC_SERVER_USAGE') || (err as any).digest === 'DYNAMIC_SERVER_USAGE')) {
      throw err;
    }
    console.warn("Exception fetching who_we_are, using fallback:", err);
    return FALLBACK_DATA;
  }
}

export async function updateWhoWeAre(formData: FormData) {
  try {
    const supabase = await createClient()
    const id = formData.get('id') as string;
    
    const image1File = formData.get('image1_file') as File;
    let image1_url = formData.get('image1_url') as string;
    const image2File = formData.get('image2_file') as File;
    let image2_url = formData.get('image2_url') as string;

    // Handle string value 'undefined' or 'null' from form
    if (image1_url === 'undefined' || image1_url === 'null') image1_url = '';
    if (image2_url === 'undefined' || image2_url === 'null') image2_url = '';

    // Proactive Image Preservation:
    // If we have an ID but no valid image_url in form, fetch the current one from DB
    if (id && (!image1_url || !image1_url.startsWith('http')) && !(image1File && image1File.size > 0)) {
        const { data: existing } = await supabase
            .from('who_we_are')
            .select('image1_url')
            .match({ id })
            .maybeSingle();
        
        if (existing?.image1_url) {
            image1_url = existing.image1_url;
        }
    }
    if (id && (!image2_url || !image2_url.startsWith('http')) && !(image2File && image2File.size > 0)) {
        const { data: existing } = await supabase
            .from('who_we_are')
            .select('image2_url')
            .match({ id })
            .maybeSingle();
        
        if (existing?.image2_url) {
            image2_url = existing.image2_url;
        }
    }

    // Default to static fallbacks if we are starting fresh and no file was uploaded
    if (!image1_url) image1_url = FALLBACK_DATA.image1_url;
    if (!image2_url) image2_url = FALLBACK_DATA.image2_url;

    // Upload Files
    if (image1File && image1File.size > 0) {
        image1_url = await uploadToCloudinary(image1File) as string;
    }
    if (image2File && image2File.size > 0) {
        image2_url = await uploadToCloudinary(image2File) as string;
    }

    const paragraphsInput = formData.get('paragraphs') as string || '';
    const paragraphs = paragraphsInput
        .split('\n')
        .map(p => p.trim())
        .filter(p => p.length > 0);

    const validatedData = WhoWeAreSchema.parse({
      id,
      title: formData.get('title'),
      subtitle: formData.get('subtitle'),
      certified_box: formData.get('certified_box'),
      hq: formData.get('hq'),
      paragraphs,
      image1_url,
      image2_url,
    })

    const { id: validatedId, ...dbData } = validatedData;

    let resError;
    if (validatedId) {
        const { error } = await supabase
          .from('who_we_are')
          .update(dbData)
          .match({ id: validatedId })
        resError = error;
    } else {
        const { error } = await supabase
          .from('who_we_are')
          .insert([dbData])
        resError = error;
    }

    if (resError) throw resError;

    revalidatePath('/')
    revalidatePath('/admin/who-we-are')

    return { success: true }
  } catch (error) {
    console.error('SERVER ACTION ERROR (updateWhoWeAre):', error)
    if (error instanceof z.ZodError) {
      return { success: false, error: error.issues[0].message }
    }
    return { success: false, error: error instanceof Error ? error.message : "Failed to update Who We Are" }
  }
}

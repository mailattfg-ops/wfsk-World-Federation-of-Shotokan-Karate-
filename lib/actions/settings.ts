'use server'

import { createClient } from '@/lib/supabase/server'
import { revalidatePath } from 'next/cache'
import { z } from 'zod'

const SettingSchema = z.object({
  id: z.string().uuid(),
  key: z.string().min(1),
  value: z.string().min(1, "Value cannot be empty"),
})

export async function getSiteSettings() {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('site_settings')
    .select('*')

  if (error) throw error
  return data
}

export async function updateSiteSetting(formData: FormData) {
  try {
    const supabase = await createClient()

    const validatedData = SettingSchema.parse({
      id: formData.get('id'),
      key: formData.get('key'),
      value: formData.get('value'),
    })

    const { error } = await supabase
      .from('site_settings')
      .update({ value: validatedData.value })
      .eq('id', validatedData.id)

    if (error) throw error
    
    revalidatePath('/admin/settings')
    revalidatePath('/')
    
    return { success: true }
  } catch (error) {
    console.error('SERVER ACTION ERROR (updateSiteSetting):', error)
    if (error instanceof z.ZodError) {
      return { success: false, error: error.issues[0].message }
    }
    return { success: false, error: error instanceof Error ? error.message : "Failed to update setting" }
  }
}

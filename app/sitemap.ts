import { MetadataRoute } from 'next'
import { createClient } from '@/lib/supabase/server'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://wfsk.org'
  const supabase = await createClient()

  // Fetch News and Members for deep indexing
  const [newsResponse, membersResponse] = await Promise.all([
    supabase.from('news_events').select('id, created_at'),
    supabase.from('members').select('id, role')
  ])

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/news`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/team`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/branches`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/black-belts`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]

  // Dynamic news pages (if any specific detail pages exist)
  // Even if we don't have detail pages yet, indexing the paths is good practice
  const newsRoutes: MetadataRoute.Sitemap = (newsResponse.data || []).map((item) => ({
    url: `${baseUrl}/news`, // Currently news is a single page with anchors or modals, but we can point to it
    lastModified: new Date(item.created_at),
    changeFrequency: 'monthly',
    priority: 0.6,
  }))

  // Dynamic member pages (if detail pages are added later, these URLs will be ready)
  const memberRoutes: MetadataRoute.Sitemap = (membersResponse.data || []).map((member) => ({
    url: `${baseUrl}/team`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.5,
  }))

  return [...staticRoutes, ...newsRoutes, ...memberRoutes]
}

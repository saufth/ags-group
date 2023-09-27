import type { MetadataRoute } from 'next'
import { siteConfig } from '@/config/site'

export default function Sitemap () : MetadataRoute.Sitemap {
  return [
    {
      url: `${siteConfig.url}${siteConfig.mainNav[0]?.href}`,
      lastModified: new Date()
    },
    {
      url: `${siteConfig.url}${siteConfig.mainNav[1]?.href}`,
      lastModified: new Date()
    },
    {
      url: `${siteConfig.url}${siteConfig.mainNav[2]?.href}`,
      lastModified: new Date()
    }
  ]
}

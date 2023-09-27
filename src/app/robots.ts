import { type MetadataRoute } from 'next'
import { siteConfig } from '@/config/site'

export default function Robots () : MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/'
    },
    sitemap: `${siteConfig.url}/sitemap.xml`
  }
}

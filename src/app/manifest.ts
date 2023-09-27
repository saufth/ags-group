import { type MetadataRoute } from 'next'
import { siteConfig } from '@/config/site'

export default function Manifest () : MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: 'B91',
    icons: [
      {
        src: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png'
      },
      {
        src: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png'
      }
    ],
    orientation: 'portrait',
    display: 'standalone',
    theme_color: '#ffffff',
    background_color: '#ffffff'
  }
}

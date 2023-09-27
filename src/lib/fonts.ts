import localFont from 'next/font/local'

export const fontPrimary = localFont({
  src: [
    {
      path: '../../public/fonts/GeorgeTown-Thin.woff2',
      weight: '100'
    },
    {
      path: '../../public/fonts/GeorgeTown-ExtraLight.woff2',
      weight: '200'
    },
    {
      path: '../../public/fonts/GeorgeTown-Light.woff2',
      weight: '300'
    },
    {
      path: '../../public/fonts/GeorgeTown-Regular.woff2',
      weight: '400'
    },
    {
      path: '../../public/fonts/GeorgeTown-Medium.woff2',
      weight: '500'
    },
    {
      path: '../../public/fonts/GeorgeTown-SemiBold.woff2',
      weight: '600'
    }
  ],
  display: 'swap',
  variable: '--font-primary'
})

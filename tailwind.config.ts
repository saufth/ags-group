import type { Config } from 'tailwindcss'
import { nextui } from '@nextui-org/react'

/** Default values for sizing and spacing */
const breakpoints = {
  xs: '20rem', /* 320px */
  sm: '24rem', /* 384px */
  md: '28rem', /* 448px */
  lg: '32rem', /* 512px */
  xl: '36rem', /* 576px */
  '2xl': '42rem', /* 672px */
  '3xl': '48rem', /* 768px */
  '4xl': '56rem', /* 896px */
  '5xl': '64rem', /* 1024px */
  '6xl': '72rem', /* 1152px */
  '7xl': '78rem', /* 1248px */
  '8xl': '90rem', /* 1440 */
  '9xl': '120rem' /* 1920px */
}

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ['var(--font-primary)']
      },
      colors: {
        emah: '#FF5500',
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        }
      },
      width: breakpoints,
      height: breakpoints,
      maxWidth: {
        '8xl': breakpoints['8xl'],
        '9xl': breakpoints['9xl']
      },
      flex: {
        full: '0 0 100%'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      animation: {
        'meteor-effect': 'meteor 5s linear infinite'
      },
      keyframes: {
        meteor: {
          '0%': { transform: 'rotate(215deg) translateX(0)', opacity: '1' },
          '70%': { opacity: '1' },
          '100%': {
            transform: 'rotate(215deg) translateX(-500px)',
            opacity: '0'
          }
        }
      }
    }
  },
  plugins: [
    nextui()
  ],
  corePlugins: {
    container: false
  }
}
export default config

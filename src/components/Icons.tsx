// Components
import {
  IconMoonStars,
  IconSunHigh
} from '@tabler/icons-react'
import { SVGProps } from 'react'

export const Icons = {
  MoonStar: IconMoonStars,
  Sun: IconSunHigh,
  Logomark: (props: SVGProps<SVGSVGElement>) => {
    return (
      <svg
        width={250}
        height={255.5}
        viewBox='0 0 250 255.5'
        {...props}
      >
        <path
          d='M196.7,208.9c-9.7,9.7-21.1,17.4-33.7,22.7c-13.1,5.5-27,8.2-41.2,8.2s-28.1-2.8-41.2-8.2
          c-9-3.8-17.2-8.7-24.7-14.7c-3.1-2.5-6-5.2-9-8c-1-1-2.1-2.1-2.9-3.1c-3.5-3.8-6.8-8-9.7-12.2c-2.9-4.3-5.5-8.7-7.8-13.4
          c-0.7-1.6-1.5-3.2-2.2-5c-1.3-3.1-2.5-6.3-3.5-9.6c-1.6-5.2-2.8-10.5-3.7-15.8c-0.7-5.2-1.2-10.5-1.2-15.8
          c0-14.3,2.8-28.1,8.2-41.2c5.3-12.7,13-24,22.7-33.7s21.1-17.4,33.7-22.7c9.1-3.8,18.7-6.5,28.6-7.5l9.3-16.2
          C52.6,14.4,0,68.1,0,134.1c0,19.3,4.6,37.7,12.7,53.9c2.4,4.7,4.9,9.1,7.8,13.4c2.9,4.3,6,8.5,9.4,12.4c3.5,4,7.4,7.8,11.3,11.3
          c21.4,18.9,49.5,30.3,80.3,30.3c43.8,0,82.1-23.1,103.4-57.7h-18.7C203.4,201.5,200.2,205.4,196.7,208.9z'
        />
        <polygon
          points='239.1,165.3 239.1,165.3 227.2,144.5 227.2,144.5 225.4,141.6 215.5,124.6 215.5,124.6 215.5,124.6
          207.9,111.2 207.9,111.1 207.9,111.1 200.1,97.8 200.1,97.7 200.1,97.7 192.4,84.4 192.4,84.3 192.4,84.3 184.6,70.9 184.6,70.9
          184.6,70.9 176.9,57.5 176.9,57.5 176.8,57.5 176.8,57.5 165.3,37.4 165.3,37.4 153.4,16.8 143.6,0 143.6,0 137.6,10.5 136,13.4
          134.6,15.5 127.3,28.3 77.2,114.9 163.4,65.3 171.2,78.7 61.7,141.9 46.3,168.7 178.8,92.1 186.7,105.5 186.7,105.5 53.9,182.1
          84.9,182.1 194.5,118.9 202.1,132.3 115.9,182.1 248.8,182.1 241.6,169.7 '
        />
        <polygon points='226.4,64.7 203.9,77.6 198.7,80.6 206.5,94 211.5,91.2 234.1,78.1 239.1,86.6 249.1,60.5 221.4,56.1' />
        <polygon points='226.4,100.5 217.6,105.5 214.2,107.4 222,120.9 234.1,113.9 239.1,122.4 249.1,96.3 221.4,91.9 ' />
        <polygon points='191.1,67.2 194.3,65.3 234.1,42.3 239.8,52.2 246.3,35.2 248.7,29.2 250,26.1 246.6,25.5 235.3,23.7
          222.3,21.7 226.4,28.9 183.3,53.8 '
        />
      </svg>
    )
  },
  Logoname: (props: SVGProps<SVGSVGElement>) => {
    return (
      <svg
        width={250}
        height={99.1}
        viewBox='0 0 250 99.1'
        {...props}
      >
        <g className='font-primary font-normal'>
          <g>
            <path d='M75.7,81.2c-3.8,3.8-8.1,6.7-13,8.8c-5,2.1-10.4,3.2-15.9,3.2S36,92.1,31,89.9c-3.4-1.5-6.6-3.4-9.5-5.7
              c-1.2-1-2.3-2-3.4-3.1c-0.4-0.4-0.8-0.8-1.2-1.2c-1.4-1.5-2.6-3.1-3.8-4.7c-1.1-1.6-2.1-3.4-3-5.2c-0.3-0.6-0.6-1.3-0.9-1.9
              c-0.5-1.2-1-2.5-1.4-3.7c-0.6-2-1.1-4-1.4-6.1c-0.3-2-0.4-4-0.4-6.1c0-5.5,1.1-10.9,3.2-15.9c2-4.9,5-9.2,8.8-13
              c3.8-3.8,8.1-6.7,13-8.8c3.5-1.5,7.2-2.5,11-2.9l3.6-6.3C20.3,6.1,0,26.8,0,52.3c0,7.5,1.8,14.5,4.8,20.8c0.9,1.8,1.9,3.5,3,5.2
              c1.1,1.7,2.3,3.3,3.7,4.8c1.3,1.6,2.8,3,4.4,4.4c8.2,7.3,19.1,11.7,30.9,11.7c16.8,0,31.6-8.9,39.9-22.3h-7.2
              C78.4,78.4,77.1,79.8,75.7,81.2z'
            />
            <polygon points='92.1,64.3 92.1,64.3 87.5,56.4 87.5,56.4 86.9,55.2 83.1,48.7 83.1,48.7 83.1,48.7 80.1,43.5
              80.1,43.5 80.1,43.5 77.1,38.3 77.1,38.3 77.1,38.3 74.1,33.2 74.1,33.2 74.1,33.2 71.1,28 71.1,28 71.1,28 68.1,22.8 68.1,22.8
              68.1,22.8 68.1,22.8 63.7,15.1 63.7,15.1 59.1,7.1 55.3,0.6 55.3,0.6 53,4.7 52.3,5.8 51.9,6.6 49,11.5 29.7,45 63,25.8 65.9,31
              23.8,55.3 17.8,65.7 68.9,36.1 71.9,41.3 71.9,41.3 20.8,70.9 32.7,70.9 74.9,46.5 77.9,51.7 44.6,70.9 95.9,70.9 93.1,66.1'
            />
            <polygon points='87.3,25.6 78.5,30.6 76.6,31.7 79.6,36.9 81.5,35.8 90.2,30.8 92.1,34.1 96,24 85.4,22.3' />
            <polygon points='87.2,39.4 83.9,41.3 82.6,42.1 85.5,47.2 90.2,44.6 92.1,47.9 96,37.8 85.4,36.1' />
            <polygon points='73.6,26.6 74.9,25.8 90.2,17 92.4,20.8 94.9,14.2 95.9,11.9 96.3,10.7 95,10.5 90.7,9.8 85.7,9
              87.3,11.8 70.6,21.4'
            />
          </g>
          <g className='text-[36.7746px]'>
            <text className='leading-[-4]' transform='matrix(1 0 0 1 102.1019 31.256)'>A</text>
            <text className='leading-[-1]' transform='matrix(1 0 0 1 128.3578 31.256)'>G</text>
            <text transform='matrix(1 0 0 1 161.3431 31.256)'>S</text>
            <text transform='matrix(1 0 0 1 102.1019 63.9694)'>G</text>
            <text className='leading-[-1]' transform='matrix(1 0 0 1 136.1898 63.9694)'>R</text>
            <text transform='matrix(1 0 0 1 162.1888 63.9694)'>O</text>
            <text transform='matrix(1 0 0 1 195.726 63.9694)'>UP</text>
          </g>
        </g>
      </svg>
    )
  },
  Logotype: (props: SVGProps<SVGSVGElement>) => {
    return (
      <svg
        width={250}
        height={99.1}
        viewBox='0 0 250 99.1'
        {...props}
      >
        <g className='font-primary font-normal'>
          <g>
            <path d='M75.7,81.2c-3.8,3.8-8.1,6.7-13,8.8c-5,2.1-10.4,3.2-15.9,3.2S36,92.1,31,89.9c-3.4-1.5-6.6-3.4-9.5-5.7
              c-1.2-1-2.3-2-3.4-3.1c-0.4-0.4-0.8-0.8-1.2-1.2c-1.4-1.5-2.6-3.1-3.8-4.7c-1.1-1.6-2.1-3.4-3-5.2c-0.3-0.6-0.6-1.3-0.9-1.9
              c-0.5-1.2-1-2.5-1.4-3.7c-0.6-2-1.1-4-1.4-6.1c-0.3-2-0.4-4-0.4-6.1c0-5.5,1.1-10.9,3.2-15.9c2-4.9,5-9.2,8.8-13
              c3.8-3.8,8.1-6.7,13-8.8c3.5-1.5,7.2-2.5,11-2.9l3.6-6.3C20.3,6.1,0,26.8,0,52.3c0,7.5,1.8,14.5,4.8,20.8c0.9,1.8,1.9,3.5,3,5.2
              c1.1,1.7,2.3,3.3,3.7,4.8c1.3,1.6,2.8,3,4.4,4.4c8.2,7.3,19.1,11.7,30.9,11.7c16.8,0,31.6-8.9,39.9-22.3h-7.2
              C78.4,78.4,77.1,79.8,75.7,81.2z'
            />
            <polygon points='92.1,64.3 92.1,64.3 87.5,56.4 87.5,56.4 86.9,55.2 83.1,48.7 83.1,48.7 83.1,48.7 80.1,43.5
              80.1,43.5 80.1,43.5 77.1,38.3 77.1,38.3 77.1,38.3 74.1,33.2 74.1,33.2 74.1,33.2 71.1,28 71.1,28 71.1,28 68.1,22.8 68.1,22.8
              68.1,22.8 68.1,22.8 63.7,15.1 63.7,15.1 59.1,7.1 55.3,0.6 55.3,0.6 53,4.7 52.3,5.8 51.9,6.6 49,11.5 29.7,45 63,25.8 65.9,31
              23.8,55.3 17.8,65.7 68.9,36.1 71.9,41.3 71.9,41.3 20.8,70.9 32.7,70.9 74.9,46.5 77.9,51.7 44.6,70.9 95.9,70.9 93.1,66.1'
            />
            <polygon points='87.3,25.6 78.5,30.6 76.6,31.7 79.6,36.9 81.5,35.8 90.2,30.8 92.1,34.1 96,24 85.4,22.3' />
            <polygon points='87.2,39.4 83.9,41.3 82.6,42.1 85.5,47.2 90.2,44.6 92.1,47.9 96,37.8 85.4,36.1' />
            <polygon points='73.6,26.6 74.9,25.8 90.2,17 92.4,20.8 94.9,14.2 95.9,11.9 96.3,10.7 95,10.5 90.7,9.8 85.7,9
              87.3,11.8 70.6,21.4'
            />
          </g>
          <g className='text-[36.7746px]'>
            <text className='leading-[-4]' transform='matrix(1 0 0 1 102.1019 31.256)'>A</text>
            <text className='leading-[-1]' transform='matrix(1 0 0 1 128.3578 31.256)'>G</text>
            <text transform='matrix(1 0 0 1 161.3431 31.256)'>S</text>
            <text transform='matrix(1 0 0 1 102.1019 63.9694)'>G</text>
            <text className='leading-[-1]' transform='matrix(1 0 0 1 136.1898 63.9694)'>R</text>
            <text transform='matrix(1 0 0 1 162.1888 63.9694)'>O</text>
            <text transform='matrix(1 0 0 1 195.726 63.9694)'>UP</text>
          </g>
          <g className='text-[6.1254px]'>
            <text transform='matrix(1 0 0 1 103.35 76.82)'>A</text>
            <text transform='matrix(1 0 0 1 108.2865 76.82)'>D</text>
            <text className='leading-[-1]' transform='matrix(1 0 0 1 112.0199 76.82)'>V</text>
            <text transform='matrix(1 0 0 1 115.1195 76.82)'>A</text>
            <text transform='matrix(1 0 0 1 120.057 76.82)'>N</text>
            <text transform='matrix(1 0 0 1 124.4945 76.82)'>C</text>
            <text transform='matrix(1 0 0 1 129.9418 76.82)'>I</text>
            <text transform='matrix(1 0 0 1 131.0482 76.82)'>N</text>
            <text transform='matrix(1 0 0 1 135.4857 76.82)'>G</text>
            <text transform='matrix(1 0 0 1 147.6508 76.82)'>G</text>
            <text transform='matrix(1 0 0 1 153.3295 76.82)'>L</text>
            <text transform='matrix(1 0 0 1 156.9769 76.82)'>O</text>
            <text transform='matrix(1 0 0 1 162.599 76.82)'>B</text>
            <text transform='matrix(1 0 0 1 166.3695 76.82)'>A</text>
            <text transform='matrix(1 0 0 1 171.306 76.82)'>L</text>
            <text transform='matrix(1 0 0 1 179.8051 76.82)'>S</text>
            <text transform='matrix(1 0 0 1 184.4623 76.82)'>T</text>
            <text transform='matrix(1 0 0 1 188.9408 76.82)'>R</text>
            <text className='leading-[-1]' transform='matrix(1 0 0 1 193.3451 76.82)'>A</text>
            <text transform='matrix(1 0 0 1 196.766 76.82)'>T</text>
            <text transform='matrix(1 0 0 1 201.2445 76.82)'>E</text>
            <text transform='matrix(1 0 0 1 204.6683 76.82)'>G</text>
            <text transform='matrix(1 0 0 1 210.3461 76.82)'>I</text>
            <text transform='matrix(1 0 0 1 211.3334 76.82)'>C</text>
            <text transform='matrix(1 0 0 1 222.765 76.82)'>G</text>
            <text transform='matrix(1 0 0 1 228.4427 76.82)'>R</text>
            <text transform='matrix(1 0 0 1 232.7767 76.82)'>O</text>
            <text transform='matrix(1 0 0 1 238.3656 76.82)'>UP</text>
          </g>
        </g>
      </svg>
    )
  },
  Mission: (props: SVGProps<SVGSVGElement>) => {
    return (
      <svg
        width={250}
        height={250}
        viewBox='0 0 250 250'
        {...props}
      >
        <g>
          <path d='m125,0C56.08,0,0,56.08,0,125.01s56.08,125,125,125,125-56.08,125-125S193.92,0,125,0Zm4.26,8.64c39.73,1.44,74.44,22.87,94.36,54.5l-36.49,21.07c-12.58-19.1-33.69-32.07-57.87-33.45V8.64Zm61.58,116.37c0,10.46-2.46,20.35-6.82,29.15l-59.02-34.08-59.02,34.08c-4.36-8.8-6.84-18.69-6.84-29.15,0-36.31,29.54-65.85,65.85-65.85s65.84,29.54,65.84,65.85ZM120.74,8.64v42.12c-24.19,1.38-45.3,14.35-57.88,33.45l-36.48-21.07C46.3,31.51,81,10.08,120.74,8.64ZM8.53,125.01c0-19.68,4.92-38.23,13.57-54.5l36.49,21.07c-5.09,10.06-7.97,21.4-7.97,33.42s2.88,23.36,7.97,33.41l-36.49,21.07c-8.65-16.27-13.57-34.82-13.57-54.48Zm112.21,116.36c-39.73-1.44-74.44-22.85-94.36-54.5l36.48-21.07c12.58,19.1,33.69,32.07,57.88,33.45v42.12Zm-50.49-79.84l54.76-31.61,54.74,31.61c-11.82,17.66-31.95,29.32-54.74,29.32s-42.93-11.65-54.76-29.32Zm59.02,79.84v-42.12c24.17-1.38,45.29-14.35,57.87-33.45l36.49,21.07c-19.92,31.65-54.63,53.06-94.36,54.5Zm62.14-82.95c5.07-10.05,7.96-21.4,7.96-33.41s-2.88-23.36-7.96-33.42l36.49-21.07c8.65,16.27,13.57,34.82,13.57,54.5s-4.92,38.21-13.57,54.48l-36.49-21.07Z' />
        </g>
      </svg>
    )
  },
  Vision: (props: SVGProps<SVGSVGElement>) => {
    return (
      <svg
        width={250}
        height={250}
        viewBox='0 0 250 250'
        {...props}
      >
        <g>
          <path d='m125,0C56.07,0,0,56.07,0,125s56.07,124.99,125,124.99,125-56.06,125-124.99S193.93,0,125,0Zm0,241.47c-64.24,0-116.48-52.24-116.48-116.47S60.76,8.52,125,8.52s116.48,52.24,116.48,116.48-52.25,116.47-116.48,116.47Z' />
          <path d='m151.85,104.28c-14.82,0-26.85-12.03-26.85-26.87,0-6.86,2.6-13.11,6.83-17.86-2.24-.23-4.53-.35-6.83-.35-36.34,0-65.8,29.46-65.8,65.8s29.46,65.79,65.8,65.79,65.79-29.46,65.79-65.79c0-14.88-4.94-28.6-13.26-39.62-3.39,10.95-13.6,18.9-25.67,18.9Z' />
        </g>
      </svg>
    )
  },
  Marketing: (props: SVGProps<SVGSVGElement>) => {
    return (
      <svg
        width={50}
        height={50}
        viewBox='0 0 50 50'
        {...props}
      >
        <g>
          <path d='m25,50c13.79,0,25-11.21,25-25S38.79,0,25,0,0,11.22,0,25s11.22,25,25,25Zm0-47.41c12.35,0,22.41,10.05,22.41,22.41s-10.05,22.41-22.41,22.41S2.59,37.35,2.59,25,12.65,2.59,25,2.59Z' />
          <path d='m25,38.63c7.51,0,13.63-6.11,13.63-13.63,0-1.79-.36-3.49-.98-5.06l5.91-2.61-9.52-3.42-7.08-7.57-.64,5.1c-.43-.04-.87-.07-1.31-.07-7.51,0-13.63,6.11-13.63,13.63s6.11,13.63,13.63,13.63Zm0-24.66c.33,0,.66.02.98.05l-1.48,11.74,10.76-4.76c.49,1.24.76,2.59.76,4.01,0,6.08-4.95,11.03-11.03,11.03s-11.03-4.95-11.03-11.03,4.95-11.03,11.03-11.03Z' />
        </g>
      </svg>
    )
  },
  Branding: (props: SVGProps<SVGSVGElement>) => {
    return (
      <svg
        width={50}
        height={53.84}
        viewBox='0 0 50 53.84'
        {...props}
      >
        <g>
          <rect x='18.44' y='8.54' width='30.41' height='16.55' transform='translate(-1.43 30.41) rotate(-47.73)' />
          <rect x='16.37' y='24.98' width='4.67' height='16.55' transform='translate(-18.49 24.73) rotate(-47.73)' />
          <polygon points='20.12 44.01 7.87 32.88 4.73 36.33 0 53.84 16.98 47.46 20.12 44.01' />
        </g>
      </svg>
    )
  },
  SalesConsulting: (props: SVGProps<SVGSVGElement>) => {
    return (
      <svg
        width={50}
        height={48.9}
        viewBox='0 0 50 48.9'
        {...props}
      >
        <g>
          <path d='m29.04,29.51c-.77.34-1.93.52-3.47.52-1.85,0-3.38-.35-4.59-1.05-1.21-.7-1.94-1.59-2.19-2.67l-2.12,1.72c.44,1.29,1.22,2.33,2.36,3.11s2.62,1.25,4.45,1.42v3.09h3v-2.93c2.1-.12,3.75-.59,4.93-1.39,1.19-.8,1.78-1.86,1.78-3.17,0-2.93-2.42-4.52-7.27-4.75-2.06-.06-3.6-.29-4.62-.67-1.02-.38-1.53-.9-1.53-1.55s.37-1.16,1.11-1.55c.74-.38,1.84-.58,3.29-.58,1.81,0,3.34.28,4.59.84s2.05,1.46,2.4,2.68l2.15-1.56c-.37-1.33-1.19-2.4-2.45-3.2-1.26-.8-2.85-1.28-4.76-1.45v-3.12h-2.97v3.09c-2.04.17-3.63.69-4.76,1.56-1.13.87-1.7,1.96-1.7,3.25,0,1.44.77,2.56,2.29,3.37,1.53.81,3.62,1.29,6.26,1.44,1.75.08,3.01.29,3.79.62s1.17.81,1.17,1.44-.39,1.14-1.16,1.48Z' />
          <path d='m3.15,29.44c.1.42-.17,1.24-.41,1.95-.41,1.24-.87,2.64-.26,3.91.62,1.29,2.02,1.8,3.25,2.25.7.26,1.49.55,1.75.87.26.32.37,1.17.46,1.91.17,1.3.36,2.77,1.47,3.66,1.11.88,2.58.75,3.88.62.75-.07,1.6-.15,1.98.03.36.17.84.91,1.22,1.5.72,1.11,1.53,2.36,2.94,2.68,1.36.31,2.62-.45,3.73-1.12.65-.4,1.4-.85,1.84-.85s1.18.45,1.84.85c.93.56,1.97,1.19,3.09,1.19.21,0,.42-.02.64-.07,1.41-.32,2.22-1.57,2.94-2.68.38-.59.86-1.33,1.22-1.5.38-.18,1.23-.1,1.98-.03,1.3.13,2.78.26,3.88-.62,1.11-.89,1.3-2.36,1.47-3.66.1-.74.2-1.59.46-1.91.26-.32,1.05-.61,1.75-.87,1.23-.45,2.63-.97,3.26-2.25.61-1.27.15-2.67-.26-3.91-.24-.72-.51-1.53-.41-1.95.09-.38.69-1.01,1.18-1.51.92-.95,1.97-2.03,1.97-3.48s-1.05-2.53-1.97-3.48c-.49-.5-1.09-1.12-1.18-1.51-.1-.42.17-1.24.41-1.95.41-1.24.87-2.64.26-3.91-.62-1.29-2.02-1.8-3.26-2.25-.7-.26-1.49-.55-1.75-.87-.26-.32-.37-1.17-.46-1.91-.17-1.3-.36-2.77-1.47-3.66-1.11-.88-2.58-.74-3.88-.62-.75.07-1.6.15-1.98-.03-.36-.18-.84-.91-1.22-1.5-.72-1.11-1.53-2.36-2.94-2.68-1.36-.31-2.62.45-3.73,1.12-.65.4-1.4.85-1.84.85s-1.18-.45-1.84-.85c-1.11-.67-2.36-1.43-3.73-1.12-1.41.32-2.22,1.57-2.94,2.68-.38.59-.86,1.33-1.22,1.5-.38.18-1.23.1-1.98.03-1.3-.12-2.78-.26-3.88.62-1.11.89-1.3,2.36-1.47,3.66-.1.74-.2,1.59-.46,1.91-.26.32-1.05.61-1.75.87-1.23.45-2.63.97-3.26,2.25-.61,1.27-.15,2.67.26,3.91.24.72.51,1.53.41,1.95-.09.38-.69,1.01-1.18,1.51-.92.95-1.97,2.03-1.97,3.48s1.05,2.53,1.97,3.48c.49.5,1.09,1.12,1.18,1.51Zm.68-6.67c.78-.81,1.6-1.65,1.84-2.73.26-1.12-.14-2.3-.48-3.34-.23-.69-.54-1.64-.39-1.97.17-.35,1.12-.69,1.82-.95,1.07-.39,2.17-.8,2.88-1.68.71-.89.86-2.06,1.01-3.19.09-.73.22-1.73.52-1.97.29-.23,1.29-.14,2.02-.07,1.09.1,2.32.22,3.35-.28,1.01-.49,1.65-1.47,2.27-2.42.41-.63.96-1.48,1.34-1.57.35-.07,1.23.46,1.81.81.94.57,2.01,1.22,3.18,1.22s2.24-.65,3.18-1.22c.58-.35,1.46-.89,1.81-.81.38.09.94.94,1.34,1.57.62.95,1.25,1.93,2.27,2.42,1.03.5,2.21.38,3.35.28.73-.07,1.73-.17,2.02.07.29.24.42,1.24.52,1.97.15,1.13.3,2.3,1.01,3.19.71.89,1.81,1.29,2.88,1.68.7.26,1.65.6,1.81.95.16.33-.16,1.28-.39,1.97-.34,1.04-.73,2.22-.48,3.34.25,1.09,1.06,1.93,1.84,2.73.52.54,1.24,1.28,1.24,1.68s-.72,1.14-1.24,1.68c-.78.81-1.59,1.65-1.84,2.73-.26,1.12.14,2.3.48,3.34.23.69.54,1.64.39,1.97-.17.35-1.12.69-1.81.95-1.07.39-2.17.8-2.88,1.68-.71.89-.86,2.06-1.01,3.2-.09.73-.22,1.73-.52,1.97-.29.23-1.29.14-2.02.07-1.14-.11-2.32-.22-3.35.28-1.01.49-1.65,1.47-2.27,2.42-.41.63-.96,1.48-1.34,1.57-.35.07-1.23-.46-1.81-.81-.94-.57-2.01-1.22-3.18-1.22s-2.23.65-3.18,1.22c-.59.35-1.47.88-1.81.81-.38-.09-.94-.94-1.34-1.57-.62-.95-1.25-1.93-2.27-2.42-1.03-.5-2.26-.38-3.35-.28-.73.07-1.73.16-2.02-.07-.29-.24-.42-1.24-.52-1.97-.15-1.13-.3-2.3-1.01-3.2-.71-.89-1.81-1.29-2.88-1.68-.7-.26-1.65-.6-1.81-.95-.16-.33.16-1.28.39-1.97.34-1.04.73-2.22.48-3.34-.25-1.09-1.06-1.93-1.84-2.73-.52-.54-1.24-1.28-1.24-1.68s.72-1.14,1.24-1.68Z' />
        </g>
      </svg>
    )
  },
  BusinessConsulting: (props: SVGProps<SVGSVGElement>) => {
    return (
      <svg
        width={50}
        height={50.69}
        viewBox='0 0 50 50.69'
        {...props}
      >
        <g>
          <polygon points='50 3.65 18.33 41.3 9.51 30.1 13.97 26.58 18.47 32.31 45.65 0 50 3.65' />
          <path d='m37.76,10.7c1.23,0,2.24,1,2.24,2.24v33.52c0,1.23-1,2.24-2.24,2.24H4.24c-1.23,0-2.24-1-2.24-2.24V12.94c0-1.23,1-2.24,2.24-2.24h33.52m0-2H4.24c-2.34,0-4.24,1.9-4.24,4.24v33.52c0,2.34,1.9,4.24,4.24,4.24h33.52c2.34,0,4.24-1.9,4.24-4.24V12.94c0-2.34-1.9-4.24-4.24-4.24h0Z' />
        </g>
      </svg>
    )
  },
  MarketStudy: (props: SVGProps<SVGSVGElement>) => {
    return (
      <svg
        width={50}
        height={38.3}
        viewBox='0 0 50 38.3'
        {...props}
      >
        <g>
          <path d='m17.4,36.81h31.69v-.62h-31.3l3.98-6.41h27.32v-.62h-26.94l3.91-6.29h7.05l.09-.11h15.89v-.62h-15.42l4.84-6.41h10.58v-.62h-10.11l4.84-6.41h4.2l1.97,1.49-1.17-8.52-.09-.62-.14-1.04-7.56,1.04H.91v.62h37.85l3.62,2.75-2.76,3.66H.91v.62h38.25l-4.84,6.41H.91v.62h32.94l-2.58,3.41h-7.27l-1.86,2.99H.91v.62h20.84l-3.98,6.41H.91v.62h16.47l-2.98,4.79H0v3.73h16.47l.93-1.49ZM45.36,6.66l1.85,1.41h-2.92l1.06-1.41Z' />
        </g>
      </svg>
    )
  },
  DataAnalisys: (props: SVGProps<SVGSVGElement>) => {
    return (
      <svg
        width={50}
        height={43.35}
        viewBox='0 0 50 43.35'
        {...props}
      >
        <g>
          <polygon points='21.97 34.1 21.97 36.37 28.01 36.37 28.01 34.09 28.01 8.49 31.86 8.49 25 0 18.14 8.49 21.97 8.49 21.97 34.1' />
          <polygon points='40.1 27.9 40.1 29.4 46.14 29.4 46.14 8.49 50 8.49 43.14 0 36.27 8.49 40.09 8.49 40.1 27.9' />
          <polygon points='3.24 43.35 9.28 43.35 9.28 41.86 9.28 8.49 13.73 8.49 9.28 3 7.68 1.01 6.86 0 6.05 1.01 3.24 4.48 0 8.49 3.24 8.49 3.24 43.35' />
        </g>
      </svg>
    )
  },
  ProjectManagement: (props: SVGProps<SVGSVGElement>) => {
    return (
      <svg
        width={50}
        height={54.37}
        viewBox='0 0 50 54.37'
        {...props}
      >
        <g>
          <path d='m21.85,29.91c3.12,2.69,7.02,4.14,11.1,4.14.42,0,.85-.02,1.27-.05,4.54-.33,8.67-2.41,11.64-5.85,2.97-3.44,4.43-7.84,4.09-12.37-.33-4.54-2.41-8.67-5.85-11.64C40.66,1.17,36.26-.28,31.73.04c-4.54.33-8.67,2.41-11.64,5.85-2.97,3.44-4.43,7.84-4.09,12.37.33,4.54,2.41,8.67,5.85,11.64Zm.46-22.09c2.46-2.85,5.88-4.57,9.63-4.84.35-.03.7-.04,1.05-.04,3.38,0,6.6,1.2,9.19,3.43,2.85,2.46,4.57,5.88,4.84,9.63s-.93,7.39-3.39,10.24c-2.46,2.85-5.88,4.57-9.63,4.84-3.74.28-7.39-.93-10.24-3.39-2.85-2.46-4.57-5.88-4.84-9.63-.27-3.75.93-7.39,3.39-10.24Z' />
          <path d='m39.42,9.55l.96-1.11c-4.73-4.09-11.91-3.56-16,1.17l1.11.96c3.56-4.12,9.8-4.58,13.92-1.02Z' />
          <rect x='18.34' y='25.55' width='2.7' height='13.58' transform='translate(-17.65 26.11) rotate(-49.19)' />
          <rect x='-1.01' y='39.62' width='22.4' height='7.58' transform='translate(-29.33 22.76) rotate(-49.19)' />
        </g>
      </svg>
    )
  }
}

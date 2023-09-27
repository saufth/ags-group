import { Icons } from '@/components/Icons'
import { siteConfig } from '@/config/site'
import Link from '@/components/ui/Link'
import Balancer from 'react-wrap-balancer'

export default function SiteFooter () {
  return (
    <footer className='border-t space-y-6 sm:space-y-8'>
      <div className='max-w-7xl mx-auto pt-12 sm:pt-16 px-4 sm:px-6 flex flex-col items-center gap-y-6 sm:gap-y-8'>
        <Icons.Logoname className='w-36 sm:w-48 h-auto fill-primary' />
        <nav>
          <ul className='flex sm:flex-row flex-col items-center gap-y-1 gap-x-4'>
            {siteConfig.mainNav.map((navItem, key) => (
              <li key={key}>
                <Link
                  className='text-sm sm:text-base'
                  href={navItem.href}
                  color='foreground'
                >
                  {navItem.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className='text-sm sm:text-base text-center px-4 pb-6 sm:pb-8 font-sans'>
        <Balancer as='p'>
          {`Copyright ${new Date().getFullYear()} ${siteConfig.name}. Todos los derechos reservados.`}
        </Balancer>
      </div>
    </footer>
  )
}

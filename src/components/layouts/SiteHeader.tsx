'use client'
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Link
} from '@nextui-org/react'
import { Icons } from '@/components/Icons'
import { useMotionValueEvent, useScroll } from 'framer-motion'
import { useState } from 'react'
import { siteConfig } from '@/config/site'

export default function SiteHeader () {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { scrollY } = useScroll()
  const [isOnTop, setIsOnTop] = useState(false)

  useMotionValueEvent(scrollY, 'change', (latestScrollY) => {
    setIsOnTop(latestScrollY > 0)
  })

  return (
    <Navbar
      className='sm:py-4'
      maxWidth='xl'
      isBordered={isOnTop}
      isBlurred={false}
      onMenuOpenChange={setIsMenuOpen}
      isMenuOpen={isMenuOpen}
    >
      <NavbarBrand>
        <Link href='/'>
          <Icons.Logoname className='w-auto h-9 md:h-12 fill-primary' />
        </Link>
      </NavbarBrand>
      <NavbarContent className='w-full' justify='end'>
        {siteConfig.mainNav.map((navItem, key) => (
          <NavbarItem key={key} className='hidden md:block'>
            <Link
              className='text-xs md:text-sm'
              color='foreground'
              href={navItem.href}
            >
              {navItem.title}
            </Link>
          </NavbarItem>
        ))}
        {/* <ThemeToggle /> */}
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Abrir menu' : 'Cerrar menu'}
          className='sm:hidden'
        />
      </NavbarContent>
      <NavbarMenu className='pt-32'>
        {siteConfig.mainNav.map((navItem, key) => (
          <NavbarMenuItem key={key} className='mx-auto mt-2'>
            <Link href={navItem.href} className='text-xl font-medium' onClick={() => setIsMenuOpen(false)}>
              {navItem.title}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  )
}

'use client'
import { Link as NextUILink, type LinkProps } from '@nextui-org/react'
import NextLink from 'next/link'

export default function Link (props: Omit<LinkProps, 'as'>) {
  return (
    <NextUILink {...props} as={NextLink} />
  )
}

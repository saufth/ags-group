'use client'
import { NextUIProvider as NextUI, type NextUIProviderProps } from '@nextui-org/react'

export default function NextUIProvider ({ children, ...props }: NextUIProviderProps) {
  return (
    <NextUI {...props}>
      {children}
    </NextUI>
  )
}

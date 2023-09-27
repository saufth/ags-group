'use client'
import { Button as NextUIButton, type ButtonProps } from '@nextui-org/react'

export function Button (props: ButtonProps) {
  return (
    <NextUIButton {...props} radius='sm' />
  )
}

'use client'
import { Input as NextUIInput, type InputProps } from '@nextui-org/react'

export function Input (props: InputProps) {
  return (
    <NextUIInput {...props} radius='sm' />
  )
}

'use client'
import { Textarea as NextUITextarea, type TextAreaProps } from '@nextui-org/react'

export function Textarea (props: TextAreaProps) {
  return (
    <NextUITextarea {...props} radius='sm' />
  )
}

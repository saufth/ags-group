'use client'
import { Chip as ChipNextUI, type ChipProps } from '@nextui-org/react'

export function Chip (props: ChipProps) {
  return (
    <ChipNextUI {...props} radius='sm' />
  )
}

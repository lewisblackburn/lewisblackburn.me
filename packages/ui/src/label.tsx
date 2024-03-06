'use client'

import * as LabelPrimitive from '@radix-ui/react-label'
import { cn } from '@zxffo/utils'
import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

const labelVariants = cva([
  'text-sm font-medium leading-none',
  'peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
])

export const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> &
    VariantProps<typeof labelVariants>
>((props, ref) => {
  const { className, ...rest } = props

  return (
    <LabelPrimitive.Root
      ref={ref}
      className={cn(labelVariants(), className)}
      {...rest}
    />
  )
})

Label.displayName = LabelPrimitive.Root.displayName

"use client"

import * as React from "react"
import { HTMLMotionProps, motion } from "framer-motion"

import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

interface CardStickyProps extends HTMLMotionProps<"div"> {
  index: number
  incrementY?: number
  incrementZ?: number
}

const ContainerScroll = React.forwardRef<
  HTMLDivElement,
  React.HTMLProps<HTMLDivElement>
>(({ children, className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("relative w-full", className)}
      style={{ perspective: "1000px", ...props.style }}
      {...props}
    >
      {children}
    </div>
  )
})
ContainerScroll.displayName = "ContainerScroll"

const CardSticky = React.forwardRef<HTMLDivElement, CardStickyProps>(
  (
    {
      index,
      incrementY = 20,
      incrementZ = 10,
      children,
      className,
      style,
      ...props
    },
    ref
  ) => {
    // We add an explicit offset based on index so each card stacks 20px lower
    const yOffset = 100 + (index * incrementY)

    return (
      <div
        ref={ref}
        style={{
          top: `${yOffset}px`,
          zIndex: index * 10,
          ...style,
        }}
        className={cn("sticky w-full h-auto", className)}
        {...props}
      >
        {children}
      </div>
    )
  }
)

CardSticky.displayName = "CardSticky"

export { ContainerScroll, CardSticky }

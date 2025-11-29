"use client"

import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"

import { cn, getColor } from "@/lib/utils"

function Progress({
  className,
    value,
    progressColor,
  ...props
}: React.ComponentProps<typeof ProgressPrimitive.Root> & {
  progressColor?: "yellow" | "red" | "green" | "secondary" | "primary"
}) {
  return (
    <ProgressPrimitive.Root
      data-slot="progress"
      className={cn(
        "bg-primary/20 relative h-2 w-full overflow-hidden rounded-full",
        className
      )}
      {...props}
    >
      <ProgressPrimitive.Indicator
        data-slot="progress-indicator"
        className={`h-full w-full flex-1 transition-all`}
        style={{ transform: `translateX(-${100 - (value || 0)}%)`, backgroundColor: getColor(progressColor || "primary") }}
      />
    </ProgressPrimitive.Root>
  )
}

export { Progress }

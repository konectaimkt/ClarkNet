import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap text-sm font-bold ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 uppercase tracking-wide",
  {
    variants: {
      variant: {
        default: "bg-brand-yellow text-brand-navy hover:bg-brand-yellow-light",
        primary: "bg-brand-blue text-white hover:bg-brand-blue-light",
        navy: "bg-brand-navy text-white hover:bg-brand-navy-dark",
        outline: "border-2 border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white",
        outlineLight: "border-2 border-white text-white hover:bg-white hover:text-brand-navy",
        ghost: "hover:bg-brand-gray text-brand-navy",
        link: "text-brand-blue underline-offset-4 hover:underline",
      },
      size: {
        default: "h-12 px-8 py-3 rounded-[12px]",
        sm: "h-10 rounded-[10px] px-6",
        lg: "h-14 rounded-[12px] px-10 text-base",
        icon: "h-12 w-12 rounded-[12px]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }

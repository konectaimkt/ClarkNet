"use client";

import * as React from "react"
import { motion, HTMLMotionProps } from "motion/react"
import { cn } from "@/lib/utils"

interface SectionProps extends HTMLMotionProps<"section"> {
  children: React.ReactNode
  className?: string
  containerClassName?: string
}

export function Section({ children, className, containerClassName, ...props }: SectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn("py-16 md:py-24", className)}
      {...props}
    >
      <div className={cn("w-full max-w-7xl mx-auto px-4 md:px-6", containerClassName)}>
        {children}
      </div>
    </motion.section>
  )
}

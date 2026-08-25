"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div className={cn("flex items-center", className)}>
        <span className="font-heading font-bold text-3xl tracking-wider text-white">
          <span className="text-brand-yellow">CLARK</span>NET
        </span>
      </div>
    );
  }

  return (
    <div className={cn("relative h-16 w-40 md:h-20 md:w-52 transition-all", className)}>
      <img
        src="/logo.png"
        alt="ClarkNet Telecom"
        className="object-contain h-full w-full object-left"
        onError={() => setError(true)}
      />
    </div>
  );
}

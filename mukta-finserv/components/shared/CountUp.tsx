"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/cn";

type CountUpProps = {
  to: number;
  /** Decimals to show (default 0). */
  decimals?: number;
  /** Duration in seconds (default 2). */
  duration?: number;
  /** Optional prefix (e.g. "₹", "$"). */
  prefix?: string;
  /** Optional suffix (e.g. "+", " Cr", "%"). */
  suffix?: string;
  /** Insert thousands separators (default true). */
  groupDigits?: boolean;
  className?: string;
};

function format(value: number, decimals: number, group: boolean) {
  return value.toLocaleString("en-IN", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
    useGrouping: group,
  });
}

export function CountUp({
  to,
  decimals = 0,
  duration = 2,
  prefix,
  suffix,
  groupDigits = true,
  className,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const prefersReduced = useReducedMotion();
  const [display, setDisplay] = useState(() =>
    format(prefersReduced ? to : 0, decimals, groupDigits)
  );

  useEffect(() => {
    if (!inView) return;
    if (prefersReduced) {
      setDisplay(format(to, decimals, groupDigits));
      return;
    }
    const controls = animate(0, to, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(format(v, decimals, groupDigits)),
    });
    return () => controls.stop();
  }, [inView, to, duration, decimals, groupDigits, prefersReduced]);

  return (
    <span
      ref={ref}
      className={cn("font-stat tabular-nums text-gold-500", className)}
      aria-label={`${prefix ?? ""}${format(to, decimals, groupDigits)}${suffix ?? ""}`}
    >
      {prefix}
      {display}
      {suffix}
    </span>
  );
}

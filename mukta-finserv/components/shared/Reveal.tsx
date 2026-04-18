"use client";

import { createElement, useEffect, useRef } from "react";
import {
  animate,
  useInView,
  useReducedMotion,
  type AnimationPlaybackControls,
} from "framer-motion";
import { cn } from "@/lib/cn";

type ElementTag =
  | "div"
  | "section"
  | "article"
  | "header"
  | "footer"
  | "li"
  | "span";

type RevealProps = {
  as?: ElementTag;
  delay?: number;
  duration?: number;
  distance?: number;
  once?: boolean;
  amount?: number;
  className?: string;
  children: React.ReactNode;
};

export function Reveal({
  as = "div",
  delay = 0,
  duration = 0.7,
  distance = 24,
  once = true,
  amount = 0.25,
  className,
  children,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const inView = useInView(ref, { once, amount });
  const reduce = useReducedMotion();

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (reduce) {
      node.style.opacity = "1";
      node.style.transform = "none";
      return;
    }

    if (!inView) {
      node.style.opacity = "0";
      node.style.transform = `translate3d(0, ${distance}px, 0)`;
      return;
    }

    const controls: AnimationPlaybackControls = animate(
      node,
      { opacity: [0, 1], transform: [`translate3d(0, ${distance}px, 0)`, "translate3d(0, 0, 0)"] },
      { duration, delay, ease: [0.22, 1, 0.36, 1] },
    );

    return () => controls.stop();
  }, [inView, reduce, delay, duration, distance]);

  return createElement(
    as,
    {
      ref,
      className: cn("will-change-[transform,opacity]", className),
      style: { opacity: reduce ? 1 : 0 },
    },
    children,
  );
}

type StaggerProps = {
  as?: "div" | "section" | "ul" | "ol";
  gap?: number;
  initialDelay?: number;
  duration?: number;
  distance?: number;
  amount?: number;
  once?: boolean;
  className?: string;
  children: React.ReactNode;
};

export function Stagger({
  as = "div",
  gap = 0.08,
  initialDelay = 0,
  duration = 0.7,
  distance = 20,
  amount = 0.2,
  once = true,
  className,
  children,
}: StaggerProps) {
  const containerRef = useRef<HTMLElement | null>(null);
  const inView = useInView(containerRef, { once, amount });
  const reduce = useReducedMotion();

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;
    const items = Array.from(
      node.querySelectorAll<HTMLElement>("[data-stagger-item]"),
    );
    if (items.length === 0) return;

    if (reduce) {
      items.forEach((el) => {
        el.style.opacity = "1";
        el.style.transform = "none";
      });
      return;
    }

    if (!inView) {
      items.forEach((el) => {
        el.style.opacity = "0";
        el.style.transform = `translate3d(0, ${distance}px, 0)`;
      });
      return;
    }

    const controls = items.map((el, i) =>
      animate(
        el,
        { opacity: [0, 1], transform: [`translate3d(0, ${distance}px, 0)`, "translate3d(0, 0, 0)"] },
        { duration, delay: initialDelay + i * gap, ease: [0.22, 1, 0.36, 1] },
      ),
    );

    return () => controls.forEach((c) => c.stop());
  }, [inView, reduce, gap, initialDelay, duration, distance]);

  return createElement(
    as,
    { ref: containerRef, className },
    children,
  );
}

type StaggerItemProps = {
  as?: "div" | "li" | "article" | "section";
  className?: string;
  children: React.ReactNode;
};

export function StaggerItem({
  as: Tag = "div",
  className,
  children,
}: StaggerItemProps) {
  return (
    <Tag data-stagger-item className={cn("will-change-[transform,opacity]", className)}>
      {children}
    </Tag>
  );
}

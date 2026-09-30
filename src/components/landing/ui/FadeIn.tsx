"use client";

import { ReactNode, ElementType } from "react";
import { useInView } from "./useInView";

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: ElementType;
  stagger?: boolean;
};

export default function FadeIn({
  children,
  className = "",
  delay = 0,
  as: Tag = "div",
  stagger = false,
}: Props) {
  const { ref, inView } = useInView();

  return (
    <Tag
      ref={ref as any}
      className={`${stagger ? "stagger" : "reveal"} ${
        inView ? "is-visible" : ""
      } ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
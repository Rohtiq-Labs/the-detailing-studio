"use client";

import { useEffect, useRef, type ReactElement, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "span" | "section";
};

export const Reveal = ({
  children,
  className = "",
  as: Tag = "div",
}: RevealProps): ReactElement => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
          }
        });
      },
      { threshold: 0.15 },
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag ref={ref as never} className={`rv ${className}`.trim()}>
      {children}
    </Tag>
  );
};

"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Scroll-reveal wrapper.
 * variant: "up" | "down" | "left" | "right" | "scale" | "clip"
 */
export default function Reveal({
  children,
  as: Tag = "div",
  className = "",
  delay = 0,
  variant = "up",
}) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShown(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`reveal v-${variant} ${shown ? "in-view" : ""} ${className}`}
    >
      {children}
    </Tag>
  );
}

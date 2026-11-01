import { useEffect, useRef, type ReactNode } from "react";

export function ScrollReveal({ children, className = "", direction = "up" }: { children: ReactNode; className?: string; direction?: "up" | "left" | "scale" }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const node = ref.current;
    if (!node || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    node.classList.add("reveal-ready");
    const observer = new IntersectionObserver(([entry]) => {
      if (entry?.isIntersecting) {
        node.classList.add("reveal-visible");
        observer.disconnect();
      }
    }, { threshold: 0.12 });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);
  return <div ref={ref} className={`scroll-reveal reveal-${direction} ${className}`}>{children}</div>;
}
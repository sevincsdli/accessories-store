import { useEffect, useRef, useState } from "react";

export function useRevealOnScroll<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [isVisible, setIsVisible] = useState(true);

  const setRef = (node: T | null) => {
    if (observerRef.current && ref.current) {
      observerRef.current.unobserve(ref.current);
    }

    ref.current = node;

    if (!node) {
      return;
    }

    const rect = node.getBoundingClientRect();
    const isInViewport =
      rect.top < window.innerHeight * 0.95 && rect.bottom > 0;

    if (isInViewport) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        const shouldReveal =
          entry.isIntersecting ||
          entry.boundingClientRect.top < window.innerHeight * 0.95;
        setIsVisible(shouldReveal);

        if (entry.isIntersecting) {
          observer.disconnect();
        }
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -10% 0px",
      },
    );

    observer.observe(node);
    observerRef.current = observer;
  };

  useEffect(() => {
    return () => observerRef.current?.disconnect();
  }, []);

  return [setRef, isVisible] as const;
}

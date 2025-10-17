import { useEffect } from "react";

/**
 * Stagger children matched by `selector`.
 * stepDelay = ms added per item (0, step, 2*step, ...)
 * baseDelay = initial offset applied to all items (so you can fire later than the cards)
 */
export function useStaggerEffect(selector = ".stagger > *", stepDelay = 120, baseDelay = 0) {
  useEffect(() => {
    const items = document.querySelectorAll<HTMLElement>(selector);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            el.classList.add("in");
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.2 }
    );

    items.forEach((el, idx) => {
      el.style.animationDelay = `${baseDelay + idx * stepDelay}ms`;
      io.observe(el);
    });

    return () => io.disconnect();
  }, [selector, stepDelay, baseDelay]);
}
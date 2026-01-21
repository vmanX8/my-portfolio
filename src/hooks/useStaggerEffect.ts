import { useEffect } from "react";

/**
 * Staggers reveal animations for a set of elements.
 *
 * @param selector CSS selector for the elements to animate.
 * @param stepDelay Delay in ms between each element.
 * @param baseDelay Initial delay in ms before the first element.
 */
export function useStaggerEffect(
  selector: string = ".stagger > *",
  stepDelay: number = 120,
  baseDelay: number = 0
): void {
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

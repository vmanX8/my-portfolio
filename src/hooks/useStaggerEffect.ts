import { useEffect } from "react";

/**
 * Custom React hook that staggers entrance animations for selected DOM elements.
 *
 * @param selector - CSS selector string for the elements to animate (default: ".stagger > *").
 * @param stepDelay - Delay (in ms) added between each element’s animation start (default: 120).
 * @param baseDelay - Initial delay (in ms) before the first animation starts (default: 0).
 *
 * Each element matched by `selector` gets its own animationDelay and an 'in' class when it enters the viewport.
 */
export function useStaggerEffect(
  selector:string = ".stagger > *", 
  stepDelay:number = 120,
  baseDelay: number = 0
):void {
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
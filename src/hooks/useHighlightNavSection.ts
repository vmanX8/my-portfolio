import { useEffect } from "react";

/**
 * React hook that highlights the current section link in the navigation bar
 * based on the user's scroll position.
 *
 * @param ids - Array of section IDs <nav> strings
 *              that correspond to `<section id="...">` elements in the page.
 *
 * The hook:
 * - Observes each section with `IntersectionObserver`.
 * - Adds the `active` CSS class to the `<nav>` link whose `href` matches the section currently in view.
 * - Removes `active` from all other links.
 *
 * @remarks
 * This hook performs DOM manipulation and returns nothing.
 * Ensure section IDs match the `href` attributes in your navigation for correct behavior.
 */
export function useHighlightNavSection(ids: string[] = ["about", "projects", "contact"]): void {
  useEffect(() => {
    const sections = ids
      .map(id => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    const io = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          const id = e.target.getAttribute("id");
          if (!id) return;

          const link = document.querySelector(`nav a[href="#${id}"]`);
          if (!link) return;

          if (e.isIntersecting) {
            document.querySelectorAll("nav a").forEach(a => a.classList.remove("active"));
            link.classList.add("active");
          }
        });
      },
      {
        rootMargin: `-${Math.floor(window.innerHeight * 0.35)}px 0px -50% 0px`,
        threshold: 0.01,
      }
    );

    sections.forEach(s => io.observe(s));
    return () => io.disconnect();
  }, [ids]);
}
import { useEffect } from "react";

/**
 * Keeps the nav link in sync with the section currently in view.
 *
 * @param ids Section ids to observe (matching section ids and nav hrefs).
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

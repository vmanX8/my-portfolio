import { projects } from "../data/projects";
import { useStaggerEffect } from "../hooks/useStaggerEffect";
/**
 * Renders the "Projects" section of the portfolio.
 *
 * @remarks
 * This component lists all completed projects from the `projects` dataset.
 * Each project card displays its icon, title, description, and buttons
 * linking to a live demo and/or source code.
 *
 * The appearance of each card is animated using the `useStaggerEffect` hook,
 * which delays the entry of each card for a smooth cascading reveal as the user scrolls.
 *
 * @dependencies
 * - `projects` data array from `./data/projects`
 * - `useStaggerEffect` hook for scroll-based animation
 *
 * @returns JSX markup for the Projects section including all project cards.
 */
export default function Projects() {
    useStaggerEffect(".projects-grid > .project-card", 100, 0);
    useStaggerEffect(".projects-grid .icon-wrapper", 100, 180);

    return (
        <section id="projects">
            <div className="container">
                <h2>Projects</h2>

                <div className="projects-grid">
                    {projects.map((project) => {
                        const Icon = project.icon;
                        return (
                            <article key={project.title} className="project-card will-rise">
                                {Icon && (
                                    <div className="icon-wrapper will-rise" aria-hidden="true">
                                        <Icon size={36} color="#007acc" />
                                    </div>
                                )}
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <div className="buttons">
                                    {project.link && (
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noreferrer noopener"
                                            className="btn live"
                                            aria-label={`${project.title} – Live Demo`}
                                        >
                                            Live Demo
                                        </a>
                                    )}
                                    {project.code && (
                                        <a
                                            href={project.code}
                                            target="_blank"
                                            rel="noreferrer noopener"
                                            className="btn code"
                                            aria-label={`${project.title} – Source Code on GitHub`}
                                        >
                                            View Code
                                        </a>
                                    )}
                                </div>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
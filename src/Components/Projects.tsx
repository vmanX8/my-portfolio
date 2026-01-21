import { projects } from "../data/projects";
import { useStaggerEffect } from "../hooks/useStaggerEffect";

/**
 * Projects section showing cards from the projects data list.
 *
 * @returns JSX for the projects section.
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
                                            aria-label={`${project.title} - Live Demo`}
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
                                            aria-label={`${project.title} - Source Code on GitHub`}
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

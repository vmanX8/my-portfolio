import { UpcomingProject } from "../data/projects";

/**
 * Collapsible upcoming projects section using native details.
 *
 * @returns JSX for the upcoming projects section.
 */
export default function UpcomingProjects() {
    return (
        <section id="upcoming">
            <div className="container">
                <details open={false} className={true ? "disclose disclose--animated" : "disclose"}>
                    <summary className="disclose__summary">
                        <h2>Upcoming Projects</h2>
                        <span aria-hidden="true" className="chev">{">"}</span>
                    </summary>

                    <div className="disclose__panel">
                        <ul className="upcoming-list">
                            {UpcomingProject.map(({ title, summary, status, eta, technologies, notes, code, frontendCode, link, icon: Icon }) => (
                                <li key={title} className="upcoming-item">
                                    {Icon && <Icon size={20} className="upcoming-icon" />}
                                    <div className="upcoming-body">
                                        <strong>{title}</strong>
                                        <div className="meta">
                                            {status && <em className="chip">{status}</em>}
                                            {eta && <span className="eta">{eta}</span>}
                                        </div>
                                        <p>{summary}</p>
                                        {technologies && (
                                            <p className="upcoming-tech">
                                                <span>Tech stack:</span> {technologies.join(", ")}
                                            </p>
                                        )}
                                        {notes && <p className="upcoming-note">{notes}</p>}
                                        <div className="buttons upcoming-buttons">
                                            {link && (
                                                <a
                                                    href={link}
                                                    target="_blank"
                                                    rel="noreferrer noopener"
                                                    className="btn live"
                                                    aria-label={`${title} - Live Demo`}
                                                >
                                                    Live Demo
                                                </a>
                                            )}
                                            {code && (
                                                <a
                                                    href={code}
                                                    target="_blank"
                                                    rel="noreferrer noopener"
                                                    className="btn code"
                                                    aria-label={`${title} - Source Code on GitHub`}
                                                >
                                                    View Code
                                                </a>
                                            )}
                                            {frontendCode && (
                                                <a
                                                    href={frontendCode}
                                                    target="_blank"
                                                    rel="noreferrer noopener"
                                                    className="btn code"
                                                    aria-label={`${title} - Frontend Source Code on GitHub`}
                                                >
                                                    Frontend Code
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </details>
            </div>
        </section>
    );
}

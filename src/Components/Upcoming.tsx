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
                            {UpcomingProject.map(({ title, summary, status, eta, icon: Icon }) => (
                                <li key={title} className="upcoming-item">
                                    {Icon && <Icon size={20} className="upcoming-icon" />}
                                    <div className="upcoming-body">
                                        <strong>{title}</strong>
                                        <div className="meta">
                                            <span>{summary}</span>
                                            {status && <em className="chip">{status}</em>}
                                            {eta && <span className="eta">{eta}</span>}
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

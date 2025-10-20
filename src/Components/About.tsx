/**
 * Renders the "About Me" section of the portfolio.
 *
 * @remarks
 * This component is a presentational section.
 * It introduces the developer, describing background and skills.
 *
 * @returns JSX markup for the About section of the portfolio page.
 */
export default function About() {
    return (
        <section id="about">
            <div className="container">
                <h2>About Me</h2>
                <p>Front-End Engineer transitioning from Sales Engineering,
                    with hands-on experience in React, JavaScript, and UI design.
                    Combines technical problem-solving with a creative approach to build functional,
                    user-friendly applications.</p>
            </div>
        </section>
    )
}
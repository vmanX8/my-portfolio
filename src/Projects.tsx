export default function Projects() {
    return (
        <section id="projects">
            <div className="container">
                <h2>Projects</h2>

                <div className="projects-grid">
                    <article className="project-card">
                        <h3>Portfolio Website</h3>
                        <p>React + Vite + plain CSS. Clean layout, responsive, accessible.</p>
                        <a href="#" target="_blank" rel="noreferrer">Live Demo</a>
                    </article>

                    <article className="project-card">
                        <h3>Parking Tracker</h3>
                        <p>Tracks which parking spots are occupied in real time and
                            calculates parking cost based on actual arrival and departure times</p>
                        <a href="#" target="_blank" rel="noreferrer">Live Demo</a>
                    </article>

                    <article className="project-card">
                        <h3>Snakes & Ladder Game</h3>
                        <p>The classic Snakes & Ladders game rebuilt in React with a playful modern UI.</p>
                        <a href="#" target="_blank" rel="noreferrer">Live Demo</a>
                    </article>

                    <article className="project-card">
                        <h3>Weather App</h3>
                        <p>A React-powered live weather dashboard using the OpenWeather API,
                            showcasing API integration and real-time data handling.”</p>
                        <a href="#" target="_blank" rel="noreferrer">Live Demo</a>
                    </article>

                    <article className="project-card">
                        <h3>Quiz App</h3>
                        <p>A React quiz app with dynamic questions and score tracking,
                            built to practice state management and component structure.</p>
                        <a href="#" target="_blank" rel="noreferrer">Live Demo</a>
                    </article>

                    <article className="project-card">
                        <h3>Expense Tracker</h3>
                        <p>Simple React expense tracker with categories, filters, and local storage.</p>
                        <a href="#" target="_blank" rel="noreferrer">Live Demo</a>
                    </article>

                    <article className="project-card">
                        <h3>Movie Finder (OMDb API)</h3>
                        <p>React movie search using the OMDb API with favorites and persisted state.</p>
                        <a href="#" target="_blank" rel="noreferrer">Live Demo</a>
                    </article>

                    <article className="project-card">
                        <h3>Pomodoro Timer</h3>
                        <p>Accessible Pomodoro timer in React with custom durations and session history.</p>
                        <a href="#" target="_blank" rel="noreferrer">Live Demo</a>
                    </article>

                </div>
            </div>
        </section>
    )
}
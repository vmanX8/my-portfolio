/**
 * Renders the "Header" section of the portfolio.
 *
 * @remarks
 * Includes the name of the developer and the Navigation pane.
 *
 * @returns JSX markup for the Header and the Navigation section of the portfolio page.
 */
export default function Header() {
    return (
        <header>
            <h1>Vangelis Manouhos</h1>
            <nav>
                <a href="#about">About</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
            </nav>
        </header>
    )
}
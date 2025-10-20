import { useStaggerEffect } from "../hooks/useStaggerEffect";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
/**
 * Renders the "Contact" section of the portfolio.
 *
 * @remarks
 * This component details the contact details of the developer.
 * Links to email, GitHub, and LinkedIn
 *
 * @dependencies
 * - `useStaggerEffect` hook for scroll-based animation
 * 
 * @returns JSX markup for the Contact section of the portfolio page.
 */
export default function Contact() {
    useStaggerEffect(".stagger > *", 120);

    return (
        <section id="contact">
            <div className="container">
                <h2>Contact Me</h2>
                <p>
                    I’m always open to new opportunities or collaborations.<br />
                    Feel free to reach out!
                </p>

                <div className="social-links stagger">
                    <a href="mailto:v.manouhos@gmail.com" aria-label="Email"><FaEnvelope /></a>
                    <a href="https://github.com/vmanX8" target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a>
                    <a href="https://www.linkedin.com/in/vangelis-manouhos-3b0173127/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
                </div>
            </div>
            <span>&#174; {new Date().getFullYear()}  V. Manouhos</span>
        </section>
    );
}

import Header from './Header'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'
import './styles/base.css';
import './styles/layout.css';
import './styles/components.css';
import './styles/sections.css';
import { useActiveSection } from "./hooks/useActiveSection";


export default function App() {
  useActiveSection();
  return (
    <>
      <Header />
      <main>
        <div className="container">
          <h2>Exploring design through code</h2>
          <p>Here you’ll find my latest projects, experiments,
            and a glimpse of my journey as a Front-End engineer.</p>
        </div>
        <About />
        <Projects />
        <Contact />
      </main>
    </>
  )
}
import Header from './Components/Header'
import About from './Components/About'
import Projects from './Components/Projects'
import Contact from './Components/Contact'
import UpcomingProjects from './Components/Upcoming'
import './styles/base.css';
import './styles/layout.css';
import './styles/compnts.css';
import './styles/sections.css';
import { useHighlightNavSection } from "./hooks/useHighlightNavSection";


export default function App() {
  useHighlightNavSection();
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
        <UpcomingProjects />
        <Contact />
      </main>
    </>
  )
}
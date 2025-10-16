import Header from './Header'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'
import './styles.css'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <div className="container">
          <h2>Welcome to my portfolio!</h2>
          <p>This is where my projects and info will go.</p>
        </div>
        <About />
        <Projects />
        <Contact />
      </main>
    </>
  )
}
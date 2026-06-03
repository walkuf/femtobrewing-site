import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import Gallery from './components/Gallery.jsx'
import Recipes from './components/Recipes.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Projects />
        <Gallery />
        <Recipes />
      </main>
      <Footer />
    </>
  )
}

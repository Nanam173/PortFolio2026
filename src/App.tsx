import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Experience } from './components/Experience'
import { SideProject } from './components/SideProject'
import { Work } from './components/Work'
import { Skills } from './components/Skills'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <SideProject />
        <Work />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App

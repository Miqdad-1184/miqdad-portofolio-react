import Header from './components/section/Header.jsx'
import Footer from './components/section/Footer.jsx'
import Home from './components/section/Home.jsx'
import About from './components/section/About.jsx'
import Skills from './components/section/Skills.jsx'
import Projects from './components/section/Projects.jsx'
import Contact from './components/section/Contact.jsx'
import React from 'react'

function App() {

  return (
    <>
      <header>
        <Header />
      </header>
      <main className='pt-14'>
        <section id='home' className='scroll-mt-14'>
          <Home />
        </section>
        <section id='about' className='scroll-mt-14'>
          <About />
        </section>
        <section id='skills' className='scroll-mt-14'>
          <Skills />
        </section>
        <section id='projects' className='scroll-mt-14'>
          <Projects />
        </section>
        <section id='contact' className='scroll-mt-14'>
          <Contact/>
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default App

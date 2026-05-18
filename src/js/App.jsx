import Header from './components/section/Header.jsx'
import Footer from './components/section/Footer.jsx'
import Home from './components/section/Home.jsx'
import About from './components/section/About.jsx'
import Skills from './components/section/Skills.jsx'
import Projects from './components/section/Projects.jsx'
import Contact from './components/section/Contact.jsx'
import Experience from './components/section/Experience.jsx'
import React, { useState, useRef } from 'react'
import { translations } from './i18n.js'

function App() {
  const [language, setLanguage] = useState('en');
  const copy = translations[language];
  const contactRef = useRef(null);

  function handleScrollToContact() {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <>
      <header>
        <Header
          nav={copy.nav}
          language={language}
          onLanguageChange={setLanguage}
        />
      </header>
      <main className='pt-14'>
        <section id='home' className='scroll-mt-14'>
          <Home onScrollContact={handleScrollToContact} text={copy.home} />
        </section>
        <section id='about' className='scroll-mt-14'>
          <About text={copy.about} />
        </section>
        <section id='experience' className='scroll-mt-14'>
          <Experience text={copy.experience} />
        </section>
        <section id='skills' className='scroll-mt-14'>
          <Skills text={copy.skills} />
        </section>
        <section id='projects' className='scroll-mt-14'>
          <Projects text={copy.projects} />
        </section>
        <section id='contact' className='scroll-mt-14' ref={contactRef}>
          <Contact text={copy.contact} />
        </section>
      </main>
      <footer>
        <Footer text={copy.footer} />
      </footer>
    </>
  )
}

export default App

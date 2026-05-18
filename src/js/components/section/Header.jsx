import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = ({ nav, language, onLanguageChange }) => {
  const [navOpen, setNavOpen] = useState(false);

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      setNavOpen(false);
    }
  };

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <div className='flex justify-between items-center p-4 bg-[#0a192f] text-white fixed w-full border-b-1 border-gray-600 z-50'>
      <div className='flex items-center gap-4'>
        <div className='hidden md:flex gap-2'>
          <button
            type='button'
            onClick={() => onLanguageChange('en')}
            className={`px-3 py-1 rounded-full transition ${language === 'en' ? 'bg-purple-600 text-white' : 'bg-[#112240] text-[#8892b0]'}`}
          >
            EN
          </button>
          <button
            type='button'
            onClick={() => onLanguageChange('id')}
            className={`px-3 py-1 rounded-full transition ${language === 'id' ? 'bg-purple-600 text-white' : 'bg-[#112240] text-[#8892b0]'}`}
          >
            ID
          </button>
        </div>
      </div>

      <div className='md:hidden'>
        <button onClick={toggleNav} className='text-white focus:outline-none'>
          {navOpen ? '' : <FaBars size={24} />}
        </button>
      </div>

      <nav className='hidden md:flex space-x-4'>
        <ul className='flex space-x-4 gap-4'>
          <li className='link-underline hover:text-purple-600 font-semibold transition duration-300 ease-in-out'>
            <a href="#home" onClick={(e) => { e.preventDefault(); handleScroll('home'); }}>{nav.home}</a>
          </li>
          <li className='link-underline hover:text-purple-600 font-semibold transition duration-300 ease-in-out'>
            <a href="#about" onClick={(e) => { e.preventDefault(); handleScroll('about'); }}>{nav.about}</a>
          </li>
          <li className='link-underline hover:text-purple-600 font-semibold transition duration-300 ease-in-out'>
            <a href="#experience" onClick={(e) => { e.preventDefault(); handleScroll('experience'); }}>{nav.experience}</a>
          </li>
          <li className='link-underline hover:text-purple-600 font-semibold transition duration-300 ease-in-out'>
            <a href="#skills" onClick={(e) => { e.preventDefault(); handleScroll('skills'); }}>{nav.skills}</a>
          </li>
          <li className='link-underline hover:text-purple-600 font-semibold transition duration-300 ease-in-out'>
            <a href="#projects" onClick={(e) => { e.preventDefault(); handleScroll('projects'); }}>{nav.projects}</a>
          </li>
          <li className='link-underline hover:text-purple-600 font-semibold transition duration-300 ease-in-out'>
            <a href="#contact" onClick={(e) => { e.preventDefault(); handleScroll('contact'); }}>{nav.contact}</a>
          </li>
        </ul>
      </nav>

      <nav className={`fixed top-0 right-0 h-full w-1/3 bg-[#0a192f] opacity-95 flex flex-col p-6 transform ${navOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out md:hidden`}>
        <button onClick={toggleNav} className='absolute top-4 right-4 text-white focus:outline-none'>
          <FaTimes size={30} />
        </button>
        <div className='flex gap-2 pt-16 pb-6'>
          <button
            type='button'
            onClick={() => onLanguageChange('en')}
            className={`px-3 py-1 rounded-full transition ${language === 'en' ? 'bg-purple-600 text-white' : 'bg-[#112240] text-[#8892b0]'}`}
          >
            EN
          </button>
          <button
            type='button'
            onClick={() => onLanguageChange('id')}
            className={`px-3 py-1 rounded-full transition ${language === 'id' ? 'bg-purple-600 text-white' : 'bg-[#112240] text-[#8892b0]'}`}
          >
            ID
          </button>
        </div>
        <ul className='flex flex-col space-y-6 text-xl'>
          <li className='link-underline hover:text-purple-600 font-semibold transition duration-300 ease-in-out'>
            <a href="#home" onClick={(e) => { e.preventDefault(); handleScroll('home'); }}>{nav.home}</a>
          </li>
          <li className='link-underline hover:text-purple-600 font-semibold transition duration-300 ease-in-out'>
            <a href="#about" onClick={(e) => { e.preventDefault(); handleScroll('about'); }}>{nav.about}</a>
          </li>
          <li className='link-underline hover:text-purple-600 font-semibold transition duration-300 ease-in-out'>
            <a href="#experience" onClick={(e) => { e.preventDefault(); handleScroll('experience'); }}>{nav.experience}</a>
          </li>
          <li className='link-underline hover:text-purple-600 font-semibold transition duration-300 ease-in-out'>
            <a href="#skills" onClick={(e) => { e.preventDefault(); handleScroll('skills'); }}>{nav.skills}</a>
          </li>
          <li className='link-underline hover:text-purple-600 font-semibold transition duration-300 ease-in-out'>
            <a href="#projects" onClick={(e) => { e.preventDefault(); handleScroll('projects'); }}>{nav.projects}</a>
          </li>
          <li className='link-underline hover:text-purple-600 font-semibold transition duration-300 ease-in-out'>
            <a href="#contact" onClick={(e) => { e.preventDefault(); handleScroll('contact'); }}>{nav.contact}</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
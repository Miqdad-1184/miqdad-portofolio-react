import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
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
      <h1 className='font-bold text-lg md:text-xl'>Miqdad</h1>

      <div className='md:hidden'>
        <button onClick={toggleNav} className='text-white focus:outline-none'>
          {navOpen ? '': <FaBars size={24} />}
        </button>
      </div>

      <nav className='hidden md:flex space-x-4'>
        <ul className='flex space-x-4 gap-4'>
          <li className='link-underline hover:text-purple-600 font-semibold transition duration-300 ease-in-out'>
            <a href="#home" onClick={(e) => { e.preventDefault(); handleScroll('home'); }}>Home</a>
          </li>
          <li className='link-underline hover:text-purple-600 font-semibold transition duration-300 ease-in-out'>
            <a href="#about" onClick={(e) => { e.preventDefault(); handleScroll('about'); }}>About</a>
          </li>
          <li className='link-underline hover:text-purple-600 font-semibold transition duration-300 ease-in-out'>
            <a href="#skills" onClick={(e) => { e.preventDefault(); handleScroll('skills'); }}>Skills</a>
          </li>
          <li className='link-underline hover:text-purple-600 font-semibold transition duration-300 ease-in-out'>
            <a href="#projects" onClick={(e) => { e.preventDefault(); handleScroll('projects'); }}>Projects</a>
          </li>
          <li className='link-underline hover:text-purple-600 font-semibold transition duration-300 ease-in-out'>
            <a href="#contact" onClick={(e) => { e.preventDefault(); handleScroll('contact'); }}>Contact</a>
          </li>
        </ul>
      </nav>

      <nav className={`fixed top-0 right-0 h-full w-1/3 bg-[#0a192f] opacity-80 flex flex-col p-6 transform ${navOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out md:hidden`}>
        <button onClick={toggleNav} className='absolute top-4 right-4 text-white focus:outline-none'>
          <FaTimes size={30} />
        </button>
        <ul className='flex flex-col space-y-6 text-xl pt-16'>
          <li className='link-underline hover:text-purple-600 font-semibold transition duration-300 ease-in-out'>
            <a href="#home" onClick={(e) => { e.preventDefault(); handleScroll('home'); }}>Home</a>
          </li>
          <li className='link-underline hover:text-purple-600 font-semibold transition duration-300 ease-in-out'>
            <a href="#about" onClick={(e) => { e.preventDefault(); handleScroll('about'); }}>About</a>
          </li>
          <li className='link-underline hover:text-purple-600 font-semibold transition duration-300 ease-in-out'>
            <a href="#skills" onClick={(e) => { e.preventDefault(); handleScroll('skills'); }}>Skills</a>
          </li>
          <li className='link-underline hover:text-purple-600 font-semibold transition duration-300 ease-in-out'>
            <a href="#projects" onClick={(e) => { e.preventDefault(); handleScroll('projects'); }}>Projects</a>
          </li>
          <li className='link-underline hover:text-purple-600 font-semibold transition duration-300 ease-in-out'>
            <a href="#contact" onClick={(e) => { e.preventDefault(); handleScroll('contact'); }}>Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
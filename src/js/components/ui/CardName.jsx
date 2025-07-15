import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaWhatsapp, FaGithub, FaInstagram } from 'react-icons/fa';

const CardName = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const technologies = ['HTML', 'CSS', 'Javascript', 'React', 'Node.js', 'Express', 'MySQL', 'Tailwind CSS'];

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className={`relative md:p-6 pb-4 sm:h-[500px] rounded-lg text-start text-white overflow-hidden card-container ${isFlipped ? 'flipped' : ''}`}
      onClick={handleCardClick}
      style={{ perspective: '1000px' }} 
    >
      <div className="card-inner w-full h-full relative" style={{ transformStyle: 'preserve-3d', transition: 'transform 0.6s' }}>
        <div className="card-front absolute w-full h-full top-0 left-0 backface-hidden">
          <div className='patternCard relative p-6 rounded-lg shadow-lg text-start text-white overflow-hidden h-full'>
            <div className="absolute top-0 left-0 h-full w-1 rounded-l-lg bg-gradient-to-b from-purple-700 to-blue-700"></div>
            <div className="pl-4">
              <h2 className='text-2xl font-bold mb-4'>Miqdad Fauzan Ghozwatulhaq</h2>
              <p className='text-lg'>Full Stack Developer</p>
              <div className='mt-4 border-t border-gray-700 pt-4 flex flex-row flex-wrap gap-2'>
                {technologies.map((tech, index) => (
                  <p key={index} className='text-md mb-1 bg-[#1d2447] px-2 py-1 rounded-md opacity-80 text-sm'>
                    {tech}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="card-face card-back absolute w-full h-full top-0 left-0 backface-hidden" style={{ transform: 'rotateY 180deg' }}>
          <div className='patternCard relative p-6 rounded-lg shadow-lg text-start text-white overflow-hidden h-full flex flex-col justify-center items-center'>
            <h3 className='text-2xl font-bold mb-4'>Contact Me</h3>
            <div className='flex flex-col gap-3'>
              <a href="tel:+6285749353016" className='flex items-center text-lg hover:text-blue-400'>
                <FaPhone className='mr-2' /> +62 812 3456 7890
              </a>
              <a href="https://wa.me/6285749353016" target="_blank" rel="noopener noreferrer" className='flex items-center text-lg hover:text-green-400'>
                <FaWhatsapp className='mr-2' /> WhatsApp
              </a>
              <a href="mailto:miqdadfauzan042gmail.com" className='flex items-center text-lg hover:text-red-400'>
                <FaEnvelope className='mr-2' /> miqdadfauzan042gmail.com
              </a>
              <a href="https://github.com/Miqdad-1184" target="_blank" rel="noopener noreferrer" className='flex items-center text-lg hover:text-gray-400'>
                <FaGithub className='mr-2' /> GitHub
              </a>
              <a href="https://instagram.com/Miqdad_1184" target="_blank" rel="noopener noreferrer" className='flex items-center text-lg hover:text-pink-400'>
                <FaInstagram className='mr-2' /> Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
      <p className='text-center sm: text-sm'>Click Card to Flip</p>
    </div>
  );
};

export default CardName;
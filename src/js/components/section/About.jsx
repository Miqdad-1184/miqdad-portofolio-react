import React from 'react';
import Photo from '../ui/Photo.jsx';

const About = ({ text }) => {
  return (
    <div className='py-10 px-4 md:px-30 bg-[#112240]'>
      <h1 className='font-bold bg-gradient-to-r from-purple-700 to-blue-700 bg-clip-text text-transparent text-center text-2xl md:text-3xl mb-8'>{text.heading}</h1>
      <div className='flex flex-col md:flex-row justify-center items-center md:items-start gap-8'>
        <aside className='w-full md:w-1/4 flex justify-center pl-15'>
          <Photo />
        </aside>
        <main className='text-[#8892b0] w-full md:w-2/3 text-justify px-4 md:px-0'>
          {text.paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </main>
      </div>
    </div>
  );
};

export default About;
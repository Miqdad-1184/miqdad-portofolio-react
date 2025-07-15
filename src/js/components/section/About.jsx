import React from 'react';
import Photo from '../ui/Photo.jsx';

const About = () => {
  return (
    <div className='py-10 px-4 md:px-30 bg-[#112240]'>
      <h1 className='font-bold bg-gradient-to-r from-purple-700 to-blue-700 bg-clip-text text-transparent text-center text-2xl md:text-3xl mb-8'>About Me</h1>
      <div className='flex flex-col md:flex-row justify-center items-center md:items-start gap-8'>
        <aside className='w-full flex justify-center md:w-auto'>
          <Photo />
        </aside>
        <main className='text-[#8892b0] w-full md:w-2/3 text-justify px-4 md:px-0'>
          <p>A Mechatronics and Artificial Intelligence student at Universitas Pendidikan Indonesia, passionate about end-to-end web development. Proficient in modern front-end technologies like React.js for building interactive and responsive user interfaces, and skilled in back-end development using Node.js and Express.js to create efficient and scalable systems. Committed to continuous learning and contributing to innovative and comprehensive web solutions. Enthusiastic about developing a career as a Full-Stack Web Developer in a dynamic professional environment. Equipped with leadership and organizational management experience as a Chairman and staff member, which strengthens team collaboration, project management, and problem-solving skills in a dynamic development environment.</p>
        </main>
      </div>
    </div>
  );
};

export default About;
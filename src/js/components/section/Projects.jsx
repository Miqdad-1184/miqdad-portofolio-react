import React from 'react';
import CardProject from '../ui/CardProject.jsx';
import ImagePortal from '../../../assets/portal.png';
import ImagePortolio from '../../../assets/portofolio.png';

const Projects = () => {

  const projectsData = [
    {
      imageSrc: ImagePortal,
      title: 'Winnicode News',
      description: 'Winnicode News is a web application for managing and reading news, equipped with various interactive features. This web is built using a React.js, Express.js, and MySQL stack, and includes modern security features such as JWT Authentication and Role-based Access Control.',
      technologies: ['React', 'Node.js', 'Express', 'MySql', 'CSS'],
      projectLink: 'https://github.com/Miqdad-1184/Winnicode_Project',
    },
    {
      imageSrc: ImagePortolio,
      title: 'Web Portofolio',
      description: 'This portfolio showcases my fullstack web development expertise for internship programs. Built with React.js, Vite, and Tailwind CSS, it demonstrates my ability to create intuitive and responsive web applications. A comprehensive single-page application featuring Home, About, Skills, Projects, and Contact sections. ',
      technologies: ['React', 'Vite', 'Tailwind CSS', 'JavaScript'],
      projectLink: 'https://miqdad-portofolio.vercel.app/',
    },
  ];

  return (
    <div className='py-10 px-4 md:px-30 bg-[#112240]'>
      <h1 className='font-bold bg-gradient-to-r from-purple-700 to-blue-700 bg-clip-text text-transparent text-center text-2xl md:text-3xl mb-8'>My Projects</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 max-w-5xl mx-auto'>
        {projectsData.map((project, index) => (
          <CardProject
            key={index}
            imageSrc={project.imageSrc}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            projectLink={project.projectLink}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
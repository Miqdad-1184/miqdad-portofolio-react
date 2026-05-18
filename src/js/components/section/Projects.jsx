import React from 'react';
import CardProject from '../ui/CardProject.jsx';
import ImagePasmahaguru from '../../../assets/pasmahaguru.png';
import ImagePortolio from '../../../assets/portofolio.png';

const Projects = ({ text }) => {
  const projectsData = text.items.map((project) => ({
    ...project,
    imageSrc: project.title.includes('P.A.S Mahaguru') ? ImagePasmahaguru : ImagePortolio,
  }));

  return (
    <div className='py-10 px-4 md:px-30 bg-[#112240]'>
      <h1 className='font-bold bg-gradient-to-r from-purple-700 to-blue-700 bg-clip-text text-transparent text-center text-2xl md:text-3xl mb-8'>{text.heading}</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 max-w-5xl mx-auto'>
        {projectsData.map((project, index) => (
          <CardProject
            key={index}
            imageSrc={project.imageSrc}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            projectLink={project.projectLink}
            viewText={text.viewButton}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
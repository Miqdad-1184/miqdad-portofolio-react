import React from 'react';
import CardProject from '../ui/CardProject.jsx';
import CardPortal from '../../../assets/image.png';

const Projects = () => {

  const projectsData = [
    {
      imageSrc: CardPortal,
      title: 'Portal Akademik Mahasiswa',
      description: 'Sebuah sistem portal untuk mahasiswa dalam mengakses informasi akademik, nilai, dan jadwal kuliah.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
      projectLink: 'https://example.com/portal-akademik',
    },
    {
      imageSrc: CardPortal,
      title: 'Aplikasi To-Do List Interaktif',
      description: 'Aplikasi web sederhana untuk mengelola daftar tugas harian dengan fitur drag-and-drop.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      projectLink: 'https://example.com/todo-app',
    },
    {
      imageSrc: CardPortal,
      title: 'Platform E-Commerce Modern',
      description: 'Platform belanja online dengan fitur keranjang, checkout, dan manajemen produk untuk admin.',
      technologies: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL', 'Redux'],
      projectLink: 'https://example.com/ecommerce',
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
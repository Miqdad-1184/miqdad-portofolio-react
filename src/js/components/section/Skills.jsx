import React from 'react';
import CardSkill from '../ui/CardSkill.jsx';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaDatabase, FaCode, FaTools, FaNodeJs, FaFigma} from 'react-icons/fa';
import { SiMysql, SiTailwindcss, SiGit, SiExpress} from 'react-icons/si';
import { VscVscode } from "react-icons/vsc";
import { DiGithubBadge, } from 'react-icons/di';

const skillsData = [
  {
    title: 'Frontend',
    icon: <FaCode className='text-[#8a2be2] text-2xl' />,
    technologies: [
      { name: 'HTML', logo: <FaHtml5 className='text-[#e34c26] text-4xl' /> },
      { name: 'CSS', logo: <FaCss3Alt className='text-[#264de4] text-4xl' /> },
      { name: 'JavaScript', logo: <FaJsSquare className='text-[#f7df1e] text-4xl' /> },
      { name: 'React', logo: <FaReact className='text-[#61DAFB] text-4xl' /> },
      { name: 'Tailwind CSS', logo: <SiTailwindcss className='text-[#38B2AC] text-4xl' /> },
    ],
  },
  {
    title: 'Backend',
    icon: <FaDatabase className='text-[#8a2be2] text-2xl' />,
    technologies: [
      { name: 'Node.js', logo: <FaNodeJs className='text-[#68A063] text-4xl' /> },
      { name: 'Express.js', logo: <SiExpress className='text-[#000000] text-4xl' /> },
      { name: 'MySQL', logo: <SiMysql className='text-[#4479A1] text-4xl' /> },
    ],
  },
  {
    title: 'Tools',
    icon: <FaTools className='text-[#8a2be2] text-2xl' />,
    technologies: [
      { name: 'Git', logo: <SiGit className='text-[#F1502F] text-4xl' /> },
      { name: 'VS Code', logo: <VscVscode className='text-[#007ACC] text-4xl' /> },
      { name: 'GitHub', logo: <DiGithubBadge className='text-[#181717] text-4xl' /> },
      { name: 'Figma', logo: <FaFigma className='text-[#F24E1E] text-4xl' /> },
    ],
  },
];

const Skills = () => {
  return (
    <div className='py-10 px-4 md:px-30 bg-[#0a192f]'>
      <h1 className='font-bold bg-gradient-to-r from-purple-700 to-blue-700 bg-clip-text text-transparent text-center text-2xl md:text-3xl mb-8'>Skills</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10 max-w-5xl mx-auto'>
        {skillsData.map((category, index) => (
          <div key={index} className='bg-[#112240] text-[#bcc6e6] p-6 rounded-lg shadow-xl'>
            <div className='flex items-center mb-6'>
              <span className='mr-3'>{category.icon}</span>
              <h3 className='font-bold text-xl'>{category.title}</h3>
            </div>
            <div className='grid grid-cols-2 gap-4'>
              {category.technologies.map((tech, techIndex) => (
                <CardSkill
                  key={techIndex}
                  logo={tech.logo}
                  name={tech.name}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
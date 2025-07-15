import React from 'react';

const CardProject = ({
  imageSrc,
  title,
  description,
  technologies,
  projectLink,
}) => {
  return (
    <div>
      <div>
        <img
          src={imageSrc}
          alt={title + ' Thumbnail'}
          className="w-full h-48 object-cover rounded-t-md"
        />
      </div>
      <div className="bg-[#0a192f] p-4 rounded-b-md">
        <h2 className="text-lg font-semibold text-[#c4ceed]">{title}</h2>
        <div>
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="inline-block bg-[#171a41] text-[#5c24a1] text-xs px-2 py-1 rounded-full mr-2"
            >
              {tech}
            </span>
          ))}
        </div>
        <p className="text-gray-400 mt-2">{description}</p>
        <button className="mt-4 bg-gradient-to-r from-purple-700 to-blue-700 text-white px-4 py-2 rounded hover:bg-[#4e238d] transition-colors duration-300">
          <a href={projectLink}>
            View Project
          </a>
        </button>
      </div>
    </div>
  );
};

export default CardProject;
import React from 'react';

const Button = ({text, link, onClick}) => {
  return (
    <button className="cursor-pointer relative group overflow-hidden border-2 px-8 py-2 border-[#4e238d]" onClick={onClick}>
        <a href={link}>
      <span className="font-bold text-white relative z-10 group-hover:text-[#4e238d] duration-500">{text}</span>
      <span className="absolute top-0 left-0 w-full bg-[#4e238d] duration-500 group-hover:-translate-x-full h-full" />
      <span className="absolute top-0 left-0 w-full bg-[#4e238d] duration-500 group-hover:translate-x-full h-full" />
      <span className="absolute top-0 left-0 w-full bg-[#4e238d] duration-500 delay-300 group-hover:-translate-y-full h-full" />
      <span className="absolute delay-300 top-0 left-0 w-full bg-[#4e238d] duration-500 group-hover:translate-y-full h-full" />
      </a>
    </button>
  );
}

export default Button;

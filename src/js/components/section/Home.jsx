import React from 'react';
import Button from '../ui/Button.jsx';
import DotGrid from '../animation/DotGrid.jsx';

const Home = ({ onScrollContact, text }) => {
  return (
    <div className='relative flex flex-col items-center text-center py-27 px-4 md:py-45 md:px-30 bg-[#0a192f] min-h-screen overflow-hidden'>
      <div className='absolute inset-0 z-0'>
        <DotGrid
          dotSize={3}
          gap={15}
          baseColor="#112240"
          activeColor="#5227FF"
          proximity={120}
          shockRadius={250}
          shockStrength={5}
          resistance={750}
          returnDuration={1.5}
        />
      </div>

      <div className='relative z-10 flex flex-col items-center text-center'>
        <p className='text-[#4e238d] text-sm md:text-base'>{text.intro}</p>
        <h1 className='font-bold text-3xl md:text-4xl lg:text-5xl text-[#ccd6f6]'>{text.name}</h1>
        <h2 className='font-bold text-2xl md:text-3xl lg:text-4xl text-[#8892b0]'>{text.role}</h2>
        <p className='text-[#8892b0] mt-3 w-full px-4 md:w-3/4 md:px-0'>
          {text.description}
        </p>
        <section className='flex flex-col md:flex-row gap-4 mt-5'>
          <Button text={text.buttons.cv} link="https://drive.google.com/drive/folders/1HtATM37a2YtbUqquPw1iL5y-LM0W9wTf?usp=sharing"/>
          <Button text={text.buttons.contact} onClick={onScrollContact} />
        </section>
      </div>
    </div>
  );
}

export default Home;

import React from 'react'
import Button from '../ui/Button.jsx'

const Home = () => {
  return (
    <div className='flex flex-col items-center text-center py-27 px-4 md:py-45 md:px-30 bg-[#0a192f]'>
      <p className='text-[#4e238d] text-sm md:text-base'>Hi there, my name is</p>
      <h1 className='font-bold text-3xl md:text-4xl lg:text-5xl text-[#ccd6f6]'>Miqdad Fauzan</h1>
      <h2 className='font-bold text-2xl md:text-3xl lg:text-4xl text-[#8892b0]'>Fullstack web developer</h2>
      <p className='text-[#8892b0] mt-3 w-full px-4 md:w-3/4 md:px-0'>
        I am a fullstack web developer with a passion for creating dynamic and responsive web applications. I have experience in both frontend and backend development, and I enjoy working with the latest technologies to build innovative solutions.
      </p>
      <section className='flex flex-col md:flex-row gap-4 mt-5'>
        <Button text="Download CV" link="https://drive.google.com/drive/folders/1HtATM37a2YtbUqquPw1iL5y-LM0W9wTf?usp=sharing"/>
        <Button text="Contact Me" link="#contact"/>
      </section>
    </div>
  )
}

export default Home
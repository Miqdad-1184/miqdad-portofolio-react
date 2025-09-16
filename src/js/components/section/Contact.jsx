import React from 'react'
import GetInTouch from '../ui/GetInTouch.jsx'
import CardName from '../ui/CardName.jsx'

const Contact = () => {
  return (
    <div className='py-10 px-4 md:px-30 bg-[#0a192f]'>
      <h1 className='font-bold bg-gradient-to-r from-purple-700 to-blue-700 bg-clip-text text-transparent text-center text-2xl md:text-3xl mb-8'>Get in touch</h1>
      <div className='flex flex-col md:flex-row md:items-center gap-8'>
        <aside className='w-full md:flex-1 flex items-center justify-center p-4'>
          <CardName/>
        </aside>
        <main className='w-full md:flex-1'>
          <GetInTouch/>
        </main>
      </div>
    </div>
  )
}

export default Contact
import React from 'react'

const CardSkill = ({icon, title, logo, name}) => {
  return (
    <div className=' p-4 rounded-lg shadow-lg hover:-translate-y-2 hover:scale-105 transition-all duration-300 ease-in-out border-[#8a2be2] border-1'>
        <div className='flex flex-col items-center mt-2'> 
            <span>{logo}</span>
            <p>{name}</p>
        </div>
    </div>
  )
}

export default CardSkill
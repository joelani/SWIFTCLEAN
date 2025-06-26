import React from 'react'

const Title = ({title, subtitle}) => {
  return (
    <div className=' max-w-3xl mx-auto flex flex-col items-center justify-center text-center mb-16'>
      <h1 className='font-bold text-[#333] text-4xl md:text-5xl mb-4'>{title}</h1>
      <p className='text-xl text-gray-600 max-w-2xl'>{subtitle}</p>
    </div>
  )
}

export default Title

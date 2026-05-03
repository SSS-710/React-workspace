import React from 'react'


const navbar = () => {
  return (
    <div className='flex justify-between items-center py-4 px-8 bg-cyan-500'>
        <h2 className='text-2xl font-bold'>SSS</h2>
        <div className='flex gap-8'>
            <a className='text-lg font-medium'href="/about">About</a>
            <a className='text-lg font-medium' href="/home">Home</a>
            <a className='text-lg font-medium' href="/contact">Contact</a>

        </div>
    </div>
  )
}

export default navbar

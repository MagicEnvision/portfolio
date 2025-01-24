import React from 'react'

const Hero = () => {
  return (
    <>
    <div className='flex text-center justify-center md:flex-row flex-col mr-22 text-white flex-1 w-full'>

      <div className='border-2 flex-grow rounded-tl-3xl rounded-br-3xl rounded-bl-sm rounded-tr-md border-neutral-800 bg-neutral-900 p-5 m-5'>
      <h1 className='text-white'>My Favourite Tech Stack</h1>
      <img src="" alt="" />
      <p>MERN </p>
      </div>
     
      <div className='border-2 flex-grow rounded-tl-3xl rounded-br-3xl rounded-bl-sm rounded-tr-md border-neutral-800 bg-neutral-900 p-5 m-5'>
      <h1 className='text-white'>College Degree</h1>
      <img src="" alt="" />
      <p className='pt-1'>George Brown College<br></br>Programmer/Analyst</p>
      </div>

    </div>
    </>
    )
}

export default Hero
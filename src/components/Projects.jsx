import React from 'react'

  const handleMouseMove = (e) => {
    e.currentTarget.play()
  }

  const handleMouseLeave = (e) => {
    e.currentTarget.pause()
  }

const Projects = () => {
  return (
    <div className='flex flex-col justify-center items-center sm:grid sm:grid-cols-2 sm:grid-rows-2 gap-4 '>

      <div className='border-[1px] h-[18rem] col-span-1 row-span-1 border-neutral-700 rounded-[2rem]  hover:shadow-[0px_0px_5px_0px_#EDEDED] transition-all duration-300
       bg-[#060606] p-4 sm:p-8 flex flex-col sm:flex-row justify-start items-start'>
        <div className='w-[30%] h-full'>
          <h1 className='font-oswald text-2xl leading-[1.75rem] tracking-wide'>Apple IPhone Site Clone</h1>
        
          <p className='text-lg tracking-tighter leading-5 text-neutral-400'>Using three.js, react, and gsap</p>

        </div>
        <div className='w-[70%]'>
          <video 
          className=" h-[222px]"
          src="./1.mp4" 
          alt="Apple Clone Demonstration" 
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          muted/>
        </div>
      </div>
      <div className='border-[1px] h-[18rem] col-span-1 row-span-1 border-neutral-700 rounded-[2rem]  hover:shadow-[0px_0px_5px_0px_#EDEDED] transition-all duration-300 bg-[#060606] p-4 sm:p-8 flex justify-center'>
        <div className='w-[30%] h-full'>
          <h1 className='font-oswald text-4xl tracking-wide'>Title EX</h1>
          
          <p className='text-lg tracking-tighter leading-5 text-neutral-400'>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>

        </div>
        <div className='w-[70%] h-full'>

        </div>
      </div>
      
      <div className='border-[1px] h-[18rem] col-span-1 row-span-1 border-neutral-700 rounded-[2rem]  hover:shadow-[0px_0px_5px_0px_#EDEDED] transition-all duration-300 bg-[#060606] p-4 sm:p-8 flex justify-center'>
        <div className='w-[30%] h-full'>
          <h1 className='font-oswald text-4xl tracking-wide'>Title EX</h1>
          
          <p className='text-lg tracking-tighter leading-5 text-neutral-400'>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>

        </div>
        <div className='w-[70%] h-full'>

        </div>
      </div>
      
      <div className='border-[1px] h-[18rem] col-span-1 row-span-1 border-neutral-700 rounded-[2rem]  hover:shadow-[0px_0px_5px_0px_#EDEDED] transition-all duration-300 bg-[#060606] p-4 sm:p-8 flex justify-center'>
        <div className='w-[30%] h-full'>
          <h1 className='font-oswald text-4xl tracking-wide'>Title EX</h1>
          
          <p className='text-lg tracking-tighter leading-5 text-neutral-400'>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>

        </div>
        <div className='w-[70%] h-full'>

        </div>
      </div>
      
      
    </div>
  )
}

export default Projects

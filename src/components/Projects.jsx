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
       bg-[#060606] p-0 flex flex-col sm:flex-row hover:scale-95 '>
        <div className='w-[30%] py-4 px-3  h-full'>
          <h1 className='text-2xl tracking-tight leading-[1.75rem] m-0 '>Gaming Website Clone</h1>
          <p className='text-md tracking-tighter leading-5 text-neutral-400'>Using three.js, react, and gsap</p>
        </div>
        <div className='w-[70%] h-full overflow-hidden object-fill'>
          <video 
          className="h-full cursor-pointer w-full rounded-tr-[2rem] scale-120 rounded-br-[2rem] object-fill"
          src="./1.mp4" 
          alt="Gaming Website Clone" 
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          muted/>
        </div>
      </div>
     
     <div className='border-[1px] h-[18rem] col-span-1 row-span-1 border-neutral-700 rounded-[2rem]  hover:shadow-[0px_0px_5px_0px_#EDEDED] transition-all duration-300
       bg-[#060606] p-0 flex flex-col sm:flex-row hover:scale-95 '>
        <div className='w-[30%] py-4 px-3  h-full'>
          <h1 className='text-2xl tracking-tight leading-[1.75rem] m-0 '>Apple IPhone Site Clone</h1>
          <p className='text-md tracking-tighter leading-5 text-neutral-400'>Using three.js, react, and gsap</p>
        </div>
        <div className='w-[70%] h-full overflow-hidden object-fill'>
          <video 
          className="h-full cursor-pointer w-full rounded-tr-[2rem] scale-120 rounded-br-[2rem] object-fill"
          src="./2.mp4" 
          alt="Apple Site Clone Demonstration" 
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          muted/>
        </div>
      </div>
      
    
    </div>
  )
}

export default Projects

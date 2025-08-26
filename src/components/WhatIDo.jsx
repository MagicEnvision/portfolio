import React from 'react'

const WhatIDo = () => {
  return (
    <div className='flex flex-nowrap items-center gap-10 w-full border-[1px] bg-[#060606] p-8 overflow-hidden rounded-[2rem] border-neutral-700 '>
      <div className='rounded-full border-2 flex-none bg-white h-[200px] overflow-hidden w-[200px]'>
      <img src="https://placehold.co/250x250" alt="" />
      </div>
      <div className='h-[250px] flex-grow-[0]  p-1'>
        <h1 className='text-xl flex justify-between'>
          <span className='text-2xl font-extrabold '>Hi, My Name is Rj </span>
          <span className='text-2xl font-bold italic'>Full Stack Web Enthusiast</span>
        </h1>
       <div className='flex flex-col justify-center items-center  '>
         <div className='w-full border-t-[1px] my-2'/>
        <p className='text-center '>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
           Corrupti eveniet dignissimos veniam autem, quia illum eaque. 
           Soluta accusamus fugiat veniam molestiae, impedit reiciendis
            quaerat, nemo perferendis  Distinctio voluptas molestias 
            adipisci exercitationem reiciendis autem alias, laboriosam 
            ducimus quasi eligendi numquam tempora incidunt assumenda 
            repudiandae possimus voluptatem facilis natus. Totam inventore 
            fugiat aperiam quis dolorem, tempore nostrum natus?</p>
       </div>
      </div>
    
    </div>
  )
}

export default WhatIDo

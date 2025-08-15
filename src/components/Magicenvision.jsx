import React from 'react'
import ModelView from './ModelView.jsx'

const MagicEnvision = () => {
  return (
   <div className='flex flex-col md:flex-row flex-wrap sm:gap-5  '>
      <ModelView />
      <div className='border-[1px] sm:h-[250px] rounded-[2rem] border-neutral-700 shadow-[0px_0px_5px_0px_#EDEDED] flex-grow '>
       <div className='p-3'>
        <h1 className='text-4xl text-center font-oswald font-extrabold italic'>
          Magic Envision  <span className='text-xl font-extralight'>{''}Clothing Brand</span><br/>
          </h1>
          <div className='border-t-[1px] border border-neutral-600 mt-2'></div>
           <span className='text-center text-2xl not-italic font-extralight font-oswald '>
           <p> In my sparetime 
          i love to create design, create, and<br /> manufacture my own clothing.
          Started my sewing <br /> journey in 2020 and Ive enjoyed it ever since. </p>
          </span>
       </div>
      </div>
      
      
   </div>
  )
}

export default MagicEnvision

import React from 'react'
import ModelView from './ModelView.jsx'

const MagicEnvision = () => {
  return (
   <div className='flex flex-col md:flex-row sm:gap-1  '>
      <ModelView />
      <div className='border-2 flex-grow border-white'>
       <div className='p-1'>
        <h1 className='text-4xl font-oswald font-extrabold italic'>
          Magic Envision  <span className='text-xl font-extralight'>{''}Clothing Brand</span><br/>
           <span className='text-2xl not-italic font-light '>
           <p> In my sparetime 
          i love to create design, create, and<br /> manufacture my own clothing</p>
          </span>
          </h1>
       </div>
      </div>
   </div>
  )
}

export default MagicEnvision

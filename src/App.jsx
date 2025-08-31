import React, { useState , useEffect} from 'react';
import WhatIDo from './components/WhatIDo';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Magicenvision from './components/Magicenvision';
import './index.css';
import { div } from 'motion/react-client';
import { IoMenu } from "react-icons/io5";

function App() {
  const [activePage, setActivePage] = useState("me");
  const [selected, setIsSelected] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  
    const [isMobile, setIsMobile] = useState(false);
  
    // Effect hook to handle window resizing
    useEffect(() => {
      const handleResize = () => {
        if(window.innerWidth < 1100){
          setIsMobile(true);
        }
        else{
          setIsMobile(false)
        }
        
      };
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
  

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#060606] p-1">
      <div className="flex  sm:flex-row w-full max-w-xs md:max-w-2xl lg:max-w-[90rem] xl:max-w-[100rem] h-full max-h-[95vh] sm:h-auto text-white sm:gap-5">
        <div className= {`flex ${isMobile ? 'w-[10vw] mr-4' : 'w-[20vw]'}  border-[1px] border-neutral-700 justify-center rounded-[2rem] overflow-hidden my-4`}>
          <ul className="flex flex-col justify-between box-border w-full items-center bg-neutral-950  rounded-[2rem]">
           {
            isMobile ? (
            
              <button 
              className='h-full flex flex-col justify-center items-center'
              onClick={() => {}}>
              <IoMenu 
              className='rotate-90 text-neutral-400 cursor-pointer'
              width={10}
              height={10}
              />
              
              </button>
            ) 
            : (
              <div className='w-full flex flex-col flex-grow'>
            <li className={`flex justify-center items-center font-bold font-oswald tracking-tighter border-b-[1px] border-neutral-700 text-2xl w-full text-center p-5 h-full cursor-pointer 
             ${activePage === "me" ? 'bg-white text-3xl text-black transition-none' : ''}  `} onClick={() => setActivePage("me")}><p className='transition duration-300 ease-in-out delay-110 hover:scale-125'>What I Do</p></li>
            <li className={`flex justify-center items-center font-bold font-oswald tracking-tighter border-b-[1px] border-neutral-700 text-2xl w-full text-center p-5 h-full cursor-pointer 
             ${activePage === "projects" ? 'bg-white text-3xl text-black transition-none' : ''} `} onClick={() => setActivePage("projects")}><p className='transition duration-300 ease-in-out delay-110 hover:scale-125'>Projects</p></li>
            <li className={`flex justify-center items-center font-bold font-oswald tracking-tighter border-b-[1px] border-neutral-700 text-2xl w-full text-center p-5 h-full cursor-pointer 
             ${activePage === "contact" ? 'bg-white text-3xl text-black transition-none' : ''} `} onClick={() => setActivePage("contact")}><p className='transition duration-300 ease-in-out delay-110 hover:scale-125'>Contact Me</p></li>
            <li className={`flex justify-center items-center font-bold font-oswald tracking-tighter border-b-[1px] border-neutral-700 text-2xl w-full text-center p-5 h-full cursor-pointer 
             ${activePage === "magic" ? 'bg-white text-3xl text-black transition-none' : ''} `} onClick={() => setActivePage("magic")}><p className='transition duration-300 ease-in-out delay-110 hover:scale-125'>Clothing <br /> Brand</p></li> 
              </div>
            )
            
           }

          </ul>
        </div>
        <div className="flex w-full border-[1px] bg-neutral-950 border-neutral-700 justify-center rounded-[2rem] my-4 overflow-y-auto">
          <div className="w-full h-screen  rounded-[2rem] flex flex-col items-center p-6">
            {activePage === "me" && <WhatIDo />}
            {activePage === "projects" && <Projects />}
            {activePage === "contact" && <Contact />}
            {activePage === "magic" && <Magicenvision />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
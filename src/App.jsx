import React, { useState , useEffect, act} from 'react';
import WhatIDo from './components/WhatIDo';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Magicenvision from './components/Magicenvision';
import './index.css';
import { div } from 'motion/react-client';
import { IoMenu } from "react-icons/io5";
import { HiMiniHome } from "react-icons/hi2";
import { FaFolderClosed } from "react-icons/fa6";
import { FaFolderOpen } from "react-icons/fa6";
import { IoMdContact } from "react-icons/io";
import { FaMagic } from "react-icons/fa";



function App() {
  const [activePage, setActivePage] = useState("me");
  const [selected, setIsSelected] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1100);
  
    // Effect hook to handle window resizing
    useEffect(() => {
        const handleResize = () => {
      // ➡️ The condition now sets the state directly
      setIsMobile(window.innerWidth < 1100);
  
      };
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
  

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#060606] p-1">
      <div className="flex  sm:flex-row w-full max-w-xs sm:max-w-3xl xl:max-w-[80rem] 2xl:max-w-[100rem] h-full max-h-[95vh] sm:h-auto text-white gap-3 sm:gap-5">
        <div className= {`flex ${isMobile ? 'w-[15vw]' : 'w-[20vw]'}  border-[1px] border-neutral-700 justify-center rounded-[2rem] overflow-hidden my-4`}>
          <ul className="flex flex-col justify-between box-border w-full items-center bg-neutral-950  rounded-[2rem]">

            <div className='w-full flex flex-col flex-grow'>
            <li className={`flex select-none justify-center items-center font-bold font-oswald tracking-tighter border-b-[1px] border-neutral-700 text-2xl w-full text-center p-0 sm:p-5 h-full cursor-pointer 
             ${activePage === "me" ? 'bg-white text-3xl text-black transition-none' : ''}  `} onClick={() => setActivePage("me")}>

              {isMobile ? 
              (<HiMiniHome size={24}/>)
                
              :
              (<p className='transition duration-300 ease-in-out delay-110 hover:scale-125'>What I Do</p>)
    
              }

            </li>
            <li className={`flex select-none justify-center items-center font-bold font-oswald tracking-tighter border-b-[1px] border-neutral-700 text-2xl w-full text-center p-0 sm:p-5 h-full cursor-pointer 
             ${activePage === "projects" ? 'bg-white text-3xl text-black transition-none' : ''} `} onClick={() => setActivePage("projects")}>

              {isMobile ? 
              (activePage === "projects" ? <FaFolderOpen /> : <FaFolderClosed />)
              
              :
              (<p className='transition duration-300 ease-in-out delay-110 hover:scale-125'>Projects</p>)
    
              }
            </li>
            <li className={`flex select-none justify-center items-center font-bold font-oswald tracking-tighter border-b-[1px] border-neutral-700 text-2xl w-full text-center p-0 sm:p-5 h-full cursor-pointer 
             ${activePage === "contact" ? 'bg-white text-3xl text-black transition-none' : ''} `} onClick={() => setActivePage("contact")}>

               {isMobile ? 
              (<IoMdContact size={24}/>)
                
              :
              (<p className='transition duration-300 ease-in-out delay-110 hover:scale-125'>Contact</p>)
                }
            </li>
              
            <li className={`flex select-none justify-center items-center border-neutral-700 text-2xl w-full text-center p-0 sm:p-5 h-full cursor-pointer 
             ${activePage === "magic" ? 'bg-white  text-black transition-none' : ''} `} onClick={() => setActivePage("magic")}>

              {isMobile ? 
              ( <FaMagic size={24}/> )
                
              :
              (<p className='font-bold font-oswald tracking-tighter transition duration-300 ease-in-out delay-110 hover:scale-125'>Clothing Brand</p>)
                }
            </li> 
            </div>
           

          </ul>
        </div>
        <div className="flex w-full border-[1px] bg-neutral-950 border-neutral-700 justify-center rounded-[2rem] my-4 overflow-x-hidden overflow-y-auto">
          <div className="w-full h-screen  rounded-[2rem] p-6 sm:p-6">
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
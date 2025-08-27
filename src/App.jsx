import React, { useState } from 'react';
import WhatIDo from './components/WhatIDo';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Magicenvision from './components/Magicenvision';
import './index.css';

function App() {
  const [activePage, setActivePage] = useState("me");
  const [selected, setIsSelected] = useState(false)
  return (
    <div className="flex justify-center items-center min-h-screen bg-[#060606] p-1">
      <div className="flex flex-col sm:flex-row w-full max-w-7xl h-full max-h-[95vh] sm:h-auto text-white sm:gap-5">
        <div className="hidden sm:flex sm:w-[20vw] border-red-300 border-[1px] border-neutral-700 justify-center rounded-[2rem] overflow-hidden my-4">
          <ul className="flex flex-col justify-between box-border w-full items-center bg-neutral-950  rounded-[2rem]">
            <li className={`flex justify-center items-center font-bold font-oswald tracking-tighter border-b-[1px] border-neutral-700 text-2xl w-full text-center p-5 h-full cursor-pointer 
             ${activePage === "me" ? 'bg-white text-3xl text-black transition-none' : ''} `} onClick={() => setActivePage("me")}><p className='transition duration-300 ease-in-out delay-110 hover:scale-125'>What I Do</p></li>
            <li className={`flex justify-center items-center font-bold font-oswald tracking-tighter border-b-[1px] border-neutral-700 text-2xl w-full text-center p-5 h-full cursor-pointer 
             ${activePage === "projects" ? 'bg-white text-3xl text-black transition-none' : ''} `} onClick={() => setActivePage("projects")}><p className='transition duration-300 ease-in-out delay-110 hover:scale-125'>Projects</p></li>
            <li className={`flex justify-center items-center font-bold font-oswald tracking-tighter border-b-[1px] border-neutral-700 text-2xl w-full text-center p-5 h-full cursor-pointer 
             ${activePage === "contact" ? 'bg-white text-3xl text-black transition-none' : ''} `} onClick={() => setActivePage("contact")}><p className='transition duration-300 ease-in-out delay-110 hover:scale-125'>Contact Me</p></li>
            <li className={`flex justify-center items-center font-bold font-oswald tracking-tighter border-b-[1px] border-neutral-700 text-2xl w-full text-center p-5 h-full cursor-pointer 
             ${activePage === "magic" ? 'bg-white text-3xl text-black transition-none' : ''} `} onClick={() => setActivePage("magic")}><p className='transition duration-300 ease-in-out delay-110 hover:scale-125'>Clothing <br /> Brand</p></li>
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
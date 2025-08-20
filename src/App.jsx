import React, { useState } from 'react';
import WhatIDo from './components/WhatIDo';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Magicenvision from './components/Magicenvision';
import './index.css';

function App() {
  const [activePage, setActivePage] = useState("magic");

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#060606] p-1">
      <div className="flex flex-col sm:flex-row w-full max-w-7xl h-full max-h-[95vh] sm:h-auto text-white sm:gap-5">
        <div className="hidden sm:flex sm:w-[20vw] border-[1px] border-neutral-700 justify-center rounded-[2rem] my-4">
          <ul className="flex flex-col justify-center box-border w-full items-center bg-neutral-950 p-4 rounded-[2rem]">
            <li className="cursor-pointer " onClick={() => setActivePage("me")}>What I Do</li>
            <li className="cursor-pointer " onClick={() => setActivePage("projects")}><p>Projects</p></li>
            <li className="cursor-pointer " onClick={() => setActivePage("contact")}><p>Contact Me</p></li>
            <li className="cursor-pointer " onClick={() => setActivePage("magic")}><p>Side Hobbies</p></li>
          </ul>
        </div>
        <div className="flex w-full border-[1px] border-neutral-700 justify-center rounded-[2rem] my-4 overflow-y-auto">
          <div className="w-full h-screen bg-neutral-950 rounded-[2rem] flex flex-col items-center">
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
import NavBar from './components/NavBar'
import Hero from './sections/Hero'
import ModelView from './components/ModelView'
import React from 'react'
import { useState, useEffect } from 'react'
import WhatIDo from './components/WhatIDo'
import Contact from './components/Contact'
import Projects from './components/Projects'
import SideHobby from './components/SideHobby'


function App() {
  const [isMobile, setIsMobile] = useState(false)

  // useEffect(() => {
  //   const handleResize = () => {
  //     if(window.innerWidth >= 640) setIsMobile(!isMobile)

  //   window.addEventListener('resize', handleResize);
  //   return () => window.removeEventListener('resize', handleResize);
  //   }
  // }, [isMobile])
  const  [activePage, setActivePage] = useState("me")


  return (
    <>
   <div className={`sm:flex sm:flex-start min-h-screen text-white sm:gap-5 bg-[#060606] sm:pl-4 p-4 `}>
    
    <div className='hidden sm:flex sm:w-[20vw] bg-gradient-to-b from-neutral-600 to-neutral-800 justify-center rounded-[2rem] p-[1px] relative my-4'>
    <ul className='flex flex-col justify-center box-border w-full items-center bg-neutral-950 p-4 rounded-[2rem]'>
       <li className="cursor-pointer " onClick={() => setActivePage("me")}>What I Do</li>
       <li className="cursor-pointer " onClick={() => setActivePage("projects")}><p>Projects</p></li>
       <li className="cursor-pointer " onClick={() => setActivePage("contact")}><p>Contact Me</p></li>
       <li className="cursor-pointer " onClick={() => setActivePage("sidehobby")}><p>Side Hobbies</p></li>
    </ul>
    </div>

    <div className='flex w-full h-screen sm:h-auto sm:w-[80vw] bg-gradient-to-b
     from-neutral-600 to-neutral-800 justify-center rounded-[2rem] p-[1px] sm:my-4 '>
    <div className='w-full h-full bg-neutral-950 rounded-[2rem] p-5'>
     { activePage === "me" && <WhatIDo /> }
     { activePage === "projects" && <Projects /> }
     { activePage === "contact" && <Contact /> }
     { activePage === "sidehobby" && <SideHobby /> }
    </div>
    </div>
   
   </div>
    </>
  )
}

export default App

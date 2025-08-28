import React from "react";
import { motion } from "motion/react";
const WhatIDo = () => {
  return (
    <div className="flex flex-col gap-4">
       <div className="flex flex-nowrap items-center gap-10 h-[230px] w-full border-[1px] bg-[#060606] py-2 px-6 overflow-hidden rounded-[2rem] border-neutral-700 ">
      <div className="rounded-full flex-none  bg-white h-[180px] overflow-hidden w-[180px]">
        <img src="https://placehold.co/180x180" alt="" />
      </div>

      <div className="flex flex-col  h-[200px] p-1">
        <h1
          className="text-xl flex justify-between"
          >
          <motion.span 
          className="text-2xl font-bold italic tracking-tighter"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.4,
            scale: { type: "spring", visualDuration: 0.2, bounce: 0.2 },
          }}
        >
            Hi, My Name is Rj{" "}
          </motion.span>
          <motion.span 
          className="text-2xl font-bold italic"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1, }}
          transition={{
            delay: 0.35,
            duration: 0.4,
            scale: { type: "spring", visualDuration: 0.2, bounce: 0.2 },
          }}
        
          >
            Full Stack Web Enthusiast
          </motion.span>
        </h1>
        <div className="w-full border-t-[1px] my-2" />
        <div />

        <div className="flex flex-col justify-center items-center  ">
          <p className="text-center ">
            {" "}
            I graduated from{" "}
            <span className="font-semibold">George Brown College </span>
            with a degree in{" "}
            <span className="font-semibold">Computer Science</span>
            and have been working as a{" "}
            <span className="font-semibold ">React full-stack developer </span>
            for the past 3 years. I specialize in building modern, responsive,
            and scalable web applications while focusing on clean code and
            user-friendly experiences. I’m passionate about learning new
            technologies, solving complex problems, and turning ideas into
            functional digital products.
          </p>
        </div>
      </div>
      
    </div>
    <div className="flex w-full h-[100dvh] gap-4">
            <div className="border-[1px] border-neutral-700 h-[400px] flex-grow bg-[#060606] rounded-[2rem]">PlaceHolder</div>
            <div className="border-[1px] border-neutral-700 h-[400px] flex-grow bg-[#060606] rounded-[2rem]">PlaceHolder</div>
            <div className="border-[1px] border-neutral-700 h-[400px] flex-grow bg-[#060606] rounded-[2rem]">PlaceHolder</div>
      </div>
      
    </div>
   
  ); 
};

export default WhatIDo;

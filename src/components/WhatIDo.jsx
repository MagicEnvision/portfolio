import React from "react";
import { motion } from "motion/react";
const WhatIDo = () => {
  return (
    <div className="flex flex-col sm:gap-3">
      <div className="flex flex-col flex-grow md:flex-nowrap lg:flex-row p-2 sm:p-5 sm:px-10 justify-center items-center gap-5 lg:gap-10 border-[1px] bg-[#060606] overflow-hidden rounded-[2rem] border-neutral-700 ">
        
        <div className="rounded-full flex-grow flex-shrink-0 bg-white overflow-hidden">
          <img src="https://placehold.co/200x200" alt="" />
        </div>
        <div className="flex flex-col lg:p-5">
          <h1 className="flex flex-col xl:flex-row justify-center sm:justify-between ">
            <motion.span 
             className="text-sm  xl:text-xl font-semibold sm:font-bold leading-4 text-center"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.4,
                scale: { type: "spring", visualDuration: 0.2, bounce: 0.2 },
              }}>
                Hey, My Name's RJ
            </motion.span>
            
            <motion.span
              className="text-sm xl:text-xl font-semibold sm:font-bold leading-4 italic text-center"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 0.35,
                duration: 0.4,
                scale: { type: "spring", visualDuration: 0.2, bounce: 0.2 },
              }}
            >
              Full Stack Web Enthusiast
            </motion.span>
          </h1>
          <div className="w-[90%] sm:w-full mx-auto border-t-[1px] my-[4px]" />

          <div className="flex flex-col justify-center items-center  ">
            <p className="text-center text-xs sm:text-[0.9rem]">
              {" "}
              I graduated from{" "}
              <span className="font-semibold">George Brown College </span>
              with a diploma in{" "}
              <span className="font-semibold">Computer Science{" "} </span>
              and have been working as a{" "}
              <span className="font-semibold ">
                React full-stack developer{" "}
              </span>
              for the past 3 years. I specialize in building modern, responsive,
              and scalable web applications while focusing on clean code and
              user-friendly experiences. <span className="hidden 2xl:inline">
                I’m passionate about learning new
              technologies, solving complex problems, and turning ideas into
              functional digital products.
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="flex gap-3 flex-wrap">
              <div className="bg-[#060606] h-[400px] flex-1 border-[1px] border-neutral-700 rounded-[2rem] p-3 flex justify-center items-center">Placeholder</div>
              <div className="bg-[#060606] h-[400px] flex-1 border-[1px] border-neutral-700 rounded-[2rem] p-3 flex justify-center items-center">Placeholder</div>
              <div className="bg-[#060606] h-[400px] flex-1 border-[1px] border-neutral-700 rounded-[2rem] p-3 flex justify-center items-center">Placeholder</div>
      </div>
      
      {/* <div className="flex flex-wrap w-full h-[100dvh] gap-4">
        <div className="border-[1px] border-neutral-700 w-full md:w-[320px] h-[400px] flex-grow bg-[#060606] rounded-[2rem]">
          PlaceHolder
        </div>
        <div className="border-[1px] border-neutral-700 w-full md:w-[320px] h-[400px] flex-grow bg-[#060606] rounded-[2rem]">
          PlaceHolder
        </div>
        <div className="border-[1px] border-neutral-700 w-full md:w-[320px] h-[400px] flex-grow bg-[#060606] rounded-[2rem]">
          PlaceHolder
        </div>
      </div> */}
    </div>
  );
};

export default WhatIDo;

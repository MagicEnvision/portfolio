import React from "react";

const WhatIDo = () => {
  return (
    <div className="flex flex-nowrap items-center gap-10 w-full border-[1px] bg-[#060606] p-8 overflow-hidden rounded-[2rem] border-neutral-700 ">
      <div className="rounded-full flex-none bg-white h-[200px] overflow-hidden w-[200px]">
        <img src="https://placehold.co/200x200" alt="" />
      </div>

      <div className="flex flex-col  h-[200px] p-1">
        <h1 className="text-xl flex justify-between">
          <span className="text-2xl font-bold italic tracking-tighter">
            Hi, My Name is Rj{" "}
          </span>
          <span className="text-2xl font-bold italic">
            Full Stack Web Enthusiast
          </span>
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
            <span className="font-semibold">React full-stack developer {" "}</span>
            for the past 3 years. I specialize in building modern, responsive,
            and scalable web applications while focusing on clean code and
            user-friendly experiences. I’m passionate about learning new
            technologies, solving complex problems, and turning ideas into
            functional digital products.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;

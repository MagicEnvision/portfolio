import React from "react";
import ModelView from "./ModelView.jsx";
import { motion } from "motion/react"
const MagicEnvision = () => {
  return (
    <div className="flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:grid-rows-5 gap-6 py-5 mx-6 mb-6">
      <ModelView
        className={`sm:m-0 border-[1px] rounded-[2rem] border-neutral-700
           hover:shadow-[0px_0px_5px_0px_#EDEDED] transition-all duration-300 bg-[#060606] col-span-2 row-span-2`}
      />
      <div
        className="border-[1px] rounded-[2rem] flex justify-center items-center flex-col border-neutral-700 
       hover:shadow-[0px_0px_5px_0px_#EDEDED] transition-all duration-300 w-full pb-1 px-1 sm:py-2 sm:px-2  bg-[#060606] col-span-1 row-span-1"
      >
        <h1 className="text-lg tracking-tight text-center font-oswald font-extrabold italic sm:text-xl">
          Magic Envision{" "}
          <span className="text-md tracking-tight sm:text-xl font-light">
            {""}Clothing Brand
          </span>
          <br />
        </h1>
        <div className="border-t-[1px] border-neutral-600 mt-2 w-full" />
        <span className="text-center text-2xl not-italic font-extralight font-oswald ">
          <p className="text-lg tracking-tight px-2">
            {" "}
            In my sparetime i love to create design, create, and manufacture my
            own clothing. Started my sewing journey in 2020 and Ive loved it
            {" "}
          </p>
        </span>
      </div>
      <div
        className="flex justify-center flex-col border-[1px] rounded-[2rem] bg-[#060606]  border-neutral-700 
       hover:shadow-[0px_0px_5px_0px_#EDEDED] transition-all duration-300 w-full"
      >
        <ModelView className={`sm:m-0  col-span-1 row-span-1`} />
      </div>

      <div
        className="border-[1px] rounded-[2rem] flex justify-center items-center flex-col border-neutral-700 
       hover:shadow-[0px_0px_5px_0px_#EDEDED] transition-all duration-300 w-full py-1 px-1 sm:py-2 sm:px-2  col-span-1 row-span-2 bg-[#060606] "
      >
        <h1 className="text-lg  text-center font-oswald font-extrabold italic sm:text-xl ">
          PlaceHolder
        </h1>
      </div>
      <div
        className="border-[1px] rounded-[2rem] flex justify-center items-center flex-col border-neutral-700 
       hover:shadow-[0px_0px_5px_0px_#EDEDED] transition-all duration-300 w-full py-1 px-1 sm:py-2 sm:px-2  col-span-1 row-span-2 bg-[#060606] "
      >
        <h1 className="text-lg  text-center font-oswald font-extrabold italic sm:text-xl ">
          PlaceHolder
        </h1>
      </div>
      <div
        className="border-[1px] rounded-[2rem] flex justify-center items-center flex-col border-neutral-700 
       hover:shadow-[0px_0px_5px_0px_#EDEDED] transition-all duration-300 w-full py-1 px-1 sm:py-2 sm:px-2  col-span-1 row-span-2 bg-[#060606] "
      >
        <h1 className="text-lg  text-center font-oswald font-extrabold italic sm:text-xl ">
          PlaceHolder
        </h1>
      </div>
      <div className="border-[1px] rounded-[2rem] col-span-3 flex justify-center items-center flex-col border-neutral-700 
       hover:shadow-[0px_0px_5px_0px_#EDEDED] transition-all duration-300 w-full py-1 px-1 sm:py-2 sm:px-2 bg-[#060606]">
        <h1 className="text-lg  text-center font-oswald font-extrabold italic sm:text-xl  ">
          PlaceHolder
        </h1>
      </div>
    </div>
  );
};

export default MagicEnvision;

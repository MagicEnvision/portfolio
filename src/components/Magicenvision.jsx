import React from "react";
import ModelView from "./ModelView.jsx";
import { motion } from "motion/react";
const MagicEnvision = () => {
  return (
    <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 grid-rows-4 gap-4 sm:gap-6 py-5 ">
      <ModelView
        className={` w-full border-[1px] rounded-[2rem] border-neutral-700
           hover:shadow-[0px_0px_5px_0px_#EDEDED] transition-all duration-300 bg-[#060606] col-span-1 row-span-1 md:col-span-2 md:row-span-2`}
        model={"magic"}
        minPolarAngle={2}
        maxPolarAngle={1.8}
      />

      <div
        className="border-[1px] rounded-[2rem] flex justify-center items-center flex-col border-neutral-700 
       hover:shadow-[0px_0px_5px_0px_#EDEDED] transition-all duration-300 w-full bg-[#060606] col-span-1 row-span-1 p-4">

        <h1 className="text-md md:text-2xl tracking-tight text-center font-oswald font-extrabold italic ">
          Magic Envision{" "}
          <span className="text-sm md:text-xl tracking-tight font-light">
            {""}Clothing Brand
          </span>
          <br />
        </h1>
        <div className="border-t-[1px] border-neutral-600 my-2 w-full" />
        <p className="text-md md:text-lg leading-4 md:leading-6 font-extralight text-center tracking-tight">
          {" "}
          In my sparetime I love to create design, create, and manufacture my
          own clothing. Started my sewing journey in 2020 and Ive loved it{" "}
        </p>
      </div>

      <div
        className="flex justify-center flex-col border-[1px] rounded-[2rem] bg-[#060606]  border-neutral-700 
       hover:shadow-[0px_0px_5px_0px_#EDEDED] transition-all duration-300 w-full"
      >
        <ModelView
          className={`  p-2 col-span-1 row-span-1`}
          model={"bolts"}
          minPolarAngle={2}
          maxPolarAngle={1.5}
        />
      </div>

      <div
        className="border-[1px] rounded-[2rem] flex justify-center items-center flex-col border-neutral-700 
       hover:shadow-[0px_0px_5px_0px_#EDEDED] transition-all duration-300 w-full col-span-2 row-span-1 lg:col-span-1 bg-[#060606] "
      >
        <h1 className="text-lg  text-center font-oswald font-extrabold italic sm:text-xl ">
          1
        </h1>
      </div>

      <div
        className="border-[1px] rounded-[2rem] flex justify-center items-center flex-col border-neutral-700 
       hover:shadow-[0px_0px_5px_0px_#EDEDED] transition-all duration-300 w-full  col-span-1 row-span-1 lg:col-span-2 bg-[#060606] "
      >
        <h1 className="text-lg  text-center font-oswald font-extrabold italic sm:text-xl ">
          2
        </h1>
      </div>

      <div
        className="border-[1px] rounded-[2rem] flex justify-center items-center flex-col border-neutral-700 
       hover:shadow-[0px_0px_5px_0px_#EDEDED] transition-all duration-300 w-full   col-span-1 row-span-1 lg:col-span-2 bg-[#060606] "
      >
        <h1 className="text-lg  text-center font-oswald font-extrabold italic sm:text-xl ">
          3
        </h1>
      </div>

       <div
        className="border-[1px] rounded-[2rem] flex justify-center items-center flex-col border-neutral-700 
       hover:shadow-[0px_0px_5px_0px_#EDEDED] transition-all duration-300 w-full   col-span-1 row-span-1  bg-[#060606] "
      >
        <h1 className="text-lg  text-center font-oswald font-extrabold italic sm:text-xl ">
          4
        </h1>
      </div>

      <div
        className="border-[1px] rounded-[2rem] lg:hidden flex justify-center items-center flex-col border-neutral-700 
       hover:shadow-[0px_0px_5px_0px_#EDEDED] transition-all duration-300 w-full   col-span-1 row-span-1  bg-[#060606] "
      >
        <h1 className="text-lg  text-center font-oswald font-extrabold italic sm:text-xl ">
          5
        </h1>
      </div>

      {/* 
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
        className="border-[1px] rounded-[2rem] col-span-3 flex justify-center items-center flex-col border-neutral-700 
       hover:shadow-[0px_0px_5px_0px_#EDEDED] transition-all duration-300 w-full py-1 px-1 sm:py-2 sm:px-2 bg-[#060606]"
      >
        <h1 className="text-lg  text-center font-oswald font-extrabold italic sm:text-xl  ">
          PlaceHolder
        </h1>
      </div> */}
    </div>
  );
};

export default MagicEnvision;

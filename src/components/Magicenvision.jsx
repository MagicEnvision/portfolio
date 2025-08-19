import React from "react";
import ModelView from "./ModelView.jsx";

const MagicEnvision = () => {
  return (
    <div className="flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-3  sm:grid-rows-2 gap-6  m-6">
      <ModelView />
      <div
        className="border-[1px] rounded-[2rem]  border-neutral-700 
       hover:shadow-[0px_0px_5px_0px_#EDEDED] transition-all duration-300 w-full">
        <h1 className="text-xl text-center font-oswald font-extrabold italic sm:text-3xl">
          Magic Envision{" "}
          <span className="text-xl font-extralight">{""}Clothing Brand</span>
          <br />
        </h1>
        <div className="border-t-[1px] border-neutral-600 mt-2" />
        <span className="text-center text-2xl not-italic font-extralight font-oswald ">
          <p className="text-lg py-1 px-2 ">
            {" "}
            In my sparetime i love to create design, create, and manufacture my
            own clothing. Started my sewing journey in 2020 and Ive enjoyed it
            ever since.{" "}
          </p>
        </span>
      </div>
        <div
        className="flex justify-center flex-col border-[1px] rounded-[2rem] border-neutral-700 
       hover:shadow-[0px_0px_5px_0px_#EDEDED] transition-all duration-300 w-full">
        <h1 className="text-xl text-center font-oswald font-extrabold italic sm:text-3xl">
          Magic Envision{" "}
          <span className="text-xl font-extralight">{""}Clothing Brand</span>
          <br />
        </h1>
        <div className="border-t-[1px] border-neutral-600 mt-2" />
        <span className="text-center text-2xl not-italic font-extralight font-oswald ">
          <p className="text-lg py-1 px-2 ">
            {" "}
            In my sparetime i love to create design, create, and manufacture my
            own clothing. Started my sewing journey in 2020 and Ive enjoyed it
            ever since.{" "}
          </p>
        </span>
      </div>

      
    </div>
  );
};

export default MagicEnvision;

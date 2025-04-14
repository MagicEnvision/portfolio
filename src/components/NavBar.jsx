import React, { useState } from "react";

const NavBar = () => {
  const [menuToggle, setMenuToggle] = useState(false);

  const handleToggleChange = () => {
    setMenuToggle(!menuToggle);
  };
  return (
    <div>
      <div className="border-[2px] bg-neutral-900 border-neutral-800 w-full flex h-[42px] mt-4 rounded-tl-3xl rounded-bl-md rounded-tr-md rounded-br-3xl  ">
        <div className="container flex  justify-center items-center px-6">
          <h1 className="text-white font-bold tracking-widest">Web Development Portfolio <span className="-tracking-tighter font-thin">by Rj Rose</span></h1>

          {/* <div
            className={`cursor-pointer md:hidden  transform duration-1000 ${
              !menuToggle ? "rotate-90" : "rotate-180"
            }`}
            onClick={handleToggleChange}
          >
            <span className="m-[2px] border-2 border-neutral-500 w-8 h-2 rounded-tl-lg rounded-tr-sm rounded-bl-sm rounded-br-lg"></span>
            <span className="m-[2px] border-2 border-neutral-500 w-8 h-2 rounded-tl-lg rounded-tr-sm rounded-bl-sm rounded-br-lg"></span>
            <span className="m-[2px] border-2 border-neutral-500 w-8 h-2 rounded-tl-lg rounded-tr-sm rounded-bl-sm rounded-br-lg"></span>
          </div>
          <ul
            className={`text-white md:flex ${
              !menuToggle
                ? "hidden"
                : "absolute top-[4rem] flex flex-col gap-3 right-5"
            }`}
          >
            <li className='bg-neutral-900
             border-neutral-800 border-[2px] h-[30px] rounded-tl-3xl 
              rounded-bl-lg rounded-tr-lg rounded-br-3xl hover:shadow
            hover:shadow-neutral-400 flex items-center justify-center px-[12px] mx-4 '>Social</li> 
          </ul> */}
        </div>
      </div>
    </div>
  );
};

export default NavBar;

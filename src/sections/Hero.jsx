const Hero = () => {
  return (
    <>
     <section className="w-full">
     <div className="flex gap-5 flex-col sm:flex-row">
        <div
          className="border-[2px] mt-6 m-auto bg-neutral-900 border-neutral-800 w-[50%] flex h-[400px] 
        rounded-tl-3xl rounded-bl-md rounded-tr-md rounded-br-3xl"
        >
          <div
            className="border-neutral-800 border-b-2 rounded-tl-3xl 
  rounded-tr-md bg-neutral-900 p-4 w-full flex flex-col :"
          >
            <h1 className="text-white text-3xl tracking-tight font-bold">
              Website to View Gaming Leaderboards
            </h1>
            <p className="text-white text-xl">
              Using three.js, gsap.js, react.
            </p>
            <span className="border-neutral-800 border-b-2 w-full pt-3"></span>
          </div>

          
        </div>


        <div
          className="border-[2px] mt-6 m-auto bg-neutral-900 border-neutral-800 w-[50%] flex h-[400px] 
        rounded-tl-3xl rounded-bl-md rounded-tr-md rounded-br-3xl"
        >
          <div
            className="border-neutral-800 border-b-2 rounded-tl-3xl 
  rounded-tr-md bg-neutral-900 p-4 w-full flex flex-col "
          >
            <h1 className="text-white text-3xl tracking-tight font-bold">
              Website to View Gaming Leaderboards
            </h1>
            <p className="text-white text-xl">
              Using three.js, gsap.js, react.
            </p>
            <span className="border-neutral-800 border-b-2 w-full pt-3"></span>
          </div>

          

        </div>
        
        

      </div>
      
     </section>
    </>
  );
};

export default Hero;

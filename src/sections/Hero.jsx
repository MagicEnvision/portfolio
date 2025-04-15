


const Hero = () => {
  const handleMouseMove = (e) => {
    e.currentTarget.play()
  }
  
  const handleMouseLeave = (e) => {
    e.currentTarget.pause()
  }

  return (
    <>
     <section className="w-full">
     <div className="flex gap-5 flex-col w-full justify-center mt-5 flex-grow sm:flex-row">
      
     <div className="border-[2px]  md:w-[50vw] bg-neutral-900 border-neutral-800 md:hover:translate-x-[-5%] md:hover:translate-y-[5%]  transition ease-in-out m-auto delay-250 flex  h-[500px] 
        rounded-tl-3xl rounded-bl-md rounded-tr-md rounded-br-3xl">

          <div className="p-4 w-full flex flex-col overflow-hidden">
            <h1 className="text-white text-3xl tracking-tight font-bold">
              Awwards Winning Website</h1>

            <p className="text-white text-xl">
              Using three.js, gsap.js, react.</p>
            <span className="border-neutral-800 border-b-2 w-full my-5 "/>
  
            <video
            className="rounded-tl-3xl rounded-bl-md rounded-tr-md rounded-br-3xl border-neutral-800 border-[2px]" 
            src="/1.mkv"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            muted/>



       
          </div>
        </div>

        <div className="border-[2px]  md:w-[50vw] bg-neutral-900 border-neutral-800  flex h-[500px] 
        rounded-tl-3xl rounded-bl-md rounded-tr-md rounded-br-3xl">

          <div className="p-4 w-full flex flex-col overflow-hidden">
            <h1 className="text-white text-3xl tracking-tight font-bold">
              Apple iPhone Website Clone </h1>

            <p className="text-white text-xl">
              Using three.js, gsap.js, react.</p>
            <span className="border-neutral-800 border-b-2 w-full my-5 "/>
  
            <video
            className="rounded-tl-3xl rounded-bl-md rounded-tr-md rounded-br-3xl border-neutral-800 border-[2px]" 
            src="/2.mkv" 
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            muted/>

       



       
          </div>
        </div>



        

      </div>
      
     </section>
    </>
  );
};

export default Hero;

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import Lenis from "lenis";
import * as THREE from 'three'
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(useGSAP, ScrollTrigger);



const Hero = () => {
  
  const handleMouseMove = (e) => {
    e.currentTarget.play()
  }

  const handleMouseLeave = (e) => {
    e.currentTarget.pause()
  }

 // Initialize Lenis
const lenis = new Lenis();
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

let tl = gsap.timeline({
  scrollTrigger: {
    trigger: '#firstRow',
    start:'top top' ,
    end: 'bottom bottom',
    scrub: true,
    markers:true
  }

})

  useGSAP(() => {
    tl.to('#firstRow', {
      x:800
    })
    tl.to('#secondRow', {
      
      x:-800
    })
  });

  const scene = new THREE.Scene();
  const camera = THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight, 0.1 , 1000)
  return (
    <section className="w-full overflow-x">

      <div className="flex gap-5 flex-wrap sm:flex-nowrap justify-center" id="firstRow">
        {[
          { title: "Awwards Winning Website", src: "/1.mkv", subTitle: "Using three.js, gsap.js, react." },
          { title: "Apple iPhone Website Clone", src: "/2.mkv", subTitle: "Using three.js, gsap.js, react."}
        ].map((card, idx) => (
          <div
            key={idx}
            className="w-full md:w-1/2 border-2 cursor-pointer hover:focus-visible: bg-neutral-900 border-neutral-800 hover:scale-95 hover:z-10 transform transition duration-300 ease-in-out h-[500px] rounded-tl-3xl rounded-bl-md rounded-tr-md rounded-br-3xl"
          >
            <div className="p-4 w-full h-full flex flex-col overflow-hidden">
              <h1 className="text-white text-3xl tracking-tight font-bold">
                {card.title}
              </h1>
              <p className="text-white text-xl">{card.subTitle}</p>
              <span className="border-neutral-800 border-b-2 w-full my-5" />

              <video
                className="rounded-tl-3xl rounded-bl-md rounded-tr-md rounded-br-3xl border-neutral-800 border-[2px] w-full h-full object-cover"
                src={card.src}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                muted
              />
            </div>
          </div>
        ))}
      </div>
      <div className="flex gap-5 mt-6 justify-center" id="secondRow">
        {[
          { title: "Awwards Winning Website", src: "/1.mkv", subTitle: "Using three.js, gsap.js, react." },
          { title: "Apple iPhone Website Clone", src: "/2.mkv", subTitle: "Using three.js, gsap.js, react."}
        ].map((card, idx) => (
          <div
            key={idx}
            className="w-full md:w-1/2 border-2 cursor-pointer hover:focus-visible: bg-neutral-900 border-neutral-800 hover:scale-95 hover:z-10 transform transition duration-300 ease-in-out h-[500px] rounded-tl-3xl rounded-bl-md rounded-tr-md rounded-br-3xl"
          >
            <div className="p-4 w-full h-full flex flex-col overflow-hidden">
              <h1 className="text-white text-3xl tracking-tight font-bold">
                {card.title}
              </h1>
              <p className="text-white text-xl">{card.subTitle}</p>
              <span className="border-neutral-800 border-b-2 w-full my-5" />

              <video
                className="rounded-tl-3xl rounded-bl-md rounded-tr-md rounded-br-3xl border-neutral-800 border-[2px] w-full h-full object-cover"
                src={card.src}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                muted
              />
            </div>
          </div>
        ))}
      </div>
        <div className="w-full border-2 border-red-600 h-[100px]"></div>
    </section>
    
  );
};

export default Hero;

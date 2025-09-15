import React from 'react';

const Contact = () => {
  return (
    <div className="w-full flex flex-wrap sm:grid sm:grid-cols-2 sm:grid-rows-2 gap-4 h-[100dvh] rounded-[2rem] text-white  sm:p-8">
      {/* Introduction */}
      <div className='border-[1px] border-neutral-700 rounded-[2rem]  hover:shadow-[0px_0px_5px_0px_#EDEDED] transition-all duration-300 bg-[#060606] p-4 sm:p-8 flex flex-col justify-center'>
        <h1 className='text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-oswald font-bold tracking-tighter mb-4'>
          All The Ways You Can Reach Me
        </h1>
        <p className='text-sm lg:text-md xl:text-lg text-neutral-400'>
          Whether you're looking to collaborate, hire, or just say hello, I'd love to hear from you. My inbox is always open, and I'm active across various social platforms.
        </p>
      </div>

      {/* Location */}
      <div className='border-[1px] border-neutral-700 rounded-[2rem]  hover:shadow-[0px_0px_5px_0px_#EDEDED] transition-all duration-300 bg-[#060606] p-4 sm:p-8 flex flex-col justify-center'>
        <h1 className='text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-oswald font-bold tracking-tighter mb-4'>
          Location
        </h1>
        <p className='text-sm lg:text-md xl:text-lg text-neutral-400'>
          Currently based in Toronto, Canada, but available for remote work globally. I'm always open to new opportunities and projects, no matter where you are.
        </p>
      </div>

      {/* Social Media */}
      <div className='border-[1px] border-neutral-700 rounded-[2rem]  hover:shadow-[0px_0px_5px_0px_#EDEDED] transition-all duration-300 bg-[#060606] p-4 sm:p-8 flex flex-col justify-center'>
        <h1 className='text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-oswald font-bold tracking-tighter mb-4'>
          Socials
        </h1>
        <ul className='text-s lg:text-md  text-neutral-400 space-y-2'>
          <li><a href="https://github.com/MagicEnvision" className="hover:text-teal-500 text-sm lg:text-md xl:text-lg transition-colors">GitHub: /github/MagicEnvision</a></li>
          <li><a href="https://www.instagram.com/mr.magician_/" className="hover:text-pink-500 text-sm lg:text-md xl:text-lg  transition-colors">Instagram: /mr.magician_</a></li>
          <li><a href="https://x.com/magicenvision" className="hover:text-blue-500 text-sm lg:text-md xl:text-lg transition-colors">Twitter: /magicenvision</a></li>
        </ul>
      </div>

      {/* Email and Phone */}
      <div className='border-[1px] border-neutral-700 rounded-[2rem]  hover:shadow-[0px_0px_5px_0px_#EDEDED] transition-all duration-300 bg-[#060606] p-4 flex flex-1 flex-col justify-center'>
        <h1 className='text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-oswald font-bold tracking-tighter mb-4'>
          Email and Phone Number
        </h1>
        <p className='text-sm lg:text-md text-neutral-400'>
          <span className="text-sm lg:text-md xl:text-lg block mb-2">Email: <a href="mailto:your.email@example.com" className="hover:text-orange-400 transition-colors">rjrose2003@gmail.com</a></span>
          <span className='text-sm lg:text-md xl:text-lg'>Phone: <a href="tel:+11234567890" className="hover:text-green-400 transition-colors">+1(647) 224-5530</a></span>
        </p>
      </div>
    </div>
  );
};

export default Contact;
import React, {useState} from 'react'

const NavBar = () => {
    const [menuToggle, setMenuToggle] = useState(false)

    const handleToggleChange = () => {
        setMenuToggle(!menuToggle)
    }
    return (
        <div >
            <div className='border-[2px] bg-neutral-900 border-neutral-800 w-full flex h-[42px] mt-4 rounded-tl-3xl rounded-bl-md rounded-tr-md rounded-br-3xl  '>
                <div className="container flex  justify-between items-center px-6">
                    <h1 className='text-white'>Rj Rose</h1>
                    <ul className={`text-white md:flex ${menuToggle ? "hidden" : ""}`}>
                        <li className='bg-neutral-900
             border-neutral-800 border-[2px] h-[25px] rounded-tl-2xl 
              rounded-bl-md rounded-tr-md rounded-br-2xl hover:shadow
            hover:shadow-neutral-400 flex items-center justify-center px-[12px] py-[4px] mx-4 '>Social</li>
                        <li className='bg-neutral-900
             border-neutral-800 border-[2px]  h-[25px] rounded-tl-2xl 
              rounded-bl-md rounded-tr-md rounded-br-2xl hover:shadow
            hover:shadow-neutral-400 flex items-center justify-center px-[12px] py-[4px] mx-4 '>Projects</li>
                        <li className='bg-neutral-900
             border-neutral-800 border-[2px] h-[25px] rounded-tl-2xl 
              rounded-bl-md rounded-tr-md rounded-br-2xl hover:shadow
            hover:shadow-neutral-400 flex items-center justify-center px-[12px] py-[4px] mx-4 '>Resume</li>
                        <li className='bg-neutral-900
             border-neutral-800 border-[2px] h-[25px] rounded-tl-2xl 
              rounded-bl-md rounded-tr-md rounded-br-2xl hover:shadow
            hover:shadow-neutral-400 flex items-center justify-center px-[12px] py-[4px] mx-4'>About Me</li>
                    </ul>
                <div className={`cursor-pointer md:hidden transform duration-1000 ${menuToggle ? "rotate-90" : "rotate-180"}`} onClick={handleToggleChange} >
                    <span className='m-[2px] border-2 border-neutral-500 w-8 h-2 rounded-tl-lg rounded-tr-sm rounded-bl-sm rounded-br-lg'></span>
                    <span className='m-[2px] border-2 border-neutral-500 w-8 h-2 rounded-tl-lg rounded-tr-sm rounded-bl-sm rounded-br-lg'></span>
                    <span className='m-[2px] border-2 border-neutral-500 w-8 h-2 rounded-tl-lg rounded-tr-sm rounded-bl-sm rounded-br-lg'></span>
                    </div>

                </div>
            </div>
            <div className='absolute top-[75px] left-[150px] bg-neutral-900
             border-neutral-800 border-[2px] w-[55px] h-[25px] rounded-tl-2xl 
             p-2 rounded-bl-md rounded-tr-md rounded-br-2xl hover:shadow
            hover:shadow-neutral-400'></div>

        </div>
    )
}

export default NavBar
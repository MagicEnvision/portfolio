import React from 'react'

const NavBar = () => {
    return (
        <div >
            <div className='border-[2px] bg-neutral-900 border-neutral-800 w-full flex h-[35px] mt-4 rounded-tl-3xl rounded-bl-md rounded-tr-md rounded-br-3xl  hover:shadow hover:shadow-neutral-400'>
                <div className="container flex  justify-between items-center px-4">
                    <h1 className='text-white'>Rj Rose</h1>
                    <ul className='text-white hidden md:flex'>
                        <li className='mx-4'>About me </li>|
                        <li className='mx-4'>Who am I</li>|
                        <li className='mx-4'>Why chose me</li>
                    </ul>
                </div>
            </div>
            <div className='absolute top-[75px] left-[150px] bg-neutral-900 border-neutral-800 border-[2px] w-[55px] h-[25px] rounded-tl-2xl p-2 rounded-bl-md rounded-tr-md rounded-br-2xl hover:shadow hover:shadow-neutral-400'></div>
            <div className='absolute top-[60px] left-[250px] bg-neutral-900 border-neutral-800 border-[2px] w-[85px] h-[25px] rounded-tl-2xl p-2 rounded-bl-md rounded-tr-md rounded-br-2xl hover:shadow hover:shadow-neutral-400'></div>
            <div className='absolute top-[80px] right-[250px] bg-neutral-900 border-neutral-800 border-[2px] w-[120px] h-[25px] rounded-tl-2xl p-2 rounded-bl-md rounded-tr-md rounded-br-2xl hover:shadow hover:shadow-neutral-400'></div>
            
            <div className='absolute top-[90px] left-[350px] bg-neutral-900 border-neutral-800 border-[2px] w-[55px] h-[25px] rounded-tl-2xl p-2 rounded-bl-md rounded-tr-md rounded-br-2xl hover:shadow hover:shadow-neutral-400'></div>
            <div className='absolute top-[70px] left-[500px] bg-neutral-900 border-neutral-800 border-[2px] w-[85px] h-[25px] rounded-tl-2xl p-2 rounded-bl-md rounded-tr-md rounded-br-2xl hover:shadow hover:shadow-neutral-400'></div>
            <div className='absolute top-[70px] right-[550px] bg-neutral-900 border-neutral-800 border-[2px] w-[220px] h-[25px] rounded-tl-2xl p-2 rounded-bl-md rounded-tr-md rounded-br-2xl hover:shadow hover:shadow-neutral-400'></div>

        </div>
    )
}

export default NavBar
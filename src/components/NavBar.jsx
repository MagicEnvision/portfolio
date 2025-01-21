import React from 'react'

const NavBar = () => {
  return (
    <div className='border-2 bg-neutral-800 border-zinc-700 w-full flex h-10 mt-2 rounded-tl-3xl rounded-bl-md rounded-tr-md rounded-br-3xl hover:shadow hover:shadow-slate-400'>
        <div className="container flex  justify-between items-center px-2">
            <h1 className='text-white'>Rj Rose</h1>
            
            <ul className='text-white hidden  md:flex'>
                <li className='mx-4'>About me </li>|
                <li className='mx-4'>Who am I</li>|
                <li className='mx-4'>Why chose me</li>
            </ul>
        </div>

    </div>
  )
}

export default NavBar
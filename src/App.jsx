import NavBar from './components/NavBar'
import Hero from './sections/Hero'
import ModelView from './components/ModelView'
function App() {

  return (
    <>
   <div className='flex flex-start h-[100dvh] justify-between align-center text-white  gap-5 bg-neutral-800 pl-4 '>

    <div className='flex flex-grow-[1] bg-gradient-to-b from-neutral-600 to-neutral-800 justify-center rounded-[2rem] p-[1px] relatiive my-4'>
    <ul className='flex flex-col justify-center box-border w-full items-center bg-neutral-950 p-4 rounded-[2rem]'>
      <li className=''><p>hellow</p></li>
       <li><p>hellow</p></li>
        <li><p>hellow</p></li>
         <li><p>hellow</p></li>
          <li><p>hellow</p></li>
      
    </ul>
    </div>

    <div className='flex flex-grow-[7] bg-gradient-to-b from-neutral-600 to-neutral-800 justify-center rounded-[2rem] p-[1px] relatiive mt-6 mb-6 mr-6'>
    <div className='w-full bg-neutral-950 rounded-[2rem] box-border'>

    </div>
    </div>
   
   </div>
    </>
  )
}

export default App

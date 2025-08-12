import NavBar from './components/NavBar'
import Hero from './sections/Hero'
import ModelView from './components/ModelView'
function App() {

  return (
    <>
   <div className='flex flex-start h-[100dvh] justify-between align-center text-white  gap-5 te bg-neutral-950 p-10'>

    <div className='flex flex-grow-[1] border-2 border-white rounded-[3rem]'>
    Section 1
    </div>

    <div className='flex flex-grow-[7] border-2 border-white rounded-[3rem]'>
Section 2
    </div>
   
   </div>
    </>
  )
}

export default App

import NavBar from './components/NavBar'
import Hero from './sections/Hero'
import ModelView from './sections/ModelView'
function App() {

  return (
    <>
   <div className='flex flex-start h-full justify-center bg-neutral-950 pb-[1000px] px-4'>
    <div className=''>
    <NavBar /> 
    <Hero /> 
    <ModelView />
    </div>
   </div>
    </>
  )
}

export default App

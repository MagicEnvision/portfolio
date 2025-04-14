import NavBar from './components/NavBar'
import Hero from './sections/Hero'
function App() {

  return (
    <>
   <div className='flex flex-start h-[1000px] justify-center bg-neutral-950 px-4'>
    <div className='container'>
    <NavBar /> 
    <Hero /> 
    </div>
   </div>
    </>
  )
}

export default App

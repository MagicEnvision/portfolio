import React from 'react'
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls } from '@react-three/drei'
import Magic from './Magic'
import { useState } from 'react'


const ModelView = ({navClick}) => {
  
  const [autoRotate, setAutoRotate] = useState(true);

  const handlePointerDown = () => {
    setAutoRotate(false); // Disable auto-rotate on user interaction
  };

  const handlePointerUp = () => {
    // You can re-enable auto-rotate here after a short delay
    // to allow the user to finish their action.
    setTimeout(() => {
      setAutoRotate(true);
    }, 5000); // Re-enable after 5 seconds of no interaction
  };  

  return (
    <div className={`${navClick} h-[500px] w-[500px]  `}>
      <Canvas  >
        <ambientLight intensity={0.5} /> 

        <Suspense fallback={null}>
          <Magic />
          <Environment preset="studio" />
        </Suspense> 

        <OrbitControls
          autoRotate // This is the key change for automatic rotation
          enableDamping
          autoRotateSpeed={3}
          dampingFactor={0.05}
          enableZoom={false}
          target={[0, 0, 0]} 
        
          onPointerDown={handlePointerDown} // Listen for user input
          onPointerUp={handlePointerUp}   // Listen for user input
        />
      </Canvas>
    </div>
  )
}

export default ModelView
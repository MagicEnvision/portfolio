import React from 'react'
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls, Stage } from '@react-three/drei'
import Magic from './Magic'
import { useState, useEffect} from 'react'
import Bolts from './Bolts'


const ModelView = ({className , model, minPolarAngle, maxPolarAngle, fov }) => {
  
  const [autoRotate, setAutoRotate] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1100);

  // Effect hook to handle window resizing
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1100);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handlePointerDown = () => {
    setAutoRotate(false); // Disable auto-rotate on user interaction
  };

  const handlePointerUp = () => {
    // You can re-enable auto-rotate here after a short delay
    // to allow the user to finish their action.
    setTimeout(() => {
      setAutoRotate(true);
    }, 5000); 
  };  
   const modelList = {
    magic: <Magic />,
    bolts: <Bolts /> 
   }
  
  return (
    <div className={className }>
      <Canvas shadows dpr={[1, 4]}  camera={{fov: 50}}>
   
        <Suspense fallback={null}>
           <Stage  preset="portrait" intensity={1}  environment="studio" adjustCamera={isMobile}>
            {modelList[model]}
           </Stage>
              <pointLight position={[10, 10, 10]} intensity={1.5} castShadow />

        <directionalLight position={[5, 5, 5]} intensity={1} castShadow />
        <ambientLight position={[1,0,0]} intensity={5} /> 
        </Suspense> 

        <OrbitControls
          autoRotate // This is the key change for automatic rotation
          enableDamping
          autoRotateSpeed={3}
          dampingFactor={0.05}
          enableZoom={false}
          minPolarAngle={Math.PI / minPolarAngle}
          maxPolarAngle={Math.PI / maxPolarAngle}
          minAzimuthAngle={Math.PI / 4}
          maxAzimuthAngle={Math}
        
          onPointerDown={handlePointerDown} // Listen for user input
          onPointerUp={handlePointerUp}   // Listen for user input
        />
      </Canvas>
    </div>
  )
}

export default ModelView
import React from 'react'
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls } from '@react-three/drei'
import Magic from './Magic'


const ModelView = () => {
  return (
    <div className=" h-[60dvh] pt-5">
        
    <Canvas  
     camera={{ position: [0, -2, 4], fov: 120 }}
    >
        <ambientLight intensity={1}/>
           <OrbitControls enableZoom={false}
              minPolarAngle={Math.PI / -3} // tilt limit (down)
              maxPolarAngle={Math.PI / 0} // tilt limit (up)
             minAzimuthAngle={-Math.PI / 14} // horizontal left limit
             maxAzimuthAngle={Math.PI / 14}  // horizontal right limit
             />
          <Suspense fallback={null}>
            <Magic />
          </Suspense>
          <Environment preset='dawn'/>
        </Canvas>

    </div>
  )
}

export default ModelView
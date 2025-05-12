import React from 'react'
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls } from '@react-three/drei'
import Magic from './Magic'


const ModelView = () => {
  return (
    <div className="h-[60dvh] pt-5">
      <Canvas camera={{ position: [0, -4, 5], fov: 95 }}>
         <ambientLight intensity={0.5} /> 

        <directionalLight
          position={[-5, 2, 12]} // coming from top-right-front
          intensity={10}
          
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />

        <Suspense fallback={null}>
          <Magic />
          <Environment preset="apartment" />
        </Suspense>

        <OrbitControls
          enableZoom={false}
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 1.7}
          minAzimuthAngle={-Math.PI / 18}
          maxAzimuthAngle={Math.PI / 20}
        />
      </Canvas>
    </div>
  )
}

export default ModelView
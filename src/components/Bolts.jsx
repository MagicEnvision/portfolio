import React, { useRef } from "react"
import { useGLTF } from "@react-three/drei"
import  * as THREE from 'three'

export default function Model(props) {
  const { nodes, materials } = useGLTF("/bolts.glb");
  return (
    <group {...props} scale={1} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.path1.geometry}
        // material={materials['SVGMat.001']}
        material={new THREE.MeshStandardMaterial({ color: "#363636" })} // slate grey
        rotation={[Math.PI / 2, 0, 0]}
        scale={[17, 1, 17]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.path2.geometry}
        // material={materials['SVGMat.002']}
        material={new THREE.MeshStandardMaterial({ color: "#363636" })} // slate grey
        rotation={[Math.PI / 2, 0, 0]}
         scale={[17, 1, 17]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.path3.geometry}
        // material={materials['SVGMat.003']}
        material={new THREE.MeshStandardMaterial({ color: "#363636" })} // slate grey
        rotation={[Math.PI / 2, 0, 0]}
         scale={[17, 1, 17]}
      />
    </group>
  );
}

useGLTF.preload("/bolts.glb")

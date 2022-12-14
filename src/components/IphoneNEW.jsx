/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

export default function Model({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF('/iphoneNEW.glb');
  useFrame(()=>{
    return group.current.rotation.y += 0.01;
  });
  return (
    <group ref={group} {...props} dispose={null} scale={20}>
      <mesh geometry={nodes.Body.geometry} material={materials['Material.001']} rotation={[Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Glass.geometry} material={materials['Material.003']} />
      </mesh>
    </group>
  )
}

useGLTF.preload('/iphoneNEW.glb')

/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 razzguy.glb 
*/

import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/razzguy.glb')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <primitive object={nodes.mixamorig9Hips} />
          <group name="Ch06">
            <skinnedMesh name="Mesh009" geometry={nodes.Mesh009.geometry} material={materials.Ch06_body} skeleton={nodes.Mesh009.skeleton} />
            <skinnedMesh name="Mesh009_1" geometry={nodes.Mesh009_1.geometry} material={materials.Ch06_eyelashes} skeleton={nodes.Mesh009_1.skeleton} />
            <skinnedMesh name="Mesh009_2" geometry={nodes.Mesh009_2.geometry} material={materials.Ch06_body1} skeleton={nodes.Mesh009_2.skeleton} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/razzguy.glb')

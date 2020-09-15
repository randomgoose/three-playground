import React, { useRef, useState, useEffect } from "react";
import { useThree, useFrame } from "react-three-fiber";
import * as THREE from "three";
import "./App.css";
import { softShadows, useSubdivision, RoundedBox } from "drei";
import { useBox, usePlane } from "use-cannon";

const App = ({ pos, setPos }) => {
  softShadows();

  const { clock, scene } = useThree();
  const [ref, api] = useBox(() => ({ mass: 1 }))
  const [planeRef] = usePlane(() => ({ mass: 0, rotation: [-Math.PI / 3, 0, 0], position: [0, -0.5, 0] }))

  useFrame((state, delta) => {
    const radian = Math.PI / 180 * clock.getElapsedTime() * 10;

    console.log(Math.sin(radian), Math.cos(radian))
    setPos([
      Math.sin(radian) * 10,
      pos[1],
      Math.cos(radian) * 10
    ])
  });

  return (
    <group position={[0, -3.5, 0]}>

      <mesh receiveShadow castShadow>
        <RoundedBox
          ref={ref}
          args={[1, 1, 1]}  // Width, Height and Depth of the box
          radius={0.1}     // Border-Radius of the box
          smoothness={4}    // Optional, number of subdivisions
          castShadow
          receiveShadow
        >
          <meshPhongMaterial attach="material" transparent={.2} refractionRatio={.98} />
        </RoundedBox>
      </mesh>

      <mesh receiveShadow castShadow position={[.2, 1, 0]}>
        <RoundedBox
          args={[1, 1, 1]}  // Width, Height and Depth of the box
          radius={0.1}     // Border-Radius of the box
          smoothness={4}    // Optional, number of subdivisions
          castShadow
          receiveShadow
        >
          <meshPhongMaterial attach="material" color="blue" />
        </RoundedBox>
        <meshPhongMaterial attach="material" />
      </mesh>

      <mesh receiveShadow castShadow position={[1.2, 0, 0]}>
        <RoundedBox
          args={[1, 1, 1]}  // Width, Height and Depth of the box
          radius={0.1}     // Border-Radius of the box
          smoothness={4}    // Optional, number of subdivisions
          castShadow
          receiveShadow
        >
          <meshPhongMaterial attach="material" color="#ffe400" />
        </RoundedBox>
      </mesh>

      <mesh ref={planeRef} rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]} receiveShadow>
        <planeBufferGeometry attach="geometry" args={[10, 10]} />
        <meshPhongMaterial attach="material" color="red" />
      </mesh>
    </group>
  );
};

export default App;

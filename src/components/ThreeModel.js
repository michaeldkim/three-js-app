// components/ThreeModel.js
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Edges } from '@react-three/drei';

const Box = (props) => {
  const mesh = useRef();

  useFrame(() => {
    mesh.current.rotation.x += 0.01;
    mesh.current.rotation.y += 0.01;
  });

  const scale = 3;

  return (
    <mesh {...props} ref={mesh} scale={scale}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={'orange'} />
      <Edges scale={1.1} threshold={15} color="black" />
    </mesh>
  );
};

const ThreeModel = () => {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <Box position={[0, 0, 0]} />
      <OrbitControls />
    </Canvas>
  );
};

export default ThreeModel;
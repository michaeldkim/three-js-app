import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

const HumanModel = () => {
  const { scene } = useGLTF('/MaleCharBaseMesh.glb');

  const scaleValue = 2;

  return <primitive object={scene} scale={scaleValue} />; 
};

const ThreeModel = () => {
  return (
<Canvas className="model">
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <HumanModel />
      <OrbitControls />
    </Canvas>
  );
};

export default ThreeModel;
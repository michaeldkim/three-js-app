import React, { useEffect, useState } from 'react';
import ThreeModel  from './ThreeModel';

const WebGLCheck = () => {
  const [webGLSupported, setWebGLSupported] = useState(true);

  useEffect(() => {
    // Function to check WebGL support
    function isWebGLAvailable() {
      try {
        const canvas = document.createElement('canvas');
        return !!(window.WebGLRenderingContext && (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')));
      } catch (e) {
        return false;
      }
    }

    // Check WebGL support and update state accordingly
    setWebGLSupported(isWebGLAvailable());
  }, []);

  if (!webGLSupported) {
    return <div>Your browser does not support WebGL, which is needed to run this application.</div>;
  }

  // Your main 3D content component here (e.g., Three.js canvas)
  return <ThreeModel />;
};

export default WebGLCheck;

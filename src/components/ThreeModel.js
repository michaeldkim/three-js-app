import React, { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { Text, Sphere, OrbitControls } from '@react-three/drei';
import Papa from 'papaparse';

// Define a color map to translate color names to hexadecimal codes
const colorMap = {
  black: '#000000',
  green: '#008000',
  taupe: '#483C32',
  gray: '#808080',
  white: '#FFFFFF',
  navy: '#000080',
  blue: '#0000FF',

  // Add more colors as needed
};

const ThreeModel = () => {
  const [dataPoints, setDataPoints] = useState([]);

  useEffect(() => {
    const fetchDataPoints = () => {
      Papa.parse('modified_augmented_ssense_dataset.csv', {
        download: true,
        header: true,
        complete: (results) => {
          const first10Data = results.data.slice(0, 200);

          const scaleValue = (value, scaleFactor) => (value - scaleFactor.min) / (scaleFactor.max - scaleFactor.min);

          // Determine suitable scale factors based on your data ranges
          const scaleFactor = {
            x: { min: 400, max: Math.max(...first10Data.map(item => parseFloat(item.brand_encoded))) },
            y: { min: 400, max: Math.max(...first10Data.map(item => parseFloat(item.price_usd))) },
            z: { min: 350, max: Math.max(...first10Data.map(item => parseFloat(item.clothing_category_encoded))) }
          };

          const parsedData = first10Data.map((item) => {
            const scaledX = scaleValue(parseFloat(item.brand_encoded), scaleFactor.x);
            const scaledY = scaleValue(parseFloat(item.price_usd), scaleFactor.y);
            /* const scaledZ = scaleValue(parseFloat(item.clothing_category_encoded), scaleFactor.z); */

            // Assuming 'Colors' is the correct column name and it's not empty
            const firstColorName = item.colors && item.colors !== "" ? item.colors.split(',')[0].trim().toLowerCase() : 'defaultColor';
            console.log(`Processing color: ${firstColorName}`); // Debugging log

            const colorCode = colorMap[firstColorName] || 'red';  // Default fallback color
            console.log(`Assigned color code: ${colorCode}`); // Debugging log

            return {
              position: [item.clothing_category_encoded / 30, scaledY, scaledX],
              name: (item.clothing_category),
              color: colorCode  // Use the color code from the map
            };
          });

          setDataPoints(parsedData);
        }
      });
    };

    fetchDataPoints();
  }, []);

  console.log(dataPoints)

  return (
    <Canvas style={{ width: '100vw', height: '30vh' }}>
      {dataPoints.map((point, index) => (
        <group key={index}>
          <Sphere args={[0.025, 16, 16]} position={point.position}>
            <meshStandardMaterial attach="material" color={point.color} />
          </Sphere>
          <Text
            position={[point.position[0] + 0.05, point.position[1], point.position[2]]} // Add 0.2 (or any desired offset) to the x coordinate
            color="white"
            anchorX="left"
            anchorY="middle"
            fontSize={0.05}
          >
            {point.name}
          </Text>
        </group>
      ))}
      <OrbitControls target={[3, 0, 0]} />
    </Canvas>
  );
};

export default ThreeModel;

"use client";

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, Line, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

function NetworkGroup() {
  const groupRef = useRef<THREE.Group>(null);

  // Generate random nodes
  const { nodes, lines } = useMemo(() => {
    const numNodes = 40;
    const maxDistance = 4;
    const nodesArray: THREE.Vector3[] = [];
    const linesArray: [THREE.Vector3, THREE.Vector3][] = [];

    // Create random nodes
    for (let i = 0; i < numNodes; i++) {
      const x = (Math.random() - 0.5) * 10;
      const y = (Math.random() - 0.5) * 10;
      const z = (Math.random() - 0.5) * 10;
      nodesArray.push(new THREE.Vector3(x, y, z));
    }

    // Connect nodes that are close to each other
    for (let i = 0; i < numNodes; i++) {
      for (let j = i + 1; j < numNodes; j++) {
        if (nodesArray[i].distanceTo(nodesArray[j]) < maxDistance) {
          linesArray.push([nodesArray[i], nodesArray[j]]);
        }
      }
    }

    return { nodes: nodesArray, lines: linesArray };
  }, []);

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.1;
      groupRef.current.rotation.x += delta * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Draw lines connecting nodes */}
      {lines.map((line, idx) => (
        <Line
          key={`line-${idx}`}
          points={[line[0].toArray(), line[1].toArray()]}
          color="#a855f7" // Purple-ish
          lineWidth={1}
          transparent
          opacity={0.3}
        />
      ))}

      {/* Draw nodes */}
      {nodes.map((node, idx) => (
        <Sphere key={`node-${idx}`} position={node} args={[0.1, 16, 16]}>
          <meshStandardMaterial color="#22d3ee" emissive="#06b6d4" emissiveIntensity={0.5} />
        </Sphere>
      ))}
    </group>
  );
}

export function NeuralNetwork3D() {
  return (
    <div className="w-full h-full relative min-h-[300px]">
      <div className="absolute inset-0 z-10 pointer-events-none p-6 flex flex-col justify-end">
        <h2 className="text-2xl font-bold text-white drop-shadow-md">AI / Backend Systems</h2>
        <p className="text-gray-300 drop-shadow-sm">Building scalable architectures and intelligent solutions.</p>
      </div>
      <Canvas camera={{ position: [0, 0, 15], fov: 60 }}>
        <ambientLight intensity={0.2} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#22d3ee" />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#a855f7" />
        <NetworkGroup />
        <OrbitControls enableZoom={false} autoRotate={false} />
      </Canvas>
    </div>
  );
}

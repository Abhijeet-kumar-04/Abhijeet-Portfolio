"use client";

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, Line } from "@react-three/drei";
import * as THREE from "three";

function NetworkGroup() {
  const groupRef = useRef<THREE.Group>(null);
  const targetRotation = useRef(new THREE.Euler());

  // Generate random nodes
  const { nodes, lines } = useMemo(() => {
    const numNodes = 60; // Increased for full screen
    const maxDistance = 4;
    const nodesArray: THREE.Vector3[] = [];
    const linesArray: [THREE.Vector3, THREE.Vector3][] = [];

    // Create random nodes spread out more
    for (let i = 0; i < numNodes; i++) {
      const x = (Math.random() - 0.5) * 20;
      const y = (Math.random() - 0.5) * 20;
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
      // Base slow rotation
      groupRef.current.rotation.y += delta * 0.05;
      groupRef.current.rotation.x += delta * 0.02;

      // Mouse interactive rotation
      targetRotation.current.y = (state.pointer.x * Math.PI) / 10;
      targetRotation.current.x = (-state.pointer.y * Math.PI) / 10;

      // Smoothly interpolate towards target rotation
      groupRef.current.rotation.y += (targetRotation.current.y - groupRef.current.rotation.y) * 0.05;
      groupRef.current.rotation.x += (targetRotation.current.x - groupRef.current.rotation.x) * 0.05;
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
          opacity={0.15} // Softer for background
        />
      ))}

      {/* Draw nodes */}
      {nodes.map((node, idx) => (
        <Sphere key={`node-${idx}`} position={node} args={[0.08, 16, 16]}>
          <meshStandardMaterial color="#22d3ee" emissive="#06b6d4" emissiveIntensity={0.5} transparent opacity={0.6} />
        </Sphere>
      ))}
    </group>
  );
}

export function NeuralNetwork3D() {
  return (
    <div className="fixed inset-0 z-[-20] pointer-events-none">
      <Canvas camera={{ position: [0, 0, 15], fov: 60 }}>
        <ambientLight intensity={0.2} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#22d3ee" />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#a855f7" />
        <NetworkGroup />
      </Canvas>
    </div>
  );
}

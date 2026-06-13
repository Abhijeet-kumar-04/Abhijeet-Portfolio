"use client";

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function NetworkNodes() {
  const pointsRef = useRef<THREE.Points>(null);
  const linesRef = useRef<THREE.LineSegments>(null);

  const particleCount = 100;
  const maxDistance = 2.5;

  const { particles, positions, colors } = useMemo(() => {
    const particles = new Float32Array(particleCount * 3);
    const positions = new Float32Array((particleCount * particleCount) * 3);
    const colors = new Float32Array((particleCount * particleCount) * 3);

    for (let i = 0; i < particleCount; i++) {
      particles[i * 3] = (Math.random() - 0.5) * 15;
      particles[i * 3 + 1] = (Math.random() - 0.5) * 15;
      particles[i * 3 + 2] = (Math.random() - 0.5) * 15;
    }

    return { particles, positions, colors };
  }, [particleCount]);

  useFrame(({ clock, mouse }) => {
    if (!pointsRef.current || !linesRef.current) return;

    const time = clock.getElapsedTime();
    const pos = pointsRef.current.geometry.attributes.position.array as Float32Array;

    // Slowly animate particles
    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      pos[i3 + 1] += Math.sin(time * 0.5 + pos[i3]) * 0.005;
      pos[i3] += Math.cos(time * 0.3 + pos[i3 + 1]) * 0.005;
      
      // Slight mouse reaction
      pos[i3] += mouse.x * 0.01;
      pos[i3 + 1] += mouse.y * 0.01;
    }
    pointsRef.current.geometry.attributes.position.needsUpdate = true;

    // Update lines between close nodes
    let lineIndex = 0;
    let colorIndex = 0;

    const baseColor = new THREE.Color("#D4AF37"); // Bronze/Gold
    const highlightColor = new THREE.Color("#FFFFFF"); // White

    for (let i = 0; i < particleCount; i++) {
      for (let j = i + 1; j < particleCount; j++) {
        const dx = pos[i * 3] - pos[j * 3];
        const dy = pos[i * 3 + 1] - pos[j * 3 + 1];
        const dz = pos[i * 3 + 2] - pos[j * 3 + 2];
        const distSq = dx * dx + dy * dy + dz * dz;

        if (distSq < maxDistance * maxDistance) {
          const alpha = 1.0 - Math.sqrt(distSq) / maxDistance;
          
          positions[lineIndex++] = pos[i * 3];
          positions[lineIndex++] = pos[i * 3 + 1];
          positions[lineIndex++] = pos[i * 3 + 2];

          positions[lineIndex++] = pos[j * 3];
          positions[lineIndex++] = pos[j * 3 + 1];
          positions[lineIndex++] = pos[j * 3 + 2];

          const mixColor = baseColor.clone().lerp(highlightColor, alpha * 0.5);

          colors[colorIndex++] = mixColor.r;
          colors[colorIndex++] = mixColor.g;
          colors[colorIndex++] = mixColor.b;

          colors[colorIndex++] = mixColor.r;
          colors[colorIndex++] = mixColor.g;
          colors[colorIndex++] = mixColor.b;
        }
      }
    }

    linesRef.current.geometry.setDrawRange(0, lineIndex / 3);
    linesRef.current.geometry.attributes.position.needsUpdate = true;
    linesRef.current.geometry.attributes.color.needsUpdate = true;
    
    // Rotate entire network slowly
    pointsRef.current.rotation.y = time * 0.05;
    linesRef.current.rotation.y = time * 0.05;
    pointsRef.current.rotation.x = time * 0.02;
    linesRef.current.rotation.x = time * 0.02;
  });

  return (
    <>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particles.length / 3}
            array={particles}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial size={0.08} color="#FFFFFF" transparent opacity={0.6} sizeAttenuation />
      </points>
      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={positions.length / 3}
            array={positions}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-color"
            count={colors.length / 3}
            array={colors}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial vertexColors transparent opacity={0.15} />
      </lineSegments>
    </>
  );
}

export function NeuralNetwork3D() {
  return (
    <div className="absolute inset-0 z-0 bg-black overflow-hidden pointer-events-none">
      {/* Centered Deep Bronze Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D4AF37]/10 blur-[120px] rounded-full pointer-events-none"></div>
      
      <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
        <NetworkNodes />
      </Canvas>
    </div>
  );
}

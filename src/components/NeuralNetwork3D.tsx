"use client";

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

function NetworkNodes() {
  const pointsRef = useRef<THREE.Points>(null);
  const linesRef = useRef<THREE.LineSegments>(null);
  const { mouse, viewport } = useThree();

  const particleCount = 150;
  const maxDistance = 2.5;
  const sphereRadius = 8;

  const { particles, originalPositions, positions, colors } = useMemo(() => {
    const particles = new Float32Array(particleCount * 3);
    const originalPositions = new Float32Array(particleCount * 3);
    const positions = new Float32Array((particleCount * particleCount) * 3);
    const colors = new Float32Array((particleCount * particleCount) * 3);

    for (let i = 0; i < particleCount; i++) {
      // Spawn on a Sphere using Spherical Coordinates
      const u = Math.random();
      const v = Math.random();
      const theta = 2 * Math.PI * u;
      const phi = Math.acos(2 * v - 1);
      
      // Add slight random variance to the radius to make it look organic
      const r = sphereRadius + (Math.random() - 0.5) * 1.5;

      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);

      particles[i * 3] = x;
      particles[i * 3 + 1] = y;
      particles[i * 3 + 2] = z;

      originalPositions[i * 3] = x;
      originalPositions[i * 3 + 1] = y;
      originalPositions[i * 3 + 2] = z;
    }

    return { particles, originalPositions, positions, colors };
  }, [particleCount]);

  useFrame(({ clock }) => {
    if (!pointsRef.current || !linesRef.current) return;

    const time = clock.getElapsedTime();
    const pos = pointsRef.current.geometry.attributes.position.array as Float32Array;

    // Convert mouse (-1 to 1) to 3D world coordinates roughly matching the sphere size
    const mouseX = (mouse.x * viewport.width) / 2;
    const mouseY = (mouse.y * viewport.height) / 2;
    
    // Rotate entire network slowly
    pointsRef.current.rotation.y = time * 0.05;
    pointsRef.current.rotation.x = time * 0.02;
    linesRef.current.rotation.y = time * 0.05;
    linesRef.current.rotation.x = time * 0.02;

    // We need to inverse the rotation to apply local vertex repulsion accurately,
    // or we just repel based on screen space. Doing a simple proximity check is easier.
    // We'll simulate a 3D mouse vector assuming z=0 in the local space of the rotated object.
    
    // Create a vector representing mouse in world space
    const mouseVector = new THREE.Vector3(mouseX, mouseY, 5);
    // Convert to local space of the points mesh
    pointsRef.current.worldToLocal(mouseVector);

    // Animate particles (Repulsion + organic wobble)
    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      
      // Organic wobble
      const wobbleX = Math.sin(time + originalPositions[i3]) * 0.2;
      const wobbleY = Math.cos(time + originalPositions[i3 + 1]) * 0.2;
      const wobbleZ = Math.sin(time + originalPositions[i3 + 2]) * 0.2;

      // Target position is original + wobble
      let targetX = originalPositions[i3] + wobbleX;
      let targetY = originalPositions[i3 + 1] + wobbleY;
      let targetZ = originalPositions[i3 + 2] + wobbleZ;

      // Mouse Repulsion Math
      const dx = targetX - mouseVector.x;
      const dy = targetY - mouseVector.y;
      const dz = targetZ - mouseVector.z;
      const distToMouse = Math.sqrt(dx * dx + dy * dy + dz * dz);
      
      const repulsionRadius = 6;
      if (distToMouse < repulsionRadius) {
        // Push the particle away
        const force = (repulsionRadius - distToMouse) / repulsionRadius;
        targetX += (dx / distToMouse) * force * 3;
        targetY += (dy / distToMouse) * force * 3;
        targetZ += (dz / distToMouse) * force * 3;
      }

      // Smoothly interpolate current position to target position (Spring-like)
      pos[i3] += (targetX - pos[i3]) * 0.1;
      pos[i3 + 1] += (targetY - pos[i3 + 1]) * 0.1;
      pos[i3 + 2] += (targetZ - pos[i3 + 2]) * 0.1;
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
        <pointsMaterial size={0.06} color="#D4AF37" transparent opacity={0.8} sizeAttenuation />
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
        <lineBasicMaterial vertexColors transparent opacity={0.25} />
      </lineSegments>
    </>
  );
}

export function NeuralNetwork3D() {
  return (
    <div className="absolute inset-0 z-0 bg-transparent overflow-hidden pointer-events-auto">
      {/* Centered Deep Bronze Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D4AF37]/10 blur-[120px] rounded-full pointer-events-none"></div>
      
      <Canvas camera={{ position: [0, 0, 15], fov: 60 }}>
        <NetworkNodes />
      </Canvas>
    </div>
  );
}

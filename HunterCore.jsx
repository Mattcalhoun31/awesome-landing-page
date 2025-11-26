import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Sphere, Torus, Stars } from '@react-three/drei';
import * as THREE from 'three';

/**
 * HunterCore - 3D Animated Core with Symmetri Brand Colors
 *
 * Features:
 * - Mouse tracking (hunts cursor position)
 * - Subtle breathing animation
 * - Autonomous rotation
 * - Brand-aligned colors: #E87105 (Primary) and #F89F05 (Secondary)
 */
export const HunterCore = () => {
  const outerRingRef = useRef<THREE.Group>(null);
  const middleRingRef = useRef<THREE.Group>(null);
  const coreRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    const { x, y } = state.mouse;

    // 1. Autonomous Idle Rotation
    if (outerRingRef.current) {
      outerRingRef.current.rotation.x = Math.sin(time * 0.2) * 0.5;
      outerRingRef.current.rotation.y += 0.002;
    }
    if (middleRingRef.current) {
      middleRingRef.current.rotation.y = Math.cos(time * 0.3) * 0.5;
      middleRingRef.current.rotation.x += 0.003;
    }

    // 2. Hunter Tracking - Follows Mouse with Lerp for Smoothness
    if (outerRingRef.current) {
      outerRingRef.current.rotation.x = THREE.MathUtils.lerp(
        outerRingRef.current.rotation.x,
        y * 0.5,
        0.1
      );
      outerRingRef.current.rotation.y = THREE.MathUtils.lerp(
        outerRingRef.current.rotation.y,
        x * 0.5,
        0.1
      );
    }

    // 3. Core Pulse - Subtle Breathing (Not Bloating)
    if (coreRef.current) {
      const scale = 1.0 + Math.sin(time * 2) * 0.05; // 5% variation
      coreRef.current.scale.set(scale, scale, scale);
    }
  });

  return (
    <group scale={1.2}>
      {/* The Molten Brain - SYMMETRI BRAND COLORS */}
      <Sphere ref={coreRef} args={[0.9, 64, 64]}>
        <MeshDistortMaterial
          color="#F89F05"        // Symmetri Secondary Orange (base)
          emissive="#E87105"     // Symmetri Primary Orange (glow)
          emissiveIntensity={1.5}
          roughness={0.2}
          metalness={0.8}
          distort={0.3}          // Reduced for cleaner look
          speed={2}
        />
      </Sphere>

      {/* The Corona (Heat Haze) - Lighter Symmetri Orange */}
      <Sphere args={[1.2, 32, 32]}>
        <meshBasicMaterial
          color="#F89F05"
          transparent
          opacity={0.08}
          side={THREE.BackSide}
        />
      </Sphere>

      {/* Outer Containment Ring - Dark Metal with Brand Glow */}
      <group ref={outerRingRef}>
        <Torus args={[2.4, 0.03, 16, 100]} rotation={[Math.PI / 2, 0, 0]}>
          <meshStandardMaterial
            color="#111"
            roughness={0.2}
            metalness={1}
            emissive="#E87105"      // Symmetri Primary Orange
            emissiveIntensity={0.5}
          />
        </Torus>
      </group>

      {/* Middle Ring - Subtle Secondary Glow */}
      <group ref={middleRingRef} rotation={[0, 0, Math.PI / 4]}>
        <Torus args={[1.9, 0.02, 16, 100]}>
          <meshStandardMaterial
            color="#333"
            roughness={0.2}
            metalness={1}
            emissive="#F89F05"      // Symmetri Secondary Orange
            emissiveIntensity={0.3}
          />
        </Torus>
      </group>

      {/* Data Ingestion Particles - Reduced for Performance */}
      <Stars
        radius={8}
        depth={50}
        count={1200}      // Reduced from 2000 for mobile performance
        factor={4}
        saturation={0}    // Grayscale stars
        fade
        speed={2}
      />

      {/* Lighting Setup */}
      <ambientLight intensity={1} />

      {/* Key Light - Symmetri Secondary Orange */}
      <pointLight
        position={[10, 10, 10]}
        intensity={3}
        color="#F89F05"
      />

      {/* Fill Light - Symmetri Primary Orange */}
      <pointLight
        position={[-10, -10, 10]}
        intensity={1}
        color="#E87105"
      />

      {/* Rim Light - Subtle Contrast */}
      <pointLight
        position={[0, 10, -10]}
        intensity={0.8}
        color="#CDC7C7"  // Symmetri Light Gray for contrast
      />
    </group>
  );
};

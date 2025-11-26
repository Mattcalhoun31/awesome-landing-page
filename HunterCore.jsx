import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, Float } from '@react-three/drei';
import * as THREE from 'three';

/**
 * HunterCore - Sophisticated 3D Core
 *
 * Removed: Cheap plastic rings, orange blocks, amateur cages
 * Added: Particle field, energy core, professional materials
 */
export const HunterCore = () => {
  const coreRef = useRef<THREE.Mesh>(null);
  const particlesRef = useRef<THREE.Points>(null);
  const energyRingRef = useRef<THREE.Mesh>(null);

  // Create sophisticated particle field around core
  const particles = useMemo(() => {
    const count = 800;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    const color1 = new THREE.Color('#E87105');
    const color2 = new THREE.Color('#F89F05');

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;

      // Create sphere distribution
      const radius = 2 + Math.random() * 2;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      positions[i3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i3 + 2] = radius * Math.cos(phi);

      const mixColor = color1.clone().lerp(color2, Math.random());
      colors[i3] = mixColor.r;
      colors[i3 + 1] = mixColor.g;
      colors[i3 + 2] = mixColor.b;
    }

    return { positions, colors };
  }, []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    const { x, y } = state.mouse;

    // Core breathing - subtle
    if (coreRef.current) {
      const scale = 1.0 + Math.sin(time * 1.5) * 0.04;
      coreRef.current.scale.set(scale, scale, scale);

      // Gentle mouse tracking
      coreRef.current.rotation.x = THREE.MathUtils.lerp(
        coreRef.current.rotation.x,
        y * 0.3,
        0.05
      );
      coreRef.current.rotation.y = THREE.MathUtils.lerp(
        coreRef.current.rotation.y,
        x * 0.3,
        0.05
      );
    }

    // Particle field rotation
    if (particlesRef.current) {
      particlesRef.current.rotation.y = time * 0.05;
      particlesRef.current.rotation.x = Math.sin(time * 0.1) * 0.1;
    }

    // Energy ring pulse
    if (energyRingRef.current) {
      const pulseScale = 1.0 + Math.sin(time * 2) * 0.1;
      energyRingRef.current.scale.set(pulseScale, pulseScale, pulseScale);
      energyRingRef.current.rotation.z += 0.01;
    }
  });

  return (
    <group>
      {/* Main Core - Molten Energy Sphere */}
      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.3}>
        <Sphere ref={coreRef} args={[1.2, 128, 128]}>
          <MeshDistortMaterial
            color="#F89F05"
            emissive="#E87105"
            emissiveIntensity={2}
            roughness={0.1}
            metalness={0.9}
            distort={0.25}
            speed={1.5}
            transparent
            opacity={0.95}
          />
        </Sphere>
      </Float>

      {/* Inner Glow Halo */}
      <Sphere args={[1.5, 64, 64]}>
        <meshBasicMaterial
          color="#F89F05"
          transparent
          opacity={0.15}
          side={THREE.BackSide}
          blending={THREE.AdditiveBlending}
        />
      </Sphere>

      {/* Outer Energy Field */}
      <Sphere args={[2.0, 64, 64]}>
        <meshBasicMaterial
          color="#E87105"
          transparent
          opacity={0.05}
          side={THREE.BackSide}
          blending={THREE.AdditiveBlending}
        />
      </Sphere>

      {/* Particle Cloud */}
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particles.positions.length / 3}
            array={particles.positions}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-color"
            count={particles.colors.length / 3}
            array={particles.colors}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.03}
          vertexColors
          transparent
          opacity={0.6}
          sizeAttenuation
          blending={THREE.AdditiveBlending}
        />
      </points>

      {/* Subtle Energy Ring (single, thin) */}
      <mesh ref={energyRingRef} rotation={[Math.PI / 3, 0, 0]}>
        <ringGeometry args={[1.8, 1.85, 64]} />
        <meshBasicMaterial
          color="#E87105"
          transparent
          opacity={0.3}
          side={THREE.DoubleSide}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* Lighting */}
      <ambientLight intensity={0.5} />
      <pointLight position={[5, 5, 5]} intensity={2} color="#F89F05" />
      <pointLight position={[-5, -5, 5]} intensity={1} color="#E87105" />
      <pointLight position={[0, 0, -5]} intensity={0.5} color="#CDC7C7" />
    </group>
  );
};

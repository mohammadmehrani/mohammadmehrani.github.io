"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";

const EARTH_MAP = "https://threejs.org/examples/textures/planets/earth_atmos_2048.jpg";
const EARTH_CLOUDS = "https://threejs.org/examples/textures/planets/earth_clouds_1024.png";
const STAR_COUNT = 1800;

function Earth({ scrollY }) {
  const earthRef = useRef();
  const cloudRef = useRef();
  const glowRef = useRef();
  const [colorMap, cloudMap] = useLoader(TextureLoader, [EARTH_MAP, EARTH_CLOUDS]);

  useFrame((_, delta) => {
    if (earthRef.current) {
      earthRef.current.rotation.y += delta * 0.08;
    }
    if (cloudRef.current) {
      cloudRef.current.rotation.y += delta * 0.06;
    }
    if (glowRef.current) {
      const scroll = scrollY?.current ?? 0;
      glowRef.current.material.opacity = 0.12 + Math.sin(scroll * Math.PI * 0.5) * 0.06;
    }
  });

  return (
    <group>
      <mesh ref={earthRef}>
        <sphereGeometry args={[2, 64, 64]} />
        <meshPhongMaterial map={colorMap} specular={0x333333} shininess={5} />
      </mesh>
      <mesh ref={cloudRef}>
        <sphereGeometry args={[2.01, 64, 64]} />
        <meshPhongMaterial map={cloudMap} transparent opacity={0.3} blending={2} depthWrite={false} />
      </mesh>
      <mesh ref={glowRef}>
        <sphereGeometry args={[2.15, 48, 48]} />
        <meshBasicMaterial color="#1ba5ff" transparent opacity={0.12} side={2} />
      </mesh>
    </group>
  );
}

function Stars() {
  const ref = useRef();
  const positions = useMemo(() => {
    const pos = new Float32Array(STAR_COUNT * 3);
    for (let i = 0; i < STAR_COUNT * 3; i += 3) {
      const r = 15 + Math.random() * 35;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      pos[i] = Math.sin(phi) * Math.cos(theta) * r;
      pos[i + 1] = Math.sin(phi) * Math.sin(theta) * r;
      pos[i + 2] = Math.cos(phi) * r;
    }
    return pos;
  }, []);

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.003;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={STAR_COUNT} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.08} color="#a8bbd9" transparent opacity={0.6} sizeAttenuation />
    </points>
  );
}

function Scene({ scrollY }) {
  return (
    <>
      <ambientLight intensity={0.35} />
      <directionalLight position={[5, 3, 5]} intensity={0.8} />
      <directionalLight position={[-3, -2, -4]} intensity={0.15} color="#1ba5ff" />
      <Earth scrollY={scrollY} />
      <Stars />
    </>
  );
}

export default function ThreeBackground({ scrollY }) {
  return (
    <div className="three-bg" aria-hidden="true">
      <Canvas camera={{ position: [0, 0.5, 5.5], fov: 42 }}>
        <Scene scrollY={scrollY} />
      </Canvas>
    </div>
  );
}

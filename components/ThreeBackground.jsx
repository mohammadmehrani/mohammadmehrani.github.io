"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import { useScroll, useTransform } from "framer-motion";

function Scene({ scrollY }) {
  const group = useRef();
  const torus = useRef();
  const ico = useRef();

  useFrame((_, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * 0.12;
      group.current.rotation.x = Math.sin(scrollY.current * Math.PI * 2) * 0.2;
    }
    if (torus.current) torus.current.rotation.x += delta * 0.3;
    if (ico.current) ico.current.rotation.y += delta * 0.2;
  });

  const particles = useMemo(() => {
    const arr = [];
    for (let i = 0; i < 80; i++) {
      arr.push({
        pos: [Math.sin(i * 1.3) * 6, Math.cos(i * 0.7) * 6, Math.sin(i * 0.5) * 6],
        size: 0.015 + Math.random() * 0.025,
        speed: 0.2 + Math.random() * 0.3,
      });
    }
    return arr;
  }, []);

  return (
    <group ref={group}>
      <Float speed={1.5} rotationIntensity={0.4} floatIntensity={0.6}>
        <torus ref={torus} args={[1.8, 0.06, 24, 48]}>
          <MeshDistortMaterial
            color="#1fe0b5"
            wireframe
            transparent
            opacity={0.35}
            distort={0.2}
            speed={1.5}
          />
        </torus>
      </Float>
      <Float speed={1} rotationIntensity={0.3} floatIntensity={0.4}>
        <icosahedron ref={ico} args={[1.2, 0]}>
          <MeshDistortMaterial
            color="#1ba5ff"
            wireframe
            transparent
            opacity={0.25}
            distort={0.3}
            speed={2}
          />
        </icosahedron>
      </Float>
      <mesh position={[3.5, -1.5, -2]}>
        <boxGeometry args={[0.4, 0.4, 0.4]} />
        <meshStandardMaterial color="#1fe0b5" wireframe transparent opacity={0.2} />
      </mesh>
      <mesh position={[-3, 2, -1.5]}>
        <boxGeometry args={[0.3, 0.3, 0.3]} />
        <meshStandardMaterial color="#1ba5ff" wireframe transparent opacity={0.15} />
      </mesh>
      {particles.map((p, i) => (
        <mesh key={i} position={p.pos}>
          <sphereGeometry args={[p.size, 6, 6]} />
          <meshBasicMaterial color="#a8bbd9" transparent opacity={0.3} />
        </mesh>
      ))}
    </group>
  );
}

function CameraLight() {
  const lightRef = useRef();
  useFrame(({ camera }) => {
    if (lightRef.current) lightRef.current.position.copy(camera.position);
  });
  return <pointLight ref={lightRef} intensity={30} color="#1ba5ff" />;
}

export default function ThreeBackground({ scrollY }) {
  return (
    <div className="three-bg" aria-hidden="true">
      <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 5, 5]} intensity={0.5} />
        <CameraLight />
        <Scene scrollY={scrollY} />
      </Canvas>
    </div>
  );
}

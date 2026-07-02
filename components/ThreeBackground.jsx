"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";

/* ── Orbital ring with a traveling dot ── */
function OrbitRing({ radius, color, speed = 0.6, offset = 0, tilt = 0 }) {
  const dot = useRef();
  const angle = useRef(offset);

  useFrame((_, delta) => {
    angle.current += delta * speed;
    if (dot.current) {
      dot.current.position.x = Math.cos(angle.current) * radius;
      dot.current.position.z = Math.sin(angle.current) * radius;
      dot.current.position.y = Math.sin(angle.current * 0.7 + offset) * 0.4;
    }
  });

  const segments = 48;
  const ringPoints = useMemo(() => {
    const pts = [];
    for (let i = 0; i <= segments; i++) {
      const theta = (i / segments) * Math.PI * 2;
      const x = Math.cos(theta) * radius;
      const z = Math.sin(theta) * radius;
      const y = Math.sin(theta * 0.7 + offset) * 0.4;
      pts.push([x, y, z]);
    }
    return pts;
  }, [radius, offset]);

  return (
    <group rotation={[tilt, 0, 0]}>
      {/* Ring line */}
      <line>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={ringPoints.length}
            array={new Float32Array(ringPoints.flat())}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial color={color} transparent opacity={0.2} />
      </line>
      {/* Traveling dot */}
      <mesh ref={dot}>
        <sphereGeometry args={[0.06, 8, 8]} />
        <meshBasicMaterial color={color} />
      </mesh>
    </group>
  );
}

/* ── Connection line: node to center ── */
function ConnectLine({ pos, color }) {
  const points = useMemo(() => {
    return [
      [0, 0, 0],
      [pos[0] * 0.3, pos[1] * 0.3, pos[2] * 0.3],
      [pos[0] * 0.7, pos[1] * 0.7, pos[2] * 0.7],
      pos,
    ];
  }, [pos]);

  return (
    <line>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={points.length}
          array={new Float32Array(points.flat())}
          itemSize={3}
        />
      </bufferGeometry>
      <lineBasicMaterial color={color} transparent opacity={0.12} />
    </line>
  );
}

/* ── Main scene ── */
function Scene({ scrollY }) {
  const group = useRef();
  const dode = useRef();
  const inner = useRef();
  const particlesRef = useRef();

  const nodes = useMemo(() => {
    const arr = [];
    for (let i = 0; i < 24; i++) {
      const theta = (i / 24) * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 2.8 + Math.random() * 1.2;
      arr.push([
        Math.sin(phi) * Math.cos(theta) * r,
        Math.sin(phi) * Math.sin(theta) * r * 0.5,
        Math.cos(phi) * r,
      ]);
    }
    return arr;
  }, []);

  const particles = useMemo(() => {
    const arr = [];
    for (let i = 0; i < 120; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 4 + Math.random() * 3;
      arr.push({
        pos: [Math.sin(phi) * Math.cos(theta) * r, Math.sin(phi) * Math.sin(theta) * r * 0.4, Math.cos(phi) * r],
        size: 0.008 + Math.random() * 0.02,
        speed: 0.08 + Math.random() * 0.15,
        phase: Math.random() * Math.PI * 2,
      });
    }
    return arr;
  }, []);

  useFrame(({ clock }, delta) => {
    const t = clock.getElapsedTime();
    if (group.current) {
      group.current.rotation.y += delta * 0.06;
      group.current.rotation.x = Math.sin(scrollY.current * Math.PI * 1.5) * 0.08;
    }
    if (dode.current) {
      dode.current.rotation.x += delta * 0.15;
      dode.current.rotation.z += delta * 0.08;
    }
    if (inner.current) {
      inner.current.rotation.x = Math.sin(t * 0.2) * 0.1;
      inner.current.rotation.y += delta * 0.2;
    }
    if (particlesRef.current) {
      particlesRef.current.children.forEach((mesh, i) => {
        if (i < particles.length) {
          const p = particles[i];
          mesh.position.y += Math.sin(t * p.speed + p.phase) * 0.002;
          mesh.position.x += Math.cos(t * p.speed * 0.7 + p.phase) * 0.001;
        }
      });
    }
  });

  return (
    <group ref={group}>
      {/* Central dodecahedron (wireframe) */}
      <Float speed={0.8} rotationIntensity={0.15} floatIntensity={0.4}>
        <dodecahedron ref={dode} args={[1.8, 0]}>
          <MeshDistortMaterial
            color="#1fe0b5"
            wireframe
            transparent
            opacity={0.3}
            distort={0.18}
            speed={1.2}
          />
        </dodecahedron>
      </Float>

      {/* Inner glowing sphere */}
      <mesh ref={inner}>
        <icosahedron args={[0.6, 1]} />
        <meshBasicMaterial color="#1ba5ff" transparent opacity={0.08} wireframe />
      </mesh>

      {/* Orbital rings */}
      <OrbitRing radius={2.6} color="#1fe0b5" speed={0.7} offset={0} tilt={0.15} />
      <OrbitRing radius={3.4} color="#7c3aed" speed={0.4} offset={Math.PI / 3} tilt={-0.25} />
      <OrbitRing radius={2.2} color="#1ba5ff" speed={0.9} offset={Math.PI / 1.5} tilt={0.35} />

      {/* Connection lines from nodes to center */}
      {nodes.map((pos, i) => (
        <ConnectLine key={i} pos={pos} color={i % 3 === 0 ? "#1fe0b5" : i % 3 === 1 ? "#1ba5ff" : "#7c3aed"} />
      ))}

      {/* Orbital nodes */}
      {nodes.map((pos, i) => (
        <mesh key={`n${i}`} position={pos}>
          <sphereGeometry args={[0.04, 6, 6]} />
          <meshBasicMaterial color={i % 3 === 0 ? "#1fe0b5" : i % 3 === 1 ? "#1ba5ff" : "#7c3aed"} transparent opacity={0.5} />
        </mesh>
      ))}

      {/* Particle field */}
      <group ref={particlesRef}>
        {particles.map((p, i) => (
          <mesh key={i} position={p.pos}>
            <sphereGeometry args={[p.size, 4, 4]} />
            <meshBasicMaterial color="#a8bbd9" transparent opacity={0.25} />
          </mesh>
        ))}
      </group>
    </group>
  );
}

/* ── Light that follows camera ── */
function CameraLight() {
  const lightRef = useRef();
  useFrame(({ camera }) => {
    if (lightRef.current) lightRef.current.position.copy(camera.position);
  });
  return <pointLight ref={lightRef} intensity={25} color="#1ba5ff" />;
}

/* ── Exported component ── */
export default function ThreeBackground({ scrollY }) {
  return (
    <div className="three-bg" aria-hidden="true">
      <Canvas camera={{ position: [0, 0, 6.5], fov: 48 }}>
        <ambientLight intensity={0.25} />
        <directionalLight position={[5, 5, 5]} intensity={0.4} />
        <CameraLight />
        <Scene scrollY={scrollY} />
      </Canvas>
    </div>
  );
}

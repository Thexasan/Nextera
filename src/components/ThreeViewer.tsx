import { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text, Stars, Html } from '@react-three/drei';
import * as THREE from 'three';

interface Planet {
  id: string;
  name: string;
  distance: number;
  radius: number;
  color: string;
  period: number;
}

interface ThreeViewerProps {
  planets?: Planet[];
  starColor?: string;
  showOrbits?: boolean;
}

function Star({ color = '#FFD700' }: { color?: string }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005;
    }
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial 
        color={color} 
        emissive={color}
        emissiveIntensity={0.3}
      />
      <pointLight position={[0, 0, 0]} intensity={2} color={color} />
    </mesh>
  );
}

function Planet({ planet, time }: { planet: Planet; time: number }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const orbitRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);
  
  useFrame(() => {
    if (orbitRef.current) {
      orbitRef.current.rotation.y = time * (1 / planet.period) * 0.1;
    }
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01; // self rotation
    }
  });

  return (
    <group ref={orbitRef}>
      <mesh 
        ref={meshRef}
        position={[planet.distance, 0, 0]}
        onPointerOver={(e) => { e.stopPropagation(); setHovered(true); }}
        onPointerOut={(e) => { e.stopPropagation(); setHovered(false); }}
      >
        <sphereGeometry args={[planet.radius, 16, 16]} />
        <meshStandardMaterial color={planet.color} emissive={hovered ? planet.color : '#000'} emissiveIntensity={hovered ? 0.2 : 0} />
        {hovered && (
          <Html position={[0, planet.radius + 0.6, 0]} center>
            <div className="px-2 py-1 rounded bg-black/70 text-white text-xs border border-white/10">
              <div className="font-semibold">{planet.name}</div>
              <div>Orbit: {planet.period} days</div>
              <div>Radius: {planet.radius} AU</div>
            </div>
          </Html>
        )}
      </mesh>
      
      {/* Planet label */}
      <Text
        position={[planet.distance, planet.radius + 0.5, 0]}
        fontSize={0.3}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        {planet.name}
      </Text>
    </group>
  );
}

function Orbit({ radius }: { radius: number }) {
  const points = [];
  for (let i = 0; i <= 64; i++) {
    const angle = (i / 64) * Math.PI * 2;
    points.push(new THREE.Vector3(
      Math.cos(angle) * radius,
      0,
      Math.sin(angle) * radius
    ));
  }
  
  const geometry = new THREE.BufferGeometry().setFromPoints(points);
  
  return (
    <primitive object={new THREE.Line(geometry, new THREE.LineBasicMaterial({ 
      color: "#444", 
      opacity: 0.3, 
      transparent: true 
    }))} />
  );
}

function Scene({ planets, starColor, showOrbits }: ThreeViewerProps) {
  const timeRef = useRef(0);
  
  useFrame((state, delta) => {
    timeRef.current += delta;
  });

  return (
    <>
      <Stars radius={60} depth={40} count={3000} factor={4} saturation={0} fade speed={1} />
      <ambientLight intensity={0.2} />
      <Star color={starColor} />
      
      {showOrbits && planets?.map((planet) => (
        <Orbit key={`orbit-${planet.id}`} radius={planet.distance} />
      ))}
      
      {planets?.map((planet) => (
        <Planet 
          key={planet.id} 
          planet={planet} 
          time={timeRef.current} 
        />
      ))}
      
      <OrbitControls 
        enablePan={true}
        enableZoom={true}
        enableRotate={true}
        minDistance={2}
        maxDistance={40}
      />
    </>
  );
}

export function ThreeViewer({ 
  planets = [], 
  starColor = '#FFD700', 
  showOrbits = true 
}: ThreeViewerProps) {
  return (
    <div className="w-full h-full bg-black rounded-lg overflow-hidden stellar-glow">
      <Canvas camera={{ position: [0, 5, 10], fov: 75 }}>
        <Scene 
          planets={planets} 
          starColor={starColor} 
          showOrbits={showOrbits} 
        />
      </Canvas>
    </div>
  );
}

// Default solar system for demo
export const defaultPlanets: Planet[] = [
  { 
    id: 'mercury', 
    name: 'Mercury', 
    distance: 2, 
    radius: 0.1, 
    color: '#8C7853', 
    period: 88 
  },
  { 
    id: 'venus', 
    name: 'Venus', 
    distance: 2.8, 
    radius: 0.15, 
    color: '#FFC649', 
    period: 225 
  },
  { 
    id: 'earth', 
    name: 'Earth', 
    distance: 3.6, 
    radius: 0.16, 
    color: '#6B93D6', 
    period: 365 
  },
  { 
    id: 'mars', 
    name: 'Mars', 
    distance: 4.8, 
    radius: 0.12, 
    color: '#CD5C5C', 
    period: 687 
  },
];
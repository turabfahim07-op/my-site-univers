"use client"

import { useRef, useMemo } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { Stars, Float, Trail } from "@react-three/drei"
import * as THREE from "three"

// Planet component with glow effect
function Planet({ 
  position, 
  size, 
  color, 
  orbitRadius, 
  orbitSpeed,
  glowColor 
}: { 
  position: [number, number, number]
  size: number
  color: string
  orbitRadius: number
  orbitSpeed: number
  glowColor: string
}) {
  const meshRef = useRef<THREE.Mesh>(null)
  const glowRef = useRef<THREE.Mesh>(null)
  
  useFrame((state) => {
    if (meshRef.current && glowRef.current) {
      const time = state.clock.getElapsedTime() * orbitSpeed
      meshRef.current.position.x = Math.cos(time) * orbitRadius
      meshRef.current.position.z = Math.sin(time) * orbitRadius
      glowRef.current.position.copy(meshRef.current.position)
    }
  })

  return (
    <group>
      {/* Glow effect */}
      <mesh ref={glowRef} position={position}>
        <sphereGeometry args={[size * 1.5, 16, 16]} />
        <meshBasicMaterial color={glowColor} transparent opacity={0.15} />
      </mesh>
      {/* Planet */}
      <mesh ref={meshRef} position={position}>
        <sphereGeometry args={[size, 32, 32]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.3} />
      </mesh>
    </group>
  )
}

// Sun component with pulsing glow
function Sun() {
  const meshRef = useRef<THREE.Mesh>(null)
  const glowRef = useRef<THREE.Mesh>(null)
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.002
    }
    if (glowRef.current) {
      const scale = 1 + Math.sin(state.clock.getElapsedTime() * 2) * 0.1
      glowRef.current.scale.set(scale, scale, scale)
    }
  })

  return (
    <group>
      {/* Outer glow */}
      <mesh ref={glowRef}>
        <sphereGeometry args={[1.8, 32, 32]} />
        <meshBasicMaterial color="#FF8C00" transparent opacity={0.2} />
      </mesh>
      {/* Inner glow */}
      <mesh>
        <sphereGeometry args={[1.3, 32, 32]} />
        <meshBasicMaterial color="#FF8C00" transparent opacity={0.4} />
      </mesh>
      {/* Sun core */}
      <mesh ref={meshRef}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshStandardMaterial 
          color="#FF8C00" 
          emissive="#FF8C00" 
          emissiveIntensity={2} 
        />
      </mesh>
    </group>
  )
}

// Orbit ring
function OrbitRing({ radius }: { radius: number }) {
  const points = useMemo(() => {
    const pts = []
    for (let i = 0; i <= 64; i++) {
      const angle = (i / 64) * Math.PI * 2
      pts.push(new THREE.Vector3(Math.cos(angle) * radius, 0, Math.sin(angle) * radius))
    }
    return pts
  }, [radius])

  const geometry = useMemo(() => new THREE.BufferGeometry().setFromPoints(points), [points])

  return (
    <line geometry={geometry}>
      <lineBasicMaterial color="#87CEEB" transparent opacity={0.2} />
    </line>
  )
}

// Comet with trail
function Comet() {
  const ref = useRef<THREE.Mesh>(null)
  
  useFrame((state) => {
    if (ref.current) {
      const time = state.clock.getElapsedTime() * 0.5
      ref.current.position.x = Math.cos(time) * 8
      ref.current.position.z = Math.sin(time) * 8
      ref.current.position.y = Math.sin(time * 2) * 2
    }
  })

  return (
    <Trail
      width={1}
      length={8}
      color="#87CEEB"
      attenuation={(t) => t * t}
    >
      <mesh ref={ref}>
        <sphereGeometry args={[0.1, 16, 16]} />
        <meshBasicMaterial color="#87CEEB" />
      </mesh>
    </Trail>
  )
}

// Mouse interaction
function MouseInteraction() {
  const { camera } = useThree()
  const targetRotation = useRef({ x: 0, y: 0 })
  
  useFrame(({ pointer }) => {
    targetRotation.current.x = pointer.y * 0.2
    targetRotation.current.y = pointer.x * 0.2
    
    camera.rotation.x += (targetRotation.current.x - camera.rotation.x) * 0.05
    camera.rotation.y += (targetRotation.current.y - camera.rotation.y) * 0.05
  })

  return null
}

// Main scene content
function SolarSystem() {
  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.2} />
      <pointLight position={[0, 0, 0]} intensity={3} color="#FF8C00" />
      
      {/* Stars background */}
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      
      {/* Sun */}
      <Sun />
      
      {/* Orbit rings */}
      <OrbitRing radius={2.5} />
      <OrbitRing radius={4} />
      <OrbitRing radius={6} />
      
      {/* Planets */}
      <Planet 
        position={[2.5, 0, 0]} 
        size={0.2} 
        color="#87CEEB" 
        orbitRadius={2.5} 
        orbitSpeed={1.2}
        glowColor="#87CEEB"
      />
      <Planet 
        position={[4, 0, 0]} 
        size={0.35} 
        color="#FF8C00" 
        orbitRadius={4} 
        orbitSpeed={0.8}
        glowColor="#FF8C00"
      />
      <Planet 
        position={[6, 0, 0]} 
        size={0.5} 
        color="#87CEEB" 
        orbitRadius={6} 
        orbitSpeed={0.5}
        glowColor="#87CEEB"
      />
      
      {/* Comet */}
      <Comet />
      
      {/* Mouse interaction */}
      <MouseInteraction />
    </>
  )
}

export function GalaxyScene() {
  return (
    <div className="w-full h-[500px] relative">
      <Canvas camera={{ position: [0, 8, 12], fov: 45 }}>
        <SolarSystem />
      </Canvas>
      {/* Glow overlay */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-radial from-transparent via-transparent to-black/50" />
    </div>
  )
}

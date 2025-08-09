'use client'

import React, { useRef, useEffect } from 'react'
import * as THREE from 'three'

interface ParticleBackgroundProps {
  className?: string
}

export function ParticleBackground({ className = '' }: ParticleBackgroundProps) {
  const mountRef = useRef<HTMLDivElement>(null)
  const sceneRef = useRef<THREE.Scene | null>(null)
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null)
  const cubeGroupRef = useRef<THREE.Group | null>(null)
  const animationIdRef = useRef<number | null>(null)

  useEffect(() => {
    if (!mountRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    scene.background = null // Transparent background
    sceneRef.current = scene

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000
    )
    camera.position.set(6, 6, 6)
    camera.lookAt(0, 0, 0)

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true, 
      alpha: true // Enable transparency
    })
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setClearColor(0x000000, 0) // Transparent background
    rendererRef.current = renderer
    mountRef.current.appendChild(renderer.domElement)

    // Create tetrahedron group
    const tetraGroup = new THREE.Group()
    scene.add(tetraGroup)
    cubeGroupRef.current = tetraGroup

    // Particle geometry and material
    const particleGeometry = new THREE.SphereGeometry(0.06, 6, 6)
    const particleMaterial = new THREE.MeshBasicMaterial({ 
      color: 0xfad526,
      transparent: true,
      opacity: 0.3
    })

    // Generate particles on tetrahedron faces
    const size = 2.5
    
    // Tetrahedron vertices
    const vertices = [
      new THREE.Vector3(size, size, size),      // Top-front-right
      new THREE.Vector3(-size, -size, size),   // Bottom-back-right  
      new THREE.Vector3(-size, size, -size),   // Top-back-left
      new THREE.Vector3(size, -size, -size)    // Bottom-front-left
    ]

    // Function to create particles on a triangular face
    const createTriangleParticles = (v1: THREE.Vector3, v2: THREE.Vector3, v3: THREE.Vector3) => {
      const particles: THREE.Vector3[] = []
      const particlesPerRow = 15
      
      for (let i = 0; i <= particlesPerRow; i++) {
        const rowParticles = particlesPerRow - i
        for (let j = 0; j <= rowParticles; j++) {
          if (rowParticles === 0) continue
          
          const u = i / particlesPerRow
          const v = j / rowParticles
          
          // Skip if we're outside the triangle
          if (u + v > 1) continue
          
          // Barycentric coordinates
          const w = 1 - u - v
          
          const position = new THREE.Vector3()
          position.addScaledVector(v1, u)
          position.addScaledVector(v2, v)
          position.addScaledVector(v3, w)
          
          particles.push(position)
        }
      }
      
      return particles
    }

    // Create particles for all four triangular faces
    const allParticles: THREE.Vector3[] = []
    
    // Face 1: vertices 0, 1, 2
    allParticles.push(...createTriangleParticles(vertices[0], vertices[1], vertices[2]))
    // Face 2: vertices 0, 1, 3  
    allParticles.push(...createTriangleParticles(vertices[0], vertices[1], vertices[3]))
    // Face 3: vertices 0, 2, 3
    allParticles.push(...createTriangleParticles(vertices[0], vertices[2], vertices[3]))
    // Face 4: vertices 1, 2, 3
    allParticles.push(...createTriangleParticles(vertices[1], vertices[2], vertices[3]))

    // Create mesh instances for each particle
    allParticles.forEach(position => {
      const particle = new THREE.Mesh(particleGeometry, particleMaterial)
      particle.position.copy(position)
      tetraGroup.add(particle)
    })

    // Animation loop
    const animate = () => {
      if (!tetraGroup) return
      
      // Very slow, smooth rotation
      tetraGroup.rotation.x += 0.001
      tetraGroup.rotation.y += 0.0015
      tetraGroup.rotation.z += 0.0008
      
      renderer.render(scene, camera)
      animationIdRef.current = requestAnimationFrame(animate)
    }

    animate()

    // Handle resize
    const handleResize = () => {
      if (!mountRef.current || !renderer || !camera) return
      
      camera.aspect = mountRef.current.clientWidth / mountRef.current.clientHeight
      camera.updateProjectionMatrix()
      renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight)
    }

    window.addEventListener('resize', handleResize)

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize)
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current)
      }
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement)
      }
      renderer.dispose()
      particleGeometry.dispose()
      particleMaterial.dispose()
    }
  }, [])

  return (
    <div className={`absolute inset-0 pointer-events-none ${className}`}>
      <div 
        ref={mountRef} 
        className="w-full h-full opacity-60"
      />
    </div>
  )
}
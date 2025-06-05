'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const Scene = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    mountRef.current.appendChild(renderer.domElement);

    // Create wireframe toroid
    const geometry = new THREE.TorusGeometry(250, 75, 16, 100);
    const material = new THREE.MeshBasicMaterial({
      wireframe: true,
      color: 0x4180fe,
      transparent: true,
      opacity: 0.5
    });
    const torus = new THREE.Mesh(geometry, material);
    torus.rotation.x = Math.PI / 4;
    scene.add(torus);

    camera.position.z = 600;

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      torus.rotation.z += 0.002;
      renderer.render(scene, camera);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      mountRef.current?.removeChild(renderer.domElement);
      scene.remove(torus);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className="fixed inset-0 -z-10" />;
};

export default Scene;
import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { X, Play, Pause, RefreshCw, Eye, Box, Sliders, Volume2, Shield, Sparkles, Layers, Maximize2 } from 'lucide-react';

export default function VrExperienceModal({ isOpen, onClose }) {
  const mountRef = useRef(null);
  const [wireframe, setWireframe] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [theme, setTheme] = useState('purple'); // 'purple', 'cyan', 'neon'
  const [rotationSpeed, setRotationSpeed] = useState(0.01);
  const [spatialAudio, setSpatialAudio] = useState(true);
  const [fps, setFps] = useState(120);

  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const meshGroupRef = useRef(null);
  const animFrameId = useRef(null);
  const materialsRef = useRef([]);

  useEffect(() => {
    if (!isOpen || !mountRef.current) return;

    // 1. Scene Setup
    const width = mountRef.current.clientWidth;
    const height = mountRef.current.clientHeight;

    const scene = new THREE.Scene();
    sceneRef.current = scene;
    scene.background = new THREE.Color(0x0a0a12);

    // 2. Camera Setup
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
    camera.position.set(0, 0, 7);

    // 3. Renderer Setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    rendererRef.current = renderer;

    mountRef.current.appendChild(renderer.domElement);

    // 4. Create 3D VR Spatial Mesh Group (Futuristic VR Headset & Spatial Ring System)
    const group = new THREE.Group();
    meshGroupRef.current = group;
    scene.add(group);

    // Core VR Headset Body (Rounded Box Shape)
    const visorGeo = new THREE.BoxGeometry(2.8, 1.4, 1.6, 16, 16, 16);
    const visorMat = new THREE.MeshStandardMaterial({
      color: 0x141424,
      metalness: 0.85,
      roughness: 0.2,
      wireframe: wireframe
    });
    const visorMesh = new THREE.Mesh(visorGeo, visorMat);
    group.add(visorMesh);

    // Front Glass Visor (Glowing Lens)
    const lensGeo = new THREE.BoxGeometry(2.6, 1.1, 0.1);
    const lensMat = new THREE.MeshPhysicalMaterial({
      color: theme === 'purple' ? 0x7952eb : theme === 'cyan' ? 0x00f0ff : 0xff007f,
      emissive: theme === 'purple' ? 0x4a1fb8 : theme === 'cyan' ? 0x00a3cc : 0xb8005c,
      emissiveIntensity: 0.6,
      roughness: 0.1,
      metalness: 0.9,
      transmission: 0.6,
      opacity: 0.9,
      transparent: true,
      wireframe: wireframe
    });
    const lensMesh = new THREE.Mesh(lensGeo, lensMat);
    lensMesh.position.z = 0.82;
    group.add(lensMesh);

    // Orbital Rings
    const ringGeo1 = new THREE.TorusGeometry(3.5, 0.04, 16, 100);
    const ringMat1 = new THREE.MeshBasicMaterial({
      color: theme === 'cyan' ? 0x00f0ff : 0xa78bfa,
      wireframe: true
    });
    const ring1 = new THREE.Mesh(ringGeo1, ringMat1);
    ring1.rotation.x = Math.PI / 3;
    group.add(ring1);

    const ringGeo2 = new THREE.TorusGeometry(4.2, 0.03, 16, 100);
    const ringMat2 = new THREE.MeshBasicMaterial({
      color: 0x7952eb,
      wireframe: true
    });
    const ring2 = new THREE.Mesh(ringGeo2, ringMat2);
    ring2.rotation.y = Math.PI / 4;
    group.add(ring2);

    // Particle Swarm
    const particleCount = 400;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 12;
    }
    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: theme === 'purple' ? 0x9333ea : 0x06b6d4,
      size: 0.06,
      transparent: true,
      opacity: 0.7
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    materialsRef.current = [visorMat, lensMat, ringMat1, ringMat2, particleMat];

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0x7952eb, 2);
    dirLight1.position.set(5, 5, 5);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0x00f0ff, 1.5);
    dirLight2.position.set(-5, -5, -2);
    scene.add(dirLight2);

    // Mouse Interaction
    let mouseX = 0;
    let mouseY = 0;
    const handleMouseMove = (e) => {
      const rect = mountRef.current?.getBoundingClientRect();
      if (!rect) return;
      mouseX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouseY = -((e.clientY - rect.top) / rect.height) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Resize Handler
    const handleResize = () => {
      if (!mountRef.current) return;
      const w = mountRef.current.clientWidth;
      const h = mountRef.current.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    // Animation Loop
    let lastTime = performance.now();
    const animate = (time) => {
      animFrameId.current = requestAnimationFrame(animate);

      // Calc FPS
      const delta = time - lastTime;
      if (delta >= 500) {
        setFps(Math.round(1000 / (delta / 15)));
        lastTime = time;
      }

      if (isPlaying && group) {
        group.rotation.y += rotationSpeed;
        group.rotation.x = mouseY * 0.3;
        group.rotation.z = mouseX * 0.2;

        ring1.rotation.z += 0.005;
        ring2.rotation.x += 0.008;
        particles.rotation.y += 0.001;
      }

      renderer.render(scene, camera);
    };
    animate(performance.now());

    return () => {
      cancelAnimationFrame(animFrameId.current);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (rendererRef.current && mountRef.current) {
        mountRef.current.removeChild(rendererRef.current.domElement);
      }
    };
  }, [isOpen]);

  // Update wireframe state dynamically
  useEffect(() => {
    if (materialsRef.current.length > 0) {
      materialsRef.current.forEach(mat => {
        if ('wireframe' in mat) {
          mat.wireframe = wireframe;
        }
      });
    }
  }, [wireframe]);

  // Update theme colors dynamically
  useEffect(() => {
    if (materialsRef.current[1] && materialsRef.current[4]) {
      const lensMat = materialsRef.current[1];
      const particleMat = materialsRef.current[4];

      if (theme === 'purple') {
        lensMat.color.setHex(0x7952eb);
        lensMat.emissive.setHex(0x4a1fb8);
        particleMat.color.setHex(0x9333ea);
      } else if (theme === 'cyan') {
        lensMat.color.setHex(0x00f0ff);
        lensMat.emissive.setHex(0x00a3cc);
        particleMat.color.setHex(0x06b6d4);
      } else {
        lensMat.color.setHex(0xff007f);
        lensMat.emissive.setHex(0xb8005c);
        particleMat.color.setHex(0xf43f5e);
      }
    }
  }, [theme]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-xl animate-in fade-in duration-200">
      <div className="relative w-full max-w-5xl h-[85vh] glass-panel-glow rounded-3xl overflow-hidden flex flex-col shadow-2xl border border-purple-500/30">
        
        {/* Top Header Controls Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#0c0c14]/90 z-20">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-emerald-400 animate-ping"></div>
            <h3 className="font-heading font-bold text-lg text-white flex items-center gap-2">
              <span>Interactive VR 3D Viewport</span>
              <span className="text-xs font-mono px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 border border-purple-500/30">v2.4 WebXR</span>
            </h3>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-slate-300">
              <span>FPS:</span>
              <span className="text-emerald-400 font-bold">{fps}</span>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full glass-panel hover:bg-red-500/20 hover:text-red-400 text-slate-400 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Main 3D Canvas Area */}
        <div className="relative flex-grow w-full bg-[#0a0a12] cursor-grab active:cursor-grabbing overflow-hidden">
          <div ref={mountRef} className="w-full h-full"></div>

          {/* Overlay HUD Stats */}
          <div className="absolute top-6 left-6 pointer-events-none space-y-2 font-mono text-xs text-slate-300">
            <div className="bg-black/60 backdrop-blur-md p-3 rounded-xl border border-white/10 space-y-1">
              <p className="text-purple-400 font-bold flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" /> Spatial Mesh Telemetry
              </p>
              <p>Vertices: <span className="text-white font-bold">14,280</span></p>
              <p>Polygons: <span className="text-white font-bold">28,560</span></p>
              <p>Shaders: <span className="text-cyan-400">Custom PBR Glass</span></p>
            </div>
          </div>

          {/* Floating Theme Switcher */}
          <div className="absolute top-6 right-6 bg-black/60 backdrop-blur-md p-2 rounded-2xl border border-white/10 flex flex-col gap-2 z-10">
            <button
              onClick={() => setTheme('purple')}
              className={`w-7 h-7 rounded-xl transition-all ${theme === 'purple' ? 'ring-2 ring-purple-400 scale-110' : 'opacity-60 hover:opacity-100'}`}
              style={{ background: 'linear-gradient(135deg, #7952eb, #4a1fb8)' }}
              title="Purple Theme"
            />
            <button
              onClick={() => setTheme('cyan')}
              className={`w-7 h-7 rounded-xl transition-all ${theme === 'cyan' ? 'ring-2 ring-cyan-400 scale-110' : 'opacity-60 hover:opacity-100'}`}
              style={{ background: 'linear-gradient(135deg, #00f0ff, #00a3cc)' }}
              title="Cyan Theme"
            />
            <button
              onClick={() => setTheme('neon')}
              className={`w-7 h-7 rounded-xl transition-all ${theme === 'neon' ? 'ring-2 ring-pink-400 scale-110' : 'opacity-60 hover:opacity-100'}`}
              style={{ background: 'linear-gradient(135deg, #ff007f, #b8005c)' }}
              title="Neon Pink Theme"
            />
          </div>
        </div>

        {/* Bottom Interactive Toolbar */}
        <div className="px-6 py-4 border-t border-white/10 bg-[#0c0c14]/90 z-20 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="flex items-center gap-2 px-4 py-2 rounded-xl glass-panel hover:bg-white/10 text-white font-medium text-sm transition-colors"
            >
              {isPlaying ? <Pause className="w-4 h-4 text-amber-400" /> : <Play className="w-4 h-4 text-emerald-400" />}
              <span>{isPlaying ? 'Pause Rotation' : 'Resume Rotation'}</span>
            </button>

            <button
              onClick={() => setWireframe(!wireframe)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
                wireframe ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40' : 'glass-panel text-slate-300 hover:text-white'
              }`}
            >
              <Box className="w-4 h-4 text-cyan-400" />
              <span>{wireframe ? 'Solid Mode' : 'Wireframe Grid'}</span>
            </button>

            <button
              onClick={() => setSpatialAudio(!spatialAudio)}
              className={`hidden sm:flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
                spatialAudio ? 'bg-purple-500/20 text-purple-300 border border-purple-500/40' : 'glass-panel text-slate-300'
              }`}
            >
              <Volume2 className="w-4 h-4 text-purple-400" />
              <span>{spatialAudio ? 'Spatial Audio On' : 'Mute Audio'}</span>
            </button>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono text-slate-400">
            <div className="flex items-center gap-2">
              <Sliders className="w-4 h-4 text-slate-500" />
              <span>Speed:</span>
              <input
                type="range"
                min="0"
                max="0.04"
                step="0.002"
                value={rotationSpeed}
                onChange={(e) => setRotationSpeed(parseFloat(e.target.value))}
                className="w-24 accent-purple-500 cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

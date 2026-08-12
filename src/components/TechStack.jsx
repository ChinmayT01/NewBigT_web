import React from 'react';
import { Code2, Terminal, Layers, Cpu, CheckCircle2, Workflow, Wrench } from 'lucide-react';

export default function TechStack() {
  const technologies = [
    {
      name: "React 18 & JSX",
      type: "UI Component Core",
      desc: "Declarative, state-driven user interface architecture with modular component lifecycle.",
      color: "from-blue-500 to-cyan-400"
    },
    {
      name: "Tailwind CSS v3",
      type: "Utility-First Design System",
      desc: "Custom glassmorphism, responsive grid breakpoints, glowing gradients, and zero runtime CSS overhead.",
      color: "from-cyan-400 to-teal-400"
    },
    {
      name: "Three.js & WebGL2",
      type: "3D Spatial Engine",
      desc: "Hardware-accelerated 3D viewport rendering, custom GLSL shader uniforms, and real-time mesh lighting.",
      color: "from-purple-500 to-indigo-500"
    },
    {
      name: "WebXR Device API",
      type: "Immersion Standard",
      desc: "Native browser integration for head-mounted displays and motion controllers with zero friction.",
      color: "from-pink-500 to-rose-400"
    },
    {
      name: "Vite 5 Build Engine",
      type: "Next-Gen Bundler",
      desc: "Instant HMR development feedback and ultra-optimized production ESM chunk bundling.",
      color: "from-amber-400 to-orange-500"
    },
    {
      name: "Lucide React Icons",
      type: "Vector Systems",
      desc: "Clean, consistent, scalable iconography engineered specifically for dark cyberpunk interfaces.",
      color: "from-emerald-400 to-cyan-500"
    }
  ];

  return (
    <section id="tech" className="py-24 relative overflow-hidden bg-radial">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel text-xs font-mono font-semibold text-purple-300 uppercase tracking-widest mb-4">
            <Code2 className="w-4 h-4 text-purple-400" />
            Stack Architecture
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-white mb-6 tracking-tight">
            Powered by Modern <span className="text-gradient">JSX & Tailwind</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Built using industry-standard open-source web technologies for maximum performance, maintainability, and responsiveness.
          </p>
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {technologies.map((tech, idx) => (
            <div 
              key={idx}
              className="glass-panel p-8 rounded-3xl relative border border-white/10 hover:border-purple-500/40 hover:scale-[1.02] transition-all group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-tr ${tech.color} p-[1px] shadow-lg`}>
                  <div className="w-full h-full bg-[#0c0c14] rounded-[11px] flex items-center justify-center">
                    <Terminal className="w-5 h-5 text-white" />
                  </div>
                </div>
                <span className="text-[10px] font-mono uppercase px-2.5 py-1 rounded-full bg-white/5 text-slate-400 border border-white/10">
                  {tech.type}
                </span>
              </div>

              <h3 className="font-heading font-bold text-xl text-white mb-2 group-hover:text-purple-300 transition-colors">
                {tech.name}
              </h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                {tech.desc}
              </p>
            </div>
          ))}
        </div>

        {/* System Compatibility Checklist */}
        <div className="glass-panel p-8 rounded-3xl border border-white/10 max-w-4xl mx-auto">
          <h4 className="font-heading font-bold text-lg text-white mb-6 text-center flex items-center justify-center gap-2">
            <Workflow className="w-5 h-5 text-cyan-400" />
            <span>Developer Quality & Compatibility Standards</span>
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs text-slate-300 font-mono">
            <div className="flex items-center gap-2.5 p-2 rounded-lg bg-white/5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>100% React JSX Componentized</span>
            </div>
            <div className="flex items-center gap-2.5 p-2 rounded-lg bg-white/5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Tailwind CSS Utility Classes</span>
            </div>
            <div className="flex items-center gap-2.5 p-2 rounded-lg bg-white/5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Fully Responsive (Mobile & Desktop)</span>
            </div>
            <div className="flex items-center gap-2.5 p-2 rounded-lg bg-white/5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Three.js WebGL Viewport Included</span>
            </div>
            <div className="flex items-center gap-2.5 p-2 rounded-lg bg-white/5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Glassmorphic Dark Theme Aesthetics</span>
            </div>
            <div className="flex items-center gap-2.5 p-2 rounded-lg bg-white/5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Vite HMR & Fast ESM Bundling</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

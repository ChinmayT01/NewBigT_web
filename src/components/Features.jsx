import React from 'react';
import { Sparkles, CheckCircle2, Shield, Eye, Layers } from 'lucide-react';

export default function Features({ onOpenVrModal }) {
  const badges = [
    { title: "Precision-Perfect", desc: "Sub-millimeter spatial tracking & low-latency response." },
    { title: "3D Interface", desc: "Tactile diegetic UI elements integrated into spatial environment." },
    { title: "VR Compatibility", desc: "Cross-platform support for Vision Pro, Quest 3 & WebXR." }
  ];

  return (
    <section id="features" className="py-16 max-w-4xl mx-auto px-6 text-slate-300">
      
      {/* 1. Project Overview */}
      <div className="mb-16">
        <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-white mb-6">
          Project Overview
        </h2>
        <p className="text-base sm:text-lg leading-relaxed text-slate-400 font-normal">
          This project focused on redefining the virtual reality encounter to deliver a more immersive, emotionally engaging, and intuitive user experience. The objective was to craft a seamless blend of storytelling and interaction that would resonate deeply with users and push the boundaries of digital engagement. Collaborating closely with stakeholders, we identified key goals around immersion, accessibility, and performance optimization. From early concept sketches to high-fidelity prototypes, every phase was guided by a commitment to user-centric design and narrative cohesion. Our role was to bridge the gap between technology and emotion by designing a VR experience that was not only visually compelling but also intuitive and impactful. We initiated the process with in-depth discovery sessions and user flow mapping to define key interactions, understand user motivations, and ensure alignment with strategic objectives. This foundation shaped a compelling and cohesive experience from start to finish.
        </p>
      </div>

      {/* 2. The Challenge & Concept */}
      <div className="mb-16">
        <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-white mb-6">
          The Challenge & Concept
        </h2>
        <p className="text-base sm:text-lg leading-relaxed text-slate-400 font-normal">
          In an evolving landscape of immersive technology, the brand came to us with a clear vision — to reimagine their virtual reality encounter in a way that not only reflected their core identity but also laid the groundwork for future innovation. Their existing VR experience felt disjointed, lacked narrative cohesion, and struggled to fully engage users on an emotional or interactive level. The challenge was to transform this fragmented environment into a seamless, intuitive journey that could captivate audiences and scale with advancing technology.
        </p>
      </div>

      {/* 3. Visual Identity & Component Architecture */}
      <div className="mb-14">
        <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-white mb-6">
          Visual Identity & Component Architecture
        </h2>
        <p className="text-base sm:text-lg leading-relaxed text-slate-400 font-normal mb-8">
          Once the strategy was finalized, we moved into the design and development of the virtual reality experience. Our UX process began with low-fidelity spatial sketches and interaction flows to define user movement, engagement points, and environmental hierarchy. After validating core interactions, we advanced to high-fidelity 3D prototypes, focusing on immersive UI elements and tactile feedback. These designs laid the foundation for a cohesive VR design system that seamlessly blended visual storytelling with intuitive user interaction.
        </p>

        {/* Feature Badges Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10">
          {badges.map((badge, idx) => (
            <div 
              key={idx}
              className="bg-[#14141c] border border-white/[0.08] p-6 rounded-2xl hover:border-purple-500/30 transition-colors flex flex-col justify-between"
            >
              <div className="flex items-center gap-3 mb-3">
                <CheckCircle2 className="w-5 h-5 text-purple-400 shrink-0" />
                <h3 className="font-heading font-bold text-white text-lg">
                  {badge.title}
                </h3>
              </div>
              <p className="text-slate-400 text-xs leading-relaxed">
                {badge.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 4. Large Banner Showcase Image */}
      <div className="my-16 rounded-3xl overflow-hidden border border-white/10 bg-[#12121a] shadow-2xl">
        <img
          src="https://framerusercontent.com/images/zlyTvTfBOjREV2mBoFI5EOe58GE.png"
          alt="Virtual Reality Encounter Banner Showcase"
          className="w-full h-auto object-cover max-h-[600px] w-full"
          onError={(e) => {
            e.target.src = "assets/images/69auPD1YzLBCNcO5v9D5nks5aS4_24e910.png";
          }}
        />
      </div>

      {/* 5. Real-Time Environmental Feedback */}
      <div className="mb-16">
        <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-white mb-6">
          Real-Time Environmental Feedback
        </h2>
        <p className="text-base sm:text-lg leading-relaxed text-slate-400 font-normal mb-8">
          Ensuring real-time environmental feedback was a core focus throughout the development of the virtual reality experience. In immersive spaces, users expect their actions—whether through gaze, gesture, or motion—to instantly influence their surroundings. To meet this expectation, we engineered responsive interaction loops that delivered immediate visual, auditory, and haptic feedback. Dynamic environmental cues—like lighting changes, object animations, and spatial audio—were triggered based on real-time input to reinforce user presence and immersion. We conducted extensive testing across multiple VR platforms and hardware configurations to validate latency, synchronization accuracy, and the consistency of user feedback. Performance optimizations such as lightweight shaders, level-of-detail adjustments, and input prediction algorithms helped maintain fluid responsiveness.
        </p>
      </div>

      {/* Interactive VR Viewport Banner Callout */}
      <div className="bg-gradient-to-r from-purple-900/30 via-[#14141c] to-indigo-900/30 border border-purple-500/30 p-8 rounded-3xl text-center">
        <h3 className="font-heading font-bold text-xl text-white mb-3">
          Experience the 3D Encounter Model Live
        </h3>
        <p className="text-slate-400 text-sm mb-6 max-w-xl mx-auto">
          Test real-time spatial rotation, wireframe shaders, and particle rendering directly in your browser.
        </p>
        <button
          onClick={onOpenVrModal}
          className="px-6 py-3 rounded-full bg-purple-600 hover:bg-purple-500 text-white font-semibold text-xs tracking-wider uppercase transition-all hover:scale-105 shadow-lg shadow-purple-600/30"
        >
          Open 3D WebXR Viewport
        </button>
      </div>
    </section>
  );
}

import React from 'react';
import { Star, Quote, MessageSquare } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      quote: "The Virtual Reality Encounter template set a new standard for our agency. The spatial depth and responsiveness in React JSX with Tailwind CSS is unmatched.",
      author: "Elena Rostova",
      role: "Lead Creative Director",
      company: "Nexus VR Labs",
      rating: 5
    },
    {
      quote: "Building our WebXR product showcase on top of this architecture saved us weeks of development. The custom Three.js viewport integration works seamlessly.",
      author: "Marcus Thorne",
      role: "Principal 3D Architect",
      company: "Aetherial Spatial Solutions",
      rating: 5
    },
    {
      quote: "Stunning dark-mode aesthetics, fluid micro-interactions, and modular JSX code structure. It wowed our clients from the very first demo.",
      author: "Sophia Lin",
      role: "Head of Digital Experience",
      company: "Agenciy Studio",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-24 relative bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel text-xs font-mono font-semibold text-cyan-300 uppercase tracking-widest mb-4">
            <MessageSquare className="w-4 h-4 text-cyan-400" />
            Client Reviews
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-white mb-6 tracking-tight">
            Trusted by Digital <span className="text-gradient">Visionaries</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            See how top spatial agencies and 3D creative teams leverage our React JSX architecture for high-impact spatial web experiences.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <div 
              key={idx}
              className="glass-panel p-8 rounded-3xl relative border border-white/10 hover:border-purple-500/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-1 text-amber-400 mb-6">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <Quote className="w-8 h-8 text-purple-500/40 mb-4" />

                <p className="text-slate-300 text-sm leading-relaxed mb-6 italic">
                  "{rev.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-purple-500 to-cyan-400 flex items-center justify-center font-bold text-white text-sm">
                  {rev.author.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">{rev.author}</h4>
                  <p className="text-xs text-slate-400 font-mono">{rev.role} • <span className="text-purple-400">{rev.company}</span></p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

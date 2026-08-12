import React from 'react';
import { Sparkles, Glasses, ArrowDown } from 'lucide-react';

export default function Hero({ onOpenVrModal }) {
  return (
    <section id="overview" className="relative pt-36 pb-16 md:pt-44 md:pb-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        
        {/* Tag Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/25 text-purple-300 text-xs font-semibold uppercase tracking-widest mb-6">
          <Sparkles className="w-3.5 h-3.5 text-purple-400" />
          <span>Virtual Reality</span>
        </div>

        {/* Main Title */}
        <h1 className="font-heading font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-white mb-6 leading-[1.1]">
          Virtual Reality <br className="hidden sm:inline" />
          <span className="bg-gradient-to-b from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
            Encounter
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-sans">
          Futuristic tech meets fearless design — branding for the next-gen AR headset.
        </p>

        {/* Interactive VR Launch Trigger */}
        <div className="flex justify-center mb-14">
          <button
            onClick={onOpenVrModal}
            className="group flex items-center gap-3 px-6 py-3.5 rounded-full bg-white/10 hover:bg-purple-600 border border-white/20 hover:border-purple-500 text-white font-semibold text-sm transition-all duration-300 hover:scale-105 shadow-xl"
          >
            <Glasses className="w-4 h-4 text-purple-400 group-hover:text-white transition-colors" />
            <span>Launch 3D WebXR Viewport</span>
          </button>
        </div>

        {/* Hero Cover Image */}
        <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-[#12121a] shadow-2xl group">
          <img
            src="https://framerusercontent.com/images/Um8FB6BTwT1FeP2mHLTpOqDcXMU.png"
            alt="Virtual Reality Encounter Cover"
            className="w-full h-auto object-cover max-h-[650px] w-full"
            onError={(e) => {
              // Fallback to local image or gradient banner if needed
              e.target.src = "assets/images/69auPD1YzLBCNcO5v9D5nks5aS4_9972ac.png";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0f] via-transparent to-transparent opacity-40"></div>
        </div>
      </div>
    </section>
  );
}

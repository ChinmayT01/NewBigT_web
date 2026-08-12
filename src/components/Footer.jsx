import React from 'react';
import { ArrowRight, ArrowUp, Glasses } from 'lucide-react';

export default function Footer({ onOpenVrModal }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/10 bg-[#09090e] pt-20 pb-12 relative">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Next Project Callout */}
        <div className="bg-[#12121a] border border-white/[0.08] p-8 md:p-12 rounded-3xl mb-16 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-purple-500/30 transition-colors group">
          <div>
            <span className="text-xs font-mono font-semibold text-purple-400 uppercase tracking-widest block mb-2">
              Next Case Study
            </span>
            <h3 className="font-heading font-extrabold text-2xl sm:text-4xl text-white group-hover:text-purple-300 transition-colors">
              Spatial Twin Experience &rarr;
            </h3>
            <p className="text-slate-400 text-sm mt-2 max-w-md">
              Explore our spatial digital twin architecture built for enterprise simulation.
            </p>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <button
              onClick={onOpenVrModal}
              className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-xs tracking-wider uppercase transition-all"
            >
              Interactive 3D Demo
            </button>
            <a
              href="#"
              className="w-12 h-12 rounded-full bg-purple-600 hover:bg-purple-500 text-white flex items-center justify-center transition-transform group-hover:translate-x-1"
            >
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Footer Bottom Grid */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-white/5 text-xs text-slate-400 font-sans">
          <div className="flex items-center gap-3">
            <span className="font-heading font-extrabold text-white text-base">AGENCIY</span>
            <span className="text-slate-500">•</span>
            <span>&copy; 2026 Agenciy Template. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-purple-400" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

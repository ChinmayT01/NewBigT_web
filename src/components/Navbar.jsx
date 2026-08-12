import React, { useState, useEffect } from 'react';
import { Glasses, Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';

export default function Navbar({ onOpenVrModal }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-[#0b0b0f]/90 backdrop-blur-xl border-b border-white/10 py-4 shadow-2xl' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <span className="font-heading font-extrabold text-2xl tracking-tight text-white group-hover:text-purple-400 transition-colors">
            AGENCIY
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <a href="#" className="hover:text-white transition-colors">Home</a>
          <a href="#overview" className="text-white font-semibold flex items-center gap-1">
            Projects
            <span className="w-1 h-1 rounded-full bg-purple-400"></span>
          </a>
          <a href="#services" className="hover:text-white transition-colors">Services</a>
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </nav>

        {/* Action Button */}
        <div className="hidden md:flex items-center gap-4">
          <button 
            onClick={onOpenVrModal}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-white font-semibold text-xs tracking-wide uppercase transition-all hover:scale-105"
          >
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>Interactive 3D VR</span>
          </button>
          
          <a
            href="#contact"
            className="px-5 py-2.5 rounded-full bg-purple-600 hover:bg-purple-500 text-white font-semibold text-xs tracking-wide uppercase transition-all shadow-lg shadow-purple-600/20"
          >
            Let's Talk
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-slate-300 hover:text-white"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#12121a] border-b border-white/10 px-6 py-6 mt-4 flex flex-col gap-4">
          <a href="#" onClick={() => setMobileMenuOpen(false)} className="text-slate-300 hover:text-white font-medium">Home</a>
          <a href="#overview" onClick={() => setMobileMenuOpen(false)} className="text-white font-bold">Projects</a>
          <a href="#services" onClick={() => setMobileMenuOpen(false)} className="text-slate-300 hover:text-white font-medium">Services</a>
          <a href="#about" onClick={() => setMobileMenuOpen(false)} className="text-slate-300 hover:text-white font-medium">About</a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="text-slate-300 hover:text-white font-medium">Contact</a>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenVrModal();
            }}
            className="w-full mt-2 py-3 rounded-full bg-purple-600 text-white font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2"
          >
            <Sparkles className="w-4 h-4" />
            Interactive 3D VR
          </button>
        </div>
      )}
    </header>
  );
}

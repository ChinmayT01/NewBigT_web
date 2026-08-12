import React, { useState } from 'react';
import { Eye, Maximize2, Sparkles, Image as ImageIcon, Check } from 'lucide-react';

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryItems = [
    {
      id: 1,
      title: "Cybernetic Void Environment",
      category: "Environments",
      image: "assets/images/69auPD1YzLBCNcO5v9D5nks5aS4_9972ac.png",
      desc: "Procedural void space with neon grid structures and depth fog."
    },
    {
      id: 2,
      title: "Spatial HUD Overlay",
      category: "UI/UX",
      image: "assets/images/69auPD1YzLBCNcO5v9D5nks5aS4_24e910.png",
      desc: "Diegetic user interface floating in 3D spatial world space."
    },
    {
      id: 3,
      title: "Refraction & Glass Shader",
      category: "Shaders",
      image: "assets/images/NH3j2ImSbnpK9zkiaepQLR9qlY_26ef0d.png",
      desc: "Real-time optical refraction with dispersion effects."
    },
    {
      id: 4,
      title: "Nexus Core Hub",
      category: "Environments",
      image: "assets/images/5oeaWFgXfxXfxP3JKNg5Xk6E_e318c8.png",
      desc: "Central hub environment for multi-user spatial collaboration."
    },
    {
      id: 5,
      title: "Haptic Motion Controller UI",
      category: "UI/UX",
      image: "assets/images/2atPLR2IqGGvLEIP5GYe8EnOOeo_14063a.png",
      desc: "Tactile visual feedback for 6DoF hand controllers."
    },
    {
      id: 6,
      title: "Volumetric Particle Mesh",
      category: "Shaders",
      image: "assets/images/69auPD1YzLBCNcO5v9D5nks5aS4_19f93d.png",
      desc: "GPU accelerated particle stream rendered at 120 FPS."
    }
  ];

  const categories = ['All', 'Environments', 'Shaders', 'UI/UX'];

  const filteredItems = activeFilter === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <section id="gallery" className="py-24 relative bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel text-xs font-mono text-purple-300 uppercase tracking-widest mb-3">
              <ImageIcon className="w-3.5 h-3.5 text-purple-400" />
              Visual Showcase
            </div>
            <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
              Spatial Artifact <span className="text-gradient">Gallery</span>
            </h2>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap gap-2 glass-panel p-1.5 rounded-2xl self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold font-mono transition-all ${
                  activeFilter === cat
                    ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/30'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="glass-panel rounded-3xl overflow-hidden group cursor-pointer border border-white/10 hover:border-purple-500/40 hover:scale-[1.02] transition-all duration-300 flex flex-col"
            >
              <div className="relative aspect-video bg-[#0f0f18] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    // Fallback placeholder image gradient if asset path differs
                    e.target.style.display = 'none';
                    e.target.parentNode.style.background = 'linear-gradient(135deg, #1e1b4b, #311b92, #00f0ff)';
                  }}
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-purple-600/90 text-white flex items-center justify-center shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform">
                    <Maximize2 className="w-5 h-5" />
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-mono text-purple-300 border border-white/10">
                  {item.category}
                </div>
              </div>

              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="font-heading font-bold text-lg text-white mb-2 group-hover:text-purple-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 text-xs leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-purple-400 font-mono">
                  <span>Inspect Render</span>
                  <Eye className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-in fade-in"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full glass-panel-glow rounded-3xl overflow-hidden p-6 border border-purple-500/40"
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-white hover:bg-red-500/20 hover:text-red-400 transition-colors z-10"
            >
              &times;
            </button>
            <div className="aspect-video w-full rounded-2xl overflow-hidden bg-black mb-6">
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full h-full object-contain"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentNode.style.background = 'linear-gradient(135deg, #1e1b4b, #311b92, #00f0ff)';
                }}
              />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-mono text-purple-400 uppercase tracking-widest">
                  {selectedImage.category}
                </span>
                <h3 className="font-heading font-bold text-2xl text-white">
                  {selectedImage.title}
                </h3>
                <p className="text-slate-400 text-sm mt-1">
                  {selectedImage.desc}
                </p>
              </div>
              <button 
                onClick={() => setSelectedImage(null)}
                className="px-6 py-2.5 rounded-xl bg-purple-600 text-white font-semibold text-sm hover:bg-purple-500 transition-colors"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

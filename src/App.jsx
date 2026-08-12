import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectMeta from './components/ProjectMeta';
import Features from './components/Features';
import Footer from './components/Footer';
import VrExperienceModal from './components/VrExperienceModal';

export default function App() {
  const [isVrModalOpen, setIsVrModalOpen] = useState(false);

  const handleOpenVrModal = () => setIsVrModalOpen(true);
  const handleCloseVrModal = () => setIsVrModalOpen(false);

  return (
    <div className="min-h-screen bg-[#0b0b0f] text-slate-100 font-sans selection:bg-purple-500/30 selection:text-purple-200">
      {/* Header Navigation */}
      <Navbar onOpenVrModal={handleOpenVrModal} />

      {/* Main Content Sections (Matching Framer Template) */}
      <main>
        <Hero onOpenVrModal={handleOpenVrModal} />
        <ProjectMeta />
        <Features onOpenVrModal={handleOpenVrModal} />
      </main>

      {/* Footer */}
      <Footer onOpenVrModal={handleOpenVrModal} />

      {/* Interactive 3D WebXR Viewport Modal */}
      <VrExperienceModal isOpen={isVrModalOpen} onClose={handleCloseVrModal} />
    </div>
  );
}

import React from 'react';

export default function ProjectMeta() {
  const metaData = [
    { label: "CLIENT", value: "Nexus VR Labs" },
    { label: "SERVICES", value: "UI/UX, 3D Asset Creation" },
    { label: "YEAR", value: "2026" },
    { label: "CATEGORY", value: "Virtual Reality" }
  ];

  return (
    <section className="py-8 max-w-6xl mx-auto px-6">
      <div className="bg-[#14141c] border border-white/[0.08] rounded-2xl p-8 md:p-10 shadow-xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {metaData.map((item, idx) => (
            <div key={idx} className="flex flex-col">
              <span className="text-[11px] font-mono font-semibold tracking-widest text-slate-400 uppercase mb-2">
                {item.label}
              </span>
              <span className="font-heading font-bold text-white text-base sm:text-lg">
                {item.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

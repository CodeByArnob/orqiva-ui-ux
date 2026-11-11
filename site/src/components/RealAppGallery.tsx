import React, { useState } from 'react';
import { ExternalLink, Sparkles, Image, Layers } from 'lucide-react';

interface AppShowcase {
  id: number;
  archetype: string;
  name: string;
  domain: string;
  image: string;
  palette: { canvas: string; accent: string; label: string };
  tags: string[];
  tokens: string[];
}

const APP_SHOWCASES: AppShowcase[] = [
  {
    id: 1,
    archetype: 'Luxury Editorial',
    name: 'AuraGlow Jewelry Atelier',
    domain: 'High-End E-Commerce',
    image: 'assets/showcase/01-auraglow-luxury-jewelry.jpg',
    palette: { canvas: '#0B0B0D', accent: '#D4AF37', label: 'Obsidian Gold' },
    tags: ['Desktop Web', 'Luxury', 'Editorial'],
    tokens: ['Playfair Display', 'Champagne Gold', 'Asymmetric Grid'],
  },
  {
    id: 2,
    archetype: 'Cosmic FinTech SaaS',
    name: 'OrbitFinance Dashboard',
    domain: 'Startup Finance SaaS',
    image: 'assets/showcase/02-orbitfinance-cosmic-saas.jpg',
    palette: { canvas: '#060714', accent: '#8B5CF6', label: 'Cosmic Void' },
    tags: ['SaaS', 'Dark Mode', 'Glassmorphic'],
    tokens: ['Plus Jakarta Sans', 'Neon Violet', 'Radial Nebula BG'],
  },
  {
    id: 3,
    archetype: 'Liquid Chrome Banking',
    name: 'NovaBank 3-Screen Mobile',
    domain: 'Neo-Banking App',
    image: 'assets/showcase/03-novabank-liquid-mobile-banking.jpg',
    palette: { canvas: '#050505', accent: '#FF3B56', label: 'Chrome Crimson' },
    tags: ['iOS', 'Android', '3-Screen Flow'],
    tokens: ['56px Keypad', 'Dual Cards', 'Coral/Platinum'],
  },
  {
    id: 4,
    archetype: 'Dark Pulse Productivity',
    name: 'PulseFocus Personal Metrics',
    domain: 'Mobile Productivity',
    image: 'assets/showcase/04-pulsefocus-dark-productivity.jpg',
    palette: { canvas: '#0C0D14', accent: '#8B5CF6', label: 'Stealth Navy' },
    tags: ['iOS', 'Goal Ring', 'Dark Mode'],
    tokens: ['SVG Ring', '7-Day Bars', 'Pill Dock Nav'],
  },
  {
    id: 5,
    archetype: 'Timetable Suite',
    name: 'ChronoTask Mobile Suite',
    domain: 'Task & Calendar App',
    image: 'assets/showcase/05-chronotask-mobile-timetable.jpg',
    palette: { canvas: '#0E0F13', accent: '#06B6D4', label: 'Teal Minimal' },
    tags: ['iOS', 'Calendar', 'Task Tracking'],
    tokens: ['Date Scrubber', 'Color-Coded Events', 'Stopwatch'],
  },
  {
    id: 6,
    archetype: 'Neumorphic Dark Workspace',
    name: 'Synthetix Workspace Tasks',
    domain: 'Enterprise Productivity',
    image: 'assets/showcase/06-synthetix-workspace-tasks.jpg',
    palette: { canvas: '#0E0E12', accent: '#2DD4BF', label: 'Matte Teal' },
    tags: ['Mobile', 'Workspace', 'Dark Cards'],
    tokens: ['Soft-Elevation', 'Calendar Grid', 'Absence Tracker'],
  },
  {
    id: 7,
    archetype: 'Neo-Banking & Spending',
    name: 'Veritas Wealth & Banking',
    domain: 'Personal Finance App',
    image: 'assets/showcase/07-veritas-wealth-spending.jpg',
    palette: { canvas: '#111214', accent: '#2DD4BF', label: 'Mint Dark' },
    tags: ['iOS', 'Banking', 'Donut Analytics'],
    tokens: ['Dual Cards', '6-Segment Donut', 'Category Icons'],
  },
];

export const RealAppGallery: React.FC = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'web' | 'mobile' | 'saas'>('all');

  const filters = [
    { id: 'all', label: 'All Archetypes (7)' },
    { id: 'web', label: 'Web / Desktop' },
    { id: 'mobile', label: 'Mobile Native' },
    { id: 'saas', label: 'SaaS / Dashboard' },
  ] as const;

  const filterMap: Record<string, number[]> = {
    all: [1, 2, 3, 4, 5, 6, 7],
    web: [1, 2],
    mobile: [3, 4, 5, 6, 7],
    saas: [2],
  };

  const visible = APP_SHOWCASES.filter(s => filterMap[selectedFilter].includes(s.id));

  return (
    <div className="p-6 sm:p-10 rounded-3xl bg-slate-900/40 border border-slate-800 shadow-2xl">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
        <div>
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-mono mb-3">
            <Image className="w-3.5 h-3.5" />
            <span>REAL PRODUCTION REFERENCE IMAGES</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            7 Tier-1 Application Archetypes
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-slate-400 max-w-2xl">
            Every archetype is backed by real production reference designs, not wireframes or generic mockups. ORQIVA understands their domain, visual DNA, and token signatures.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap gap-2 p-1 bg-slate-950/60 rounded-xl border border-slate-800 shrink-0">
          {filters.map(f => (
            <button
              key={f.id}
              onClick={() => setSelectedFilter(f.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all ${
                selectedFilter === f.id
                  ? 'bg-sky-500 text-slate-950 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* Masonry-style Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {visible.map((app, idx) => (
          <div
            key={app.id}
            onMouseEnter={() => setHoveredId(app.id)}
            onMouseLeave={() => setHoveredId(null)}
            className={`group relative rounded-2xl overflow-hidden border transition-all duration-300 cursor-default ${
              hoveredId === app.id
                ? 'border-sky-500/60 shadow-xl shadow-sky-500/10 scale-[1.01]'
                : 'border-slate-800 hover:border-slate-700'
            } ${idx === 0 ? 'sm:col-span-2 lg:col-span-1' : ''}`}
          >
            {/* Image Container */}
            <div className="relative aspect-[4/3] bg-slate-950 overflow-hidden">
              <img
                src={app.image}
                alt={`${app.name} - ${app.archetype} design reference`}
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />

              {/* Top badges */}
              <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                {app.tags.slice(0, 2).map(tag => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded-full bg-slate-900/90 text-[10px] font-mono text-sky-400 border border-slate-700/80 backdrop-blur-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Archetype number badge */}
              <div className="absolute top-3 right-3 w-8 h-8 rounded-xl bg-slate-900/90 border border-slate-700 flex items-center justify-center text-xs font-black text-white backdrop-blur-sm">
                #{app.id}
              </div>

              {/* Color palette dot */}
              <div className="absolute bottom-3 right-3 flex items-center space-x-1.5">
                <div
                  className="w-3.5 h-3.5 rounded-full ring-1 ring-white/20"
                  style={{ background: app.palette.canvas }}
                />
                <div
                  className="w-3.5 h-3.5 rounded-full ring-1 ring-white/20"
                  style={{ background: app.palette.accent }}
                />
                <span className="text-[9px] font-mono text-slate-400">{app.palette.label}</span>
              </div>
            </div>

            {/* Card Body */}
            <div className="p-4 bg-slate-900/80 backdrop-blur-sm">
              <div className="text-[10px] font-mono uppercase tracking-wider text-sky-400 mb-1">
                {app.archetype}
              </div>
              <h3 className="text-sm font-bold text-white group-hover:text-sky-300 transition-colors">
                {app.name}
              </h3>
              <p className="text-[11px] text-slate-500 mt-0.5">{app.domain}</p>

              {/* Design tokens */}
              <div className="mt-3 flex flex-wrap gap-1.5">
                {app.tokens.map(token => (
                  <span
                    key={token}
                    className="px-2 py-0.5 rounded-md bg-slate-800 text-[10px] font-mono text-slate-400 border border-slate-700/50"
                  >
                    {token}
                  </span>
                ))}
              </div>

              {/* Footer */}
              <div className="mt-3 pt-3 border-t border-slate-800/60 flex justify-between items-center text-[10px] font-mono">
                <span className="text-emerald-400">WCAG 2.2 AA</span>
                <span className="text-slate-500">Codified Tokens</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="mt-8 flex items-center justify-between pt-6 border-t border-slate-800">
        <div className="flex items-center space-x-2 text-xs text-slate-500 font-mono">
          <Sparkles className="w-3.5 h-3.5 text-sky-400" />
          <span>All archetypes include codified design tokens, WCAG contrast matrices, and framework-specific code examples.</span>
        </div>
        <div className="flex items-center space-x-1.5 text-xs text-sky-400 font-semibold hover:text-sky-300 transition-colors shrink-0 ml-4">
          <Layers className="w-3.5 h-3.5" />
          <span>7 Archetypes Supported</span>
        </div>
      </div>
    </div>
  );
};

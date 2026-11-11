import React, { useState } from 'react';
import { 
  Sparkles, Terminal, Copy, Check, ArrowRight, ShieldCheck, 
  Smartphone, Monitor, Cpu, Layers, ExternalLink, Download, Star, Eye
} from 'lucide-react';
import { TokenPlayground } from './TokenPlayground';
import { MotionHeroGraphic } from './MotionHeroGraphic';
import { ContrastCalculator } from './ContrastCalculator';

export const LandingPage: React.FC<{ 
  onNavigateToDocs: () => void;
  onNavigateToShowcase: () => void;
}> = ({ onNavigateToDocs, onNavigateToShowcase }) => {
  const [copied, setCopied] = useState(false);

  const copyCommand = () => {
    navigator.clipboard.writeText('npx skills add CodeByArnob/orqiva-ui-ux --skill orqiva-ui-ux -g');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const screenshots = [
    { title: 'Premium Mobile Banking', file: '01-mobile-banking.png', dir: 'Trust-Led Restrained', desc: 'ApexBank mobile interface featuring biometric auth, virtual card freeze, and transaction categorizer.' },
    { title: 'SaaS Telemetry Dashboard', file: '02-saas-dashboard.png', dir: 'Utilitarian Data-Dense', desc: 'CloudScale real-time cluster monitor with P99 latency sparklines and filterable service data table.' },
    { title: 'Modern E-Commerce Storefront', file: '03-ecommerce.png', dir: 'Conversion-Led Commerce', desc: 'Nordic Atelier luxury chronograph detail with dynamic variant switcher and slide-out cart drawer.' },
    { title: 'Clinical Healthcare Portal', file: '04-healthcare.png', dir: 'Calm Human-Centered', desc: 'AuraCare EHR system with real-time vitals monitoring and interactive medication administration regimen.' },
    { title: 'Developer IDE Workspace', file: '05-developer-workspace.png', dir: 'Utilitarian DevTools', desc: 'Nexus Studio with multi-file explorer, syntax-highlighted code editor, and live terminal execution log.' },
    { title: 'Responsive Marketing Portal', file: '06-responsive-website.png', dir: 'Modern Minimal Editorial', desc: 'ORQIVA marketing landing page with hero conversion anatomy and interactive FAQ accordions.' },
    { title: 'Before & After Heuristic Redesign', file: '07-before-after-redesign.png', dir: 'Audit & Refactor', desc: 'Direct side-by-side comparison of high-friction legacy clinical records table vs accessible card reflow.' },
    { title: 'Desktop vs. Mobile Reflow Comparison', file: '08-responsive-comparison.png', dir: 'Adaptive Reflow', desc: 'Dual-frame responsive preview demonstrating ergonomic thumb-zone layout adaptation.' },
  ];

  return (
    <div className="space-y-20 pb-20">
      {/* Hero Section */}
      <section className="relative pt-12 pb-6 px-4 sm:px-6 lg:px-8 text-center max-w-5xl mx-auto">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-400 text-xs font-mono mb-6 shadow-sm">
          <Sparkles className="w-3.5 h-3.5" />
          <span>PRODUCTION OPEN-SOURCE RELEASE v1.0.0</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
          Adaptive UI/UX Design Intelligence for <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-teal-300 to-sky-300">AI Coding Agents</span>
        </h1>

        <p className="mt-6 text-base sm:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto font-normal">
          Equip your AI pair programmer with senior product design heuristics, domain-specific visual directions, and WCAG 2.2 AA accessibility standards. Real working implementations, zero generic purple gradients.
        </p>

        {/* Dual CTA & Command Box */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onNavigateToShowcase}
            className="w-full sm:w-auto px-6 py-3.5 bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold rounded-xl text-sm transition-all shadow-lg shadow-sky-500/20 flex items-center justify-center space-x-2"
          >
            <Eye className="w-4 h-4" />
            <span>Explore Live Showcase (8 Interfaces)</span>
          </button>

          <button
            onClick={onNavigateToDocs}
            className="w-full sm:w-auto px-6 py-3.5 bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 font-semibold rounded-xl text-sm transition-all flex items-center justify-center space-x-2"
          >
            <span>Read Complete Documentation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Universal Install Box */}
        <div className="mt-8 max-w-xl mx-auto p-2 bg-slate-900 border border-slate-800 rounded-2xl flex items-center justify-between text-xs font-mono shadow-2xl">
          <div className="flex items-center space-x-2 px-3 py-1 text-slate-300 truncate">
            <span className="text-sky-500 font-bold select-none">$</span>
            <span className="truncate">npx skills add CodeByArnob/orqiva-ui-ux --skill orqiva-ui-ux -g</span>
          </div>
          <button
            onClick={copyCommand}
            className="px-3 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white rounded-xl transition-colors flex items-center space-x-1.5 shrink-0"
            title="Copy command to clipboard"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? 'Copied!' : 'Copy'}</span>
          </button>
        </div>
      </section>

      {/* Motion Hero Graphic : Real-time Animated Radar Telemetry */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MotionHeroGraphic />
      </section>

      {/* Supported Coding Agents Ecosystem */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 text-center">
          <div className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-4">
            First-Class Native Support Across AI Coding Environments
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {[
              { name: 'Claude Code', tier: 'CLI Agent' },
              { name: 'Cursor', tier: 'IDE Extension' },
              { name: 'Windsurf', tier: 'Agentic IDE' },
              { name: 'Roo Code', tier: 'VSCode Agent' },
              { name: 'Antigravity', tier: 'DeepMind Agent' },
              { name: 'Gemini CLI', tier: 'CLI Tool' },
            ].map(agent => (
              <div key={agent.name} className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 flex flex-col items-center">
                <span className="text-xs font-bold text-white">{agent.name}</span>
                <span className="text-[10px] text-sky-400 font-mono mt-0.5">{agent.tier}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Contrast Calculator Tool */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ContrastCalculator />
      </section>

      {/* Real Screenshot Gallery */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 gap-4">
          <div>
            <div className="inline-flex items-center space-x-1.5 text-xs font-mono text-sky-400 mb-2">
              <CameraIcon className="w-3.5 h-3.5" />
              <span>ACTUAL RUNNING IMPLEMENTATIONS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Real Interface Screenshot Gallery
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-slate-400">
              Captured via automated headless Chrome from live running code : no stock photos, no AI image hallucinations.
            </p>
          </div>

          <button
            onClick={onNavigateToShowcase}
            className="text-xs font-semibold text-sky-400 hover:text-sky-300 flex items-center space-x-1"
          >
            <span>Launch Interactive Demo Sandbox</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {screenshots.map((s, idx) => (
            <div 
              key={idx}
              className="rounded-2xl border border-slate-800 bg-slate-900/50 overflow-hidden hover:border-slate-700 transition-all flex flex-col justify-between group shadow-lg"
            >
              <div>
                <div className="aspect-[16/10] bg-slate-950 relative overflow-hidden flex items-center justify-center border-b border-slate-800">
                  <img 
                    src={`assets/screenshots/${s.file}`} 
                    alt={s.title}
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60"></div>
                  <div className="absolute top-2 left-2 px-2 py-0.5 rounded-md bg-slate-900/90 text-[10px] font-mono text-sky-400 border border-slate-700">
                    {s.dir}
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="text-sm font-bold text-white group-hover:text-sky-400 transition-colors">
                    {s.title}
                  </h3>
                  <p className="mt-1 text-xs text-slate-400 leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </div>

              <div className="p-4 pt-0 flex justify-between items-center text-[11px] font-mono text-slate-500">
                <span>Viewport: 1440×900</span>
                <span className="text-emerald-400">WCAG 2.2 AA</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Token Playground Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <TokenPlayground />
      </section>

      {/* Core Architectural Pillars */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            The 4 Pillars of Adaptive Design Intelligence
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-400">
            Engineered to guide language models from vague visual approximations to production-grade engineering rigor.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
            <div className="w-10 h-10 rounded-xl bg-sky-500/10 text-sky-400 flex items-center justify-center mb-4">
              <Cpu className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white">1. Adaptive Discovery</h3>
            <p className="text-xs text-slate-400 mt-2 leading-relaxed">
              Analyzes codebase context, domain trust requirements, and user emotional state to select the correct visual direction before generating code.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-4">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white">2. WCAG 2.2 AA Rigor</h3>
            <p className="text-xs text-slate-400 mt-2 leading-relaxed">
              Enforces 4.5:1 text contrast, visible focus-visible indicators, modal focus traps, and 48px touch targets across all generated components.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center mb-4">
              <Smartphone className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white">3. Mobile Ergonomics</h3>
            <p className="text-xs text-slate-400 mt-2 leading-relaxed">
              Anchors primary actions within the natural thumb zone, respects hardware safe areas, and converts complex tables into responsive card systems.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center mb-4">
              <Layers className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white">4. Multi-Framework</h3>
            <p className="text-xs text-slate-400 mt-2 leading-relaxed">
              Seamlessly targets React/Next.js with Tailwind, Android Jetpack Compose, Flutter theme extensions, and React Native style tokens.
            </p>
          </div>
        </div>
      </section>

      {/* Bottom Conversion Section */}
      <section className="max-w-4xl mx-auto px-4 text-center">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 shadow-2xl">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Ready to upgrade your AI pair programming?
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-slate-400 max-w-xl mx-auto">
            Install ORQIVA in seconds and start generating accessible, production-grade interfaces today.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={copyCommand}
              className="px-6 py-3 bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold rounded-xl text-xs transition-colors flex items-center justify-center space-x-2"
            >
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? 'Command Copied!' : 'Copy Install Command'}</span>
            </button>

            <a
              href="https://github.com/CodeByArnob/orqiva-ui-ux/releases"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-xl text-xs transition-colors flex items-center justify-center space-x-2 border border-slate-700"
            >
              <Download className="w-4 h-4" />
              <span>Download Release Package (.ZIP)</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

const CameraIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
    <circle cx="12" cy="13" r="3" />
  </svg>
);

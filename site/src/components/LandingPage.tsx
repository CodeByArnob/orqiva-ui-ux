import React, { useState } from 'react';
import { 
  Sparkles, Terminal, Copy, Check, ArrowRight, ShieldCheck, 
  Smartphone, Monitor, Cpu, Layers, ExternalLink, Download, Star, Eye,
  Code2, CheckCircle2, ChevronRight, Play
} from 'lucide-react';
import { TokenPlayground } from './TokenPlayground';
import { MotionHeroGraphic } from './MotionHeroGraphic';
import { ContrastCalculator } from './ContrastCalculator';

export const LandingPage: React.FC<{ 
  onNavigateToDocs: () => void;
  onNavigateToShowcase: () => void;
}> = ({ onNavigateToDocs, onNavigateToShowcase }) => {
  const [copiedCli, setCopiedCli] = useState(false);
  const [copiedSkill, setCopiedSkill] = useState(false);
  const [activeCliTab, setActiveCliTab] = useState<'init' | 'audit' | 'install'>('init');

  const copyCliCommand = () => {
    navigator.clipboard.writeText('npx orqiva-ui-ux init');
    setCopiedCli(true);
    setTimeout(() => setCopiedCli(false), 2000);
  };

  const copySkillCommand = () => {
    navigator.clipboard.writeText('npx skills add CodeByArnob/orqiva-ui-ux --skill orqiva-ui-ux -g');
    setCopiedSkill(true);
    setTimeout(() => setCopiedSkill(false), 2000);
  };

  const showcases = [
    { 
      title: 'AuraGlow Jewelry Atelier', 
      file: 'assets/showcase/01-auraglow-luxury-jewelry.jpg', 
      dir: 'Luxury Editorial E-Commerce', 
      desc: 'Dark obsidian canvas (#0B0B0D) with champagne gold accents (#D4AF37), high-contrast serif headers, and asymmetric split-screen product showcase.',
      badge: 'Dark Obsidian & Gold'
    },
    { 
      title: 'OrbitFinance SaaS', 
      file: 'assets/showcase/02-orbitfinance-cosmic-saas.jpg', 
      dir: 'Cosmic FinTech Telemetry', 
      desc: 'Celestial void backdrop (#060714) with glowing neon violet and cyan sparklines, glassmorphic overview modules, and floating gradient cards.',
      badge: 'Cosmic Void & Neon'
    },
    { 
      title: 'NovaBank Mobile', 
      file: 'assets/showcase/03-novabank-liquid-mobile-banking.jpg', 
      dir: 'Liquid Chrome Neo-Banking', 
      desc: '3-screen continuous mobile flow: 3D fluid chrome onboarding splash, platinum/coral balance cards, and a tactile 12-key numeric transfer keypad.',
      badge: 'Liquid Chrome 3-Screen'
    },
    { 
      title: 'PulseFocus Productivity', 
      file: 'assets/showcase/04-pulsefocus-dark-productivity.jpg', 
      dir: 'Dark Pulse Personal Metrics', 
      desc: 'Stealth navy suite (#0C0D14) with concentric SVG goal completion rings (3/5 tasks), 7-day velocity bar metrics, and pill dock navigation.',
      badge: 'Radial Goal Ring & Bars'
    },
    { 
      title: 'ChronoTask Mobile Suite', 
      file: 'assets/showcase/05-chronotask-mobile-timetable.jpg', 
      dir: 'Timetable Calendar & Stopwatch', 
      desc: 'Daily progress header (2/7 tasks), color-coded chronological timetable with real-time cursor needle, and task checklist with running stopwatch.',
      badge: 'Timetable & Stopwatch'
    },
    { 
      title: 'Synthetix Workspace', 
      file: 'assets/showcase/06-synthetix-workspace-tasks.jpg', 
      dir: 'Neumorphic Dark Workspace Tasks', 
      desc: 'Pitch matte canvas (#0E0E12) with floating angled glass project cards, team absence and vacation calendar grids, and hourly resource reports.',
      badge: 'Neumorphic Dark Grid'
    },
    { 
      title: 'Veritas Wealth & Banking', 
      file: 'assets/showcase/07-veritas-wealth-spending.jpg', 
      dir: 'Neo-Banking & Donut Spending', 
      desc: 'Dual floating mint and cyan debit cards with contactless chips, quick action buttons, and a 6-segment spending breakdown donut chart.',
      badge: 'Dual Mint Cards & Donut'
    },
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

        {/* Interactive CLI Quickstart Bar */}
        <div className="mt-8 max-w-2xl mx-auto p-2 bg-slate-900 border border-slate-800 rounded-2xl flex flex-col sm:flex-row items-center justify-between text-xs font-mono shadow-2xl gap-2">
          <div className="flex items-center space-x-2 px-3 py-1 text-slate-300 truncate w-full sm:w-auto">
            <span className="text-emerald-400 font-bold select-none">$</span>
            <span className="text-sky-300 font-semibold">npx orqiva-ui-ux init</span>
            <span className="hidden md:inline text-slate-500">: Inject tokens & Tailwind preset</span>
          </div>
          <button
            onClick={copyCliCommand}
            className="w-full sm:w-auto px-4 py-2 bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold rounded-xl transition-all flex items-center justify-center space-x-1.5 shrink-0"
            title="Copy CLI command"
          >
            {copiedCli ? <Check className="w-3.5 h-3.5 text-slate-950" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copiedCli ? 'Copied to Clipboard!' : 'Run Initializer'}</span>
          </button>
        </div>
      </section>

      {/* Motion Hero Graphic : Real-time Animated Radar Telemetry */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MotionHeroGraphic />
      </section>

      {/* Interactive CLI Showcase Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/70 border border-slate-800 shadow-xl">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-6">
            <div>
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-2">
                <Terminal className="w-3.5 h-3.5" />
                <span>ZERO-DEPENDENCY DEVELOPER CLI</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                Instant Design System Injection in One Command
              </h2>
              <p className="text-sm text-slate-400 mt-1">
                Run directly in any project. No global installs required. Auto-detects Next.js, Vite, Tailwind, Flutter, or Compose.
              </p>
            </div>

            {/* CLI Command Switcher Tabs */}
            <div className="flex space-x-2 p-1 bg-slate-950/80 rounded-xl border border-slate-800">
              <button
                onClick={() => setActiveCliTab('init')}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono font-semibold transition-colors ${
                  activeCliTab === 'init' ? 'bg-sky-500 text-slate-950' : 'text-slate-400 hover:text-white'
                }`}
              >
                init
              </button>
              <button
                onClick={() => setActiveCliTab('audit')}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono font-semibold transition-colors ${
                  activeCliTab === 'audit' ? 'bg-sky-500 text-slate-950' : 'text-slate-400 hover:text-white'
                }`}
              >
                audit
              </button>
              <button
                onClick={() => setActiveCliTab('install')}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono font-semibold transition-colors ${
                  activeCliTab === 'install' ? 'bg-sky-500 text-slate-950' : 'text-slate-400 hover:text-white'
                }`}
              >
                install
              </button>
            </div>
          </div>

          {/* Terminal Output Mockup */}
          <div className="bg-slate-950 rounded-2xl border border-slate-800 overflow-hidden font-mono text-xs">
            <div className="px-4 py-2.5 bg-slate-900 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                <span className="text-slate-400 text-[11px] ml-2">bash : ~/my-project</span>
              </div>
              <span className="text-slate-500 text-[11px]">orqiva-ui-ux v1.0.0</span>
            </div>

            <div className="p-5 space-y-2 text-slate-300">
              {activeCliTab === 'init' && (
                <>
                  <div className="text-emerald-400 font-bold">$ npx orqiva-ui-ux init</div>
                  <div className="text-slate-500">Auto-detecting project stack...</div>
                  <div className="text-sky-400">  ✓ Detected Next.js 15 & Tailwind CSS</div>
                  <div className="text-slate-200 font-semibold pt-2">? Select Application Archetype:</div>
                  <div className="text-slate-400">  1) Luxury Editorial E-Commerce (AuraGlow: dark obsidian, champagne gold)</div>
                  <div className="text-slate-400">  2) Cosmic FinTech SaaS (OrbitFinance: celestial void, neon violet/cyan)</div>
                  <div className="text-slate-400">  3) Liquid Chrome Neo-Banking (NovaBank: obsidian, coral, tactile keypad)</div>
                  <div className="text-emerald-400 font-semibold pt-2">  ✓ Injected CSS Custom Properties: src/styles/orqiva-tokens.css</div>
                  <div className="text-emerald-400 font-semibold">  ✓ Generated Tailwind Preset: orqiva.preset.js</div>
                  <div className="text-emerald-400 font-semibold">  ✓ Generated TypeScript Tokens: src/tokens/orqiva.ts</div>
                  <div className="text-sky-400 pt-1 font-bold">Initialization Complete! Ready to build.</div>
                </>
              )}

              {activeCliTab === 'audit' && (
                <>
                  <div className="text-emerald-400 font-bold">$ npx orqiva-ui-ux audit</div>
                  <div className="text-slate-500">Auditing UI Codebase for Design and Accessibility Compliance...</div>
                  <div className="text-slate-300">Scanned 19 component and template files.</div>
                  <div className="text-emerald-400 pt-2 font-bold">✓ No critical design system or accessibility violations detected!</div>
                  <div className="text-slate-400 text-[11px]">All interactive buttons enforce 44x44px touch targets. All body text passes WCAG 2.2 AA (4.5:1).</div>
                </>
              )}

              {activeCliTab === 'install' && (
                <>
                  <div className="text-emerald-400 font-bold">$ npx orqiva-ui-ux install</div>
                  <div className="text-slate-500">Configuring AI Coding Agents with ORQIVA Design Intelligence...</div>
                  <div className="text-emerald-400">  ✓ Installed Cursor Rule: .cursor/rules/orqiva-ui-ux.mdc</div>
                  <div className="text-emerald-400">  ✓ Configured Claude Code: CLAUDE.md</div>
                  <div className="text-emerald-400">  ✓ Installed Windsurf Rule: .windsurfrules</div>
                  <div className="text-sky-400 pt-2 font-bold">Skill installation complete! Your AI agent is now primed.</div>
                </>
              )}
            </div>
          </div>
        </div>
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

      {/* Real Showcase Gallery : The 7 Tier-1 Application Archetypes */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 gap-4">
          <div>
            <div className="inline-flex items-center space-x-1.5 text-xs font-mono text-sky-400 mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>TIER-1 PRODUCTION APPLICATION ARCHETYPES</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Real Showcase & Design Directions
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-slate-400">
              Each interface below is a fully codified design archetype supported by ORQIVA with custom token signatures and layout heuristics.
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {showcases.map((s, idx) => (
            <div 
              key={idx}
              className="rounded-2xl border border-slate-800 bg-slate-900/50 overflow-hidden hover:border-slate-700 transition-all flex flex-col justify-between group shadow-lg"
            >
              <div>
                <div className="aspect-[16/11] bg-slate-950 relative overflow-hidden flex items-center justify-center border-b border-slate-800">
                  <img 
                    src={s.file} 
                    alt={s.title}
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                  <div className="absolute top-2 left-2 px-2.5 py-0.5 rounded-full bg-slate-900/90 text-[10px] font-mono text-sky-400 border border-slate-700">
                    {s.badge}
                  </div>
                </div>

                <div className="p-5">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-sky-400 mb-1">{s.dir}</div>
                  <h3 className="text-base font-bold text-white group-hover:text-sky-400 transition-colors">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0 flex justify-between items-center text-[11px] font-mono text-slate-500 border-t border-slate-800/50 mt-4">
                <span>Codified Tokens</span>
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
          <p className="mt-3 text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
            Install ORQIVA in your coding assistant today and generate design-system-compliant, accessible interfaces effortlessly.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={copySkillCommand}
              className="w-full sm:w-auto px-6 py-3 bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold rounded-xl text-xs sm:text-sm transition-all shadow-lg shadow-sky-500/20 flex items-center justify-center space-x-2"
            >
              {copiedSkill ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              <span>{copiedSkill ? 'Skill Copied to Clipboard!' : 'Copy Universal Install Command'}</span>
            </button>

            <a
              href="https://github.com/CodeByArnob/orqiva-ui-ux"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-xl text-xs sm:text-sm transition-all border border-slate-700 flex items-center justify-center space-x-2"
            >
              <span>View Repository on GitHub</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

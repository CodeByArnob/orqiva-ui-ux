import React, { useState, useEffect } from 'react';
import { 
  Play, Pause, RotateCcw, Terminal, Bot, Code2, 
  CheckCircle2, Sparkles, ArrowRight, Layers, Smartphone 
} from 'lucide-react';

export const InteractiveWalkthroughDemo: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const steps = [
    {
      id: 0,
      badge: 'PHASE 1',
      title: 'Initialize Stack & Inject Tokens',
      actor: 'Terminal / CLI',
      command: 'npx orqiva-ui-ux init',
      description: 'The developer runs the zero-dependency CLI. ORQIVA auto-detects Next.js & Tailwind, prompts for the desired visual archetype, and immediately injects tokens.css and tailwind preset.',
      logs: [
        { text: '$ npx orqiva-ui-ux init', color: 'text-emerald-400 font-bold' },
        { text: 'Auto-detecting project stack...', color: 'text-slate-500' },
        { text: '  ✓ Detected Next.js 15 & Tailwind CSS v4', color: 'text-sky-400' },
        { text: '? Select Archetype: [1] Luxury [2] Cosmic [3] NovaBank [4] Pulse', color: 'text-slate-300' },
        { text: 'Selected: [3] NovaBank Mobile (Liquid Chrome Neo-Banking)', color: 'text-purple-400' },
        { text: '  ✓ Injected: src/styles/orqiva-tokens.css', color: 'text-emerald-400' },
        { text: '  ✓ Generated: orqiva.preset.js', color: 'text-emerald-400' },
        { text: 'Initialization complete in 240ms!', color: 'text-sky-300 font-bold' }
      ],
      metrics: {
        time: '240ms',
        tokensCreated: '32 CSS Vars',
        dependenciesAdded: '0 (Pure Node.js)'
      }
    },
    {
      id: 1,
      badge: 'PHASE 2',
      title: 'AI Coding Agent Pairing',
      actor: 'Claude Code / Cursor / Antigravity',
      command: 'Prompting Pair Programmer',
      description: 'The developer prompts their AI coding agent in natural language. The agent discovers ORQIVA via the Agent Skills protocol, loads the specialized archetype reference, and formulates the architecture.',
      logs: [
        { text: 'DEVELOPER PROMPT:', color: 'text-sky-400 font-bold' },
        { text: '"Build a 3-screen P2P money transfer flow with tactile keypad using NovaBank tokens."', color: 'text-slate-200' },
        { text: '', color: '' },
        { text: 'ORQIVA SKILL COGNITIVE ROUTER:', color: 'text-purple-400 font-bold' },
        { text: '  -> Matching domain: FinTech / Neo-Banking (High Trust)', color: 'text-slate-400' },
        { text: '  -> Loading reference: references/specialized-archetypes.md#3', color: 'text-slate-400' },
        { text: '  -> Enforcing constraint: 4.5:1 WCAG contrast on #FF3B56', color: 'text-amber-400' },
        { text: '  -> Enforcing ergonomics: 56x56px keypad minimum touch size', color: 'text-emerald-400' }
      ],
      metrics: {
        skillTrigger: 'Agent Skills Protocol',
        contextLoaded: 'specialized-archetypes.md',
        rulesEnforced: '4 Architectural Constraints'
      }
    },
    {
      id: 2,
      badge: 'PHASE 3',
      title: 'Multi-Framework Code Synthesis',
      actor: 'Senior Frontend Engine',
      command: 'Synthesizing Components',
      description: 'The agent writes production-grade, accessible code targeting your stack: React/TSX, Vue, Svelte, Flutter, Android Compose, or iOS SwiftUI with full state coverage and semantic landmarks.',
      logs: [
        { text: '// Generated Component : NovaBank Keypad Transfer Flow', color: 'text-slate-500' },
        { text: 'export const SendMoneyKeypad: React.FC = () => {', color: 'text-sky-400' },
        { text: '  const [amount, setAmount] = useState<string>("250");', color: 'text-slate-300' },
        { text: '  return (', color: 'text-slate-400' },
        { text: '    <div className="bg-[#050505] p-6 rounded-[24px]">', color: 'text-slate-300' },
        { text: '      <div className="text-4xl font-mono text-white">${amount}</div>', color: 'text-purple-300' },
        { text: '      <NumericKeypad onKeyPress={handleDigit} minTouchSize="56px" />', color: 'text-emerald-400 font-bold' },
        { text: '      <button aria-label="Send Money" className="min-h-[56px] bg-[#FF3B56] ...">', color: 'text-amber-300' },
        { text: '    </div>', color: 'text-slate-400' },
        { text: '  );', color: 'text-slate-400' },
        { text: '};', color: 'text-sky-400' }
      ],
      metrics: {
        codeStatus: 'Synthesized with Full State',
        touchTarget: '56px Ergonomic Touch',
        multiStack: 'React, Flutter, Compose'
      }
    },
    {
      id: 3,
      badge: 'PHASE 4',
      title: 'Automated Audit & MCP Verification',
      actor: 'ORQIVA MCP Server',
      command: 'npx orqiva-ui-ux audit',
      description: 'Before shipping, the ORQIVA audit engine and MCP server test the code: verifying WCAG 2.2 AA contrast ratios, touch target sizes, keyboard focus rings, and screen-reader accessibility.',
      logs: [
        { text: '$ npx orqiva-ui-ux audit', color: 'text-emerald-400 font-bold' },
        { text: 'Auditing UI Codebase for Design and Accessibility Compliance...', color: 'text-slate-500' },
        { text: '  [CONTRAST CHECK] Text #FFFFFF on Surface #121214: 17.82:1 (Required 4.5:1) -> PASS', color: 'text-emerald-400' },
        { text: '  [CONTRAST CHECK] Accent #FF3B56 on Dark #050505: 5.12:1 (Required 3.0:1) -> PASS', color: 'text-emerald-400' },
        { text: '  [TOUCH TARGETS] Keypad buttons 56x56px (Required 44x44px) -> PASS', color: 'text-emerald-400' },
        { text: '  [ACCESSIBILITY] Aria labels on all interactive triggers -> PASS', color: 'text-emerald-400' },
        { text: '✓ 0 errors, 0 warnings. Verified Production Ready.', color: 'text-sky-400 font-bold' }
      ],
      metrics: {
        wcagContrast: '17.82:1 (Pass AA & AAA)',
        touchTargetCheck: '100% Compliant',
        mcpStatus: 'JSON-RPC Connected'
      }
    }
  ];

  useEffect(() => {
    let interval: any = null;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentStep((prev) => (prev + 1) % steps.length);
      }, 4000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, steps.length]);

  const active = steps[currentStep];

  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 sm:p-8 shadow-2xl backdrop-blur-xl">
      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-8">
        <div>
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-mono mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>INTERACTIVE WALKTHROUGH SIMULATOR</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            How a Senior Engineer Uses ORQIVA
          </h2>
          <p className="text-sm text-slate-400 mt-1 max-w-2xl">
            Watch the live simulated workflow or click each phase to see how ORQIVA guides your AI coding assistant from prompt to verified production code.
          </p>
        </div>

        {/* Playback Controls */}
        <div className="flex items-center space-x-3">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className={`px-4 py-2.5 rounded-xl font-mono text-xs font-bold transition-all flex items-center space-x-2 shadow-lg ${
              isPlaying
                ? 'bg-amber-500 hover:bg-amber-400 text-slate-950'
                : 'bg-sky-500 hover:bg-sky-400 text-slate-950'
            }`}
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            <span>{isPlaying ? 'Pause Simulator' : 'Play Walkthrough Demo'}</span>
          </button>

          <button
            onClick={() => { setCurrentStep(0); setIsPlaying(false); }}
            className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 transition-colors"
            title="Reset to Phase 1"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Progress Timeline Stepper */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
        {steps.map((s, idx) => {
          const isActive = currentStep === idx;
          return (
            <button
              key={s.id}
              onClick={() => { setCurrentStep(idx); setIsPlaying(false); }}
              className={`p-3.5 rounded-2xl border text-left transition-all ${
                isActive
                  ? 'bg-sky-500/15 border-sky-500/50 text-white shadow-lg shadow-sky-500/10 ring-1 ring-sky-500/30'
                  : 'bg-slate-950/60 border-slate-800/80 text-slate-400 hover:border-slate-700 hover:text-slate-300'
              }`}
            >
              <div className="flex items-center justify-between text-[10px] font-mono mb-1">
                <span className={isActive ? 'text-sky-400 font-bold' : 'text-slate-500'}>{s.badge}</span>
                {isActive && <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse"></span>}
              </div>
              <div className="text-xs font-bold leading-tight">{s.title}</div>
            </button>
          );
        })}
      </div>

      {/* Active Phase Display Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Left: Terminal Output Stream */}
        <div className="lg:col-span-7 bg-slate-950 rounded-2xl border border-slate-800 overflow-hidden font-mono text-xs flex flex-col justify-between shadow-xl">
          <div className="px-4 py-2.5 bg-slate-900 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
              <span className="text-slate-400 text-[11px] ml-2">stream : {active.actor}</span>
            </div>
            <span className="text-sky-400 text-[11px] font-semibold">{active.command}</span>
          </div>

          <div className="p-5 space-y-2 min-h-[260px] flex flex-col justify-center">
            {active.logs.map((log, lIdx) => (
              <div key={lIdx} className={`${log.color} leading-relaxed`}>
                {log.text}
              </div>
            ))}
          </div>

          <div className="px-4 py-2 bg-slate-900/50 border-t border-slate-800/80 text-[11px] text-slate-500 flex justify-between">
            <span>Terminal status: LIVE</span>
            <span className="text-emerald-400">Exit Code: 0</span>
          </div>
        </div>

        {/* Right: Heuristic Explainer Card */}
        <div className="lg:col-span-5 rounded-2xl border border-slate-800 bg-slate-950/40 p-6 flex flex-col justify-between space-y-6">
          <div>
            <div className="flex items-center space-x-2 text-xs font-mono text-sky-400 mb-2">
              <Layers className="w-4 h-4" />
              <span>{active.badge} : {active.actor}</span>
            </div>

            <h3 className="text-xl font-bold text-white mb-2">
              {active.title}
            </h3>

            <p className="text-xs text-slate-300 leading-relaxed">
              {active.description}
            </p>
          </div>

          {/* Telemetry Metrics */}
          <div className="space-y-2.5 pt-4 border-t border-slate-800/80 text-xs font-mono">
            {Object.entries(active.metrics).map(([key, val]) => (
              <div key={key} className="flex justify-between items-center p-2 rounded-lg bg-slate-900/60 border border-slate-800">
                <span className="text-slate-400 capitalize">{key.replace(/([A-Z])/g, ' $1')}:</span>
                <span className="text-emerald-400 font-semibold">{val}</span>
              </div>
            ))}
          </div>

          <div className="pt-2 flex justify-between items-center text-xs">
            <span className="text-slate-500 font-mono">Step {currentStep + 1} of {steps.length}</span>
            <button
              onClick={() => setCurrentStep((prev) => (prev + 1) % steps.length)}
              className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-sky-400 font-semibold flex items-center space-x-1"
            >
              <span>Next Phase</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

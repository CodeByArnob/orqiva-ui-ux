import React, { useState } from 'react';
import { 
  Sparkles, Terminal, Check, ArrowRight, ShieldCheck, 
  Smartphone, Monitor, Cpu, ChevronDown, Copy, Layers, ExternalLink
} from 'lucide-react';

export const ResponsiveWebsiteShowcase: React.FC<{ isEmbedded?: boolean }> = ({ isEmbedded = false }) => {
  const [copied, setCopied] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const copyInstall = () => {
    navigator.clipboard.writeText('npx skills add CodeByArnob/orqiva-ui-ux --skill orqiva-ui-ux -g');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const faqs = [
    {
      q: 'How does ORQIVA differ from generic AI code generators?',
      a: 'Generic models default to identical purple-gradient dark-mode cards for every request. ORQIVA inspects your project context and applies domain-specific design intelligence (e.g. Trust-led for banking, Utilitarian for developer tools) with strict WCAG 2.2 AA contrast compliance.'
    },
    {
      q: 'Which coding agents and tools are supported?',
      a: 'ORQIVA follows the open Agent Skills specification and is fully compatible with Claude Code, Cursor, Windsurf, Roo Code, Antigravity, Gemini CLI, and any standard Agent Skills runner.'
    },
    {
      q: 'Does ORQIVA require any paid backend or proprietary cloud service?',
      a: 'No. ORQIVA is 100% open-source under the MIT license and runs locally on your machine with zero external network tracking or vendor lock-in.'
    }
  ];

  return (
    <div className={`w-full bg-slate-950 text-slate-100 rounded-2xl border border-slate-800 shadow-2xl overflow-hidden font-sans ${isEmbedded ? '' : 'p-6 my-4'}`}>
      {/* Website Mock Navbar */}
      <div className="py-4 px-6 border-b border-slate-800 flex justify-between items-center bg-slate-900/60">
        <div className="flex items-center space-x-2">
          <div className="w-7 h-7 rounded-lg bg-sky-500 flex items-center justify-center font-bold text-slate-950 text-xs">
            O
          </div>
          <span className="font-bold text-white tracking-tight text-sm">ORQIVA UI/UX</span>
        </div>

        <div className="hidden sm:flex items-center space-x-6 text-xs text-slate-400">
          <span className="text-white hover:text-sky-400 cursor-pointer">Philosophy</span>
          <span className="hover:text-white cursor-pointer">Capabilities</span>
          <span className="hover:text-white cursor-pointer">Showcase</span>
          <span className="hover:text-white cursor-pointer">Docs</span>
        </div>

        <button 
          onClick={copyInstall}
          className="px-3 py-1.5 bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold rounded-lg text-xs transition-colors flex items-center space-x-1.5"
        >
          <span>Install Skill</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Website Hero Section */}
      <div className="py-12 px-6 text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-400 text-xs font-mono mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span>ADAPTIVE DESIGN INTELLIGENCE v1.0.0</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
          Production UI/UX Intelligence for AI Coding Agents
        </h1>

        <p className="mt-4 text-sm sm:text-base text-slate-400 leading-relaxed max-w-2xl mx-auto">
          Say goodbye to generic purple-gradient mockups. ORQIVA equips agents with senior architectural heuristics, domain-specific visual directions, and WCAG 2.2 AA accessibility standards.
        </p>

        {/* Copyable Install Command Box */}
        <div className="mt-6 p-2 bg-slate-900 border border-slate-800 rounded-xl inline-flex items-center space-x-3 text-xs font-mono max-w-full overflow-x-auto shadow-inner">
          <span className="text-slate-500 select-none">$</span>
          <span className="text-sky-300">npx skills add CodeByArnob/orqiva-ui-ux --skill orqiva-ui-ux -g</span>
          <button 
            onClick={copyInstall}
            className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
            title="Copy Command"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* 3 Core Capability Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6 border-t border-slate-800 bg-slate-900/30">
        <div className="p-5 rounded-xl bg-slate-900/70 border border-slate-800">
          <div className="w-9 h-9 rounded-lg bg-sky-500/10 text-sky-400 flex items-center justify-center mb-3">
            <Cpu className="w-4 h-4" />
          </div>
          <h4 className="text-sm font-semibold text-white">Adaptive Discovery</h4>
          <p className="text-xs text-slate-400 mt-2 leading-relaxed">
            Automatically detects project conventions, framework tokens, and domain trust level before writing a single line of CSS.
          </p>
        </div>

        <div className="p-5 rounded-xl bg-slate-900/70 border border-slate-800">
          <div className="w-9 h-9 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-3">
            <ShieldCheck className="w-4 h-4" />
          </div>
          <h4 className="text-sm font-semibold text-white">WCAG 2.2 AA Enforced</h4>
          <p className="text-xs text-slate-400 mt-2 leading-relaxed">
            Strict 4.5:1 text contrast ratios, visible keyboard focus rings, accessible names, and 48px touch targets out of the box.
          </p>
        </div>

        <div className="p-5 rounded-xl bg-slate-900/70 border border-slate-800">
          <div className="w-9 h-9 rounded-lg bg-purple-500/10 text-purple-400 flex items-center justify-center mb-3">
            <Layers className="w-4 h-4" />
          </div>
          <h4 className="text-sm font-semibold text-white">Multi-Framework Native</h4>
          <p className="text-xs text-slate-400 mt-2 leading-relaxed">
            First-class token synthesis for React/Tailwind, Android Jetpack Compose, Flutter, and React Native.
          </p>
        </div>
      </div>

      {/* Accordion FAQ Section */}
      <div className="p-6 border-t border-slate-800">
        <h3 className="text-sm font-semibold text-white mb-4">Frequently Asked Questions</h3>
        <div className="space-y-2">
          {faqs.map((faq, index) => (
            <div key={index} className="rounded-xl border border-slate-800 bg-slate-900/50 overflow-hidden">
              <button
                onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                className="w-full p-4 text-left flex justify-between items-center text-xs font-semibold text-slate-200 hover:text-white"
              >
                <span>{faq.q}</span>
                <ChevronDown className={`w-4 h-4 transform transition-transform ${activeFaq === index ? 'rotate-180 text-sky-400' : 'text-slate-500'}`} />
              </button>
              {activeFaq === index && (
                <div className="px-4 pb-4 text-xs text-slate-400 leading-relaxed border-t border-slate-800/60 pt-3">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

import React, { useState, useEffect } from 'react';
import { Activity, ShieldCheck, Zap, Cpu, Sparkles, Terminal } from 'lucide-react';

export const MotionHeroGraphic: React.FC = () => {
  const [pulseIndex, setPulseIndex] = useState(0);
  const [liveLatency, setLiveLatency] = useState(14.2);

  useEffect(() => {
    const interval = setInterval(() => {
      setPulseIndex(prev => (prev + 1) % 4);
      // Realistic micro-fluctuation for telemetry
      setLiveLatency(prev => +(13.8 + Math.random() * 0.8).toFixed(1));
    }, 1800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-4xl mx-auto my-8 p-6 sm:p-10 rounded-3xl bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 border border-slate-800 shadow-2xl overflow-hidden">
      {/* Background Motion Grid Lines */}
      <div className="absolute inset-0 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none"></div>

      {/* Animated Radar Pulse Mesh */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Top Status Bar */}
        <div className="w-full flex justify-between items-center text-xs font-mono pb-4 border-b border-slate-800/80 text-slate-400">
          <div className="flex items-center space-x-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
            <span className="text-white font-semibold">ADAPTIVE SYNTHESIS RADAR</span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-sky-400 font-semibold">{liveLatency}ms response</span>
            <span className="text-slate-500">•</span>
            <span className="text-emerald-400">WCAG 2.2 AA ACTIVE</span>
          </div>
        </div>

        {/* Central Motion Graphic SVG */}
        <div className="relative w-72 h-72 sm:w-80 sm:h-80 my-6 flex items-center justify-center">
          {/* Concentric Pulse Rings */}
          <div className="absolute inset-0 rounded-full border border-sky-500/20 animate-pulse"></div>
          <div className="absolute inset-6 rounded-full border border-teal-500/20 animate-spin [animation-duration:20s]"></div>
          <div className="absolute inset-14 rounded-full border border-slate-700/60 border-dashed"></div>
          <div className="absolute inset-20 rounded-full border border-sky-400/40 animate-ping [animation-duration:3s]"></div>

          {/* Central Logo Core */}
          <div className="relative z-20 w-24 h-24 rounded-2xl bg-gradient-to-tr from-sky-500 via-teal-400 to-sky-300 p-0.5 shadow-xl shadow-sky-500/20">
            <div className="w-full h-full bg-slate-950 rounded-[14px] flex flex-col items-center justify-center">
              <span className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-teal-300">
                ORQIVA
              </span>
              <span className="text-[9px] font-mono text-sky-400 uppercase tracking-widest mt-0.5">AI CORE</span>
            </div>
          </div>

          {/* Orbiting Satellite Data Nodes */}
          <div 
            className={`absolute top-2 left-10 p-2.5 rounded-xl bg-slate-900 border transition-all duration-500 shadow-lg flex items-center space-x-2 ${
              pulseIndex === 0 ? 'border-sky-400 scale-105 bg-slate-850' : 'border-slate-800'
            }`}
          >
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <div className="text-left font-mono">
              <div className="text-[10px] text-slate-400">Contrast Engine</div>
              <div className="text-xs font-bold text-white">4.5:1 Pass AA</div>
            </div>
          </div>

          <div 
            className={`absolute bottom-4 right-8 p-2.5 rounded-xl bg-slate-900 border transition-all duration-500 shadow-lg flex items-center space-x-2 ${
              pulseIndex === 1 ? 'border-sky-400 scale-105 bg-slate-850' : 'border-slate-800'
            }`}
          >
            <Zap className="w-4 h-4 text-amber-400" />
            <div className="text-left font-mono">
              <div className="text-[10px] text-slate-400">Spatial Grid</div>
              <div className="text-xs font-bold text-white">4pt/8pt Strict</div>
            </div>
          </div>

          <div 
            className={`absolute top-8 right-6 p-2.5 rounded-xl bg-slate-900 border transition-all duration-500 shadow-lg flex items-center space-x-2 ${
              pulseIndex === 2 ? 'border-sky-400 scale-105 bg-slate-850' : 'border-slate-800'
            }`}
          >
            <Cpu className="w-4 h-4 text-sky-400" />
            <div className="text-left font-mono">
              <div className="text-[10px] text-slate-400">Multi-Framework</div>
              <div className="text-xs font-bold text-white">React • Flutter</div>
            </div>
          </div>

          <div 
            className={`absolute bottom-4 left-6 p-2.5 rounded-xl bg-slate-900 border transition-all duration-500 shadow-lg flex items-center space-x-2 ${
              pulseIndex === 3 ? 'border-sky-400 scale-105 bg-slate-850' : 'border-slate-800'
            }`}
          >
            <Activity className="w-4 h-4 text-purple-400" />
            <div className="text-left font-mono">
              <div className="text-[10px] text-slate-400">Thumb Ergonomics</div>
              <div className="text-xs font-bold text-white">48px Targets</div>
            </div>
          </div>
        </div>

        {/* Live Vector Telemetry Stream */}
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-slate-800/80 text-xs font-mono">
          <div className="p-3 bg-slate-950/80 rounded-xl border border-slate-800">
            <span className="text-slate-500 block text-[10px] uppercase">Domain Discovery</span>
            <span className="text-white font-semibold">Adaptive Taxonomy</span>
          </div>
          <div className="p-3 bg-slate-950/80 rounded-xl border border-slate-800">
            <span className="text-slate-500 block text-[10px] uppercase">Aesthetics</span>
            <span className="text-sky-300 font-semibold">Context-Specific</span>
          </div>
          <div className="p-3 bg-slate-950/80 rounded-xl border border-slate-800">
            <span className="text-slate-500 block text-[10px] uppercase">Keyboard Focus</span>
            <span className="text-emerald-400 font-semibold">:focus-visible Ring</span>
          </div>
          <div className="p-3 bg-slate-950/80 rounded-xl border border-slate-800">
            <span className="text-slate-500 block text-[10px] uppercase">Dependencies</span>
            <span className="text-purple-400 font-semibold">Zero Bloat</span>
          </div>
        </div>
      </div>
    </div>
  );
};

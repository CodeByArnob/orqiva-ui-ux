import React, { useState } from 'react';
import { ShieldCheck, AlertCircle, CheckCircle2, Sliders, RefreshCw, Sparkles } from 'lucide-react';

function hexToRgb(hex: string): [number, number, number] | null {
  const clean = hex.replace('#', '');
  if (clean.length === 3) {
    const r = parseInt(clean[0] + clean[0], 16);
    const g = parseInt(clean[1] + clean[1], 16);
    const b = parseInt(clean[2] + clean[2], 16);
    return [r, g, b];
  }
  if (clean.length === 6) {
    const r = parseInt(clean.substring(0, 2), 16);
    const g = parseInt(clean.substring(2, 4), 16);
    const b = parseInt(clean.substring(4, 6), 16);
    return [r, g, b];
  }
  return null;
}

function getLuminance(r: number, g: number, b: number): number {
  const [rs, gs, bs] = [r, g, b].map(c => {
    const val = c / 255;
    return val <= 0.03928 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
}

export const ContrastCalculator: React.FC = () => {
  const [bgHex, setBgHex] = useState('#09090B');
  const [fgHex, setFgHex] = useState('#38BDF8');

  const bgRgb = hexToRgb(bgHex) || [9, 9, 11];
  const fgRgb = hexToRgb(fgHex) || [56, 189, 248];

  const lumBg = getLuminance(bgRgb[0], bgRgb[1], bgRgb[2]);
  const lumFg = getLuminance(fgRgb[0], fgRgb[1], fgRgb[2]);

  const ratio = (Math.max(lumBg, lumFg) + 0.05) / (Math.min(lumBg, lumFg) + 0.05);
  const roundedRatio = +ratio.toFixed(2);

  const passesNormalAA = roundedRatio >= 4.5;
  const passesNormalAAA = roundedRatio >= 7.0;
  const passesLargeAA = roundedRatio >= 3.0;
  const passesComponentsAA = roundedRatio >= 3.0;

  const presets = [
    { name: 'Dark Accent', bg: '#09090B', fg: '#38BDF8' },
    { name: 'Dark High Contrast', bg: '#09090B', fg: '#FAFAFA' },
    { name: 'Light High Contrast', bg: '#FFFFFF', fg: '#09090B' },
    { name: 'Light Cobalt', bg: '#FFFFFF', fg: '#0284C7' },
    { name: 'Muted Slate', bg: '#18181B', fg: '#A1A1AA' },
  ];

  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/60 border border-slate-800 shadow-xl my-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pb-6 border-b border-slate-800 gap-4">
        <div>
          <div className="inline-flex items-center space-x-2 text-xs font-mono text-sky-400 mb-1">
            <ShieldCheck className="w-4 h-4" />
            <span>WCAG 2.2 LEVEL AA / AAA ANALYZER</span>
          </div>
          <h3 className="text-xl font-bold text-white">Interactive Contrast Verification Tool</h3>
          <p className="text-xs text-slate-400 mt-1">Verify exact mathematical contrast ratios according to ISO/IEC and W3C WCAG 2.2 algorithms.</p>
        </div>

        {/* Contrast Score Big Badge */}
        <div className="flex items-center space-x-3 bg-slate-950 px-4 py-2 rounded-2xl border border-slate-800">
          <span className="text-xs font-mono text-slate-400">Ratio:</span>
          <span className={`text-2xl font-black font-mono ${passesNormalAA ? 'text-emerald-400' : 'text-rose-400'}`}>
            {roundedRatio} : 1
          </span>
          <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full font-bold ${
            passesNormalAA ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-rose-500/10 text-rose-400 border border-rose-500/20'
          }`}>
            {passesNormalAA ? 'WCAG AA PASS' : 'WCAG AA FAIL'}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-6">
        {/* Color Pickers & Presets */}
        <div className="lg:col-span-5 space-y-5">
          <div className="grid grid-cols-2 gap-4">
            {/* Background Input */}
            <div>
              <label className="block text-xs font-mono font-medium text-slate-300 mb-2">Background Color</label>
              <div className="flex items-center space-x-2 p-1.5 bg-slate-950 border border-slate-800 rounded-xl">
                <input 
                  type="color" 
                  value={bgHex}
                  onChange={(e) => setBgHex(e.target.value)}
                  className="w-8 h-8 rounded-lg cursor-pointer bg-transparent border-0"
                />
                <input 
                  type="text" 
                  value={bgHex}
                  onChange={(e) => setBgHex(e.target.value)}
                  className="w-full bg-transparent font-mono text-xs text-white uppercase focus:outline-none"
                />
              </div>
            </div>

            {/* Foreground Input */}
            <div>
              <label className="block text-xs font-mono font-medium text-slate-300 mb-2">Foreground / Text</label>
              <div className="flex items-center space-x-2 p-1.5 bg-slate-950 border border-slate-800 rounded-xl">
                <input 
                  type="color" 
                  value={fgHex}
                  onChange={(e) => setFgHex(e.target.value)}
                  className="w-8 h-8 rounded-lg cursor-pointer bg-transparent border-0"
                />
                <input 
                  type="text" 
                  value={fgHex}
                  onChange={(e) => setFgHex(e.target.value)}
                  className="w-full bg-transparent font-mono text-xs text-white uppercase focus:outline-none"
                />
              </div>
            </div>
          </div>

          {/* Quick Presets */}
          <div>
            <span className="block text-xs font-mono text-slate-400 mb-2">Verified Token Presets:</span>
            <div className="flex flex-wrap gap-2">
              {presets.map(p => (
                <button
                  key={p.name}
                  onClick={() => { setBgHex(p.bg); setFgHex(p.fg); }}
                  className="px-2.5 py-1 rounded-lg bg-slate-950 hover:bg-slate-800 border border-slate-800 text-[11px] font-mono text-slate-300 transition-colors"
                >
                  {p.name}
                </button>
              ))}
            </div>
          </div>

          {/* Standards Scorecard */}
          <div className="grid grid-cols-2 gap-3 pt-2">
            <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 flex justify-between items-center text-xs">
              <span className="text-slate-400">Body Copy (&lt;18px)</span>
              <span className={`font-mono font-bold ${passesNormalAA ? 'text-emerald-400' : 'text-rose-400'}`}>
                {passesNormalAA ? '✓ Pass (4.5:1)' : '✗ Fail'}
              </span>
            </div>
            <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 flex justify-between items-center text-xs">
              <span className="text-slate-400">Large Text (≥18px)</span>
              <span className={`font-mono font-bold ${passesLargeAA ? 'text-emerald-400' : 'text-rose-400'}`}>
                {passesLargeAA ? '✓ Pass (3.0:1)' : '✗ Fail'}
              </span>
            </div>
            <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 flex justify-between items-center text-xs">
              <span className="text-slate-400">UI Borders & Icons</span>
              <span className={`font-mono font-bold ${passesComponentsAA ? 'text-emerald-400' : 'text-rose-400'}`}>
                {passesComponentsAA ? '✓ Pass (3.0:1)' : '✗ Fail'}
              </span>
            </div>
            <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 flex justify-between items-center text-xs">
              <span className="text-slate-400">WCAG AAA (Enhanced)</span>
              <span className={`font-mono font-bold ${passesNormalAAA ? 'text-emerald-400' : 'text-slate-500'}`}>
                {passesNormalAAA ? '✓ Pass (7.0:1)' : '○ Normal AA'}
              </span>
            </div>
          </div>
        </div>

        {/* Live Rendered Preview Canvas */}
        <div className="lg:col-span-7">
          <div 
            className="w-full h-full p-6 sm:p-8 rounded-2xl border transition-all shadow-inner flex flex-col justify-between"
            style={{ backgroundColor: bgHex, borderColor: `${fgHex}40` }}
          >
            <div>
              <div 
                className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold mb-3 border"
                style={{ color: fgHex, borderColor: `${fgHex}60` }}
              >
                LIVE CONTRAST RENDERING
              </div>
              <h4 
                className="text-2xl font-extrabold tracking-tight"
                style={{ color: fgHex }}
              >
                Accessible Visual Typography
              </h4>
              <p 
                className="mt-2 text-xs leading-relaxed"
                style={{ color: fgHex, opacity: 0.9 }}
              >
                This card is dynamically rendered in real time using the exact hex values you selected. When using ORQIVA, every generated view automatically honors this mathematical threshold.
              </p>
            </div>

            <div className="mt-6 flex items-center space-x-3">
              <button 
                className="px-4 py-2 rounded-xl text-xs font-semibold shadow-sm"
                style={{ backgroundColor: fgHex, color: bgHex }}
              >
                Interactive Control
              </button>
              <span 
                className="text-xs font-mono"
                style={{ color: fgHex }}
              >
                Ratio: {roundedRatio}:1
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

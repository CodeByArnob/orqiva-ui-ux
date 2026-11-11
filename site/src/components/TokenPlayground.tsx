import React, { useState } from 'react';
import { Sliders, Sparkles, Check, RefreshCw } from 'lucide-react';

export const TokenPlayground: React.FC = () => {
  const [accentColor, setAccentColor] = useState('#0ea5e9'); // Sky 500
  const [borderRadius, setBorderRadius] = useState('12px');
  const [density, setDensity] = useState<'compact' | 'standard' | 'spacious'>('standard');

  const colorPresets = [
    { name: 'Sky Blue', hex: '#0ea5e9' },
    { name: 'Emerald', hex: '#10b981' },
    { name: 'Cobalt', hex: '#3b82f6' },
    { name: 'Amber', hex: '#f59e0b' },
    { name: 'Violet', hex: '#8b5cf6' },
  ];

  return (
    <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/50 border border-slate-800">
      <div className="flex justify-between items-center mb-6">
        <div>
          <div className="inline-flex items-center space-x-1.5 text-xs font-mono text-sky-400 mb-1">
            <Sliders className="w-3.5 h-3.5" />
            <span>INTERACTIVE TOKEN SYNTHESIS</span>
          </div>
          <h3 className="text-xl font-bold text-white">Live Design Token Playground</h3>
          <p className="text-xs text-slate-400 mt-1">Adjust semantic tokens and observe real-time component cascade across surfaces and controls.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Token Controls */}
        <div className="lg:col-span-5 space-y-5 bg-slate-950 p-5 rounded-xl border border-slate-800/80 text-xs">
          {/* Accent Color */}
          <div>
            <label className="block font-medium text-slate-300 mb-2">Accent Token (`--color-accent`)</label>
            <div className="flex space-x-2">
              {colorPresets.map(preset => (
                <button
                  key={preset.hex}
                  onClick={() => setAccentColor(preset.hex)}
                  className={`w-8 h-8 rounded-full border-2 transition-transform flex items-center justify-center ${
                    accentColor === preset.hex ? 'border-white scale-110' : 'border-transparent'
                  }`}
                  style={{ backgroundColor: preset.hex }}
                  title={preset.name}
                >
                  {accentColor === preset.hex && <Check className="w-4 h-4 text-white" />}
                </button>
              ))}
            </div>
          </div>

          {/* Border Radius */}
          <div>
            <label className="block font-medium text-slate-300 mb-2">Border Radius (`--radius-card`): {borderRadius}</label>
            <div className="flex space-x-2">
              {(['4px', '8px', '12px', '20px'] as const).map(radius => (
                <button
                  key={radius}
                  onClick={() => setBorderRadius(radius)}
                  className={`flex-1 py-1.5 rounded-lg border text-center transition-all ${
                    borderRadius === radius ? 'bg-slate-800 border-sky-400 text-sky-400 font-semibold' : 'border-slate-800 text-slate-400'
                  }`}
                >
                  {radius}
                </button>
              ))}
            </div>
          </div>

          {/* Density Tier */}
          <div>
            <label className="block font-medium text-slate-300 mb-2">Density Tier</label>
            <div className="flex space-x-2">
              {(['compact', 'standard', 'spacious'] as const).map(tier => (
                <button
                  key={tier}
                  onClick={() => setDensity(tier)}
                  className={`flex-1 py-1.5 rounded-lg border text-center uppercase tracking-wider text-[10px] font-mono transition-all ${
                    density === tier ? 'bg-slate-800 border-sky-400 text-sky-400 font-semibold' : 'border-slate-800 text-slate-400'
                  }`}
                >
                  {tier}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Live Token Preview Card */}
        <div className="lg:col-span-7 bg-slate-950 p-6 rounded-2xl border border-slate-800 shadow-xl">
          <div 
            className="p-5 border transition-all duration-200 bg-slate-900"
            style={{ 
              borderRadius: borderRadius,
              borderColor: `${accentColor}40`,
              padding: density === 'compact' ? '12px' : density === 'spacious' ? '28px' : '20px'
            }}
          >
            <div className="flex justify-between items-center mb-3">
              <span 
                className="text-xs font-mono font-semibold px-2 py-0.5 rounded-full"
                style={{ backgroundColor: `${accentColor}20`, color: accentColor }}
              >
                ORQIVA TOKENS
              </span>
              <span className="text-xs text-slate-400 font-mono">Radius: {borderRadius}</span>
            </div>

            <h4 className="text-base font-bold text-white">Dynamic Architectural Synthesis</h4>
            <p className="text-xs text-slate-400 mt-1 leading-relaxed">
              Design tokens compile seamlessly to CSS variables, Tailwind configurations, and mobile theme extensions.
            </p>

            <div className="mt-4 flex space-x-3">
              <button 
                className="px-4 py-2 text-xs font-semibold text-slate-950 transition-all flex items-center space-x-1.5"
                style={{ backgroundColor: accentColor, borderRadius: borderRadius }}
              >
                <span>Primary Action</span>
              </button>
              <button 
                className="px-4 py-2 text-xs font-semibold text-slate-200 border border-slate-700 hover:bg-slate-800 transition-all"
                style={{ borderRadius: borderRadius }}
              >
                <span>Secondary Button</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

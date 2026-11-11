import React, { useState } from 'react';
import { 
  Smartphone, Monitor, Tablet, ArrowRight, Layout, Sliders, Shield, Zap
} from 'lucide-react';
import { MobileBankingShowcase } from './MobileBankingShowcase';
import { SaasDashboardShowcase } from './SaasDashboardShowcase';

export const ResponsiveComparisonShowcase: React.FC<{ isEmbedded?: boolean }> = ({ isEmbedded = false }) => {
  const [selectedDemo, setSelectedDemo] = useState<'banking' | 'saas'>('banking');

  return (
    <div className={`w-full bg-slate-950 text-slate-100 rounded-2xl border border-slate-800 shadow-2xl overflow-hidden font-sans ${isEmbedded ? '' : 'p-6 my-4'}`}>
      {/* Header and Switcher */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-6 border-b border-slate-800 gap-4">
        <div>
          <div className="text-xs font-mono uppercase tracking-wider text-sky-400 font-semibold">Adaptive Reflow Architecture</div>
          <h2 className="text-lg font-bold text-white mt-1">Desktop vs. Mobile Viewport Reflow</h2>
          <p className="text-xs text-slate-400 mt-0.5">Real-time side-by-side comparison of navigation adaptation, ergonomics, and touch targets.</p>
        </div>

        <div className="flex bg-slate-900 border border-slate-800 rounded-xl p-1 text-xs">
          <button
            onClick={() => setSelectedDemo('banking')}
            className={`px-3 py-1.5 rounded-lg font-medium transition-colors ${
              selectedDemo === 'banking' ? 'bg-sky-500/20 text-sky-300 border border-sky-500/30' : 'text-slate-400 hover:text-white'
            }`}
          >
            Banking Architecture
          </button>
          <button
            onClick={() => setSelectedDemo('saas')}
            className={`px-3 py-1.5 rounded-lg font-medium transition-colors ${
              selectedDemo === 'saas' ? 'bg-sky-500/20 text-sky-300 border border-sky-500/30' : 'text-slate-400 hover:text-white'
            }`}
          >
            SaaS Telemetry
          </button>
        </div>
      </div>

      {/* Side-by-Side Dual Frame */}
      <div className="p-6 grid grid-cols-1 xl:grid-cols-12 gap-8 items-start">
        {/* Left: Mobile Viewport Frame (390px simulated) */}
        <div className="xl:col-span-5 flex flex-col items-center">
          <div className="flex items-center space-x-2 text-xs font-mono text-slate-400 mb-3">
            <Smartphone className="w-4 h-4 text-sky-400" />
            <span>Mobile Device (390 × 844 Viewport)</span>
          </div>

          <div className="w-full max-w-[390px] border-4 border-slate-700/80 rounded-[36px] p-2 bg-slate-950 shadow-2xl relative overflow-hidden">
            {/* Top Speaker / Dynamic Notch */}
            <div className="w-28 h-4 bg-slate-900 rounded-full mx-auto mb-2 border border-slate-800"></div>

            {selectedDemo === 'banking' ? (
              <MobileBankingShowcase isEmbedded={true} />
            ) : (
              <div className="p-3">
                <SaasDashboardShowcase isEmbedded={true} />
              </div>
            )}
          </div>

          <div className="mt-3 text-center text-xs text-slate-400 max-w-xs">
            <span className="text-emerald-400 font-semibold">Mobile Ergonomics:</span> Bottom thumb zone navigation, 48px touch targets, compact single-column cards.
          </div>
        </div>

        {/* Right: Desktop Viewport Frame */}
        <div className="xl:col-span-7 flex flex-col">
          <div className="flex items-center space-x-2 text-xs font-mono text-slate-400 mb-3">
            <Monitor className="w-4 h-4 text-emerald-400" />
            <span>Desktop Widescreen (1440 × 900 Viewport)</span>
          </div>

          <div className="border border-slate-800 rounded-2xl bg-slate-900/60 p-4 shadow-2xl overflow-hidden">
            {selectedDemo === 'banking' ? (
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-3 border-b border-slate-800 text-xs text-slate-400">
                  <div className="flex space-x-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-700"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-700"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-700"></span>
                  </div>
                  <span className="font-mono">ApexBank Web Portal • 1440px</span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-5 rounded-xl bg-slate-850 border border-slate-800">
                    <div className="text-xs text-slate-400 uppercase font-mono">Total Liquid Assets</div>
                    <div className="text-3xl font-mono font-bold text-white mt-1">$57,043.20</div>
                    <div className="text-xs text-emerald-400 mt-2">+12.4% yield performance</div>
                  </div>
                  <div className="p-5 rounded-xl bg-slate-850 border border-slate-800">
                    <div className="text-xs text-slate-400 uppercase font-mono">Monthly Outflows</div>
                    <div className="text-3xl font-mono font-bold text-white mt-1">$3,842.10</div>
                    <div className="text-xs text-slate-400 mt-2">Under budget by $650.00</div>
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-slate-850 border border-slate-800 text-xs text-slate-300">
                  Expanded multi-column data visualization with persistent sidebar, keyboard shortcuts (`⌘K`), and multi-account ledger.
                </div>
              </div>
            ) : (
              <SaasDashboardShowcase isEmbedded={true} />
            )}
          </div>

          <div className="mt-3 text-xs text-slate-400">
            <span className="text-sky-400 font-semibold">Desktop Capabilities:</span> Independent scroll canvas, multi-column metrics, hover tooltips, sortable data tables.
          </div>
        </div>
      </div>
    </div>
  );
};

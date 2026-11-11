import React, { useState } from 'react';
import { 
  AlertTriangle, CheckCircle2, ChevronRight, ArrowRight, Eye, 
  Layers, ShieldAlert, Sparkles, Filter, Search, MoreVertical
} from 'lucide-react';

export const BeforeAfterRedesignShowcase: React.FC<{ isEmbedded?: boolean }> = ({ isEmbedded = false }) => {
  const [mode, setMode] = useState<'after' | 'before' | 'split'>('after');
  const [expandedId, setExpandedId] = useState<string | null>('rec-1');

  const records = [
    { id: 'rec-1', patient: 'Arthur Pendelton', mrn: 'PT-4921', status: 'OVERDUE', amount: '$1,420.00', date: '2026-10-12', insurance: 'BlueCross Direct', provider: 'Dr. Harris' },
    { id: 'rec-2', patient: 'Elena Rostova', mrn: 'PT-8832', status: 'PAID', amount: '$340.50', date: '2026-11-04', insurance: 'Aetna Platinum', provider: 'Dr. Vance' },
    { id: 'rec-3', patient: 'David K. Miller', mrn: 'PT-1209', status: 'PENDING', amount: '$890.00', date: '2026-11-09', insurance: 'Medicare Advantage', provider: 'Dr. Harris' }
  ];

  return (
    <div className={`w-full bg-slate-950 text-slate-100 rounded-2xl border border-slate-800 shadow-2xl overflow-hidden font-sans ${isEmbedded ? '' : 'p-6 my-4'}`}>
      {/* Header with Mode Toggle */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-6 border-b border-slate-800 gap-4">
        <div>
          <div className="text-xs font-mono uppercase tracking-wider text-sky-400 font-semibold">Heuristic Case Study</div>
          <h2 className="text-lg font-bold text-white mt-1">Clinical Billing & Patient Records Redesign</h2>
          <p className="text-xs text-slate-400 mt-0.5">Transforming a high-friction legacy data table into an accessible, responsive system.</p>
        </div>

        {/* Mode Switcher */}
        <div className="flex bg-slate-900 border border-slate-800 rounded-xl p-1 text-xs">
          <button
            onClick={() => setMode('before')}
            className={`px-3 py-1.5 rounded-lg font-medium transition-colors ${
              mode === 'before' ? 'bg-rose-500/20 text-rose-300 border border-rose-500/30' : 'text-slate-400 hover:text-white'
            }`}
          >
            Legacy (Before)
          </button>
          <button
            onClick={() => setMode('after')}
            className={`px-3 py-1.5 rounded-lg font-medium transition-colors ${
              mode === 'after' ? 'bg-sky-500/20 text-sky-300 border border-sky-500/30' : 'text-slate-400 hover:text-white'
            }`}
          >
            ORQIVA Redesign (After)
          </button>
          <button
            onClick={() => setMode('split')}
            className={`px-3 py-1.5 rounded-lg font-medium transition-colors hidden md:block ${
              mode === 'split' ? 'bg-slate-800 text-white' : 'text-slate-400 hover:text-white'
            }`}
          >
            Side-by-Side
          </button>
        </div>
      </div>

      {/* Main Comparison Area */}
      <div className="p-6">
        {/* BEFORE VIEW */}
        {(mode === 'before' || mode === 'split') && (
          <div className={`rounded-xl border border-rose-900/40 bg-rose-950/10 p-5 ${mode === 'split' ? 'mb-6' : ''}`}>
            <div className="flex items-center space-x-2 text-rose-400 text-xs font-mono font-semibold mb-3">
              <AlertTriangle className="w-4 h-4" />
              <span>BEFORE: Legacy Portal (P1 Usability & Accessibility Deficiencies)</span>
            </div>

            {/* Simulated Legacy Cluttered Table */}
            <div className="overflow-x-auto border border-slate-700 bg-slate-900 text-[11px] text-slate-400 font-sans">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-800 text-slate-300 border-b border-slate-700 font-bold">
                    <th className="p-2 border-r border-slate-700">Patient</th>
                    <th className="p-2 border-r border-slate-700">MRN#</th>
                    <th className="p-2 border-r border-slate-700">Status</th>
                    <th className="p-2 border-r border-slate-700">Bal</th>
                    <th className="p-2 border-r border-slate-700">InvDate</th>
                    <th className="p-2 border-r border-slate-700">Insurer</th>
                    <th className="p-2">Act</th>
                  </tr>
                </thead>
                <tbody>
                  {records.map(rec => (
                    <tr key={rec.id} className="border-b border-slate-700 hover:bg-slate-800/40">
                      <td className="p-2 border-r border-slate-700 text-slate-400 font-normal">{rec.patient}</td>
                      <td className="p-2 border-r border-slate-700 text-slate-500 font-mono">{rec.mrn}</td>
                      <td className="p-2 border-r border-slate-700">
                        {/* Poor contrast colored text */}
                        <span className={rec.status === 'OVERDUE' ? 'text-red-400' : 'text-green-400'}>
                          {rec.status}
                        </span>
                      </td>
                      <td className="p-2 border-r border-slate-700 text-slate-400">{rec.amount}</td>
                      <td className="p-2 border-r border-slate-700 text-slate-500">{rec.date}</td>
                      <td className="p-2 border-r border-slate-700 text-slate-500">{rec.insurance}</td>
                      <td className="p-2">
                        {/* Tiny inaccessible 16px link with no label */}
                        <a href="#view" className="text-blue-400 underline hover:text-blue-300">view</a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Discovered defects */}
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-2 text-[11px] text-rose-300/80">
              <div className="flex items-center space-x-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-400"></span>
                <span>Low contrast (2.2:1 fails WCAG AA)</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-400"></span>
                <span>Zero mobile reflow (breaks &lt;768px)</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-400"></span>
                <span>Tiny 16px click targets without labels</span>
              </div>
            </div>
          </div>
        )}

        {/* AFTER VIEW */}
        {(mode === 'after' || mode === 'split') && (
          <div className="rounded-xl border border-sky-900/40 bg-sky-950/10 p-5">
            <div className="flex items-center space-x-2 text-sky-400 text-xs font-mono font-semibold mb-3">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>AFTER: ORQIVA Redesigned Architecture (WCAG 2.2 AA • Responsive)</span>
            </div>

            {/* Redesigned Card/Table Hybrid */}
            <div className="space-y-3">
              {records.map(rec => (
                <div 
                  key={rec.id}
                  className="p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all shadow-md"
                >
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-xl bg-sky-500/10 text-sky-400 border border-sky-500/20 flex items-center justify-center font-bold text-xs">
                        {rec.patient.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-white flex items-center space-x-2">
                          <span>{rec.patient}</span>
                          <span className="font-mono text-[10px] text-slate-400 bg-slate-800 px-1.5 py-0.5 rounded">{rec.mrn}</span>
                        </div>
                        <div className="text-[11px] text-slate-400 mt-0.5">{rec.insurance} • Provider: {rec.provider}</div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4 self-end sm:self-center">
                      <div className="text-right">
                        <div className="font-mono text-sm font-bold text-white">{rec.amount}</div>
                        <div className="text-[10px] text-slate-400 font-mono">Due: {rec.date}</div>
                      </div>

                      <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-mono font-semibold ${
                        rec.status === 'OVERDUE' 
                          ? 'bg-rose-500/10 text-rose-400 border border-rose-500/30' 
                          : rec.status === 'PAID'
                          ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'
                          : 'bg-amber-500/10 text-amber-400 border border-amber-500/30'
                      }`}>
                        {rec.status}
                      </span>

                      <button 
                        onClick={() => setExpandedId(expandedId === rec.id ? null : rec.id)}
                        className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                        aria-label="Toggle record details"
                      >
                        <ChevronRight className={`w-4 h-4 transform transition-transform ${expandedId === rec.id ? 'rotate-90 text-sky-400' : ''}`} />
                      </button>
                    </div>
                  </div>

                  {/* Expandable Context Drawer */}
                  {expandedId === rec.id && (
                    <div className="mt-3 pt-3 border-t border-slate-800/80 text-xs text-slate-400 grid grid-cols-1 sm:grid-cols-3 gap-2 bg-slate-950/40 p-3 rounded-lg animate-in fade-in">
                      <div>
                        <span className="block text-[10px] font-mono uppercase text-slate-500">Billing Code</span>
                        <span className="font-mono text-slate-300">CPT-99214 (Level 4 Outpatient)</span>
                      </div>
                      <div>
                        <span className="block text-[10px] font-mono uppercase text-slate-500">Electronic Claim ID</span>
                        <span className="font-mono text-slate-300">CLM-2026-8921-X</span>
                      </div>
                      <div className="flex justify-end items-center">
                        <button className="px-3 py-1 bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold rounded-md text-[11px] transition-colors">
                          Process Payment
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Implemented Polish */}
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-2 text-[11px] text-sky-300/80">
              <div className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>WCAG 2.2 AA Contrast (5.8:1)</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Adaptive Card Reflow on Mobile</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>48px Accessible Click Targets</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

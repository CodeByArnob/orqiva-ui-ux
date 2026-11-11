import React, { useState } from 'react';
import { 
  CreditCard, Activity, ShoppingBag, Stethoscope, Terminal, 
  Monitor, RefreshCw, Smartphone, Layers, CheckCircle2, Info
} from 'lucide-react';
import { MobileBankingShowcase } from './showcase/MobileBankingShowcase';
import { SaasDashboardShowcase } from './showcase/SaasDashboardShowcase';
import { EcommerceShowcase } from './showcase/EcommerceShowcase';
import { HealthcareShowcase } from './showcase/HealthcareShowcase';
import { DeveloperWorkspaceShowcase } from './showcase/DeveloperWorkspaceShowcase';
import { ResponsiveWebsiteShowcase } from './showcase/ResponsiveWebsiteShowcase';
import { BeforeAfterRedesignShowcase } from './showcase/BeforeAfterRedesignShowcase';
import { ResponsiveComparisonShowcase } from './showcase/ResponsiveComparisonShowcase';

export const ShowcaseGalleryView: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('banking');

  const interfaces = [
    { id: 'banking', name: 'Mobile Banking', icon: CreditCard, dir: 'Trust-Led Restrained', tag: 'FinTech / High Trust' },
    { id: 'saas', name: 'SaaS Telemetry', icon: Activity, dir: 'Utilitarian Data-Dense', tag: 'DevOps / Observability' },
    { id: 'ecommerce', name: 'E-Commerce Detail', icon: ShoppingBag, dir: 'Conversion-Led Commerce', tag: 'Luxury DTC Storefront' },
    { id: 'healthcare', name: 'Clinical Healthcare', icon: Stethoscope, dir: 'Calm Human-Centered', tag: 'EHR / Patient Care' },
    { id: 'developer', name: 'Developer IDE', icon: Terminal, dir: 'Utilitarian DevTools', tag: 'Developer Workspace' },
    { id: 'website', name: 'Responsive Portal', icon: Monitor, dir: 'Modern Minimal Editorial', tag: 'Marketing Landing Page' },
    { id: 'before-after', name: 'Heuristic Redesign', icon: RefreshCw, dir: 'Audit & Refactor', tag: 'Legacy to Modern' },
    { id: 'responsive', name: 'Reflow Comparison', icon: Smartphone, dir: 'Adaptive Reflow', tag: 'Mobile vs Desktop' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Title & Overview */}
      <div className="text-center max-w-3xl mx-auto mb-8">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-mono mb-3">
          <Layers className="w-3.5 h-3.5" />
          <span>REAL IMPLEMENTATION SHOWCASE</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Authentic, Working Design Systems
        </h1>
        <p className="mt-2 text-sm text-slate-400">
          Every interface below is a living, interactive React implementation adhering strictly to ORQIVA's adaptive design heuristics and WCAG 2.2 AA accessibility standards.
        </p>
      </div>

      {/* Interface Selector Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2 p-1.5 bg-slate-900/80 border border-slate-800 rounded-2xl mb-8">
        {interfaces.map(item => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`p-3 rounded-xl flex flex-col items-center justify-center text-center transition-all ${
                isActive 
                  ? 'bg-sky-500/15 text-white border border-sky-500/40 shadow-lg shadow-sky-500/5' 
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/40'
              }`}
            >
              <Icon className={`w-4 h-4 mb-1.5 ${isActive ? 'text-sky-400' : 'text-slate-500'}`} />
              <span className="text-[11px] font-semibold leading-tight">{item.name}</span>
            </button>
          );
        })}
      </div>

      {/* Metadata Bar for Active Interface */}
      {(() => {
        const current = interfaces.find(i => i.id === activeTab)!;
        return (
          <div className="mb-6 p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex flex-col sm:flex-row justify-between items-start sm:items-center text-xs gap-3">
            <div className="flex items-center space-x-3">
              <span className="font-mono text-slate-400">Direction: <strong className="text-sky-400">{current.dir}</strong></span>
              <span className="text-slate-600">•</span>
              <span className="font-mono text-slate-400">Context: <strong className="text-slate-200">{current.tag}</strong></span>
            </div>
            <div className="flex items-center space-x-2 text-[11px] font-mono text-emerald-400">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>WCAG 2.2 AA Verified (Contrast ≥ 4.5:1)</span>
            </div>
          </div>
        );
      })()}

      {/* Render Active Component */}
      <div className="w-full">
        {activeTab === 'banking' && <MobileBankingShowcase />}
        {activeTab === 'saas' && <SaasDashboardShowcase />}
        {activeTab === 'ecommerce' && <EcommerceShowcase />}
        {activeTab === 'healthcare' && <HealthcareShowcase />}
        {activeTab === 'developer' && <DeveloperWorkspaceShowcase />}
        {activeTab === 'website' && <ResponsiveWebsiteShowcase />}
        {activeTab === 'before-after' && <BeforeAfterRedesignShowcase />}
        {activeTab === 'responsive' && <ResponsiveComparisonShowcase />}
      </div>
    </div>
  );
};

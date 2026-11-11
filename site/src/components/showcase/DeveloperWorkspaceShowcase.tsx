import React, { useState } from 'react';
import { 
  Folder, FileCode, Play, Terminal, GitBranch, Settings, 
  ChevronRight, ChevronDown, Check, Copy, Bug, RefreshCw, Layers
} from 'lucide-react';

export const DeveloperWorkspaceShowcase: React.FC<{ isEmbedded?: boolean }> = ({ isEmbedded = false }) => {
  const [activeTab, setActiveTab] = useState<'engine' | 'tokens' | 'modal'>('engine');
  const [isRunning, setIsRunning] = useState(false);
  const [terminalLogs, setTerminalLogs] = useState([
    '[14:20:01] [orqiva-daemon] Watching workspace: /home/dev/nexus-platform',
    '[14:20:02] [turbopack] Ready in 184ms (cache hit: 98.4%)',
    '[14:20:04] [typecheck] Verified 1,420 modules without warnings'
  ]);

  const runBuild = () => {
    setIsRunning(true);
    setTerminalLogs(prev => [...prev, `[${new Date().toLocaleTimeString()}] [exec] running 'pnpm test:e2e' ...`]);
    setTimeout(() => {
      setTerminalLogs(prev => [
        ...prev, 
        `[${new Date().toLocaleTimeString()}] [test] 48 suites passed (100% WCAG 2.2 AA compliant)`
      ]);
      setIsRunning(false);
    }, 1000);
  };

  const codeSnippets = {
    engine: `import { DesignDirection, ContextVector } from '@orqiva/core';

export class AdaptiveDesignEngine {
  /**
   * Discovers visual constraints and infers design direction
   */
  public synthesize(context: ContextVector): DesignDirection {
    const { domain, density, targetPlatform } = context;

    if (domain === 'fintech' || domain === 'banking') {
      return {
        direction: 'Trust-Led Restrained',
        contrastFloor: 4.5,
        baseGrid: 8,
        typography: ['Inter', 'SF Pro Display'],
        avoidGradients: true
      };
    }

    return {
      direction: 'Utilitarian Developer Tools',
      contrastFloor: 4.5,
      baseGrid: 4,
      typography: ['JetBrains Mono', 'Inter'],
      avoidGradients: true
    };
  }
}`,
    tokens: `/* ORQIVA Production Semantic Token Mapping */
:root {
  --color-canvas: #09090b;
  --color-surface: #18181b;
  --color-border: #27272a;
  
  --color-accent-default: #38bdf8;
  --color-accent-subtle: #082f49;
  
  --space-grid: 4px;
  --touch-target-floor: 48px;
}`,
    modal: `import React, { useEffect, useRef } from 'react';

export const AccessibleModal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!isOpen) return null;
  return (
    <div role="dialog" aria-modal="true" className="modal-backdrop">
      <div className="modal-content" tabIndex={-1}>
        {children}
      </div>
    </div>
  );
};`
  };

  return (
    <div className={`w-full bg-slate-950 text-slate-100 rounded-2xl border border-slate-800 shadow-2xl overflow-hidden font-sans ${isEmbedded ? '' : 'p-6 my-4'}`}>
      {/* IDE Top Chrome */}
      <div className="px-4 py-2.5 bg-slate-900 border-b border-slate-800 flex justify-between items-center text-xs">
        <div className="flex items-center space-x-2">
          <div className="flex space-x-1.5 mr-3">
            <span className="w-3 h-3 rounded-full bg-rose-500/80"></span>
            <span className="w-3 h-3 rounded-full bg-amber-500/80"></span>
            <span className="w-3 h-3 rounded-full bg-emerald-500/80"></span>
          </div>
          <span className="font-mono text-slate-400">nexus-workspace • orqiva-core</span>
        </div>

        {/* Global Toolbar */}
        <div className="flex items-center space-x-3">
          <button 
            onClick={runBuild}
            disabled={isRunning}
            className="flex items-center space-x-1.5 px-3 py-1 bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-400 border border-emerald-500/40 rounded-md font-mono text-[11px] font-medium transition-colors"
          >
            <Play className={`w-3 h-3 ${isRunning ? 'animate-spin' : ''}`} />
            <span>{isRunning ? 'RUNNING...' : 'TEST & BUILD'}</span>
          </button>
          <div className="flex items-center space-x-1 font-mono text-[11px] text-slate-400 bg-slate-800/80 px-2.5 py-1 rounded-md border border-slate-700/60">
            <GitBranch className="w-3 h-3 text-sky-400" />
            <span>main*</span>
          </div>
        </div>
      </div>

      {/* Main Workspace Layout */}
      <div className="grid grid-cols-12 min-h-[380px]">
        {/* Left: File Tree Explorer */}
        <div className="col-span-12 sm:col-span-3 bg-slate-900/50 border-r border-slate-800 p-3 text-xs font-mono">
          <div className="text-[11px] uppercase tracking-wider text-slate-500 font-semibold mb-2 px-2">Project Explorer</div>
          
          <div className="space-y-1">
            <div className="flex items-center space-x-1 text-slate-300 px-2 py-1 rounded bg-slate-800/40 cursor-pointer">
              <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
              <Folder className="w-3.5 h-3.5 text-amber-400" />
              <span>src</span>
            </div>

            <div className="pl-4 space-y-1">
              <button 
                onClick={() => setActiveTab('engine')}
                className={`w-full flex items-center space-x-2 px-2 py-1 rounded text-left transition-colors ${
                  activeTab === 'engine' ? 'bg-sky-500/10 text-sky-400 font-semibold' : 'text-slate-400 hover:text-white'
                }`}
              >
                <FileCode className="w-3.5 h-3.5 text-sky-400" />
                <span>adaptive-engine.ts</span>
              </button>

              <button 
                onClick={() => setActiveTab('tokens')}
                className={`w-full flex items-center space-x-2 px-2 py-1 rounded text-left transition-colors ${
                  activeTab === 'tokens' ? 'bg-sky-500/10 text-sky-400 font-semibold' : 'text-slate-400 hover:text-white'
                }`}
              >
                <FileCode className="w-3.5 h-3.5 text-purple-400" />
                <span>theme.css</span>
              </button>

              <button 
                onClick={() => setActiveTab('modal')}
                className={`w-full flex items-center space-x-2 px-2 py-1 rounded text-left transition-colors ${
                  activeTab === 'modal' ? 'bg-sky-500/10 text-sky-400 font-semibold' : 'text-slate-400 hover:text-white'
                }`}
              >
                <FileCode className="w-3.5 h-3.5 text-emerald-400" />
                <span>AccessibleModal.tsx</span>
              </button>
            </div>
          </div>
        </div>

        {/* Right: Code Editor & Terminal */}
        <div className="col-span-12 sm:col-span-9 flex flex-col justify-between bg-slate-950">
          <div>
            {/* Editor Tabs */}
            <div className="flex border-b border-slate-800 bg-slate-900/40 text-xs font-mono">
              <button 
                onClick={() => setActiveTab('engine')}
                className={`px-4 py-2 border-r border-slate-800 flex items-center space-x-2 ${
                  activeTab === 'engine' ? 'bg-slate-950 text-sky-400 border-t-2 border-t-sky-400' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <span>adaptive-engine.ts</span>
              </button>
              <button 
                onClick={() => setActiveTab('tokens')}
                className={`px-4 py-2 border-r border-slate-800 flex items-center space-x-2 ${
                  activeTab === 'tokens' ? 'bg-slate-950 text-sky-400 border-t-2 border-t-sky-400' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <span>theme.css</span>
              </button>
              <button 
                onClick={() => setActiveTab('modal')}
                className={`px-4 py-2 border-r border-slate-800 flex items-center space-x-2 ${
                  activeTab === 'modal' ? 'bg-slate-950 text-sky-400 border-t-2 border-t-sky-400' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <span>AccessibleModal.tsx</span>
              </button>
            </div>

            {/* Code Body */}
            <div className="p-4 font-mono text-xs overflow-x-auto leading-relaxed text-slate-300">
              <pre className="text-slate-300 whitespace-pre-wrap">
                {codeSnippets[activeTab]}
              </pre>
            </div>
          </div>

          {/* Integrated Terminal Panel */}
          <div className="border-t border-slate-800 bg-slate-900/70 p-3 font-mono text-[11px]">
            <div className="flex items-center space-x-2 text-slate-400 mb-1.5 pb-1 border-b border-slate-800">
              <Terminal className="w-3.5 h-3.5 text-emerald-400" />
              <span className="font-semibold text-slate-300">Live Daemon Output</span>
            </div>
            <div className="space-y-1 text-slate-400">
              {terminalLogs.map((log, i) => (
                <div key={i} className="flex items-start space-x-2">
                  <span className="text-slate-600 select-none">&gt;</span>
                  <span className={log.includes('passed') ? 'text-emerald-400 font-semibold' : ''}>{log}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

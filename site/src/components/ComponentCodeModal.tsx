import React, { useState } from 'react';
import { X, Copy, Check, FileCode, Terminal, Sparkles } from 'lucide-react';

export const ComponentCodeModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  componentTitle: string;
  sourceFilePath: string;
  codeSnippet: string;
}> = ({ isOpen, onClose, componentTitle, sourceFilePath, codeSnippet }) => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'react' | 'cli'>('react');

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh]">
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-slate-800 flex justify-between items-center bg-slate-900">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-lg bg-sky-500/10 text-sky-400 flex items-center justify-center">
              <FileCode className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white">{componentTitle} : Source Code</h3>
              <p className="text-[11px] font-mono text-slate-400">{sourceFilePath}</p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={handleCopy}
              className="px-3 py-1.5 bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold rounded-xl text-xs transition-colors flex items-center space-x-1.5 shadow-sm"
            >
              {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied to Clipboard!' : 'Copy Code'}</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Tabs Bar */}
        <div className="px-6 py-2 bg-slate-950 border-b border-slate-800 flex space-x-4 text-xs font-mono">
          <button
            onClick={() => setActiveTab('react')}
            className={`pb-1 border-b-2 font-semibold transition-colors ${
              activeTab === 'react' ? 'border-sky-400 text-sky-400' : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            React (TypeScript + Tailwind)
          </button>
          <button
            onClick={() => setActiveTab('cli')}
            className={`pb-1 border-b-2 font-semibold transition-colors ${
              activeTab === 'cli' ? 'border-sky-400 text-sky-400' : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            Agent Invocation Prompt
          </button>
        </div>

        {/* Code Content Viewport */}
        <div className="p-6 overflow-y-auto font-mono text-xs text-sky-200 bg-slate-950/80 leading-relaxed">
          {activeTab === 'react' ? (
            <pre className="whitespace-pre-wrap">{codeSnippet}</pre>
          ) : (
            <div className="space-y-4 text-slate-300">
              <p className="text-xs text-slate-400 font-sans">
                To reproduce or customize this interface with any AI coding agent (Claude Code, Cursor, Windsurf, Roo Code, Antigravity):
              </p>
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-sky-300">
                &gt; "Using ORQIVA, implement {componentTitle} following the specified design direction and WCAG 2.2 AA contrast rules. Ensure responsive mobile reflow and interactive state handling."
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

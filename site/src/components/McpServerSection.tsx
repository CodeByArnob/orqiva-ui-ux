import React, { useState } from 'react';
import { Terminal, Copy, Check, Server, ShieldCheck, Cpu, ArrowRight } from 'lucide-react';

export const McpServerSection: React.FC = () => {
  const [activeClient, setActiveClient] = useState<'claude' | 'cursor' | 'windsurf'>('claude');
  const [copied, setCopied] = useState(false);

  const configs = {
    claude: `{
  "mcpServers": {
    "orqiva-ui-ux": {
      "command": "npx",
      "args": ["-y", "orqiva-ui-ux", "mcp"]
    }
  }
}`,
    cursor: `{
  "mcp": {
    "servers": {
      "orqiva-ui-ux": {
        "command": "npx",
        "args": ["-y", "orqiva-ui-ux", "mcp"]
      }
    }
  }
}`,
    windsurf: `{
  "mcpServers": {
    "orqiva-ui-ux": {
      "command": "npx",
      "args": ["-y", "orqiva-ui-ux", "mcp"]
    }
  }
}`
  };

  const copyConfig = () => {
    navigator.clipboard.writeText(configs[activeClient]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const tools = [
    {
      name: 'orqiva_audit_accessibility',
      desc: 'Deeply scans component source code (TSX, Vue, Svelte, HTML) for WCAG 2.2 AA violations: contrast, touch target sizes, aria labels, and outline suppression.'
    },
    {
      name: 'orqiva_contrast_check',
      desc: 'Calculates mathematically exact relative luminance (WCAG formula) and evaluates AA and AAA compliance for text and UI controls.'
    },
    {
      name: 'orqiva_recommend_archetype',
      desc: 'Matches project domain, tone, and audience to the optimal ORQIVA visual archetype with exact tokens, font pairings, and rules.'
    },
    {
      name: 'orqiva_generate_tokens',
      desc: 'Exports multi-framework design tokens for Tailwind CSS, CSS Custom Properties, TypeScript, Kotlin Jetpack Compose, and Flutter.'
    },
    {
      name: 'orqiva_inspect_component',
      desc: 'Reviews a component snippet and returns an accessible refactored version with architectural notes.'
    }
  ];

  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 sm:p-8 shadow-2xl backdrop-blur-xl">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-6">
        <div>
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-2">
            <Server className="w-3.5 h-3.5" />
            <span>MODEL CONTEXT PROTOCOL (MCP) PRODUCTION SERVER</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Production MCP Server for AI Coding Agents
          </h2>
          <p className="text-sm text-slate-400 mt-1">
            Standard JSON-RPC 2.0 over stdio. Connects instantly with Claude Desktop, Cursor, Antigravity, and Windsurf.
          </p>
        </div>

        {/* Client Switcher Tabs */}
        <div className="flex space-x-2 p-1 bg-slate-950 rounded-xl border border-slate-800">
          {(['claude', 'cursor', 'windsurf'] as const).map((client) => (
            <button
              key={client}
              onClick={() => setActiveClient(client)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold capitalize transition-colors ${
                activeClient === client ? 'bg-emerald-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
              }`}
            >
              {client === 'claude' ? 'Claude Desktop' : client === 'cursor' ? 'Cursor IDE' : 'Windsurf'}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Left: Configuration Code Box */}
        <div className="lg:col-span-6 bg-slate-950 rounded-2xl border border-slate-800 overflow-hidden font-mono text-xs flex flex-col justify-between shadow-xl">
          <div className="px-4 py-2.5 bg-slate-900 border-b border-slate-800 flex justify-between items-center">
            <span className="text-slate-400 text-xs font-mono">
              {activeClient === 'claude'
                ? 'claude_desktop_config.json'
                : activeClient === 'cursor'
                ? 'cursor_settings.json'
                : 'mcp_config.json'}
            </span>
            <button
              onClick={copyConfig}
              className="px-3 py-1 bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white rounded-lg flex items-center space-x-1.5 text-xs font-semibold transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied!' : 'Copy Config'}</span>
            </button>
          </div>

          <pre className="p-5 text-emerald-300 leading-relaxed overflow-x-auto">
            <code>{configs[activeClient]}</code>
          </pre>

          <div className="px-4 py-2 bg-slate-900/60 border-t border-slate-800 text-[11px] text-slate-500 flex justify-between">
            <span>Protocol: MCP 2024-11-05</span>
            <span className="text-emerald-400">Zero Configuration Dependencies</span>
          </div>
        </div>

        {/* Right: Available Tools List */}
        <div className="lg:col-span-6 rounded-2xl border border-slate-800 bg-slate-950/40 p-5 space-y-3">
          <div className="text-xs font-mono text-sky-400 uppercase tracking-wider font-semibold mb-2">
            5 Integrated High-End MCP Tools
          </div>

          {tools.map((t) => (
            <div key={t.name} className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80">
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span className="font-mono text-xs font-bold text-white">{t.name}</span>
              </div>
              <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">
                {t.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

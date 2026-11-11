import React, { useState } from 'react';
import { 
  BookOpen, Search, ChevronRight, Copy, Check, ArrowRight, ArrowLeft, 
  ExternalLink, Hash, Bookmark, ShieldCheck, Sparkles
} from 'lucide-react';
import { docPages, DocPage } from '../data/docsContent';

export const DocsView: React.FC = () => {
  const [selectedPageId, setSelectedPageId] = useState<string>('quickstart');
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const categories = ['Getting Started', 'Workflows', 'Reference Library', 'Checklists', 'Governance'] as const;

  const filteredPages = docPages.filter(p => 
    p.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const currentPage = docPages.find(p => p.id === selectedPageId) || docPages[0];
  const currentIndex = docPages.findIndex(p => p.id === currentPage.id);
  const prevPage = currentIndex > 0 ? docPages[currentIndex - 1] : null;
  const nextPage = currentIndex < docPages.length - 1 ? docPages[currentIndex + 1] : null;

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Docs Navigation Sidebar */}
        <div className="lg:col-span-3 bg-slate-900/60 border border-slate-800 rounded-2xl p-4 sticky top-24 max-h-[85vh] overflow-y-auto">
          {/* Search Box */}
          <div className="relative mb-4">
            <Search className="w-4 h-4 absolute left-3 top-2.5 text-slate-500" />
            <input 
              type="text" 
              placeholder="Search documentation..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-sky-500"
            />
          </div>

          {/* Grouped Links */}
          <div className="space-y-6">
            {categories.map(cat => {
              const pagesInCat = filteredPages.filter(p => p.category === cat);
              if (pagesInCat.length === 0) return null;

              return (
                <div key={cat}>
                  <div className="text-[11px] font-mono uppercase tracking-wider text-slate-500 font-semibold mb-2 px-2">
                    {cat}
                  </div>
                  <div className="space-y-1">
                    {pagesInCat.map(page => (
                      <button
                        key={page.id}
                        onClick={() => setSelectedPageId(page.id)}
                        className={`w-full text-left px-3 py-2 rounded-xl text-xs transition-colors flex items-center justify-between ${
                          selectedPageId === page.id 
                            ? 'bg-sky-500/10 text-sky-400 font-semibold border border-sky-500/20' 
                            : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
                        }`}
                      >
                        <span className="truncate">{page.title}</span>
                        {selectedPageId === page.id && <ChevronRight className="w-3.5 h-3.5 shrink-0" />}
                      </button>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right: Active Document Content Canvas */}
        <div className="lg:col-span-9 bg-slate-900/40 border border-slate-800 rounded-2xl p-6 sm:p-10 shadow-xl">
          {/* Breadcrumb Header */}
          <div className="flex items-center space-x-2 text-xs font-mono text-slate-500 mb-4 pb-3 border-b border-slate-800">
            <span>Docs</span>
            <span>/</span>
            <span>{currentPage.category}</span>
            <span>/</span>
            <span className="text-sky-400 font-semibold">{currentPage.title}</span>
          </div>

          {/* Document Title & Meta */}
          <div className="mb-8">
            <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              {currentPage.title}
            </h1>
            <p className="mt-2 text-sm text-slate-400 leading-relaxed">
              {currentPage.description}
            </p>
          </div>

          {/* Render Markdown Content Body */}
          <div className="prose prose-invert prose-slate max-w-none text-xs sm:text-sm text-slate-300 leading-relaxed space-y-4">
            {currentPage.content.split('\n\n').map((paragraph, idx) => {
              // Code block handling
              if (paragraph.startsWith('```')) {
                const lines = paragraph.split('\n');
                const lang = lines[0].replace('```', '') || 'bash';
                const codeBody = lines.slice(1, -1).join('\n');

                return (
                  <div key={idx} className="my-4 rounded-xl border border-slate-800 bg-slate-950 overflow-hidden font-mono text-xs">
                    <div className="px-4 py-2 bg-slate-900 border-b border-slate-800 flex justify-between items-center text-slate-400">
                      <span className="text-[11px] uppercase tracking-wider">{lang}</span>
                      <button 
                        onClick={() => handleCopy(codeBody)}
                        className="flex items-center space-x-1 hover:text-white transition-colors"
                      >
                        {copiedCode === codeBody ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                        <span className="text-[11px]">{copiedCode === codeBody ? 'Copied' : 'Copy'}</span>
                      </button>
                    </div>
                    <pre className="p-4 overflow-x-auto text-sky-200">{codeBody}</pre>
                  </div>
                );
              }

              // Heading 1
              if (paragraph.startsWith('# ')) {
                return null; // already shown in header
              }

              // Heading 2
              if (paragraph.startsWith('## ')) {
                return (
                  <h2 key={idx} className="text-xl font-bold text-white pt-4 pb-1 border-b border-slate-800">
                    {paragraph.replace('## ', '')}
                  </h2>
                );
              }

              // Heading 3
              if (paragraph.startsWith('### ')) {
                return (
                  <h3 key={idx} className="text-base font-semibold text-sky-300 pt-2">
                    {paragraph.replace('### ', '')}
                  </h3>
                );
              }

              // Blockquotes / Prompts
              if (paragraph.startsWith('> ')) {
                return (
                  <div key={idx} className="p-4 rounded-xl bg-sky-500/5 border-l-4 border-sky-400 text-sky-100 my-3 font-mono text-xs">
                    {paragraph.replace(/^> /gm, '')}
                  </div>
                );
              }

              // Lists / Checklist
              if (paragraph.startsWith('- ') || paragraph.startsWith('1. ') || paragraph.startsWith('- [ ]')) {
                return (
                  <ul key={idx} className="list-disc list-inside space-y-1.5 pl-2 text-slate-300">
                    {paragraph.split('\n').map((item, itemIdx) => {
                      const cleanItem = item.replace(/^- \[[ x]\] /, '✓ ').replace(/^[0-9]+\. /, '').replace(/^- /, '');
                      return <li key={itemIdx}>{cleanItem}</li>;
                    })}
                  </ul>
                );
              }

              // Standard prose
              return <p key={idx} className="text-slate-300 leading-relaxed">{paragraph}</p>;
            })}
          </div>

          {/* Next / Previous Page Navigation */}
          <div className="mt-12 pt-6 border-t border-slate-800 flex justify-between items-center text-xs">
            {prevPage ? (
              <button 
                onClick={() => setSelectedPageId(prevPage.id)}
                className="flex items-center space-x-2 text-slate-400 hover:text-white px-3 py-2 rounded-xl hover:bg-slate-800/60 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Previous: {prevPage.title}</span>
              </button>
            ) : <div></div>}

            {nextPage ? (
              <button 
                onClick={() => setSelectedPageId(nextPage.id)}
                className="flex items-center space-x-2 text-sky-400 hover:text-sky-300 px-3 py-2 rounded-xl hover:bg-slate-800/60 transition-colors"
              >
                <span>Next: {nextPage.title}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : <div></div>}
          </div>
        </div>
      </div>
    </div>
  );
};

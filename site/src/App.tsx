import React, { useState, useEffect } from 'react';
import { 
  Sparkles, Layers, BookOpen, Download, Moon, Sun, 
  Menu, X, ExternalLink, ChevronRight, Check
} from 'lucide-react';
import { LandingPage } from './components/LandingPage';
import { ShowcaseGalleryView } from './components/ShowcaseGalleryView';
import { DocsView } from './components/DocsView';
import { ShowcaseStandalone } from './ShowcaseStandalone';

const GithubIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

export function App() {
  const [activeTab, setActiveTab] = useState<'home' | 'showcase' | 'docs'>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  // Check if standalone view is requested via URL query params (used by headless screenshot generator)
  const urlParams = new URLSearchParams(window.location.search);
  const standaloneView = urlParams.get('view');

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  // If standalone view is requested, render isolated showcase without headers
  if (standaloneView) {
    return <ShowcaseStandalone view={standaloneView} />;
  }

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans transition-colors duration-200">
      {/* Top Global Navigation Bar */}
      <header className="sticky top-0 z-40 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Brand Mark */}
          <button 
            onClick={() => setActiveTab('home')}
            className="flex items-center space-x-3 group text-left"
          >
            <img 
              src="./favicon.svg" 
              alt="ORQIVA Icon" 
              className="w-9 h-9 rounded-xl shadow-md group-hover:scale-105 transition-transform shrink-0" 
            />
            <div>
              <div className="text-sm font-bold tracking-tight text-white flex items-center space-x-1.5">
                <span>ORQIVA</span>
                <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-sky-500/20 text-sky-400 border border-sky-500/30">v1.0.0</span>
              </div>
              <div className="text-[10px] text-slate-400 font-mono tracking-tight">Adaptive Design Intelligence</div>
            </div>
          </button>

          {/* Desktop Nav Tabs */}
          <nav className="hidden md:flex items-center space-x-1 text-xs font-semibold">
            <button
              onClick={() => setActiveTab('home')}
              className={`px-3 py-2 rounded-xl transition-colors ${
                activeTab === 'home' ? 'bg-slate-800 text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab('showcase')}
              className={`px-3 py-2 rounded-xl transition-colors flex items-center space-x-1.5 ${
                activeTab === 'showcase' ? 'bg-slate-800 text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              <Layers className="w-3.5 h-3.5 text-sky-400" />
              <span>Showcase (8)</span>
            </button>
            <button
              onClick={() => setActiveTab('docs')}
              className={`px-3 py-2 rounded-xl transition-colors flex items-center space-x-1.5 ${
                activeTab === 'docs' ? 'bg-slate-800 text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5 text-emerald-400" />
              <span>Documentation</span>
            </button>
          </nav>

          {/* Right Action Icons */}
          <div className="hidden md:flex items-center space-x-3">
            {/* Theme Switcher */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition-colors"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-sky-400" />}
            </button>

            {/* GitHub Repo Link */}
            <a
              href="https://github.com/CodeByArnob/orqiva-ui-ux"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-xs font-medium text-slate-200 transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub</span>
            </a>

            {/* Direct Release Download Link */}
            <a
              href="https://github.com/CodeByArnob/orqiva-ui-ux/releases"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold text-xs transition-colors shadow-sm"
            >
              <Download className="w-3.5 h-3.5" />
              <span>v1.0.0</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden px-4 pt-2 pb-4 bg-slate-950 border-b border-slate-800 space-y-2 text-xs">
            <button
              onClick={() => { setActiveTab('home'); setMobileMenuOpen(false); }}
              className={`w-full text-left py-2 px-3 rounded-lg ${activeTab === 'home' ? 'bg-slate-800 text-white font-bold' : 'text-slate-300'}`}
            >
              Overview
            </button>
            <button
              onClick={() => { setActiveTab('showcase'); setMobileMenuOpen(false); }}
              className={`w-full text-left py-2 px-3 rounded-lg ${activeTab === 'showcase' ? 'bg-slate-800 text-white font-bold' : 'text-slate-300'}`}
            >
              Live Showcase (8 Interfaces)
            </button>
            <button
              onClick={() => { setActiveTab('docs'); setMobileMenuOpen(false); }}
              className={`w-full text-left py-2 px-3 rounded-lg ${activeTab === 'docs' ? 'bg-slate-800 text-white font-bold' : 'text-slate-300'}`}
            >
              Documentation
            </button>
            <div className="pt-2 border-t border-slate-800 flex justify-between items-center">
              <a
                href="https://github.com/CodeByArnob/orqiva-ui-ux"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 flex items-center space-x-1"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub Repository</span>
              </a>
              <button onClick={toggleTheme} className="text-slate-400">
                {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Main Body Canvas */}
      <main className="flex-1">
        {activeTab === 'home' && (
          <LandingPage 
            onNavigateToDocs={() => setActiveTab('docs')}
            onNavigateToShowcase={() => setActiveTab('showcase')}
          />
        )}
        {activeTab === 'showcase' && <ShowcaseGalleryView />}
        {activeTab === 'docs' && <DocsView />}
      </main>

      {/* Global Footer */}
      <footer className="border-t border-slate-800 bg-slate-950 py-12 px-4 sm:px-6 lg:px-8 text-xs text-slate-400">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <img 
                src="./favicon.svg" 
                alt="ORQIVA Icon" 
                className="w-6 h-6 rounded-lg shrink-0" 
              />
              <span className="font-bold text-white tracking-tight">ORQIVA UI/UX</span>
            </div>
            <p className="text-slate-500 text-[11px] leading-relaxed">
              Adaptive Design Intelligence ecosystem for AI coding agents. Open source under the MIT License.
            </p>
            <div className="text-[11px] font-mono text-slate-500">
              © {new Date().getFullYear()} ORQIVA Open Source Project.
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-slate-200 mb-3 text-xs uppercase tracking-wider font-mono">Documentation</h4>
            <ul className="space-y-2">
              <li><button onClick={() => setActiveTab('docs')} className="hover:text-white">Quickstart & Installation</button></li>
              <li><button onClick={() => setActiveTab('docs')} className="hover:text-white">Visual Design Directions</button></li>
              <li><button onClick={() => setActiveTab('docs')} className="hover:text-white">WCAG 2.2 AA Accessibility</button></li>
              <li><button onClick={() => setActiveTab('docs')} className="hover:text-white">Mobile Ergonomics & Reflow</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-slate-200 mb-3 text-xs uppercase tracking-wider font-mono">Showcase</h4>
            <ul className="space-y-2">
              <li><button onClick={() => setActiveTab('showcase')} className="hover:text-white">Mobile Banking (ApexBank)</button></li>
              <li><button onClick={() => setActiveTab('showcase')} className="hover:text-white">SaaS Telemetry (CloudScale)</button></li>
              <li><button onClick={() => setActiveTab('showcase')} className="hover:text-white">Clinical EHR (AuraCare)</button></li>
              <li><button onClick={() => setActiveTab('showcase')} className="hover:text-white">Developer IDE (Nexus Studio)</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-slate-200 mb-3 text-xs uppercase tracking-wider font-mono">Open Source</h4>
            <ul className="space-y-2">
              <li>
                <a href="https://github.com/CodeByArnob/orqiva-ui-ux" target="_blank" rel="noopener noreferrer" className="hover:text-white flex items-center space-x-1">
                  <span>GitHub Repository</span>
                  <ExternalLink className="w-3 h-3 ml-0.5" />
                </a>
              </li>
              <li>
                <a href="https://github.com/CodeByArnob/orqiva-ui-ux/releases" target="_blank" rel="noopener noreferrer" className="hover:text-white flex items-center space-x-1">
                  <span>Releases & Checksums</span>
                  <ExternalLink className="w-3 h-3 ml-0.5" />
                </a>
              </li>
              <li>
                <a href="https://github.com/CodeByArnob/orqiva-ui-ux/issues" target="_blank" rel="noopener noreferrer" className="hover:text-white flex items-center space-x-1">
                  <span>Issue Tracker & Support</span>
                  <ExternalLink className="w-3 h-3 ml-0.5" />
                </a>
              </li>
              <li>
                <a href="https://github.com/CodeByArnob/orqiva-ui-ux/blob/main/LICENSE" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                  MIT License
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

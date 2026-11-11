import React, { useState } from 'react';
import { 
  Server, Activity, Zap, AlertTriangle, CheckCircle, RefreshCw, 
  Search, Filter, ChevronDown, MoreHorizontal, ArrowUpRight, ArrowDownRight, Layers
} from 'lucide-react';

export const SaasDashboardShowcase: React.FC<{ isEmbedded?: boolean }> = ({ isEmbedded = false }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'healthy' | 'degraded'>('all');
  const [restartingId, setRestartingId] = useState<string | null>(null);

  const initialServices = [
    { id: 'srv-01', name: 'auth-gateway-v2', region: 'us-east-1', uptime: '99.99%', latency: '8.4ms', cpu: 34, mem: 42, status: 'healthy', pods: '12/12' },
    { id: 'srv-02', name: 'payment-router-core', region: 'eu-west-1', uptime: '99.95%', latency: '14.2ms', cpu: 78, mem: 81, status: 'degraded', pods: '8/10' },
    { id: 'srv-03', name: 'inference-worker-gpu', region: 'us-west-2', uptime: '99.98%', latency: '42.1ms', cpu: 62, mem: 55, status: 'healthy', pods: '24/24' },
    { id: 'srv-04', name: 'telemetry-ingest-kafka', region: 'us-east-1', uptime: '100.0%', latency: '3.1ms', cpu: 22, mem: 38, status: 'healthy', pods: '6/6' },
    { id: 'srv-05', name: 'billing-ledger-db', region: 'ap-southeast-1', uptime: '99.91%', latency: '19.8ms', cpu: 54, mem: 68, status: 'healthy', pods: '4/4' }
  ];

  const [services, setServices] = useState(initialServices);

  const filteredServices = services.filter(srv => {
    const matchesSearch = srv.name.toLowerCase().includes(searchQuery.toLowerCase()) || srv.region.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'all' || srv.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const handleRestart = (id: string) => {
    setRestartingId(id);
    setTimeout(() => {
      setServices(prev => prev.map(s => s.id === id ? { ...s, status: 'healthy', cpu: 28, pods: s.pods.replace('8/10', '10/10') } : s));
      setRestartingId(null);
    }, 1200);
  };

  return (
    <div className={`w-full bg-slate-950 text-slate-100 rounded-2xl border border-slate-800 shadow-2xl overflow-hidden font-sans ${isEmbedded ? '' : 'p-6 my-4'}`}>
      {/* Dashboard Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pb-6 border-b border-slate-800/80 gap-4">
        <div>
          <div className="flex items-center space-x-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider font-semibold">Production Cluster</span>
            <span className="text-xs text-slate-500">•</span>
            <span className="text-xs font-mono text-slate-400">AWS us-east-1 & eu-west-1</span>
          </div>
          <h2 className="text-xl font-bold text-white mt-1">CloudScale Telemetry & Health</h2>
        </div>

        <div className="flex items-center space-x-3 w-full sm:w-auto">
          <div className="flex items-center bg-slate-900 border border-slate-800 rounded-lg p-1 text-xs text-slate-400">
            <span className="px-2 py-1 font-medium text-white bg-slate-800 rounded">Live (10s)</span>
            <span className="px-2 py-1 hover:text-slate-200 cursor-pointer">1h</span>
            <span className="px-2 py-1 hover:text-slate-200 cursor-pointer">24h</span>
          </div>
          <button 
            onClick={() => setServices(initialServices)}
            className="flex items-center space-x-1.5 px-3 py-1.5 bg-sky-500/10 hover:bg-sky-500/20 text-sky-400 border border-sky-500/30 rounded-lg text-xs font-medium transition-colors"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Sync</span>
          </button>
        </div>
      </div>

      {/* Metrics Telemetry Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 my-6">
        <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800/80">
          <div className="flex justify-between items-center text-xs text-slate-400">
            <span>Active Pods & Nodes</span>
            <Layers className="w-4 h-4 text-sky-400" />
          </div>
          <div className="mt-2 flex items-baseline justify-between">
            <span className="text-2xl font-bold font-mono text-white">54 / 56</span>
            <span className="text-xs font-medium text-emerald-400 flex items-center">
              <ArrowUpRight className="w-3 h-3 mr-0.5" /> 96.4%
            </span>
          </div>
          <div className="mt-2 text-[11px] text-slate-500">2 pods scaling up in eu-west-1</div>
        </div>

        <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800/80">
          <div className="flex justify-between items-center text-xs text-slate-400">
            <span>Throughput Rate</span>
            <Activity className="w-4 h-4 text-emerald-400" />
          </div>
          <div className="mt-2 flex items-baseline justify-between">
            <span className="text-2xl font-bold font-mono text-white">48,290</span>
            <span className="text-xs font-medium text-emerald-400 flex items-center">
              <ArrowUpRight className="w-3 h-3 mr-0.5" /> +8.4%
            </span>
          </div>
          <div className="mt-2 text-[11px] text-slate-500">req/sec • 4.1M processed today</div>
        </div>

        <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800/80">
          <div className="flex justify-between items-center text-xs text-slate-400">
            <span>Global P99 Latency</span>
            <Zap className="w-4 h-4 text-amber-400" />
          </div>
          <div className="mt-2 flex items-baseline justify-between">
            <span className="text-2xl font-bold font-mono text-white">14.2 ms</span>
            <span className="text-xs font-medium text-emerald-400 flex items-center">
              <ArrowDownRight className="w-3 h-3 mr-0.5" /> -2.1ms
            </span>
          </div>
          <div className="mt-2 text-[11px] text-slate-500">SLA target &lt; 25.0ms (Satisfied)</div>
        </div>

        <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800/80">
          <div className="flex justify-between items-center text-xs text-slate-400">
            <span>Error Budget SLA</span>
            <AlertTriangle className="w-4 h-4 text-sky-400" />
          </div>
          <div className="mt-2 flex items-baseline justify-between">
            <span className="text-2xl font-bold font-mono text-white">99.988%</span>
            <span className="text-xs font-medium text-slate-400">0.012% err</span>
          </div>
          <div className="mt-2 text-[11px] text-slate-500">Zero critical incidents this week</div>
        </div>
      </div>

      {/* Interactive Latency SVG Sparkline Chart */}
      <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800/80 mb-6">
        <div className="flex justify-between items-center mb-3">
          <div>
            <h3 className="text-sm font-semibold text-white">Latency Distribution (Last 24 Hours)</h3>
            <p className="text-xs text-slate-400">P50 vs P95 vs P99 response telemetry across edge gateways</p>
          </div>
          <div className="flex items-center space-x-4 text-xs font-mono">
            <span className="flex items-center"><span className="w-2.5 h-2.5 rounded-full bg-sky-400 mr-1.5"></span>P99 (14ms)</span>
            <span className="flex items-center"><span className="w-2.5 h-2.5 rounded-full bg-emerald-400 mr-1.5"></span>P50 (4ms)</span>
          </div>
        </div>

        {/* SVG Sparkline Graph */}
        <div className="w-full h-32 pt-2">
          <svg className="w-full h-full overflow-visible" viewBox="0 0 600 100" preserveAspectRatio="none">
            <defs>
              <linearGradient id="latencyGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.0" />
              </linearGradient>
            </defs>
            {/* Grid lines */}
            <line x1="0" y1="20" x2="600" y2="20" stroke="#1e293b" strokeDasharray="3 3" />
            <line x1="0" y1="50" x2="600" y2="50" stroke="#1e293b" strokeDasharray="3 3" />
            <line x1="0" y1="80" x2="600" y2="80" stroke="#1e293b" strokeDasharray="3 3" />
            {/* Area Fill */}
            <polygon 
              fill="url(#latencyGradient)" 
              points="0,100 0,65 50,60 100,55 150,70 200,45 250,50 300,35 350,40 400,30 450,48 500,28 550,32 600,25 600,100" 
            />
            {/* Line Graph */}
            <polyline 
              fill="none" 
              stroke="#38bdf8" 
              strokeWidth="2.5" 
              strokeLinecap="round"
              strokeLinejoin="round"
              points="0,65 50,60 100,55 150,70 200,45 250,50 300,35 350,40 400,30 450,48 500,28 550,32 600,25" 
            />
            {/* P50 Line */}
            <polyline 
              fill="none" 
              stroke="#34d399" 
              strokeWidth="1.5" 
              strokeDasharray="2 2"
              points="0,85 50,82 100,80 150,86 200,78 250,80 300,75 350,77 400,73 450,79 500,72 550,74 600,70" 
            />
          </svg>
        </div>
      </div>

      {/* Filter and Services Table */}
      <div className="rounded-xl border border-slate-800 bg-slate-900/40 overflow-hidden">
        <div className="p-4 border-b border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-3">
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 absolute left-3 top-2.5 text-slate-500" />
            <input 
              type="text"
              placeholder="Search service or region..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 bg-slate-900 border border-slate-800 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none focus:border-sky-500"
            />
          </div>

          <div className="flex items-center space-x-2 w-full sm:w-auto">
            <span className="text-xs text-slate-400">Status:</span>
            <button 
              onClick={() => setStatusFilter('all')}
              className={`px-2.5 py-1 text-xs rounded-md transition-colors ${
                statusFilter === 'all' ? 'bg-slate-800 text-white font-medium' : 'text-slate-400 hover:text-white'
              }`}
            >
              All
            </button>
            <button 
              onClick={() => setStatusFilter('healthy')}
              className={`px-2.5 py-1 text-xs rounded-md transition-colors ${
                statusFilter === 'healthy' ? 'bg-emerald-500/20 text-emerald-400 font-medium' : 'text-slate-400 hover:text-white'
              }`}
            >
              Healthy
            </button>
            <button 
              onClick={() => setStatusFilter('degraded')}
              className={`px-2.5 py-1 text-xs rounded-md transition-colors ${
                statusFilter === 'degraded' ? 'bg-amber-500/20 text-amber-400 font-medium' : 'text-slate-400 hover:text-white'
              }`}
            >
              Degraded
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-800 text-[11px] font-mono uppercase tracking-wider text-slate-400 bg-slate-900/60">
                <th className="py-3 px-4">Service Name</th>
                <th className="py-3 px-4">Region</th>
                <th className="py-3 px-4">Pods</th>
                <th className="py-3 px-4">P99 Latency</th>
                <th className="py-3 px-4">CPU / Mem</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 text-xs">
              {filteredServices.map(srv => (
                <tr key={srv.id} className="hover:bg-slate-800/30 transition-colors">
                  <td className="py-3 px-4 font-mono font-medium text-white flex items-center space-x-2">
                    <Server className="w-3.5 h-3.5 text-slate-400" />
                    <span>{srv.name}</span>
                  </td>
                  <td className="py-3 px-4 font-mono text-slate-400">{srv.region}</td>
                  <td className="py-3 px-4 font-mono text-slate-300">{srv.pods}</td>
                  <td className="py-3 px-4 font-mono font-semibold text-slate-200">{srv.latency}</td>
                  <td className="py-3 px-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-16 bg-slate-800 rounded-full h-1.5 overflow-hidden">
                        <div 
                          className={`h-full rounded-full ${srv.cpu > 70 ? 'bg-amber-400' : 'bg-sky-400'}`} 
                          style={{ width: `${srv.cpu}%` }}
                        ></div>
                      </div>
                      <span className="font-mono text-[11px] text-slate-400">{srv.cpu}%</span>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium font-mono ${
                      srv.status === 'healthy' 
                        ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' 
                        : 'bg-amber-500/10 text-amber-400 border border-amber-500/20 animate-pulse'
                    }`}>
                      {srv.status === 'healthy' ? (
                        <CheckCircle className="w-2.5 h-2.5 mr-1" />
                      ) : (
                        <AlertTriangle className="w-2.5 h-2.5 mr-1" />
                      )}
                      {srv.status.toUpperCase()}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-right">
                    <button 
                      onClick={() => handleRestart(srv.id)}
                      disabled={restartingId === srv.id}
                      className="px-2 py-1 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded text-[11px] font-medium transition-colors disabled:opacity-50"
                    >
                      {restartingId === srv.id ? 'Restarting...' : 'Restart'}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

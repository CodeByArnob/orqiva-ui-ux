import React, { useState } from 'react';
import { 
  Heart, Activity, Thermometer, Wind, AlertCircle, CheckCircle2, 
  Clock, FileText, Calendar, Plus, Pill, Stethoscope, ChevronRight
} from 'lucide-react';

export const HealthcareShowcase: React.FC<{ isEmbedded?: boolean }> = ({ isEmbedded = false }) => {
  const [medications, setMedications] = useState([
    { id: 'med-1', name: 'Metformin Hydrochloride', dose: '500 mg', freq: 'With breakfast', time: '08:00 AM', taken: true },
    { id: 'med-2', name: 'Lisinopril', dose: '10 mg', freq: 'Once daily', time: '01:00 PM', taken: false },
    { id: 'med-3', name: 'Atorvastatin Calcium', dose: '20 mg', freq: 'At bedtime', time: '09:00 PM', taken: false },
  ]);

  const toggleMedication = (id: string) => {
    setMedications(prev => prev.map(m => m.id === id ? { ...m, taken: !m.taken } : m));
  };

  return (
    <div className={`w-full bg-slate-950 text-slate-100 rounded-2xl border border-slate-800 shadow-2xl overflow-hidden font-sans ${isEmbedded ? '' : 'p-6 my-4'}`}>
      {/* Patient Header Banner */}
      <div className="p-6 bg-gradient-to-r from-slate-900 via-slate-850 to-slate-900 border-b border-slate-800 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex items-center space-x-4">
          <div className="w-14 h-14 rounded-2xl bg-teal-500/10 border border-teal-500/20 text-teal-400 flex items-center justify-center font-bold text-lg">
            EV
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <h2 className="text-xl font-bold text-white">Eleanor Vance</h2>
              <span className="px-2 py-0.5 rounded-full bg-slate-800 text-[11px] font-mono text-slate-300">42 yrs • Female</span>
              <span className="px-2 py-0.5 rounded-full bg-teal-500/10 text-teal-400 border border-teal-500/20 text-[11px] font-mono">Blood: O+</span>
            </div>
            <div className="text-xs text-slate-400 mt-1 flex items-center space-x-3">
              <span>MRN: <strong className="font-mono text-slate-300">#PT-9042-88</strong></span>
              <span>•</span>
              <span>Attending: <strong className="text-slate-300">Dr. Marcus Chen, MD</strong></span>
            </div>
          </div>
        </div>

        {/* Critical Alert Badge */}
        <div className="flex items-center space-x-2 px-3 py-1.5 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span className="font-medium">Severe Allergy: Penicillin & Cephalosporins</span>
        </div>
      </div>

      {/* Main Clinical Body */}
      <div className="p-6 space-y-6">
        {/* Real-Time Telemetry Vitals */}
        <div>
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 flex items-center space-x-2">
              <Activity className="w-3.5 h-3.5 text-teal-400" />
              <span>Real-Time Bedside Telemetry</span>
            </h3>
            <span className="text-[11px] font-mono text-emerald-400 flex items-center">
              <span className="w-2 h-2 rounded-full bg-emerald-400 mr-1.5 animate-pulse"></span>
              Live Sync (2s)
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {/* Heart Rate */}
            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
              <div className="flex justify-between items-center text-xs text-slate-400">
                <span>Heart Rate</span>
                <Heart className="w-4 h-4 text-rose-400" />
              </div>
              <div className="mt-2 flex items-baseline space-x-1.5">
                <span className="text-2xl font-bold font-mono text-white">72</span>
                <span className="text-xs text-slate-400">bpm</span>
              </div>
              <div className="mt-1 text-[11px] text-emerald-400 font-medium">Normal Sinus Rhythm</div>
            </div>

            {/* Blood Pressure */}
            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
              <div className="flex justify-between items-center text-xs text-slate-400">
                <span>Blood Pressure</span>
                <Activity className="w-4 h-4 text-teal-400" />
              </div>
              <div className="mt-2 flex items-baseline space-x-1.5">
                <span className="text-2xl font-bold font-mono text-white">118/76</span>
                <span className="text-xs text-slate-400">mmHg</span>
              </div>
              <div className="mt-1 text-[11px] text-emerald-400 font-medium">Optimal Stage</div>
            </div>

            {/* Oxygen SpO2 */}
            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
              <div className="flex justify-between items-center text-xs text-slate-400">
                <span>SpO2 Saturation</span>
                <Wind className="w-4 h-4 text-sky-400" />
              </div>
              <div className="mt-2 flex items-baseline space-x-1.5">
                <span className="text-2xl font-bold font-mono text-white">99%</span>
                <span className="text-xs text-slate-400">Room Air</span>
              </div>
              <div className="mt-1 text-[11px] text-emerald-400 font-medium">Excellent Oxygenation</div>
            </div>

            {/* Temperature */}
            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
              <div className="flex justify-between items-center text-xs text-slate-400">
                <span>Core Temp</span>
                <Thermometer className="w-4 h-4 text-amber-400" />
              </div>
              <div className="mt-2 flex items-baseline space-x-1.5">
                <span className="text-2xl font-bold font-mono text-white">98.4</span>
                <span className="text-xs text-slate-400">°F</span>
              </div>
              <div className="mt-1 text-[11px] text-emerald-400 font-medium">Afebrile (Normothermic)</div>
            </div>
          </div>
        </div>

        {/* Two-Column: Medication Regimen & Clinical Diagnostics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Medications Card */}
          <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800">
            <div className="flex justify-between items-center mb-3">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 flex items-center space-x-2">
                <Pill className="w-3.5 h-3.5 text-purple-400" />
                <span>Today's Prescribed Regimen</span>
              </h4>
              <span className="text-xs text-slate-400 font-mono">
                {medications.filter(m => m.taken).length} of {medications.length} Administered
              </span>
            </div>

            <div className="space-y-2.5">
              {medications.map(med => (
                <div 
                  key={med.id} 
                  onClick={() => toggleMedication(med.id)}
                  className={`p-3 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                    med.taken 
                      ? 'bg-emerald-500/5 border-emerald-500/20 text-slate-300' 
                      : 'bg-slate-850/80 border-slate-800 text-white hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-6 h-6 rounded-lg flex items-center justify-center ${
                      med.taken ? 'bg-emerald-500/20 text-emerald-400' : 'bg-slate-800 text-slate-400'
                    }`}>
                      {med.taken ? <CheckCircle2 className="w-4 h-4" /> : <div className="w-2.5 h-2.5 rounded-full border border-slate-500"></div>}
                    </div>
                    <div>
                      <div className={`text-xs font-semibold ${med.taken ? 'line-through text-slate-400' : 'text-white'}`}>
                        {med.name} ({med.dose})
                      </div>
                      <div className="text-[11px] text-slate-400">{med.freq} • Scheduled for {med.time}</div>
                    </div>
                  </div>
                  <span className={`text-[10px] font-mono font-medium px-2 py-0.5 rounded-full ${
                    med.taken ? 'bg-emerald-500/10 text-emerald-400' : 'bg-amber-500/10 text-amber-400'
                  }`}>
                    {med.taken ? 'CONFIRMED' : 'DUE'}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Clinical Lab Panel */}
          <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800">
            <div className="flex justify-between items-center mb-3">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 flex items-center space-x-2">
                <FileText className="w-3.5 h-3.5 text-teal-400" />
                <span>Laboratory Diagnostics (Fasting Panel)</span>
              </h4>
              <span className="text-[11px] text-slate-400 font-mono">Today, 06:30 AM</span>
            </div>

            <div className="space-y-3">
              {/* Lab Test 1 */}
              <div className="p-3 rounded-xl bg-slate-850/80 border border-slate-800 flex justify-between items-center">
                <div>
                  <div className="text-xs font-semibold text-white">Fasting Plasma Glucose</div>
                  <div className="text-[11px] text-slate-400">Reference: 70–99 mg/dL</div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-bold font-mono text-white">92 mg/dL</div>
                  <div className="text-[10px] font-mono text-emerald-400 font-medium">NORMAL RANGE</div>
                </div>
              </div>

              {/* Lab Test 2 */}
              <div className="p-3 rounded-xl bg-slate-850/80 border border-slate-800 flex justify-between items-center">
                <div>
                  <div className="text-xs font-semibold text-white">Hemoglobin A1c (HbA1c)</div>
                  <div className="text-[11px] text-slate-400">Reference: &lt; 5.7 %</div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-bold font-mono text-white">5.4 %</div>
                  <div className="text-[10px] font-mono text-emerald-400 font-medium">OPTIMAL GLYCEMIC</div>
                </div>
              </div>

              {/* Lab Test 3 */}
              <div className="p-3 rounded-xl bg-slate-850/80 border border-slate-800 flex justify-between items-center">
                <div>
                  <div className="text-xs font-semibold text-white">Total Serum Cholesterol</div>
                  <div className="text-[11px] text-slate-400">Reference: &lt; 200 mg/dL</div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-bold font-mono text-amber-400">208 mg/dL</div>
                  <div className="text-[10px] font-mono text-amber-400 font-medium">BORDERLINE ELEVATED</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

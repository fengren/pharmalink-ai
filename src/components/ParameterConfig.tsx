import React, { useState } from 'react';
import { 
  RotateCcw, 
  Save, 
  Sparkles, 
  Info, 
  ChevronDown, 
  CheckCircle2, 
  History,
  FileText
} from 'lucide-react';
import { cn } from '../lib/utils';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';
import { useLanguage } from '../contexts/LanguageContext';

const previewData = [
  { name: 'Jun', actual: 120, forecast: 160 },
  { name: 'Jul', actual: 135, forecast: 155 },
  { name: 'Ago', actual: 130, forecast: 180 },
  { name: 'Sep', actual: 110, forecast: 170 },
  { name: 'Oct', actual: 150, forecast: 190 },
  { name: 'Nov', actual: 230, forecast: 240 },
  { name: 'Dic', actual: 220, forecast: 260 },
];

export default function ParameterConfig() {
  const { t, language } = useLanguage();
  const [safetyFactor, setSafetyFactor] = useState(1.2);
  const [seasonalWeight, setSeasonalWeight] = useState(0.7);
  const [supplierStability, setSupplierStability] = useState(0.6);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-[1600px] mx-auto">
      {/* Left Column: Sliders */}
      <div className="lg:col-span-2 space-y-8">
        <div className="bg-white rounded-xl border border-border-subtle p-8 shadow-sm">
          <div className="flex items-center justify-between mb-8 pb-6 border-b border-slate-50">
            <div className="flex items-center gap-4">
              <h3 className="text-xl font-bold text-slate-800 tracking-tight">{t('params.title')}</h3>
              <span className="text-[10px] bg-primary/10 text-primary font-black px-2 py-0.5 rounded-sm uppercase tracking-widest">v2.4.1</span>
            </div>
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 px-4 py-2 text-slate-400 hover:text-slate-800 font-bold text-xs transition-colors uppercase tracking-wider">
                <RotateCcw className="w-4 h-4" /> {t('params.reset')}
              </button>
              <button className="flex items-center gap-2 px-6 py-2.5 bg-primary text-white rounded-lg font-bold text-sm shadow-lg shadow-primary/20 hover:translate-y-[-1px] transition-all">
                <Save className="w-4 h-4" /> {t('params.save')}
              </button>
            </div>
          </div>

          <div className="space-y-12">
            <div className="space-y-6">
              <div className="flex items-center gap-2 text-primary font-black text-[10px] bg-primary/5 px-3 py-1.5 rounded-sm w-fit uppercase tracking-[0.2em] border border-primary/10">
                <Sparkles className="w-4 h-4" /> PharmaLink Pro AI
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 bg-slate-50/50 rounded-xl border border-border-subtle shadow-inner">
                <div className="space-y-4">
                  <p className="flex items-center gap-2 text-xs font-bold text-slate-700 uppercase tracking-wider">
                    {t('params.window')}
                  </p>
                  <div className="flex gap-4">
                    {[30, 60, 90, 180].map(days => (
                      <label key={days} className="flex items-center gap-2 cursor-pointer group">
                        <input type="radio" name="days" className="w-4 h-4 text-primary focus:ring-primary/20 border-slate-300" defaultChecked={days === 30} />
                        <span className="text-sm font-bold text-slate-500 group-hover:text-slate-800 transition-colors">{days}d</span>
                      </label>
                    ))}
                  </div>
                </div>
                <p className="text-[11px] text-slate-400 font-medium leading-relaxed">
                  <Info className="w-3.5 h-3.5 inline mr-1 mb-0.5 text-primary" /> 
                  {language === 'es' ? 'Ajusta el horizonte de predicción.' : 'Adjust the prediction horizon.'}
                </p>
              </div>
            </div>

            <SliderItem 
              label={t('params.safety_factor')} 
              value={safetyFactor} 
              onChange={setSafetyFactor} 
              min={0.5} 
              max={2.0} 
              desc={language === 'es' ? 'Margen de contingencia.' : 'Contingency margin.'}
              labels={[
                language === 'es' ? 'Bajo' : 'Low', 
                language === 'es' ? 'Óptimo' : 'Optimal', 
                language === 'es' ? 'Conservador' : 'Conservative'
              ]}
            />

            <SliderItem 
              label={t('params.seasonal')} 
              value={seasonalWeight} 
              onChange={setSeasonalWeight} 
              min={0} 
              max={1.0} 
              desc={language === 'es' ? 'Prioriza patrones históricos.' : 'Prioritize historical patterns.'}
              labels={[
                language === 'es' ? 'Mínima' : 'Min', 
                language === 'es' ? 'Moderada' : 'Mod', 
                language === 'es' ? 'Máxima' : 'Max'
              ]}
            />

            <SliderItem 
              label={t('params.stability')} 
              value={supplierStability} 
              onChange={setSupplierStability} 
              min={0} 
              max={1.0} 
              desc={language === 'es' ? 'Evalúa el performance histórico.' : 'Evaluate historical performance.'}
              labels={[
                language === 'es' ? 'Ignorar' : 'Ignore', 
                language === 'es' ? 'Eq' : 'Eq', 
                language === 'es' ? 'Crítica' : 'Critical'
              ]}
            />
          </div>
        </div>
      </div>

      {/* Right Column: Preview & Impact */}
      <div className="space-y-6">
        <div className="bg-white rounded-xl border border-border-subtle p-6 shadow-sm sticky top-24">
          <div className="mb-8">
            <h3 className="text-base font-bold text-slate-800 tracking-tight">{t('params.impact_analysis')}</h3>
            <p className="text-[10px] text-primary font-black uppercase tracking-[0.2em] flex items-center gap-1 mt-2">
              <RotateCcw className="w-3 h-3" /> Live Simulator
            </p>
          </div>

          <div className="mb-8 p-4 bg-slate-50 rounded-xl border border-border-subtle">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">{language === 'es' ? 'Precisión Proyectada' : 'Projected Accuracy'}</span>
              <span className="text-base font-black text-primary tracking-tighter">92.7%</span>
            </div>
            <div className="h-1.5 bg-slate-200 rounded-full overflow-hidden">
              <div className="h-full bg-primary rounded-full w-[92.7%] shadow-sm transition-all duration-500"></div>
            </div>
          </div>

          <div className="h-[220px] mb-8">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={previewData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94A3B8', fontSize: 10, fontWeight: 700}} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#94A3B8', fontSize: 10, fontWeight: 700}} />
                <Tooltip />
                <Line type="monotone" dataKey="forecast" stroke="#006B52" strokeWidth={3} strokeDasharray="5 5" dot={false} />
                <Line type="monotone" dataKey="actual" stroke="#CBD5E1" strokeWidth={3} dot={{r: 4, fill: '#fff', strokeWidth: 2, stroke: '#CBD5E1'}} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}

function SliderItem({ label, value, onChange, min, max, desc, labels }: any) {
  return (
    <div className="space-y-6">
      <div className="flex items-start justify-between gap-4">
        <div className="space-y-1">
          <label className="text-sm font-bold text-slate-800 tracking-tight">
            {label}
          </label>
          <p className="text-[11px] text-slate-400 font-medium leading-relaxed max-w-sm">{desc}</p>
        </div>
        <div className="bg-primary/5 border border-primary/20 rounded-md px-3 py-1 font-black text-primary text-xs tracking-tighter">
          {value.toFixed(1)}x
        </div>
      </div>
      <div className="relative pt-2">
        <input 
          type="range" 
          min={min} 
          max={max} 
          step="0.1" 
          value={value} 
          onChange={(e) => onChange(parseFloat(e.target.value))}
          className="w-full h-1.5 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-primary"
        />
        <div className="flex items-center justify-between mt-4 px-1">
          {labels.map((l: string, i: number) => (
            <span key={l} className="text-[9px] font-black text-slate-400 uppercase tracking-[0.1em]">
              {l}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function VersionItem({ version, date, active }: any) {
  return (
    <div className={cn(
      "p-6 flex items-center justify-between group transition-all",
      active ? "bg-slate-50/50" : "hover:bg-slate-50"
    )}>
      <div className="flex items-center gap-5">
        <div className={cn(
          "w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border shadow-sm transition-transform group-hover:scale-105",
          active ? "bg-primary text-white border-primary" : "bg-white text-slate-300 border-border-subtle"
        )}>
          {active ? <CheckCircle2 className="w-5 h-5" /> : <FileText className="w-5 h-5" />}
        </div>
        <div>
          <div className="flex items-center gap-3">
            <h4 className="text-sm font-bold text-slate-800 tracking-tight">Rel {version}</h4>
            {active && <span className="text-[9px] font-black bg-primary/10 text-primary px-2 py-0.5 rounded-sm uppercase tracking-widest">Active</span>}
          </div>
          <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mt-1.5">{date}</p>
        </div>
      </div>
      <button className="text-primary hover:text-slate-800 font-black text-[10px] uppercase tracking-widest transition-colors">
        Detalle
      </button>
    </div>
  );
}

function ImpactItem({ label, value, positive }: any) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-xs font-medium text-slate-600">{label}</span>
      <span className={cn(
        "text-xs font-bold",
        positive ? "text-emerald-500" : "text-rose-500"
      )}>
        {value}
      </span>
    </div>
  );
}

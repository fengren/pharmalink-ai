import React, { useState } from 'react';
import { 
  RotateCcw, 
  Save, 
  Sparkles, 
  Info, 
  ChevronDown, 
  CheckCircle2, 
  History,
  FileText,
  TrendingUp,
  BarChart3
} from 'lucide-react';
import { cn } from '../lib/utils';
import { 
  LineChart, 
  Line, 
  Area,
  AreaChart,
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';
import { useLanguage } from '../contexts/LanguageContext';

const rawPreviewData = [
  { month: 6, actual: 120, forecast: 220 },
  { month: 7, actual: 135, forecast: 185 },
  { month: 8, actual: 105, forecast: 195 },
  { month: 9, actual: 138, forecast: 235 },
  { month: 10, actual: 95, forecast: 305 },
  { month: 11, actual: 235, forecast: 335 },
  { month: 12, actual: 215, forecast: 315 },
];

export default function ParameterConfig() {
  const { t, language } = useLanguage();
  const [safetyFactor, setSafetyFactor] = useState(1.2);
  const [seasonalWeight, setSeasonalWeight] = useState(0.7);
  const [supplierStability, setSupplierStability] = useState(0.6);
  const [chartType, setChartType] = useState('consumo');

  const monthNames: Record<string, string[]> = {
    es: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
    en: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  };

  const currentMonthNames = monthNames[language as keyof typeof monthNames] || monthNames.en;

  const previewData = rawPreviewData.map(item => ({
    ...item,
    name: currentMonthNames[item.month - 1]
  }));

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-[1600px] mx-auto">
      {/* Left Column: Sliders */}
      <div className="lg:col-span-2 space-y-8">
        <div className="bg-white rounded-xl border border-border-subtle p-8 shadow-sm">
          <div className="flex items-center justify-between mb-8 pb-6 border-b border-slate-50">
            <div className="flex items-center gap-4">
              <h3 className="">{t('params.title')}</h3>
              <span className="text-[10px] bg-primary/10 text-primary font-black px-2 py-0.5 rounded-sm tracking-widest">v2.4.1</span>
            </div>
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 px-4 py-2 text-slate-400 hover:text-slate-800 font-bold text-xs transition-colors tracking-wider">
                <RotateCcw className="w-4 h-4" /> {t('params.reset')}
              </button>
              <button className="flex items-center gap-2 px-6 py-2.5 bg-primary text-white rounded-lg font-bold text-sm shadow-lg shadow-primary/20 hover:translate-y-[-1px] transition-all">
                <Save className="w-4 h-4" /> {t('params.save')}
              </button>
            </div>
          </div>

          <div className="space-y-12">
            <div className="space-y-6">
              <div className="flex items-center gap-2 text-primary font-black text-[10px] bg-primary/5 px-3 py-1.5 rounded-sm w-fit tracking-[0.2em] border border-primary/10">
                <Sparkles className="w-4 h-4" /> PharmaLink Pro AI
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 bg-slate-50/50 rounded-xl border border-border-subtle shadow-inner">
                <div className="space-y-4">
                  <p className="flex items-center gap-2 text-xs font-bold text-slate-700 tracking-wider">
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
        <div className="bg-white rounded-xl border border-border-subtle p-8 shadow-sm">
          <div className="mb-6">
            <h3 className="text-xl font-bold text-slate-800 mb-1">{language === 'es' ? 'Vista Previa del Pronóstico' : 'Forecasting Preview'}</h3>
            <p className="text-xs text-slate-400 font-bold flex items-center gap-1.5 mt-2">
              <RotateCcw className="w-4 h-4 text-emerald-500" /> 
              {language === 'es' ? 'Actualización en Tiempo Real' : 'Real-time Update'}
            </p>
          </div>

          <div className="mb-10 p-6 bg-slate-50/50 rounded-2xl border border-border-subtle/50">
            <div className="flex items-center justify-between mb-3 px-1">
              <span className="text-[12px] font-bold text-slate-600">{language === 'es' ? 'Precisión del Pronóstico' : 'Forecasting Accuracy'}</span>
              <span className="text-xl font-black text-[#006B52]">92.7%</span>
            </div>
            <div className="h-2.5 bg-slate-100 rounded-full overflow-hidden border border-slate-200/50">
              <div className="h-full bg-primary rounded-full w-[92.7%] transition-all duration-1000 ease-out"></div>
            </div>
          </div>

          <div className="flex items-center justify-between mb-6">
            <h4 className="text-xs font-bold text-slate-800 tracking-tight">{language === 'es' ? 'Gráfico de Pronóstico' : 'Forecasting Chart'}</h4>
            <div className="flex bg-slate-100 p-0.5 rounded-lg border border-slate-200 shadow-inner">
              <button 
                onClick={() => setChartType('consumo')}
                className={cn(
                  "px-4 py-1.5 text-[10px] font-black tracking-widest rounded-md transition-all",
                  chartType === 'consumo' ? "bg-primary text-white shadow-sm" : "text-slate-400 hover:text-slate-600"
                )}
              >
                {language === 'es' ? 'Consumo' : 'Consumption'}
              </button>
              <button 
                onClick={() => setChartType('inventario')}
                className={cn(
                  "px-4 py-1.5 text-[10px] font-black tracking-widest rounded-md transition-all",
                  chartType === 'inventario' ? "bg-primary text-white shadow-sm" : "text-slate-400 hover:text-slate-600"
                )}
              >
                {language === 'es' ? 'Inventario' : 'Inventory'}
              </button>
            </div>
          </div>

          <div className="h-[280px] mb-8">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={previewData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorActual" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#0EA5E9" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#0EA5E9" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{fill: '#94A3B8', fontSize: 11, fontWeight: 700}} 
                  padding={{ left: 20, right: 20 }}
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{fill: '#94A3B8', fontSize: 11, fontWeight: 700}}
                  domain={[0, 350]}
                  ticks={[0, 50, 100, 150, 200, 250, 300, 350]}
                />
                <Tooltip 
                  contentStyle={{ borderRadius: '12px', border: 'none', shadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                />
                <Area 
                  type="monotone" 
                  dataKey="actual" 
                  stroke="#0EA5E9" 
                  strokeWidth={4} 
                  fillOpacity={1} 
                  fill="url(#colorActual)" 
                  animationDuration={1500}
                />
                <Line 
                  type="monotone" 
                  dataKey="forecast" 
                  stroke="#2DD4BF" 
                  strokeWidth={3} 
                  strokeDasharray="8 8" 
                  dot={false} 
                  animationDuration={1500}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-slate-50/50 rounded-2xl p-6 border border-slate-100 mb-8">
            <div className="flex items-center gap-2 mb-6">
              <BarChart3 className="w-5 h-5 text-teal-600" />
              <h4 className="text-sm font-bold text-slate-800">{language === 'es' ? 'Impacto del Cambio de Parámetro' : 'Impact of Parameter Change'}</h4>
            </div>
            <div className="space-y-4">
              <ImpactItem label={language === 'es' ? 'Nivel de Stock de Seguridad' : 'Safety Stock Level'} value="+5.2%" positive={true} />
              <ImpactItem label={language === 'es' ? 'Desviación del Pronóstico' : 'Forecast Deviation'} value="-2.1%" positive={true} />
              <ImpactItem label={language === 'es' ? 'Riesgo de Quiebre de Stock' : 'Stockout Risk'} value="-3.5%" positive={true} />
              <ImpactItem label={language === 'es' ? 'Rotación de Inventario' : 'Inventory Turnover'} value="-1.8%" positive={false} />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center gap-2 px-4 py-4 border border-slate-200 text-slate-600 rounded-xl font-bold text-xs hover:bg-slate-50 transition-all active:scale-95">
              <History className="w-4 h-4" />
              {language === 'es' ? 'Análisis Detallado' : 'Detailed Analysis'}
            </button>
            <button className="flex items-center justify-center gap-2 px-4 py-4 bg-[#006B52] text-white rounded-xl font-bold text-xs hover:bg-[#005a45] transition-all shadow-lg shadow-teal-900/10 active:scale-95">
              <CheckCircle2 className="w-4 h-4" />
              {language === 'es' ? 'Aplicar Parámetros' : 'Apply Parameters'}
            </button>
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
            <span key={l} className="text-[9px] font-black text-slate-400 tracking-[0.1em]">
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
            {active && <span className="text-[9px] font-black bg-primary/10 text-primary px-2 py-0.5 rounded-sm tracking-widest">Active</span>}
          </div>
          <p className="text-[11px] font-bold text-slate-400 tracking-widest mt-1.5">{date}</p>
        </div>
      </div>
      <button className="text-primary hover:text-slate-800 font-black text-[10px] tracking-widest transition-colors">
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

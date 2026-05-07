import React from 'react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  AreaChart,
  Area
} from 'recharts';
import { 
  TrendingUp, 
  Download, 
  Calendar,
  ChevronDown,
  Sparkles,
  Search,
  ChevronLeft,
  ChevronRight,
  Info,
  ArrowRight,
  X
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { cn } from '../lib/utils';
import { motion } from 'motion/react';

const ResultComparisonView: React.FC = () => {
  const { t } = useLanguage();

  const kpis = [
    { 
      label: t('prediction.cpm_forecast'), 
      value: '3,842', 
      unit: 'Unidades', 
      trend: '+ 12.5%', 
      trendDesc: 'Crecimiento vs. Mes Anterior',
      icon: TrendingUp, 
      color: 'text-white', 
      bg: 'bg-gradient-to-br from-indigo-500 to-indigo-700 shadow-indigo-200' 
    },
    { 
      label: t('prediction.ai_forecast'), 
      value: '3,625', 
      unit: 'Unidades', 
      trend: '+ 6.2%', 
      trendDesc: 'Crecimiento vs. Mes Anterior',
      icon: Sparkles, 
      color: 'text-white', 
      bg: 'bg-gradient-to-br from-[#4F46E5] to-[#7C3AED] shadow-purple-200' 
    },
    { 
      label: t('prediction.real_consumption'), 
      value: '3,590', 
      unit: 'Unidades', 
      trend: '+ 5.3%', 
      trendDesc: 'Crecimiento vs. Mes Anterior',
      icon: Calendar, 
      color: 'text-slate-600', 
      bg: 'bg-white border border-slate-100 shadow-sm' 
    },
  ];

  const tableData = [
    { med: 'Aspirina', hospital: 'Hospital Ángeles (México)', cpm: '1,245', cpmErr: '+7.1%', ai: '1,168', aiErr: '+0.6%', real: '1,162', date: '2025-07-03 10:30' },
    { med: 'Amlodipino', hospital: 'Centro Médico ABC', cpm: '842', cpmErr: '+9.2%', ai: '795', aiErr: '+3.1%', real: '771', date: '2025-07-03 10:30' },
    { med: 'Metoprolol', hospital: 'Hospital General de México', cpm: '568', cpmErr: '-8.4%', ai: '635', aiErr: '+2.7%', real: '618', date: '2025-07-03 10:30' },
    { med: 'Metformina', hospital: 'Centro Médico del Sur', cpm: '1,187', cpmErr: '+12.3%', ai: '1,027', aiErr: '-2.8%', real: '1,057', date: '2025-07-03 10:30' },
  ];

  const chartData = [
    { name: '2023-08', real: 850, cpm: 840, ai: 855 },
    { name: '2023-09', real: 880, cpm: 870, ai: 885 },
    { name: '2023-10', real: 860, cpm: 890, ai: 865 },
    { name: '2023-11', real: 950, cpm: 920, ai: 945 },
    { name: '2023-12', real: 1050, cpm: 1000, ai: 1040 },
    { name: '2024-01', real: 980, cpm: 1020, ai: 990 },
    { name: '2024-02', real: 1020, cpm: 1050, ai: 1025 },
    { name: '2024-03', real: 1100, cpm: 1080, ai: 1105 },
    { name: '2024-04', real: 1150, cpm: 1120, ai: 1155 },
    { name: '2024-05', real: 1180, cpm: 1140, ai: 1185 },
    { name: '2024-06', real: 1250, cpm: 1100, ai: 1240 },
    { name: '2024-07', real: 1300, cpm: 1150, ai: 1290 },
  ];

  return (
    <div className="space-y-6 pb-12">
      <div className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="flex-1 space-y-4">
          <div className="flex items-center gap-4">
             <div className="w-14 h-14 rounded-[22px] bg-indigo-50 flex items-center justify-center text-indigo-600 shadow-sm">
               <TrendingUp className="w-7 h-7" />
             </div>
             <div>
               <h2 className="text-2xl font-black text-slate-900 tracking-tight uppercase">{t('prediction.comparison_report')}</h2>
               <p className="text-xs font-medium text-slate-400">Análisis Comparativo del Consumo Real vs Pronosticado</p>
             </div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3 px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-xl cursor-pointer hover:bg-slate-100 transition-all shadow-sm">
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">Periodo Seleccionado</span>
            <span className="text-xs font-black text-slate-700">Julio de 2024</span>
            <ChevronDown className="w-4 h-4 text-slate-400" />
          </div>
          <button className="flex items-center gap-2 px-6 py-4 bg-primary text-white rounded-xl text-xs font-black hover:bg-[#005a45] transition-all shadow-lg shadow-primary/20 active:scale-95 uppercase tracking-widest leading-none">
            <Download className="w-4 h-4" />
            <span>Descargar Reporte Full</span>
          </button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {kpis.map((kpi, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className={cn("p-10 rounded-[40px] relative overflow-hidden group shadow-sm transition-all duration-300 hover:shadow-2xl hover:-translate-y-1", kpi.bg)}
          >
            {kpi.icon === Sparkles && (
               <div className="absolute top-6 right-6 text-white/10 group-hover:text-white/20 transition-all">
                 <Sparkles className="w-16 h-16 rotate-12" />
               </div>
            )}
            <p className={cn("text-[11px] font-black uppercase tracking-widest mb-6 opacity-70", idx === 2 ? 'text-slate-500' : 'text-white')}>{kpi.label}</p>
            <div className="flex items-baseline gap-3 mb-4">
              <h4 className={cn("text-4xl font-black tracking-tighter", idx === 2 ? 'text-slate-900' : 'text-white')}>{kpi.value}</h4>
              <span className={cn("text-xs font-bold opacity-60", idx === 2 ? 'text-slate-400' : 'text-white')}>{kpi.unit}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className={cn("flex items-center gap-1 px-2.5 py-1 rounded-lg text-[10px] font-black shadow-sm", idx === 2 ? 'bg-rose-50 text-rose-500' : 'bg-white/10 text-white')}>
                <TrendingUp className={cn("w-3.5 h-3.5", idx === 2 ? 'rotate-180' : '')} />
                <span>{kpi.trend}</span>
              </div>
              <span className={cn("text-[10px] font-bold", idx === 2 ? 'text-slate-400' : 'text-white/60')}>{kpi.trendDesc}</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Error Analysis Table */}
      <div className="bg-white rounded-[40px] border border-slate-100 shadow-xl shadow-slate-200/40 overflow-hidden">
        <div className="p-8 border-b border-slate-100 flex items-center justify-between bg-slate-50/20">
          <h3 className="text-[13px] font-black text-slate-800 uppercase tracking-widest">{t('prediction.error_analysis')}</h3>
          <div className="flex flex-wrap items-center gap-3">
            {[t('prediction.col_med'), t('prediction.col_hospital'), 'Últimos 3 Meses'].map((filter, fIdx) => (
              <div key={fIdx} className="flex items-center gap-2 px-4 py-2.5 bg-white border border-slate-200 rounded-xl cursor-pointer hover:border-primary transition-all shadow-sm">
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-tight">{filter}</span>
                <ChevronDown className="w-3 h-3 text-slate-400" />
              </div>
            ))}
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50/10">
                <th className="px-8 py-6 w-12 border-b border-slate-100"><input type="checkbox" className="rounded-md border-slate-300 shadow-sm" /></th>
                <th className="px-4 py-6 text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100 whitespace-nowrap">{t('prediction.col_med')}</th>
                <th className="px-4 py-6 text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100 whitespace-nowrap">{t('prediction.col_hospital')}</th>
                <th className="px-4 py-6 text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100 text-center">CPM Forecast</th>
                <th className="px-4 py-6 text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100 text-center">CPM Error</th>
                <th className="px-4 py-6 text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100 text-center">AI Forecast</th>
                <th className="px-4 py-6 text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100 text-center">AI Error</th>
                <th className="px-4 py-6 text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100 text-center">Real Cons.</th>
                <th className="px-8 py-6 text-[10px] font-black text-slate-400 uppercase tracking-widest text-right border-b border-slate-100">{t('prediction.col_date')}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {tableData.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50/80 transition-all group">
                  <td className="px-8 py-6"><input type="checkbox" className="rounded-md border-slate-300" /></td>
                  <td className="px-4 py-6">
                    <span className="text-sm font-bold text-slate-700 group-hover:text-primary transition-colors">{row.med}</span>
                  </td>
                  <td className="px-4 py-6">
                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-tight">{row.hospital}</span>
                  </td>
                  <td className="px-4 py-6 text-sm font-black text-slate-900 text-center">{row.cpm}</td>
                  <td className="px-4 py-6 text-center">
                    <span className="px-2.5 py-1 bg-rose-50 text-rose-500 rounded-lg text-[10px] font-black uppercase tracking-tight">{row.cpmErr}</span>
                  </td>
                  <td className="px-4 py-6 text-sm font-black text-slate-900 text-center">{row.ai}</td>
                  <td className="px-4 py-6 text-center">
                    <span className="px-2.5 py-1 bg-emerald-50 text-emerald-600 rounded-lg text-[10px] font-black uppercase tracking-tight">{row.aiErr}</span>
                  </td>
                  <td className="px-4 py-6 text-sm font-black text-slate-900 text-center">{row.real}</td>
                  <td className="px-8 py-6 text-right">
                    <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest group-hover:text-slate-500 transition-colors whitespace-nowrap">{row.date}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
        <div className="lg:col-span-3 bg-white p-10 rounded-[40px] border border-slate-100 shadow-xl shadow-slate-200/40">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h3 className="text-lg font-black text-slate-900 tracking-tight uppercase">{t('prediction.trend_comparison')}</h3>
              <p className="text-xs font-medium text-slate-400 mt-1">Comparativa Multimodelo de Tendencias</p>
            </div>
            <div className="flex bg-slate-50 p-1 rounded-2xl border border-slate-100 shadow-inner">
               <button className="px-6 py-2.5 bg-white shadow-sm rounded-xl text-[10px] font-black text-primary uppercase tracking-widest">Aspirina</button>
               <button className="px-6 py-2.5 text-[10px] font-black text-slate-400 hover:text-slate-600 transition-colors uppercase tracking-widest">Hospital Civil</button>
            </div>
          </div>

          <div className="h-[380px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F1F5F9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} fontSize={10} fontStyle="bold" tick={{ fill: '#94A3B8' }} dy={15} />
                <YAxis axisLine={false} tickLine={false} fontSize={10} fontStyle="bold" tick={{ fill: '#94A3B8' }} />
                <Tooltip contentStyle={{ borderRadius: '24px', border: 'none', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.15)', padding: '24px' }} />
                <Line type="monotone" dataKey="real" stroke="#1E293B" strokeWidth={5} dot={{ r: 6, fill: '#1E293B', strokeWidth: 3, stroke: '#fff' }} name="Real" />
                <Line type="monotone" dataKey="cpm" stroke="#6366F1" strokeWidth={3} strokeDasharray="8 8" dot={false} name="CPM" />
                <Line type="monotone" dataKey="ai" stroke="#10B981" strokeWidth={5} dot={{ r: 6, fill: '#10B981', strokeWidth: 3, stroke: '#fff' }} name="AI Model" />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="flex items-center justify-center gap-12 mt-12 overflow-hidden">
            {[
              { label: 'Consumo Real', color: 'bg-slate-900' },
              { label: 'CPM Tradicional', color: 'bg-indigo-500 dashed' },
              { label: 'AI Predictor Pro', color: 'bg-emerald-500' },
            ].map(leg => (
              <div key={leg.label} className="flex items-center gap-3">
                <div className={cn("w-3.5 h-3.5 rounded-full shadow-inner", leg.color === 'bg-indigo-500 dashed' ? 'bg-indigo-500 border-2 border-white ring-1 ring-indigo-500' : leg.color)}></div>
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest whitespace-nowrap">{leg.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Floating Notice Card */}
        <div className="relative">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-[#14532D] p-10 rounded-[40px] shadow-2xl shadow-primary/30 space-y-8 text-white relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10">
               <Sparkles className="w-32 h-32 rotate-12" />
            </div>
            <div className="space-y-4 relative z-10">
               <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-xl backdrop-blur-md">
                 <Info className="w-4 h-4" />
                 <span className="text-[11px] font-black uppercase tracking-widest">{t('prediction.notice_title')}</span>
               </div>
               <h4 className="text-xl font-black leading-tight tracking-tight">Optimice su Inventario con IA</h4>
               <p className="text-sm font-medium text-emerald-100 leading-relaxed opacity-90">
                 {t('prediction.notice_desc')}
               </p>
            </div>
            <button className="w-full flex items-center justify-between bg-white text-primary px-8 py-5 rounded-2xl text-[11px] font-black transition-all group shadow-xl">
              {t('prediction.goto_config')}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ResultComparisonView;

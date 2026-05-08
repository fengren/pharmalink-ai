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
  const { t, language } = useLanguage();

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
    { month: 1, consumo: 2500, promedio: 2400, yoy: 2300 },
    { month: 2, consumo: 2800, promedio: 2550, yoy: 2450 },
    { month: 3, consumo: 3200, promedio: 2700, yoy: 2700 },
    { month: 4, consumo: 3100, promedio: 2820, yoy: 2800 },
    { month: 5, consumo: 2900, promedio: 2950, yoy: 2600 },
    { month: 6, consumo: 3300, promedio: 3100, yoy: 2950 },
    { month: 7, consumo: 3500, promedio: 3200, yoy: 3200 },
    { month: 8, consumo: 3800, promedio: 3320, yoy: 3450 },
    { month: 9, consumo: 4100, promedio: 3450, yoy: 3700 },
    { month: 10, consumo: 3900, promedio: 3550, yoy: 3600 },
    { month: 11, consumo: 4200, promedio: 3650, yoy: 3950 },
    { month: 12, consumo: 4500, promedio: 3700, yoy: 4200 },
  ];

  const monthNames: Record<string, string[]> = {
    es: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
    en: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  };

  const currentMonths = monthNames[language as keyof typeof monthNames] || monthNames.es;

  const formattedChartData = chartData.map(item => ({
    ...item,
    name: currentMonths[item.month - 1]
  }));

  return (
    <div className="space-y-6 pb-12">
      <div className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="flex-1 space-y-4">
          <div className="flex items-center gap-4">
             <div className="w-14 h-14 rounded-[22px] bg-indigo-50 flex items-center justify-center text-indigo-600 shadow-sm">
               <TrendingUp className="w-7 h-7" />
             </div>
             <div>
               <h2 className="">{t('prediction.comparison_report')}</h2>
               <p className="text-xs font-medium text-slate-400">Análisis Comparativo del Consumo Real vs Pronosticado</p>
             </div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3 px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-xl cursor-pointer hover:bg-slate-100 transition-all shadow-sm">
            <span className="text-[10px] font-black text-slate-400 tracking-widest leading-none">Periodo Seleccionado</span>
            <span className="text-xs font-black text-slate-700">Julio de 2024</span>
            <ChevronDown className="w-4 h-4 text-slate-400" />
          </div>
          <button className="flex items-center gap-2 px-6 py-4 bg-primary text-white rounded-xl text-xs font-black hover:bg-[#005a45] transition-all shadow-lg shadow-primary/20 active:scale-95 tracking-widest leading-none">
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
            <p className={cn("text-[11px] font-black tracking-widest mb-6 opacity-70", idx === 2 ? 'text-slate-500' : 'text-white')}>{kpi.label}</p>
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
          <h3 className="text-[13px] font-black text-slate-800 tracking-widest">{t('prediction.error_analysis')}</h3>
          <div className="flex flex-wrap items-center gap-3">
            {[t('prediction.col_med'), t('prediction.col_hospital'), 'Últimos 3 Meses'].map((filter, fIdx) => (
              <div key={fIdx} className="flex items-center gap-2 px-4 py-2.5 bg-white border border-slate-200 rounded-xl cursor-pointer hover:border-primary transition-all shadow-sm">
                <span className="text-[10px] font-black text-slate-500 tracking-tight">{filter}</span>
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
                <th className="px-4 py-6 text-[10px] font-black text-slate-400 tracking-widest border-b border-slate-100 whitespace-nowrap">{t('prediction.col_med')}</th>
                <th className="px-4 py-6 text-[10px] font-black text-slate-400 tracking-widest border-b border-slate-100 whitespace-nowrap">{t('prediction.col_hospital')}</th>
                <th className="px-4 py-6 text-[10px] font-black text-slate-400 tracking-widest border-b border-slate-100 text-center">CPM Forecast</th>
                <th className="px-4 py-6 text-[10px] font-black text-slate-400 tracking-widest border-b border-slate-100 text-center">CPM Error</th>
                <th className="px-4 py-6 text-[10px] font-black text-slate-400 tracking-widest border-b border-slate-100 text-center">AI Forecast</th>
                <th className="px-4 py-6 text-[10px] font-black text-slate-400 tracking-widest border-b border-slate-100 text-center">AI Error</th>
                <th className="px-4 py-6 text-[10px] font-black text-slate-400 tracking-widest border-b border-slate-100 text-center">Real Cons.</th>
                <th className="px-8 py-6 text-[10px] font-black text-slate-400 tracking-widest text-right border-b border-slate-100">{t('prediction.col_date')}</th>
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
                    <span className="text-[11px] font-bold text-slate-500 tracking-tight">{row.hospital}</span>
                  </td>
                  <td className="px-4 py-6 text-sm font-black text-slate-900 text-center">{row.cpm}</td>
                  <td className="px-4 py-6 text-center">
                    <span className="px-2.5 py-1 bg-rose-50 text-rose-500 rounded-lg text-[10px] font-black tracking-tight">{row.cpmErr}</span>
                  </td>
                  <td className="px-4 py-6 text-sm font-black text-slate-900 text-center">{row.ai}</td>
                  <td className="px-4 py-6 text-center">
                    <span className="px-2.5 py-1 bg-emerald-50 text-emerald-600 rounded-lg text-[10px] font-black tracking-tight">{row.aiErr}</span>
                  </td>
                  <td className="px-4 py-6 text-sm font-black text-slate-900 text-center">{row.real}</td>
                  <td className="px-8 py-6 text-right">
                    <span className="text-[10px] font-black text-slate-300 tracking-widest group-hover:text-slate-500 transition-colors whitespace-nowrap">{row.date}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Charts Section */}
      <div className="gap-8 items-start">
        <div className="bg-white p-10 rounded-[40px] border border-slate-100 shadow-xl shadow-slate-200/40">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h3 className="text-xl font-bold text-slate-800 tracking-tight">{language === 'es' ? 'Análisis de Tendencia de Consumo' : 'Consumption Trend Analysis'}</h3>
            </div>
            <div className="flex bg-slate-100 p-1 rounded-2xl border border-slate-200/50 shadow-inner">
               <button className="px-6 py-2 bg-[#006B52] shadow-sm rounded-xl text-[11px] font-black text-white tracking-widest">
                 {language === 'es' ? 'Mensual' : 'Monthly'}
               </button>
               <button className="px-6 py-2 text-[11px] font-black text-slate-400 hover:text-slate-600 transition-colors tracking-widest">
                 {language === 'es' ? 'Trimestral' : 'Quarterly'}
               </button>
               <button className="px-6 py-2 text-[11px] font-black text-slate-400 hover:text-slate-600 transition-colors tracking-widest">
                 {language === 'es' ? 'Anual' : 'Annual'}
               </button>
            </div>
          </div>

          <div className="h-[420px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={formattedChartData} margin={{ top: 20, right: 30, left: 10, bottom: 20 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F1F5F9" />
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  fontSize={11} 
                  fontWeight={600} 
                  tick={{ fill: '#94A3B8' }} 
                  dy={15} 
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  fontSize={11} 
                  fontWeight={600} 
                  tick={{ fill: '#94A3B8' }} 
                  domain={[0, 5000]}
                  ticks={[0, 1000, 2000, 3000, 4000, 5000]}
                />
                <Tooltip 
                  contentStyle={{ borderRadius: '24px', border: 'none', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.15)', padding: '24px' }} 
                />
                <Line 
                  type="monotone" 
                  dataKey="consumo" 
                  stroke="#1FBDF2" 
                  strokeWidth={4} 
                  dot={false} 
                  name={language === 'es' ? 'Consumo' : 'Consumption'} 
                />
                <Line 
                  type="monotone" 
                  dataKey="promedio" 
                  stroke="#72D2B5" 
                  strokeWidth={3} 
                  dot={false} 
                  name={language === 'es' ? 'Promedio Mensual de Consumo' : 'Monthly Average Consumption'} 
                />
                <Line 
                  type="monotone" 
                  dataKey="yoy" 
                  stroke="#FFB347" 
                  strokeWidth={3} 
                  strokeDasharray="8 8" 
                  dot={false} 
                  name={language === 'es' ? 'Tendencia Interanual (YoY)' : 'Year-over-Year Trend'} 
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="flex items-center justify-center gap-12 mt-12">
            <div className="flex items-center gap-3">
              <div className="w-3.5 h-3.5 rounded-full bg-[#1FBDF2]"></div>
              <span className="text-[11px] font-black text-slate-500 tracking-widest">{language === 'es' ? 'Consumo' : 'Consumption'}</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-3.5 h-3.5 rounded-full bg-[#72D2B5]"></div>
              <span className="text-[11px] font-black text-slate-500 tracking-widest">{language === 'es' ? 'Promedio Mensual de Consumo' : 'Monthly Average'}</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-3.5 h-3.5 rounded-[2px] bg-[#FFB347] border border-dashed border-white ring-1 ring-[#FFB347]"></div>
              <span className="text-[11px] font-black text-slate-500 tracking-widest">{language === 'es' ? 'Tendencia Interanual (YoY)' : 'YoY Trend'}</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ResultComparisonView;

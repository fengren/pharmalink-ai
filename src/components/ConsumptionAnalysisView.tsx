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
  RotateCw,
  Box,
  BarChart3,
  Search,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { cn } from '../lib/utils';
import { motion } from 'motion/react';

const ConsumptionAnalysisView: React.FC = () => {
  const { t } = useLanguage();

  const kpis = [
    { label: t('consumption.kpi_total'), value: '28,764', unit: 'Unidades', trend: '+ 8.2%', trendDesc: 'vs. Mes Anterior', icon: Box, color: 'text-emerald-500', bg: 'bg-emerald-50' },
    { label: t('consumption.kpi_avg'), value: '9,587', unit: 'Unidades/Mes', trend: '- 2.4%', trendDesc: 'vs. Trimestre Anterior', icon: Calendar, color: 'text-blue-500', bg: 'bg-blue-50', trendColor: 'text-rose-500' },
    { label: t('consumption.kpi_annual'), value: '115,048', unit: 'Unidades/Año', trend: '+ 5.7%', trendDesc: 'vs. Mismo Período del Año Pasado', icon: BarChart3, color: 'text-amber-500', bg: 'bg-amber-50' },
  ];

  const chartData = [
    { name: 'Enero', real: 2800, avg: 2500, yoy: 2600 },
    { name: 'Febrero', real: 3200, avg: 2600, yoy: 2700 },
    { name: 'Marzo', real: 3100, avg: 2700, yoy: 2500 },
    { name: 'Abril', real: 3200, avg: 2800, yoy: 2800 },
    { name: 'Mayo', real: 3300, avg: 2900, yoy: 2600 },
    { name: 'Junio', real: 3100, avg: 3000, yoy: 2900 },
    { name: 'Julio', real: 3400, avg: 3100, yoy: 3000 },
    { name: 'Agosto', real: 3600, avg: 3200, yoy: 3100 },
    { name: 'Septiembre', real: 3700, avg: 3300, yoy: 3200 },
    { name: 'Octubre', real: 3600, avg: 3400, yoy: 3300 },
    { name: 'Noviembre', real: 3800, avg: 3500, yoy: 3400 },
    { name: 'Diciembre', real: 4200, avg: 3600, yoy: 3500 },
  ];

  const tableData = [
    { name: 'Aspirina con Recubrimiento Entérico', spec: '0.25g × 24 comprimidos', category: 'Antibióticos', real: '3,452', avg: '1,151', annual: '13,808' },
    { name: 'Comprimidos de Liberación Prolongada de Nifedipino', spec: '20mg × 30 comprimidos', category: 'Medicamentos Cardiovasculares', real: '2,876', avg: '959', annual: '11,504' },
    { name: 'Cápsulas Entéricas de Omeprazol', spec: '20mg × 14 cápsulas', category: 'Medicamentos del Sistema Digestivo', real: '2,143', avg: '714', annual: '8,572' },
    { name: 'Cápsulas de Clorhidrato de Fluoxetina', spec: '20mg × 12 cápsulas', category: 'Medicamentos del Sistema Nervioso', real: '1,987', avg: '662', annual: '7,948' },
    { name: 'Comprimidos de Metronidazol', spec: '0.2g × 100 comprimidos', category: 'Antibióticos', real: '1,856', avg: '619', annual: '7,424' },
  ];
  return (
    <div className="space-y-6 pb-12">
      {/* Search and Filters */}
      <div className="bg-white p-6 rounded-[32px] border border-slate-100 shadow-sm flex flex-col lg:flex-row lg:items-center gap-6">
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-2 px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl cursor-pointer hover:bg-slate-100 transition-all">
            <span className="text-[11px] font-black text-slate-500 uppercase tracking-tight">Rango de Tiempo</span>
            <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
          </div>
          <div className="flex items-center gap-2 px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl cursor-pointer hover:bg-slate-100 transition-all">
            <span className="text-[11px] font-black text-slate-500 uppercase tracking-tight">Hospital</span>
            <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
          </div>
          <div className="flex items-center gap-2 px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl cursor-pointer hover:bg-slate-100 transition-all">
             <Calendar className="w-4 h-4 text-slate-400" />
             <span className="text-[11px] font-black text-slate-500 uppercase tracking-tight">Periodo</span>
          </div>
        </div>
        
        <div className="flex-1"></div>

        <button className="flex items-center gap-2 px-7 py-3.5 bg-primary text-white rounded-xl text-xs font-black hover:bg-[#005a45] transition-all shadow-lg shadow-primary/20 active:scale-95 uppercase tracking-widest leading-none">
          <RotateCw className="w-4 h-4" />
          <span>{t('ai.new_chat')}</span>
        </button>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {kpis.map((kpi, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm group hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300"
          >
            <div className="flex items-center gap-5">
              <div className={cn("w-14 h-14 rounded-[20px] flex items-center justify-center transition-transform group-hover:scale-110", kpi.bg)}>
                <kpi.icon className={cn("w-7 h-7", kpi.color)} />
              </div>
              <div>
                <p className="text-[11px] font-black text-slate-400 uppercase tracking-widest mb-1.5 leading-none">{kpi.label}</p>
                <div className="flex items-baseline gap-2">
                  <h4 className="text-2xl font-black text-slate-900 tracking-tight">{kpi.value}</h4>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tight">{kpi.unit}</span>
                </div>
                <div className="flex items-center gap-1.5 mt-2">
                  <span className={cn("text-[10px] font-black px-1.5 py-0.5 rounded-md", kpi.trendColor ? "bg-rose-50 text-rose-500" : "bg-emerald-50 text-emerald-600")}>
                    {kpi.trend}
                  </span>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tight">{kpi.trendDesc}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Main Trend Chart */}
      <div className="bg-white p-10 rounded-[40px] border border-slate-100 shadow-xl shadow-slate-200/40">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h3 className="text-xl font-black text-slate-900 tracking-tight uppercase">{t('consumption.trend_title')}</h3>
            <p className="text-xs font-medium text-slate-400 mt-1">Estimación Anual Proyectada</p>
          </div>
          <div className="flex items-center bg-slate-50 p-1 rounded-2xl border border-slate-100">
            {['Mensual', 'Trimestral', 'Anual'].map((tab) => (
              <button 
                key={tab}
                className={cn(
                  "px-6 py-2.5 rounded-xl text-[10px] font-black transition-all uppercase tracking-widest leading-none",
                  tab === 'Mensual' ? "bg-primary text-white shadow-lg shadow-primary/20" : "text-slate-400 hover:text-slate-600"
                )}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
        
        <div className="h-[350px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F1F5F9" />
              <XAxis dataKey="name" axisLine={false} tickLine={false} fontSize={10} fontStyle="bold" tick={{ fill: '#94A3B8' }} dy={15} />
              <YAxis axisLine={false} tickLine={false} fontSize={10} fontStyle="bold" tick={{ fill: '#94A3B8' }} />
              <Tooltip contentStyle={{ borderRadius: '20px', border: 'none', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.15)', padding: '16px' }} />
              <Line type="monotone" dataKey="real" stroke="#1E293B" strokeWidth={4} dot={{ r: 5, fill: '#1E293B', strokeWidth: 3, stroke: '#fff' }} name="Consumo" />
              <Line type="monotone" dataKey="avg" stroke="#006B52" strokeWidth={4} dot={{ r: 5, fill: '#006B52', strokeWidth: 3, stroke: '#fff' }} name="Promedio" />
              <Line type="monotone" dataKey="yoy" stroke="#F59E0B" strokeWidth={4} strokeDasharray="6 6" dot={false} name="YoY" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="flex items-center justify-center gap-12 mt-10">
          {[
            { label: 'Consumo Real', color: 'bg-slate-900' },
            { label: 'Promedio Mensual', color: 'bg-primary' },
            { label: 'Tendencia Interanual', color: 'bg-amber-500 dashed' },
          ].map(leg => (
            <div key={leg.label} className="flex items-center gap-3">
              <div className={cn("w-3 h-3 rounded-full shadow-sm", leg.color === 'bg-amber-500 dashed' ? 'bg-amber-500 border-2 border-white ring-1 ring-amber-500' : leg.color)}></div>
              <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{leg.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Details Table */}
      <div className="bg-white rounded-[40px] border border-slate-100 shadow-xl shadow-slate-200/50 overflow-hidden">
        <div className="p-8 border-b border-slate-100 flex items-center justify-between bg-slate-50/20">
          <h3 className="text-base font-black text-slate-800 tracking-tight uppercase">{t('consumption.details_title')}</h3>
          <button className="flex items-center gap-2 px-6 py-3 border border-slate-200 rounded-2xl text-[11px] font-black text-slate-600 hover:bg-white hover:shadow-sm transition-all uppercase tracking-widest">
            <Download className="w-4 h-4" />
            <span>{t('common.export')}</span>
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50/50 border-b border-slate-100">
                <th className="px-10 py-6 w-12"><input type="checkbox" className="rounded-md border-slate-300 shadow-sm" /></th>
                <th className="px-4 py-6 text-[10px] font-black text-slate-400 uppercase tracking-widest">Medicamento</th>
                <th className="px-4 py-6 text-[10px] font-black text-slate-400 uppercase tracking-widest">Categoría</th>
                <th className="px-4 py-6 text-[10px] font-black text-slate-400 uppercase tracking-widest text-center">Consumo</th>
                <th className="px-4 py-6 text-[10px] font-black text-slate-400 uppercase tracking-widest text-center">Mensual</th>
                <th className="px-4 py-6 text-[10px] font-black text-slate-400 uppercase tracking-widest text-center">Anual</th>
                <th className="px-10 py-6 text-[10px] font-black text-slate-400 uppercase tracking-widest text-right">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {tableData.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50/80 transition-all duration-200 group">
                  <td className="px-10 py-6"><input type="checkbox" className="rounded-md border-slate-300" /></td>
                  <td className="px-4 py-6 max-w-sm">
                    <div className="flex flex-col gap-1">
                      <span className="text-sm font-bold text-slate-700 leading-tight group-hover:text-primary transition-colors">{row.name}</span>
                      <span className="text-[10px] font-bold text-slate-400 tracking-wide">{row.spec}</span>
                    </div>
                  </td>
                  <td className="px-4 py-6">
                    <span className="px-3 py-1 bg-slate-100 text-slate-500 rounded-lg text-[10px] font-black uppercase tracking-tight">{row.category}</span>
                  </td>
                  <td className="px-4 py-6 text-sm font-black text-slate-900 text-center">{row.real}</td>
                  <td className="px-4 py-6 text-sm font-black text-slate-600 text-center">{row.avg}</td>
                  <td className="px-4 py-6 text-sm font-black text-slate-800 text-center">{row.annual}</td>
                  <td className="px-10 py-6 text-right">
                    <button className="px-5 py-2 hover:bg-primary/5 rounded-xl text-primary text-[10px] font-black transition-all uppercase tracking-widest leading-none">{t('common.details')}</button>
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

export default ConsumptionAnalysisView;

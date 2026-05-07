import React from 'react';
import { 
  BarChart, 
  Bar, 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Legend
} from 'recharts';
import { 
  ArrowUp, 
  ArrowDown, 
  Download, 
  Calendar,
  ChevronDown,
  Filter,
  ArrowUpDown
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { cn } from '../lib/utils';

const HospitalPerformanceView: React.FC = () => {
  const { t } = useLanguage();

  const kpis = [
    { label: t('hospital.rotation_index'), value: '4.2', change: '+12%', trend: 'up', color: 'text-emerald-500' },
    { label: t('hospital.rupture_rate'), value: '1.8%', change: '-0.5%', trend: 'down', color: 'text-rose-500' },
    { label: t('hospital.rational_use'), value: '92', change: '+3', trend: 'up', color: 'text-emerald-500' },
    { label: t('hospital.savings_rate'), value: '8.5%', change: '+1.2%', trend: 'up', color: 'text-emerald-500' },
  ];

  const comparisonData = [
    { name: 'Hospital General de México', rotation: 4, rupture: 2, rational: 85 },
    { name: 'Centro Médico ABC', rotation: 5, rupture: 1.5, rational: 90 },
    { name: 'Instituto Nacional de Cancerología', rotation: 3.5, rupture: 2.5, rational: 88 },
    { name: 'Hospital Comunitario de Iztapalapa', rotation: 4.5, rupture: 1.2, rational: 95 },
    { name: 'Hospital de Santa Fe', rotation: 3.8, rupture: 2.0, rational: 92 },
  ];

  const trendData = [
    { name: 'Enero', rotation: 3.5, rupture: 2.5, rational: 80 },
    { name: 'Febrero', rotation: 3.8, rupture: 2.2, rational: 82 },
    { name: 'Marzo', rotation: 4.0, rupture: 2.0, rational: 85 },
    { name: 'Abril', rotation: 4.2, rupture: 1.8, rational: 88 },
    { name: 'Mayo', rotation: 4.1, rupture: 1.9, rational: 90 },
    { name: 'Junio', rotation: 4.3, rupture: 1.7, rational: 92 },
    { name: 'Julio', rotation: 4.2, rupture: 1.8, rational: 92 },
  ];

  const alerts = [
    { status: 'Pendiente', type: 'Alerta rotación', hospital: 'Hospital Ángeles (México)', indicator: 'Rotación', actual: '2.1', ref: '4.0', deviation: '-47.5%', color: 'bg-rose-50 text-rose-600' },
    { status: 'En Proceso', type: 'Alerta desabasto', hospital: 'Centro Médico ABC', indicator: 'Desabasto', actual: '3.2%', ref: '2.0%', deviation: '+60.0%', color: 'bg-blue-50 text-blue-600' },
    { status: 'Completado', type: 'Alerta uso', hospital: 'Hospital Municipal de Guadalajara', indicator: 'Uso racional', actual: '85', ref: '90', deviation: '-5.6%', color: 'bg-emerald-50 text-emerald-600' },
  ];

  return (
    <div className="space-y-6">
      {/* Filters Header */}
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="relative group">
            <button className="flex items-center gap-2 px-4 py-2 bg-white rounded-xl border border-slate-200 text-sm font-bold text-slate-700 hover:bg-slate-50 transition-all">
              <Calendar className="w-4 h-4 text-primary" />
              <span>Seleccionar Fecha</span>
              <ChevronDown className="w-4 h-4 text-slate-400" />
            </button>
          </div>
          <div className="relative group">
            <button className="flex items-center gap-2 px-4 py-2 bg-white rounded-xl border border-slate-200 text-sm font-bold text-slate-700 hover:bg-slate-50 transition-all">
              <span>Categoría de Medicamentos</span>
              <ChevronDown className="w-4 h-4 text-slate-400" />
            </button>
          </div>
        </div>
        <button className="flex items-center gap-2 px-5 py-2.5 bg-[#14532D] text-white rounded-xl text-sm font-bold hover:bg-[#14532D]/90 transition-all shadow-lg shadow-green-900/20">
          <Download className="w-4 h-4" />
          <span>Exportar Informe</span>
        </button>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {kpis.map((kpi, idx) => (
          <div key={idx} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm relative overflow-hidden group">
            <div className="flex justify-between items-start mb-4">
              <p className="text-xs font-black text-slate-400 uppercase tracking-widest leading-relaxed max-w-[150px]">{kpi.label}</p>
              <div className={cn("p-1.5 rounded-lg", kpi.trend === 'up' ? "bg-emerald-50" : "bg-rose-50")}>
                {kpi.trend === 'up' ? <ArrowUp className={cn("w-4 h-4", kpi.color)} /> : <ArrowDown className={cn("w-4 h-4", kpi.color)} />}
              </div>
            </div>
            <div className="space-y-1">
              <p className="text-3xl font-black text-slate-800 tracking-tighter">{kpi.value}</p>
              <div className="flex items-center gap-2">
                <span className={cn("text-xs font-black", kpi.color)}>{kpi.change}</span>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{t('common.month_change')}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-[32px] border border-slate-100 shadow-xl shadow-slate-200/50">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-lg font-black text-slate-800 tracking-tight">{t('hospital.performance_comparison')}</h3>
            <div className="flex bg-slate-100 p-1 rounded-xl">
              <button className="px-4 py-1.5 text-xs font-bold rounded-lg bg-white shadow-sm">Gráfico</button>
              <button className="px-4 py-1.5 text-xs font-bold text-slate-500">Tabla</button>
            </div>
          </div>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={comparisonData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                <XAxis dataKey="name" hide />
                <YAxis axisLine={false} tickLine={false} fontSize={10} fontStyle="bold" />
                <Tooltip 
                  cursor={{ fill: '#F8FAFC' }}
                  contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 25px -5px rgba(0,0,0,0.1)' }}
                />
                <Legend />
                <Bar dataKey="rotation" name="Índice de Rotación" fill="#3B82F6" radius={[4, 4, 0, 0]} barSize={12} />
                <Bar dataKey="rupture" name="Tasa de Ruptura" fill="#10B981" radius={[4, 4, 0, 0]} barSize={12} />
                <Bar dataKey="rational" name="Uso Racional" fill="#F59E0B" radius={[4, 4, 0, 0]} barSize={30} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-6 rounded-[32px] border border-slate-100 shadow-xl shadow-slate-200/50">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-lg font-black text-slate-800 tracking-tight">{t('hospital.historical_trends')}</h3>
            <div className="flex bg-slate-100 p-1 rounded-xl">
              {['Semana', 'Mes', 'Trimestre', 'Año'].map((period, i) => (
                <button key={i} className={cn("px-4 py-1.5 text-xs font-bold rounded-lg", i === 1 ? "bg-white shadow-sm" : "text-slate-500")}>
                  {period}
                </button>
              ))}
            </div>
          </div>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={trendData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} fontSize={10} fontStyle="bold" />
                <YAxis axisLine={false} tickLine={false} fontSize={10} fontStyle="bold" />
                <Tooltip contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 25px -5px rgba(0,0,0,0.1)' }} />
                <Line type="monotone" dataKey="rotation" stroke="#3B82F6" strokeWidth={3} dot={{ r: 4, fill: '#3B82F6' }} />
                <Line type="monotone" dataKey="rupture" stroke="#10B981" strokeWidth={3} dot={{ r: 4, fill: '#10B981' }} />
                <Line type="monotone" dataKey="rational" stroke="#F59E0B" strokeWidth={3} dot={{ r: 4, fill: '#F59E0B' }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Alerts Table */}
      <div className="bg-white rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50 overflow-hidden">
        <div className="p-6 border-b border-slate-100 flex items-center justify-between">
          <h3 className="text-lg font-black text-slate-800 tracking-tight">{t('hospital.anomaly_alerts')}</h3>
          <div className="flex bg-slate-100 p-1 rounded-xl">
            {['Todos', 'Pendiente', 'Resuelto'].map((status, i) => (
              <button key={i} className={cn("px-4 py-1.5 text-xs font-bold rounded-lg", i === 0 ? "bg-white shadow-sm" : "text-slate-500")}>
                {status}
              </button>
            ))}
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50/50">
                <th className="px-6 py-4 w-12"><input type="checkbox" className="rounded" /></th>
                <th className="px-4 py-4 text-[11px] font-black text-slate-500 uppercase tracking-widest">{t('common.status')}</th>
                <th className="px-4 py-4 text-[11px] font-black text-slate-500 uppercase tracking-widest">{t('common.alert_type')}</th>
                <th className="px-4 py-4 text-[11px] font-black text-slate-500 uppercase tracking-widest">{t('common.hospital')}</th>
                <th className="px-4 py-4 text-[11px] font-black text-slate-500 uppercase tracking-widest">{t('common.indicator')}</th>
                <th className="px-4 py-4 text-[11px] font-black text-slate-500 uppercase tracking-widest">{t('common.actual_value')}</th>
                <th className="px-4 py-4 text-[11px] font-black text-slate-500 uppercase tracking-widest">{t('common.ref_value')}</th>
                <th className="px-4 py-4 text-[11px] font-black text-slate-500 uppercase tracking-widest">{t('common.deviation_rate')}</th>
                <th className="px-6 py-4 text-[11px] font-black text-slate-500 uppercase tracking-widest text-center">{t('common.actions')}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {alerts.map((alert, idx) => (
                <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-6 py-4"><input type="checkbox" className="rounded" /></td>
                  <td className="px-4 py-4">
                    <span className={cn("px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-tight", alert.color)}>
                      {alert.status}
                    </span>
                  </td>
                  <td className="px-4 py-4 text-sm font-bold text-rose-500">{alert.type}</td>
                  <td className="px-4 py-4 text-sm font-bold text-slate-700">{alert.hospital}</td>
                  <td className="px-4 py-4 text-sm font-medium text-slate-600">{alert.indicator}</td>
                  <td className="px-4 py-4 text-sm font-black text-slate-800">{alert.actual}</td>
                  <td className="px-4 py-4 text-sm font-medium text-slate-500">{alert.ref}</td>
                  <td className={cn("px-4 py-4 text-sm font-black", alert.deviation.startsWith('+') ? "text-amber-500" : "text-rose-500")}>
                    {alert.deviation}
                  </td>
                  <td className="px-6 py-4 text-center">
                    <button className="text-emerald-500 text-xs font-bold hover:underline">{t('common.details')}</button>
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

export default HospitalPerformanceView;

import React from 'react';
import { 
  Search, 
  RotateCw, 
  Download, 
  LayoutGrid,
  ChevronLeft, 
  ChevronRight,
  Bell,
  Clock,
  CheckCircle2,
  PieChart as PieChartIcon,
  ChevronDown,
  Calendar,
  Filter
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { cn } from '../lib/utils';
import { motion } from 'motion/react';

const AlertsCenterView: React.FC = () => {
  const { t } = useLanguage();

  const kpis = [
    { label: t('alerts.total'), value: '42', icon: Bell, color: 'text-rose-500', bg: 'bg-rose-50' },
    { label: t('alerts.pending'), value: '18', icon: Clock, color: 'text-amber-500', bg: 'bg-amber-50' },
    { label: t('alerts.resolved'), value: '24', icon: CheckCircle2, color: 'text-emerald-500', bg: 'bg-emerald-50' },
    { label: t('alerts.resolution_rate'), value: '57.1%', icon: PieChartIcon, color: 'text-blue-500', bg: 'bg-blue-50' },
  ];

  const alerts = [
    { level: t('alerts.critical'), levelColor: 'bg-rose-50 text-rose-600', time: '2025-07-04 09:23', type: t('alerts.low_stock'), typeColor: 'bg-rose-500 text-white', med: 'Aspirina con Recubrimiento Entérico', stock: 15, min: 50 },
    { level: t('alerts.critical'), levelColor: 'bg-rose-50 text-rose-600', time: '2025-07-04 09:23', type: t('alerts.low_stock'), typeColor: 'bg-rose-500 text-white', med: 'Comprimidos de Levofloxacino', stock: 15, min: 50 },
    { level: t('alerts.critical'), levelColor: 'bg-rose-50 text-rose-600', time: '2025-07-04 09:23', type: t('alerts.low_stock'), typeColor: 'bg-rose-500 text-white', med: 'Comprimidos de Levofloxacino', stock: 15, min: 50 },
    { level: t('alerts.critical'), levelColor: 'bg-rose-50 text-rose-600', time: '2025-07-04 09:23', type: t('alerts.low_stock'), typeColor: 'bg-rose-500 text-white', med: 'Comprimidos de Levofloxacino', stock: 15, min: 50 },
    { level: t('alerts.important'), levelColor: 'bg-orange-50 text-orange-600', time: '2025-07-04 09:23', type: t('alerts.replenish'), typeColor: 'bg-orange-500 text-white', med: 'Cápsulas de Liberación Prolongada de Ibuprofeno', stock: 15, min: 50 },
    { level: t('alerts.important'), levelColor: 'bg-orange-50 text-orange-600', time: '2025-07-04 09:23', type: t('alerts.replenish'), typeColor: 'bg-orange-500 text-white', med: 'Cápsulas de Liberación Prolongada de Ibuprofeno', stock: 15, min: 50 },
    { level: t('alerts.normal'), levelColor: 'bg-yellow-50 text-yellow-600', time: '2025-07-04 09:23', type: t('alerts.sufficient'), typeColor: 'bg-emerald-500 text-white', med: 'Comprimidos de Regaliz Compuesto', stock: 15, min: 50 },
    { level: t('alerts.normal'), levelColor: 'bg-yellow-50 text-yellow-600', time: '2025-07-04 09:23', type: t('alerts.sufficient'), typeColor: 'bg-emerald-500 text-white', med: 'Comprimidos de Regaliz Compuesto', stock: 15, min: 50 },
  ];

  return (
    <div className="space-y-6">
      {/* Header Filters */}
      <div className="bg-white p-4 rounded-[24px] border border-slate-100 shadow-sm flex flex-wrap items-center gap-4">
        <div className="flex items-center gap-2 px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl">
          <span className="text-xs font-bold text-slate-600">Todos los Tipos</span>
          <ChevronDown className="w-3 h-3 text-slate-400" />
        </div>
        <div className="flex items-center gap-2 px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl">
          <span className="text-xs font-bold text-slate-600">Todos los Niveles</span>
          <ChevronDown className="w-3 h-3 text-slate-400" />
        </div>
        <div className="flex items-center gap-2 px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl">
          <span className="text-xs font-bold text-slate-600">Todos los Estados</span>
          <ChevronDown className="w-3 h-3 text-slate-400" />
        </div>
        <div className="flex items-center gap-2 px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl">
          <Calendar className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-xs font-bold text-slate-600">Hora de Alerta</span>
        </div>
        <div className="flex-1"></div>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-50 transition-colors">
            <RotateCw className="w-3.5 h-3.5" />
            <span>{t('common.reset')}</span>
          </button>
          <button className="flex items-center gap-2 px-5 py-2 bg-[#1E40AF] text-white rounded-xl text-xs font-bold hover:bg-blue-800 transition-colors shadow-lg shadow-blue-900/10">
            <Search className="w-3.5 h-3.5" />
            <span>{t('common.search_btn')}</span>
          </button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {kpis.map((kpi, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="bg-white p-6 rounded-[32px] border border-slate-100 shadow-sm flex items-center gap-4"
          >
            <div className={cn("p-4 rounded-2xl flex items-center justify-center", kpi.bg)}>
              <kpi.icon className={cn("w-6 h-6", kpi.color)} />
            </div>
            <div>
              <p className="text-[10px] font-black text-slate-400 tracking-widest leading-none mb-1">{kpi.label}</p>
              <p className="text-2xl font-black text-slate-800 tracking-tight">{kpi.value}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Alert List Table */}
      <div className="bg-white rounded-[32px] border border-slate-100 shadow-xl shadow-slate-200/50 overflow-hidden">
        <div className="p-6 border-b border-slate-100 flex items-center justify-between">
          <h3 className="">{t('alerts.list_title')}</h3>
          <div className="flex items-center gap-2">
            <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-xl text-[11px] font-bold text-slate-600 hover:bg-slate-50">
              <Download className="w-3.5 h-3.5 text-slate-400" />
              <span>{t('common.export')}</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-[#14532D] border border-green-800 rounded-xl text-[11px] font-bold text-white hover:bg-green-900 shadow-lg shadow-green-900/10">
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>Acción en Lote</span>
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/50 border-y border-slate-100">
                <th className="px-6 py-4 w-12"><input type="checkbox" className="rounded" /></th>
                <th className="px-4 py-4 text-[11px] font-black text-slate-400 tracking-widest">
                  <div className="flex items-center gap-2">
                    {t('alerts.level')}
                    <div className="flex flex-col gap-0.5">
                      <ChevronDown className="w-2.5 h-2.5 rotate-180" />
                      <ChevronDown className="w-2.5 h-2.5" />
                    </div>
                  </div>
                </th>
                <th className="px-4 py-4 text-[11px] font-black text-slate-400 tracking-widest">
                  <div className="flex items-center gap-2">
                    {t('alerts.time')}
                    <div className="flex flex-col gap-0.5">
                      <ChevronDown className="w-2.5 h-2.5 rotate-180" />
                      <ChevronDown className="w-2.5 h-2.5" />
                    </div>
                  </div>
                </th>
                <th className="px-4 py-4 text-[11px] font-black text-slate-400 tracking-widest">
                  <div className="flex items-center gap-2">
                    {t('alerts.type')}
                    <div className="flex flex-col gap-0.5">
                      <ChevronDown className="w-2.5 h-2.5 rotate-180" />
                      <ChevronDown className="w-2.5 h-2.5" />
                    </div>
                  </div>
                </th>
                <th className="px-4 py-4 text-[11px] font-black text-slate-400 tracking-widest">
                  <div className="flex items-center gap-2">
                    {t('alerts.med_name')}
                    <div className="flex flex-col gap-0.5">
                      <ChevronDown className="w-2.5 h-2.5 rotate-180" />
                      <ChevronDown className="w-2.5 h-2.5" />
                    </div>
                  </div>
                </th>
                <th className="px-4 py-4 text-[11px] font-black text-slate-400 tracking-widest">
                  <div className="flex items-center gap-2">
                    {t('alerts.stock_available')}
                    <div className="flex flex-col gap-0.5">
                      <ChevronDown className="w-2.5 h-2.5 rotate-180" />
                      <ChevronDown className="w-2.5 h-2.5" />
                    </div>
                  </div>
                </th>
                <th className="px-4 py-4 text-[11px] font-black text-slate-400 tracking-widest">
                  <div className="flex items-center gap-2">
                    {t('alerts.stock_min')}
                    <div className="flex flex-col gap-0.5">
                      <ChevronDown className="w-2.5 h-2.5 rotate-180" />
                      <ChevronDown className="w-2.5 h-2.5" />
                    </div>
                  </div>
                </th>
                <th className="px-6 py-4 text-[11px] font-black text-slate-400 tracking-widest">{t('common.actions')}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {alerts.map((alert, idx) => (
                <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-6 py-4"><input type="checkbox" className="rounded" /></td>
                  <td className="px-4 py-4">
                    <span className={cn("px-4 py-1 rounded-full text-[10px] font-black tracking-tight", alert.levelColor)}>
                      {alert.level}
                    </span>
                  </td>
                  <td className="px-4 py-4 text-xs font-bold text-slate-600 tracking-tight">{alert.time}</td>
                  <td className="px-4 py-4">
                    <span className={cn("px-2 py-1 rounded text-[10px] font-black tracking-tighter", alert.typeColor)}>
                      {alert.type}
                    </span>
                  </td>
                  <td className="px-4 py-4 text-sm font-bold text-slate-700 leading-tight">{alert.med}</td>
                  <td className="px-4 py-4 text-sm font-black text-rose-500">{alert.stock}</td>
                  <td className="px-4 py-4 text-sm font-bold text-slate-800">{alert.min}</td>
                  <td className="px-6 py-4 border-l border-slate-50">
                    <div className="flex items-center gap-4">
                      <button className="text-emerald-500 text-xs font-black hover:underline tracking-tight">Gestionar</button>
                      <button className="text-slate-400 text-xs font-bold hover:text-slate-600 tracking-tight">{t('common.details')}</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="p-6 border-t border-slate-100 flex items-center justify-between">
          <p className="text-xs font-medium text-slate-400">Total <span className="font-bold text-slate-800">56</span> Records</p>
          <div className="flex items-center gap-2">
            <button className="p-2 rounded-lg border border-slate-100 text-slate-300 hover:bg-slate-50 disabled:opacity-50" disabled>
              <ChevronLeft className="w-4 h-4" />
            </button>
            {[1, 2, 3, 4, 5].map((page) => (
              <button 
                key={page} 
                className={cn(
                  "w-8 h-8 rounded-lg text-xs font-black transition-all",
                  page === 1 ? "bg-[#14532D] text-white shadow-lg shadow-green-900/10" : "text-slate-500 hover:bg-slate-50"
                )}
              >
                {page}
              </button>
            ))}
            <button className="p-2 rounded-lg border border-slate-100 text-slate-400 hover:bg-slate-50">
              <ChevronRight className="w-4 h-4" />
            </button>
            <div className="flex items-center gap-2 ml-4">
              <span className="text-xs text-slate-400">Jump to</span>
              <input type="text" className="w-12 h-8 border border-slate-200 rounded-lg text-center text-xs font-bold text-slate-800" />
              <span className="text-xs text-slate-400">page</span>
            </div>
            <select className="ml-4 h-8 border border-slate-200 rounded-lg px-2 text-xs font-black text-slate-600 outline-none bg-white">
              <option>10 / page</option>
              <option>20 / page</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlertsCenterView;

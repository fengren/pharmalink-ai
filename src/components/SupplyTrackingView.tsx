import React from 'react';
import { 
  ComposedChart,
  Bar, 
  Line,
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Legend,
  PieChart,
  Pie,
  Cell
} from 'recharts';
import { 
  ArrowUp, 
  ArrowDown, 
  Download, 
  Search,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  LayoutGrid,
  FileText
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { cn } from '../lib/utils';

const SupplyTrackingView: React.FC = () => {
  const { t, language } = useLanguage();

  const kpis = [
    { label: t('supply.orders_in_transit'), value: '28', change: 'semana pasada 12%', trend: 'up', color: 'text-blue-500', bg: 'bg-blue-50' },
    { label: t('supply.on_time_delivery_rate'), value: '96.5%', change: 'Mejora respecto al mes pasado 2.1%', trend: 'up', color: 'text-emerald-500', bg: 'bg-emerald-50' },
    { label: t('supply.orders_with_anomalies'), value: '3', change: '2 menos que la semana pasada', trend: 'down', color: 'text-amber-500', bg: 'bg-amber-50' },
    { label: t('supply.late_delivery'), value: '2', change: 'Retraso Promedio: 1.5 Días', trend: 'up', color: 'text-rose-500', bg: 'bg-rose-50' },
  ];

  const tableData = [
    { status: 'En Tránsito', statusColor: 'bg-blue-50 text-blue-600', orderNo: 'BH20250703001', providerId: 'RFC10023', med: 'Cápsulas de Amoxicilina', medSpec: '100mg x 24 cápsulas/paquete x 1000 paquetes', amount: '$ 68,500' },
    { status: 'Retraso en el Envío', statusColor: 'bg-rose-50 text-rose-600', orderNo: 'BH20250703002', providerId: 'RFC10024', med: 'Ceftriaxona Sódica para Inyección', medSpec: '1g x 10 viales/paquete x 100 paquetes', amount: '$ 156,000' },
    { status: 'En Tránsito', statusColor: 'bg-blue-50 text-blue-600', orderNo: 'BH20250703003', providerId: 'RFC10025', med: 'Comprimidos de Clorhidrato de Ambroxol', medSpec: '30mg x 20 comprimidos/paquete x 800 paquetes', amount: '$ 32,000' },
  ];

  const barData = [
    { name: 'Laboratorios PiSA', puntualidad: 90, conformidad: 98 },
    { name: 'Genomma Lab Internacional', puntualidad: 95, conformidad: 99 },
    { name: 'Chinoin', puntualidad: 92, conformidad: 97 },
    { name: 'Landsteiner Scientific', puntualidad: 94, conformidad: 98 },
    { name: 'Liomont', puntualidad: 88, conformidad: 96 },
  ];

  const pieData = [
    { name: t('supply.delay'), value: 45, color: '#3B82F6' },
    { name: t('supply.damaged_packaging'), value: 20, color: '#10B981' },
    { name: t('supply.incorrect_quantity'), value: 15, color: '#F59E0B' },
    { name: t('supply.quality_issue'), value: 20, color: '#EF4444' },
  ];

  return (
    <div className="space-y-6">
      {/* Header Filters */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-white rounded-xl border border-slate-200 text-sm font-bold text-slate-700 hover:bg-slate-50 transition-all">
            <span>Todos los Proveedores</span>
            <ChevronDown className="w-4 h-4 text-slate-400" />
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-white rounded-xl border border-slate-200 text-sm font-bold text-slate-700 hover:bg-slate-50 transition-all">
            <span>Todos los Estados</span>
            <ChevronDown className="w-4 h-4 text-slate-400" />
          </button>
          <div className="relative min-w-[400px]">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input 
              type="text" 
              placeholder="Buscar por Nº de Orden/Proveedor/Medicamento" 
              className="w-full bg-white border border-slate-200 rounded-xl pl-10 pr-4 py-2 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-2 px-4 py-2.5 bg-white rounded-xl border border-slate-200 text-sm font-bold text-slate-600 hover:bg-slate-50">
            <Download className="w-4 h-4" />
            <span>Exportar</span>
          </button>
          <button className="flex items-center gap-2 px-4 py-2.5 bg-slate-800 text-white rounded-xl text-sm font-bold hover:bg-slate-900 shadow-lg shadow-slate-900/10">
            <LayoutGrid className="w-4 h-4" />
            <span>Acción en Lote</span>
          </button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {kpis.map((kpi, idx) => (
          <div key={idx} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm relative overflow-hidden group">
            <div className={`absolute top-0 left-0 w-1.5 h-full ${kpi.color.replace('text', 'bg')}`}></div>
            <div className={cn("p-6 rounded-3xl transition-all", kpi.bg)}>
              <div className="space-y-1 mb-4">
                <p className="text-xs font-bold text-slate-500 tracking-widest">{kpi.label}</p>
                <p className="tracking-tighter">{kpi.value}</p>
              </div>
              <div className="flex items-center gap-1.5">
                {kpi.trend === 'up' ? <ArrowUp className={cn("w-3 h-3 font-black", kpi.color)} /> : <ArrowDown className={cn("w-3 h-3 font-black", kpi.color)} />}
                <p className={cn("text-[10px] font-black", kpi.color)}>{kpi.change}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Main Table */}
      <div className="bg-white rounded-[32px] border border-slate-100 shadow-xl shadow-slate-200/50 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50/50">
                <th className="px-6 py-4 w-12"><input type="checkbox" className="rounded" /></th>
                <th className="px-4 py-4 text-[11px] font-black text-slate-500 tracking-widest">{t('common.status')}</th>
                <th className="px-4 py-4 text-[11px] font-black text-slate-500 tracking-widest">{t('supply.order_no')}</th>
                <th className="px-4 py-4 text-[11px] font-black text-slate-500 tracking-widest">{t('supply.provider_id')}</th>
                <th className="px-4 py-4 text-[11px] font-black text-slate-500 tracking-widest">{t('supply.med_info')}</th>
                <th className="px-4 py-4 text-[11px] font-black text-slate-500 tracking-widest text-right">{t('supply.order_amount')}</th>
                <th className="px-6 py-4 text-[11px] font-black text-slate-500 tracking-widest text-center">{t('common.actions')}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {tableData.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-6 py-4"><input type="checkbox" className="rounded" /></td>
                  <td className="px-4 py-4">
                    <span className={cn("px-4 py-1.5 rounded-lg text-[10px] font-black tracking-tight", row.statusColor)}>
                      {row.status}
                    </span>
                  </td>
                  <td className="px-4 py-4 text-sm font-bold text-slate-700">{row.orderNo}</td>
                  <td className="px-4 py-4 text-sm font-medium text-slate-500">{row.providerId}</td>
                  <td className="px-4 py-4">
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-slate-800">{row.med}</span>
                      <span className="text-[10px] font-medium text-slate-400 capitalize max-w-[250px] leading-relaxed mt-1">
                        {row.medSpec}
                      </span>
                    </div>
                  </td>
                  <td className="px-4 py-4 text-sm font-black text-slate-800 text-right">{row.amount}</td>
                  <td className="px-6 py-4 text-center">
                    <button className="text-emerald-500 text-xs font-bold hover:underline">{t('common.details')}</button>
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
            <button className="p-1 px-2 rounded-lg border border-slate-100 text-slate-400"><ChevronLeft className="w-4 h-4" /></button>
            <button className="w-8 h-8 rounded-lg text-xs font-bold bg-[#14532D] text-white">1</button>
            {[2, 3, 4, 5].map(p => <button key={p} className="w-8 h-8 rounded-lg text-xs font-bold text-slate-500">{p}</button>)}
            <button className="p-1 px-2 rounded-lg border border-slate-100 text-slate-400"><ChevronRight className="w-4 h-4" /></button>
            <span className="text-xs text-slate-400 ml-4">Jump to</span>
            <input type="text" className="w-10 h-8 border border-slate-200 rounded-lg text-center text-xs font-bold" />
            <span className="text-xs text-slate-400">page</span>
            <select className="ml-4 h-8 border border-slate-200 rounded-lg px-2 text-xs font-bold text-slate-600 outline-none">
              <option>10 / page</option>
            </select>
          </div>
        </div>
      </div>

      {/* Analytics Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-xl shadow-slate-200/50">
          <div className="flex items-center justify-between mb-8">
            <h3 className="">{t('supply.delivery_stats')}</h3>
            <button className="flex items-center gap-2 px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-[10px] font-bold text-slate-500">
              <span>Últimos 7 Días</span>
              <ChevronDown className="w-3 h-3" />
            </button>
          </div>
          <div className="h-[350px]">
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart data={barData} margin={{ top: 20, right: 30, left: 10, bottom: 40 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                <XAxis 
                  dataKey="name" 
                  axisLine={{ stroke: '#E2E8F0' }} 
                  tickLine={{ stroke: '#E2E8F0' }} 
                  fontSize={10} 
                  fontWeight={600} 
                  tick={{ fill: '#64748B' }}
                  interval={0}
                  dy={10}
                />
                <YAxis 
                  domain={[0, 100]} 
                  axisLine={false} 
                  tickLine={false} 
                  fontSize={11} 
                  fontWeight={700}
                  tick={{ fill: '#94A3B8' }}
                  tickFormatter={(val) => `${val}%`}
                  ticks={[0, 20, 40, 60, 80, 100]}
                />
                <Tooltip 
                  cursor={{ fill: '#F8FAFC' }}
                  contentStyle={{ borderRadius: '24px', border: 'none', boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)' }}
                />
                <Bar 
                  name={language === 'es' ? 'Tasa de Puntualidad' : 'On-time Rate'} 
                  dataKey="puntualidad" 
                  fill="#1FBDF2" 
                  radius={[6, 6, 0, 0]} 
                  barSize={24} 
                />
                <Line 
                  type="monotone" 
                  name={language === 'es' ? 'Tasa de Conformidad' : 'Compliance Rate'} 
                  dataKey="conformidad" 
                  stroke="#FFB347" 
                  strokeWidth={3} 
                  dot={{ r: 5, fill: '#FFB347', stroke: '#fff', strokeWidth: 2 }} 
                  activeDot={{ r: 7, strokeWidth: 0 }}
                />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
          <div className="flex items-center justify-center gap-12 mt-4 px-4">
             <div className="flex items-center gap-3">
               <div className="w-8 h-4 rounded-[4px] bg-[#1FBDF2]"></div>
               <span className="text-[11px] font-black text-slate-500 tracking-widest">{language === 'es' ? 'Tasa de Puntualidad' : 'On-time Rate'}</span>
             </div>
             <div className="flex items-center gap-3">
               <div className="w-3 h-3 rounded-full bg-[#FFB347] border-2 border-white ring-1 ring-[#FFB347]"></div>
               <span className="text-[11px] font-black text-slate-500 tracking-widest">{language === 'es' ? 'Tasa de Conformidad' : 'Compliance Rate'}</span>
             </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-xl shadow-slate-200/50">
          <div className="flex items-center justify-between mb-8">
            <h3 className="">{t('supply.anomaly_analysis')}</h3>
            <button className="flex items-center gap-2 px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-[10px] font-bold text-slate-500">
              <span>Todos los Proveedores</span>
              <ChevronDown className="w-3 h-3" />
            </button>
          </div>
          <div className="h-[300px] flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 25px -5px rgba(0,0,0,0.1)' }} />
                <Legend layout="vertical" align="right" verticalAlign="middle" iconType="circle" />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupplyTrackingView;

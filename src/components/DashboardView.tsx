import React from 'react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip as RechartsTooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Bar,
  BarChart,
  ComposedChart
} from 'recharts';
import { 
  FileText, 
  Calendar, 
  ShoppingCart,
  AlertTriangle,
  ChevronDown,
  ChevronRight,
  Plus
} from 'lucide-react';
import { cn } from '../lib/utils';
import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';

const DashboardView: React.FC = () => {
  const { t } = useLanguage();

  const kpis = [
    { label: t('dashboard.stats.orders'), value: '12', unit: t('dashboard.unit.orders'), icon: FileText, color: 'text-blue-600', bg: 'bg-blue-50', iconBg: 'bg-blue-100/50' },
    { label: t('dashboard.stats.expiring'), value: '8', unit: t('dashboard.unit.medicines'), icon: Calendar, color: 'text-yellow-600', bg: 'bg-yellow-50', iconBg: 'bg-yellow-100/50' },
    { label: t('dashboard.stats.suggestions'), value: '15', unit: t('dashboard.unit.suggestions'), icon: ShoppingCart, color: 'text-emerald-600', bg: 'bg-emerald-50', iconBg: 'bg-emerald-100/50' },
    { label: t('dashboard.stats.reserves'), value: '5', unit: t('dashboard.unit.requests'), icon: AlertTriangle, color: 'text-rose-600', bg: 'bg-rose-50', iconBg: 'bg-rose-100/50' },
  ];

  const inventoryData = [
    { name: t('day.mon'), actual: 120, min: 90, max: 210 },
    { name: t('day.tue'), actual: 135, min: 90, max: 210 },
    { name: t('day.wed'), actual: 110, min: 90, max: 210 },
    { name: t('day.thu'), actual: 140, min: 90, max: 210 },
    { name: t('day.fri'), actual: 95, min: 90, max: 210 },
    { name: t('day.sat'), actual: 220, min: 90, max: 210 },
    { name: t('day.sun'), actual: 205, min: 90, max: 210 },
  ];

  const alertData = [
    { name: t('dashboard.alert.low_stock'), value: 45, color: '#3B82F6' },
    { name: t('dashboard.alert.expiring'), value: 25, color: '#10B981' },
    { name: t('dashboard.alert.usage_anomaly'), value: 15, color: '#F59E0B' },
    { name: t('dashboard.alert.supply_delay'), value: 10, color: '#EF4444' },
    { name: t('dashboard.alert.quality_issue'), value: 5, color: '#94A3B8' },
  ];

  const tasks = [
    { 
      id: 'BH20250703001', 
      title: t('dashboard.tasks.approve_orders'), 
      desc: `${t('hospital.gen')} - Amoxicilina y 4 más`,
      icon: FileText,
      iconColor: 'text-blue-600',
      iconBg: 'bg-blue-50'
    },
    { 
      id: 'BH20250703002', 
      title: t('dashboard.tasks.approve_orders'), 
      desc: `${t('hospital.abc')} – Comprimidos de Ambroxol y 2 más`,
      icon: FileText,
      iconColor: 'text-blue-600',
      iconBg: 'bg-blue-50'
    },
    { 
      id: 'BH20250703003', 
      title: t('dashboard.tasks.approve_orders'), 
      desc: `${t('hospital.can')} – Comprimidos de Ambroxol y 2 más`,
      icon: FileText,
      iconColor: 'text-blue-600',
      iconBg: 'bg-blue-50'
    },
    { 
      id: 'FH20250701005', 
      title: t('dashboard.tasks.confirm_receipt'), 
      desc: `${t('hospital.izt')} - XX Inyectable y 2 más`,
      icon: ShoppingCart,
      iconColor: 'text-emerald-600',
      iconBg: 'bg-emerald-50'
    },
    { 
      id: 'PC20240801001', 
      title: t('dashboard.tasks.expiry_mgmt'), 
      desc: `${t('hospital.santa')} – Azitromicina inyectable y 1 producto más`,
      icon: Calendar,
      iconColor: 'text-yellow-600',
      iconBg: 'bg-yellow-50'
    }
  ];

  const hospitalPerformanceData = [
    { name: t('hospital.gen'), rotation: 4.2, rupture: 1.8, rational: 92.5 },
    { name: t('hospital.abc'), rotation: 3.9, rupture: 2.1, rational: 88.3 },
    { name: t('hospital.can'), rotation: 4.6, rupture: 1.5, rational: 95.1 },
    { name: t('hospital.izt'), rotation: 3.8, rupture: 2.4, rational: 87.2 },
    { name: t('hospital.santa'), rotation: 3.5, rupture: 2.8, rational: 85.4 },
  ];

  const notifications = [
    {
      title: 'Alerta de Caducidad: Metformin Tablets Near Expiry',
      desc: 'El lote PC20230801 en el Centro Médico ABC vencerá en 30 días. Priorizar su uso.',
      time: 'Hace 1 hora',
      icon: Calendar,
      color: 'text-yellow-600',
      bg: 'bg-yellow-50'
    },
    {
      title: 'Notificación de Envío: Order BH20250701003 Shipped',
      desc: 'El pedido de reabastecimiento del Instituto Nacional de Cancerología ha sido enviado por Huadong Pharma. Llegada estimada: 2 días.',
      time: 'Hace 3 horas',
      icon: ShoppingCart,
      color: 'text-emerald-600',
      bg: 'bg-emerald-50'
    },
    {
      title: 'Anomalía de Consumo: Aumento repentino en el consumo de levofloxacino inyectable',
      desc: 'El consumo en los últimos 7 días en el Hospital Comunitario de Santa Fe aumentó un 150 % en comparación con el promedio diario de los los 30 días anteriores. Se recomienda seguimiento.',
      time: 'Ayer 15:30',
      icon: AlertTriangle,
      color: 'text-blue-600',
      bg: 'bg-blue-50'
    }
  ];

  const hospitalInventoryStateData = [
    { name: t('hospital.gen'), value: 320, rotation: 4.2 },
    { name: t('hospital.abc'), value: 280, rotation: 3.8 },
    { name: t('hospital.can'), value: 250, rotation: 4.5 },
    { name: t('hospital.izt'), value: 220, rotation: 3.9 },
    { name: t('hospital.santa'), value: 190, rotation: 3.2 },
    { name: t('hospital.sur'), value: 160, rotation: 4.1 },
    { name: t('hospital.ang'), value: 130, rotation: 3.6 },
  ];

  const aiVisionItems = [
    {
      title: t('dashboard.ai.trends'),
      desc: t('dashboard.ai.trends_desc'),
      icon: FileText,
      color: 'text-blue-600',
      bg: 'bg-blue-50'
    },
    {
      title: t('dashboard.ai.optimization'),
      desc: t('dashboard.ai.optimization_desc'),
      icon: ShoppingCart,
      color: 'text-emerald-600',
      bg: 'bg-emerald-50'
    },
    {
      title: t('dashboard.ai.expiry'),
      desc: t('dashboard.ai.expiry_desc'),
      icon: Calendar,
      color: 'text-yellow-600',
      bg: 'bg-yellow-50'
    },
    {
      title: t('dashboard.ai.provider'),
      desc: t('dashboard.ai.provider_desc'),
      icon: AlertTriangle,
      color: 'text-rose-600',
      bg: 'bg-rose-50'
    }
  ];

  return (
    <div className="space-y-6 max-w-[1600px] mx-auto pb-12 px-1">
      {/* Top Header Section with Filters */}
      <div className="flex items-center justify-between mb-2">
        <h2 className="">{t('nav.control')}</h2>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-xl cursor-pointer shadow-sm hover:bg-slate-50 transition-all">
            <span className="text-xs font-bold text-slate-600">{t('header.all_hospitals')}</span>
            <ChevronDown className="w-4 h-4 text-slate-400" />
          </div>
        </div>
      </div>

      {/* KPI Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {kpis.map((kpi, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.05 }}
            className="bg-white p-6 rounded-[24px] border border-slate-100 shadow-sm flex items-center gap-5 hover:shadow-md transition-shadow group"
          >
            <div className={cn("w-14 h-14 rounded-full flex items-center justify-center transition-transform group-hover:scale-110", kpi.bg)}>
              <kpi.icon className={cn("w-6 h-6", kpi.color)} />
            </div>
            <div>
              <p className="text-[11px] font-bold text-slate-400 leading-tight mb-1">{kpi.label}</p>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-black text-slate-900 tracking-tighter">{kpi.value}</span>
                <span className="text-[11px] font-bold text-slate-500 tracking-tight">{kpi.unit}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Main Grid: Tasks and Notifications */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Task List */}
        <div className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm">
          <div className="flex items-center justify-between mb-8">
            <h3 className="">{t('dashboard.task_list')}</h3>
            <button className="flex items-center gap-1 text-primary hover:text-[#005a45] transition-colors">
              <span className="text-[11px] font-black tracking-widest uppercase">{t('common.view_all')}</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="space-y-4">
            {tasks.map((task, i) => (
              <div key={i} className="flex items-center justify-between group">
                <div className="flex items-center gap-5">
                  <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center shadow-sm transition-transform group-hover:scale-105", task.iconBg)}>
                    <task.icon className={cn("w-5 h-5", task.iconColor)} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-bold text-slate-800 mb-0.5">{task.title} - {task.id}</h4>
                    <p className="text-[11px] font-medium text-slate-400 line-clamp-1">{task.desc}</p>
                  </div>
                </div>
                <button className="px-6 py-2.5 bg-[#14532D] text-white rounded-[14px] text-[10px] font-black tracking-widest hover:bg-[#0f4023] transition-all shadow-lg shadow-green-900/10 flex-shrink-0 ml-4">
                  {t('dashboard.btn.approve')}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Notifications List */}
        <div className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm">
          <div className="flex items-center justify-between mb-8">
            <h3 className="">{t('dashboard.notifications')}</h3>
            <button className="flex items-center gap-1 text-primary hover:text-[#005a45] transition-colors">
              <span className="text-[11px] font-black tracking-widest uppercase">{t('common.view_all')}</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="space-y-6">
            {notifications.map((notif, i) => (
              <div key={i} className="flex gap-5 group">
                <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center shadow-sm flex-shrink-0 transition-transform group-hover:scale-105", notif.bg)}>
                  <notif.icon className={cn("w-5 h-5", notif.color)} />
                </div>
                <div className="flex-1">
                  <h4 className="text-sm font-bold text-slate-800 mb-1">{notif.title}</h4>
                  <p className="text-[11px] font-medium text-slate-500 leading-relaxed line-clamp-2 mb-1">{notif.desc}</p>
                  <span className="text-[10px] font-bold text-slate-300 uppercase tracking-wider">{notif.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Hospital Inventory State Chart (Full Width) */}
      <div className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm transition-all hover:shadow-md">
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-xl font-bold text-slate-800">{t('dashboard.hospital_state')}</h3>
          <div className="flex items-center gap-2 px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl cursor-pointer hover:bg-slate-100 transition-colors">
            <span className="text-[10px] font-black text-slate-700 tracking-widest uppercase">{t('dashboard.rotation_filter')}</span>
            <ChevronDown className="w-4 h-4 text-slate-400" />
          </div>
        </div>

        {/* Legend */}
        <div className="flex justify-end gap-10 mb-8 px-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-4 rounded-[4px] bg-[#1FBDF2]"></div>
            <span className="text-[11px] font-bold text-slate-500">{t('dashboard.inventory_value')}</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-[#FFB347] border-2 border-white ring-1 ring-[#FFB347]"></div>
            <span className="text-[11px] font-bold text-slate-500">{t('dashboard.rotation_index')}</span>
          </div>
        </div>
        
        <div className="h-[400px]">
           <ResponsiveContainer width="100%" height="100%">
              <ComposedChart data={hospitalInventoryStateData} margin={{ top: 10, right: 30, left: 10, bottom: 40 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                <XAxis 
                  dataKey="name" 
                  axisLine={{ stroke: '#E2E8F0' }} 
                  tickLine={false} 
                  fontSize={9} 
                  fontWeight={600}
                  tick={(props: any) => {
                    const { x, y, payload } = props;
                    return (
                      <g transform={`translate(${x},${y})`}>
                        <text x={0} y={0} dy={16} textAnchor="middle" fill="#64748B" className="text-[10px] font-bold">
                          {payload.value}
                        </text>
                      </g>
                    );
                  }}
                  interval={0}
                  dy={10}
                />
                <YAxis 
                  name={t('dashboard.inventory_value')}
                  domain={[0, 350]}
                  ticks={[0, 50, 100, 150, 200, 250, 300, 350]}
                  axisLine={false} 
                  tickLine={false} 
                  fontSize={10} 
                  fontWeight={700} 
                  tick={{ fill: '#94A3B8' }}
                  tickFormatter={(val) => `${val} ${t('dashboard.ten_thousand')}`}
                />
                <YAxis 
                  yAxisId="right"
                  orientation="right"
                  domain={[0, 5]}
                  ticks={[0, 1, 2, 3, 4, 5]}
                  axisLine={false} 
                  tickLine={false} 
                  fontSize={10} 
                  fontWeight={700} 
                  tick={{ fill: '#94A3B8' }}
                />
                <RechartsTooltip 
                  cursor={{ fill: '#F8FAFC' }}
                  contentStyle={{ borderRadius: '24px', border: 'none', boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)' }} 
                />
                <Bar 
                  dataKey="value" 
                  fill="#1FBDF2" 
                  radius={[6, 6, 0, 0]} 
                  barSize={18} 
                  name={t('dashboard.inventory_value')}
                />
                <Line 
                  yAxisId="right"
                  type="monotone" 
                  dataKey="rotation" 
                  stroke="#FFB347" 
                  strokeWidth={3} 
                  dot={{ r: 5, fill: '#FFB347', stroke: '#fff', strokeWidth: 2 }} 
                  activeDot={{ r: 7, strokeWidth: 0 }}
                  name={t('dashboard.rotation_index')}
                />
              </ComposedChart>
           </ResponsiveContainer>
        </div>
      </div>

      {/* AI Vision Section (Mockup 3) */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="">{t('dashboard.ai_vision')}</h3>
          <button className="flex items-center gap-1 text-primary hover:text-[#005a45] transition-colors">
            <span className="text-[11px] font-black tracking-widest">{t('dashboard.see_all')}</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {aiVisionItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm hover:shadow-md transition-shadow group flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                   <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center shadow-sm", item.bg)}>
                     <item.icon className={cn("w-6 h-6", item.color)} />
                   </div>
                   <h4 className="">{item.title}</h4>
                </div>
                <p className="text-xs font-medium text-slate-500 leading-relaxed line-clamp-3">
                  {item.desc}
                </p>
              </div>
              <div className="mt-6 flex justify-end">
                <button className="flex items-center gap-1 text-[11px] font-black text-primary tracking-widest hover:translate-x-1 transition-transform">
                  {t('common.details')} <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardView;


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
    { label: 'Órdenes Especiales de Reposición', value: '12', unit: 'Órdenes', icon: FileText, color: 'text-blue-600', bg: 'bg-blue-50', iconBg: 'bg-blue-100/50' },
    { label: 'Medicamentos Próximos a Vencer', value: '8', unit: 'Medicamentos', icon: Calendar, color: 'text-yellow-600', bg: 'bg-yellow-50', iconBg: 'bg-yellow-100/50' },
    { label: 'Sugerencias Inteligentes de Compra', value: '15', unit: 'Sugerencias', icon: ShoppingCart, color: 'text-emerald-600', bg: 'bg-emerald-50', iconBg: 'bg-emerald-100/50' },
    { label: 'Reservas Especiales', value: '5', unit: 'Solicitudes', icon: AlertTriangle, color: 'text-rose-600', bg: 'bg-rose-50', iconBg: 'bg-rose-100/50' },
  ];

  const inventoryData = [
    { name: 'Lunes', actual: 120, min: 90, max: 210 },
    { name: 'Martes', actual: 135, min: 90, max: 210 },
    { name: 'Miércoles', actual: 110, min: 90, max: 210 },
    { name: 'Jueves', actual: 140, min: 90, max: 210 },
    { name: 'Viernes', actual: 95, min: 90, max: 210 },
    { name: 'Sábado', actual: 220, min: 90, max: 210 },
    { name: 'Domingo', actual: 205, min: 90, max: 210 },
  ];

  const alertData = [
    { name: 'Stock Bajo', value: 45, color: '#3B82F6' },
    { name: 'Próximo a Vencer', value: 25, color: '#10B981' },
    { name: 'Anomalía de Consumo', value: 15, color: '#F59E0B' },
    { name: 'Retraso en el Suministro', value: 10, color: '#EF4444' },
    { name: 'Problema de Calidad', value: 5, color: '#94A3B8' },
  ];

  const tasks = [
    { 
      id: 'BH20250703001', 
      title: 'Aprobación de Órdenes de Reposición', 
      desc: 'Hospital General de México - Amoxicilina y 4 más',
      icon: FileText,
      iconColor: 'text-blue-600',
      iconBg: 'bg-blue-50'
    },
    { 
      id: 'BH20250703002', 
      title: 'Aprobación de Órdenes de Reposición', 
      desc: 'Centro Médico ABC – Comprimidos de Ambroxol y 2 más',
      icon: FileText,
      iconColor: 'text-blue-600',
      iconBg: 'bg-blue-50'
    },
    { 
      id: 'BH20250703003', 
      title: 'Aprobación de Órdenes de Reposición', 
      desc: 'Instituto Nacional de Cancerología – Comprimidos de Ambroxol y 2 más',
      icon: FileText,
      iconColor: 'text-blue-600',
      iconBg: 'bg-blue-50'
    },
    { 
      id: 'FH20250701005', 
      title: 'Confirmar Recepción', 
      desc: 'Hospital Comunitario de Iztapalapa - XX Inyectable y 2 más',
      icon: ShoppingCart,
      iconColor: 'text-emerald-600',
      iconBg: 'bg-emerald-50'
    },
    { 
      id: 'PC20240801001', 
      title: 'Gestión de Caducidad', 
      desc: 'Hospital Comunitario de Santa Fe – Azitromicina inyectable y 1 producto más',
      icon: Calendar,
      iconColor: 'text-yellow-600',
      iconBg: 'bg-yellow-50'
    }
  ];

  const notifications = [
    { 
      title: 'Alerta de Caducidad: Metformin Tablets Near Expiry', 
      desc: 'El lote PC20230801 en el Centro Médico ABC vencerá en 30 días. Priorizar su uso.',
      time: 'Hace 1 hora',
      type: 'warning',
      icon: Calendar,
      color: 'text-yellow-600',
      bg: 'bg-yellow-50'
    },
    { 
      title: 'Notificación de Envío: Order BH20250701003 Shipped', 
      desc: 'El pedido de reabastecimiento del Instituto Nacional de Cancerología ha sido enviado por Huadong Pharma. Llegada estimada: 2 días.',
      time: 'Hace 3 horas',
      type: 'info',
      icon: ShoppingCart,
      color: 'text-emerald-600',
      bg: 'bg-emerald-50'
    },
    { 
      title: 'Anomalía de Consumo: Aumento repentino en el consumo de levofloxacino inyectable', 
      desc: 'El consumo en los últimos 7 días en el Hospital Comunitario de Santa Fe aumentó un 150% en comparación con el promedio diario de los 30 días anteriores. Se recomienda seguimiento.',
      time: 'Ayer 15:30',
      type: 'error',
      icon: AlertTriangle,
      color: 'text-blue-600',
      bg: 'bg-blue-50'
    }
  ];

  const hospitalInventoryData = [
    { name: 'Hospital General de México', value: 320, rotation: 3.8 },
    { name: 'Centro Médico ABC', value: 280, rotation: 3.5 },
    { name: 'Instituto Nacional de Cancerología', value: 250, rotation: 4.1 },
    { name: 'Hospital Comunitario de Iztapalapa', value: 210, rotation: 3.2 },
    { name: 'Hospital Comunitario de Santa Fe', value: 180, rotation: 2.9 },
    { name: 'Centro Médico del Sur', value: 150, rotation: 3.7 },
    { name: 'Hospital Angeles (México)', value: 120, rotation: 3.1 },
  ];

  const aiVisionItems = [
    {
      title: 'Análisis de Tendencias de Consumo',
      desc: 'Según el análisis de los últimos 3 meses, el consumo de antibióticos muestra fluctuaciones estacionales. Se prevé un aumento del 15% el próximo mes. Se recomienda realizar compras anticipadas.',
      icon: FileText,
      color: 'text-blue-600',
      bg: 'bg-blue-50'
    },
    {
      title: 'Sugerencias de Optimización de Compras',
      desc: 'Se detectó una frecuencia de compra excesiva en 5 medicamentos. Se recomienda cambiar a un modelo de compra por lotes, lo que puede ahorrar un 8% en logística y un 12% en gestión.',
      icon: ShoppingCart,
      color: 'text-emerald-600',
      bg: 'bg-emerald-50'
    },
    {
      title: 'Recordatorio de Gestión de Caducidad',
      desc: 'El sistema ha detectado que 8 medicamentos en 3 hospitales caducarán en los próximos 60 días. Se recomienda redistribuir el inventario priorizando los hospitales con mayor consumo.',
      icon: Calendar,
      color: 'text-yellow-600',
      bg: 'bg-yellow-50'
    },
    {
      title: 'Alerta de Riesgo del Proveedor',
      desc: 'Según datos históricos del proveedor, Farmacéutica Chinoin puede tener retrasos en entregas. Se recomienda buscar proveedores alternativos para 4 productos suministrados.',
      icon: AlertTriangle,
      color: 'text-rose-600',
      bg: 'bg-rose-50'
    }
  ];

  return (
    <div className="space-y-6 max-w-[1600px] mx-auto pb-12 px-1">
      {/* Top Header Section with Filters */}
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-xl font-black text-slate-800 tracking-tight">Panel de Control</h2>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-xl cursor-pointer shadow-sm hover:bg-slate-50 transition-all">
            <span className="text-xs font-bold text-slate-600">Todos los Hospitales</span>
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
                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-tight">{kpi.unit}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Main Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        {/* Resumen de Inventario */}
        <div className="lg:col-span-3 bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm">
          <div className="flex items-center justify-between mb-10">
            <h3 className="text-lg font-black text-slate-800 tracking-tight uppercase tracking-widest">Resumen de Inventario</h3>
            <div className="flex bg-slate-50 p-1 rounded-xl border border-slate-100 shadow-inner">
               {['Semana', 'Mes', 'Trimestre'].map((t) => (
                 <button key={t} className={cn(
                   "px-6 py-2 rounded-[10px] text-[10px] font-black uppercase tracking-widest transition-all",
                   t === 'Mes' ? "bg-white text-slate-900 shadow-sm border border-slate-100" : "text-slate-400 hover:text-slate-600"
                 )}>
                   {t}
                 </button>
               ))}
            </div>
          </div>

          <div className="h-[320px] relative">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={inventoryData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F1F5F9" />
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  fontSize={10} 
                  fontStyle="bold" 
                  tick={{ fill: '#94A3B8' }}
                  dy={10}
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  fontSize={10} 
                  fontStyle="bold" 
                  tick={{ fill: '#94A3B8' }}
                />
                <RechartsTooltip contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)' }} />
                <Line 
                  type="monotone" 
                  dataKey="actual" 
                  stroke="#3B82F6" 
                  strokeWidth={4} 
                  dot={{ r: 4, fill: '#3B82F6', strokeWidth: 3, stroke: '#fff' }} 
                  activeDot={{ r: 6, strokeWidth: 0 }}
                  name="Inventario Actual" 
                />
              </LineChart>
            </ResponsiveContainer>
            
            <div className="flex items-center justify-center gap-8 mt-6">
               <div className="flex items-center gap-2">
                 <div className="w-2 h-2 rounded-full border-2 border-blue-500"></div>
                 <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Inventario Actual</span>
               </div>
            </div>
          </div>
        </div>

        {/* Alertas de Medicamentos */}
        <div className="lg:col-span-2 bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-lg font-black text-slate-800 tracking-tight uppercase tracking-widest max-w-[200px] leading-tight">Estadísticas de Alertas de Medicamentos</h3>
            <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg cursor-pointer">
              <span className="text-[10px] font-bold text-slate-600">Todos los Hospitales</span>
              <ChevronDown className="w-3 h-3 text-slate-400" />
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="h-[240px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={alertData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={90}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {alertData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <RechartsTooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
            
            <div className="w-full space-y-3 mt-4">
              {alertData.map((item, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-md" style={{ backgroundColor: item.color }}></div>
                    <span className="text-[11px] font-bold text-slate-600">{item.name}</span>
                  </div>
                  <span className="text-[10px] font-bold text-slate-400">{item.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Grid: Tasks and Notifications */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        {/* Task List */}
        <div className="lg:col-span-3 bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-lg font-black text-slate-800 tracking-tight uppercase tracking-widest">Lista de Tareas</h3>
            <button className="flex items-center gap-1 text-primary hover:text-[#005a45] transition-colors">
              <span className="text-[11px] font-black uppercase tracking-widest">Ver Todo</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="space-y-4">
            {tasks.map((task, i) => (
              <div key={i} className="bg-slate-50/50 p-6 rounded-[24px] border border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-5">
                  <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center shadow-sm", task.iconBg)}>
                    <task.icon className={cn("w-5 h-5", task.iconColor)} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-black text-slate-800 mb-1">{task.title} - {task.id}</h4>
                    <p className="text-[11px] font-medium text-slate-400 line-clamp-1">{task.desc}</p>
                  </div>
                </div>
                <button className="px-6 py-2.5 bg-[#14532D] text-white rounded-[14px] text-[10px] font-black uppercase tracking-widest hover:bg-[#0f4023] transition-all shadow-lg shadow-green-900/10 flex-shrink-0 ml-4">
                  Ir a Aprobar
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* System Notifications */}
        <div className="lg:col-span-2 bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-lg font-black text-slate-800 tracking-tight uppercase tracking-widest">Notificación del Sistema</h3>
            <button className="flex items-center gap-1 text-primary hover:text-[#005a45] transition-colors">
              <span className="text-[11px] font-black uppercase tracking-widest">Ver Todo</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="space-y-4">
            {notifications.map((notif, i) => (
              <div key={i} className="flex gap-5 p-6 rounded-[24px] border border-slate-100 bg-white hover:bg-slate-50 transition-colors cursor-pointer group">
                <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center shadow-sm flex-shrink-0 group-hover:scale-105 transition-transform", notif.bg)}>
                  <notif.icon className={cn("w-5 h-5", notif.color)} />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-black text-slate-800 leading-tight line-clamp-1 flex-1 pr-2">{notif.title}</h4>
                    {notif.time && <span className="text-[9px] font-bold text-slate-300 uppercase whitespace-nowrap">{notif.time}</span>}
                  </div>
                  <p className="text-[11px] font-medium text-slate-500 leading-relaxed line-clamp-2">{notif.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Hospital Inventory State Chart (Mockup 2/3) */}
      <div className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm">
        <div className="flex items-center justify-between mb-10">
          <h3 className="text-lg font-black text-slate-800 tracking-tight uppercase tracking-widest">Estado del Inventario Hospitalario</h3>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg cursor-pointer">
              <span className="text-[11px] font-bold text-slate-600">Por Rotación de Inventario</span>
              <ChevronDown className="w-3 h-3 text-slate-400" />
            </div>
          </div>
        </div>
        
        <div className="h-[400px]">
           <ResponsiveContainer width="100%" height="100%">
              <ComposedChart data={hospitalInventoryData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F1F5F9" />
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  fontSize={9} 
                  fontStyle="bold" 
                  tick={{ fill: '#94A3B8' }}
                  interval={0}
                />
                <YAxis axisLine={false} tickLine={false} fontSize={10} fontStyle="bold" tick={{ fill: '#94A3B8' }} />
                <YAxis yAxisId="right" orientation="right" axisLine={false} tickLine={false} fontSize={10} fontStyle="bold" tick={{ fill: '#F59E0B' }} domain={[0, 5]} />
                <RechartsTooltip contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)' }} />
                <Bar dataKey="value" fill="#3B82F6" radius={[4, 4, 0, 0]} barSize={20} name="Valor del Inventario" />
                <Line yAxisId="right" type="monotone" dataKey="rotation" stroke="#F59E0B" strokeWidth={3} dot={{ r: 4, fill: '#F59E0B', strokeWidth: 2, stroke: '#fff' }} name="Índice de Rotación" />
              </ComposedChart>
           </ResponsiveContainer>
        </div>
        <div className="flex items-center justify-center gap-8 mt-4 overflow-hidden">
             <div className="flex items-center gap-2">
               <div className="w-4 h-2 bg-blue-400 rounded-sm"></div>
               <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Valor del Inventario</span>
             </div>
             <div className="flex items-center gap-2">
               <div className="w-4 h-0.5 bg-amber-500 rounded-full"></div>
               <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Índice de Rotación</span>
             </div>
          </div>
      </div>

      {/* AI Vision Section (Mockup 3) */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-black text-slate-800 tracking-tight uppercase tracking-widest">AI Visión Operativa</h3>
          <button className="flex items-center gap-1 text-primary hover:text-[#005a45] transition-colors">
            <span className="text-[11px] font-black uppercase tracking-widest">Ver Todo</span>
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
                   <h4 className="text-base font-black text-slate-800 tracking-tight">{item.title}</h4>
                </div>
                <p className="text-xs font-medium text-slate-500 leading-relaxed line-clamp-3">
                  {item.desc}
                </p>
              </div>
              <div className="mt-6 flex justify-end">
                <button className="flex items-center gap-1 text-[11px] font-black text-primary uppercase tracking-widest hover:translate-x-1 transition-transform">
                  Detalles <ChevronRight className="w-4 h-4" />
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


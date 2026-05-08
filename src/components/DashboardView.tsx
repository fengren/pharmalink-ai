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

  const hospitalPerformanceData = [
    { name: 'Hospital General de México', rotation: 4.2, rupture: 1.8, rational: 92.5 },
    { name: 'Centro Médico ABC', rotation: 3.9, rupture: 2.1, rational: 88.3 },
    { name: 'Instituto Nacional de Cancerología', rotation: 4.6, rupture: 1.5, rational: 95.1 },
    { name: 'Hospital Comunitario de Iztapalapa', rotation: 3.8, rupture: 2.4, rational: 87.2 },
    { name: 'Hospital Comunitario de Santa Fe', rotation: 3.5, rupture: 2.8, rational: 85.4 },
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
        <h2 className="">Panel de Control</h2>
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
                <span className="text-[11px] font-bold text-slate-500 tracking-tight">{kpi.unit}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Main Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-10 gap-6">
        {/* Resumen de Inventario */}
        <div className="lg:col-span-6 bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm">
          <div className="flex items-center justify-between mb-10">
            <h3 className="">Resumen de Inventario</h3>
            <div className="flex bg-slate-50 p-1 rounded-xl border border-slate-100 shadow-inner">
               {['Semana', 'Mes', 'Trimestre'].map((t) => (
                 <button key={t} className={cn(
                   "px-6 py-2 rounded-[10px] text-[10px] font-black tracking-widest transition-all",
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
                 <span className="text-[10px] font-black text-slate-400 tracking-widest">Inventario Actual</span>
               </div>
            </div>
          </div>
        </div>

        {/* Alertas de Medicamentos */}
        <div className="lg:col-span-4 bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm">
          <div className="flex items-center justify-between mb-8">
            <h3 className="max-w-[200px] leading-tight">Estadísticas de Alertas de Medicamentos</h3>
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

      {/* Bottom Grid: Tasks */}
      <div className="w-full">
        {/* Task List */}
        <div className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm">
          <div className="flex items-center justify-between mb-8">
            <h3 className="">Lista de Tareas</h3>
            <button className="flex items-center gap-1 text-primary hover:text-[#005a45] transition-colors">
              <span className="text-[11px] font-black tracking-widest">Ver Todo</span>
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
                    <h4 className="mb-1">{task.title} - {task.id}</h4>
                    <p className="text-[11px] font-medium text-slate-400 line-clamp-1">{task.desc}</p>
                  </div>
                </div>
                <button className="px-6 py-2.5 bg-[#14532D] text-white rounded-[14px] text-[10px] font-black tracking-widest hover:bg-[#0f4023] transition-all shadow-lg shadow-green-900/10 flex-shrink-0 ml-4">
                  Ir a Aprobar
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Hospital Performance Comparison (Chart/Table) */}
      <div className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm transition-all hover:shadow-md">
        <div className="flex items-center justify-between mb-10">
          <h3 className="text-xl font-bold text-slate-800">Comparativa de Desempeño entre Hospitales</h3>
          <div className="flex bg-slate-100 p-1 rounded-xl border border-slate-200">
             <button className="px-6 py-2 bg-white rounded-[10px] text-[11px] font-black text-slate-900 shadow-sm border border-slate-100 tracking-widest uppercase">
               Gráfico
             </button>
             <button className="px-6 py-2 rounded-[10px] text-[11px] font-black text-slate-400 tracking-widest hover:text-slate-600 uppercase">
               Tabla
             </button>
          </div>
        </div>

        {/* Custom Legend at the Top */}
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 mb-8 px-4">
           <div className="flex items-center gap-3">
             <div className="w-8 h-4 rounded-[4px] bg-[#1FBDF2]"></div>
             <span className="text-[10px] font-black text-slate-400 tracking-widest uppercase">Índice de Rotación de Inventario</span>
           </div>
           <div className="flex items-center gap-3">
             <div className="w-8 h-4 rounded-[4px] bg-[#71D1B7]"></div>
             <span className="text-[10px] font-black text-slate-400 tracking-widest uppercase">Tasa de Ruptura de Stock</span>
           </div>
           <div className="flex items-center gap-3">
             <div className="w-8 h-4 rounded-[4px] bg-[#FFB347]"></div>
             <span className="text-[10px] font-black text-slate-400 tracking-widest uppercase">Tasa de Uso Racional de Medicamentos</span>
           </div>
        </div>
        
        <div className="h-[450px]">
           <ResponsiveContainer width="100%" height="100%">
              <BarChart data={hospitalPerformanceData} margin={{ top: 10, right: 30, left: 10, bottom: 60 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                <XAxis 
                  dataKey="name" 
                  axisLine={{ stroke: '#E2E8F0' }} 
                  tickLine={{ stroke: '#E2E8F0' }} 
                  fontSize={10} 
                  fontWeight={600} 
                  tick={(props) => {
                    const { x, y, payload } = props;
                    const words = payload.value.split(' ');
                    const firstPart = words.slice(0, 2).join(' ');
                    const secondPart = words.slice(2).join(' ');
                    return (
                      <g transform={`translate(${x},${y})`}>
                        <text x={0} y={0} dy={16} textAnchor="middle" fill="#64748B" className="text-[10px] font-bold">
                          <tspan x="0" dy="1.2em">{firstPart}</tspan>
                          {secondPart && <tspan x="0" dy="1.2em">{secondPart}</tspan>}
                        </text>
                      </g>
                    );
                  }}
                  interval={0}
                />
                <YAxis 
                  domain={[0, 100]} 
                  axisLine={false} 
                  tickLine={false} 
                  fontSize={11} 
                  fontWeight={700}
                  tick={{ fill: '#94A3B8' }}
                  tickFormatter={(val) => `${val}`}
                />
                <RechartsTooltip 
                  cursor={{ fill: '#F8FAFC' }}
                  contentStyle={{ borderRadius: '24px', border: 'none', boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)' }} 
                />
                <Bar 
                  dataKey="rotation" 
                  fill="#1FBDF2" 
                  radius={[4, 4, 0, 0]} 
                  barSize={15} 
                  name="Índice de Rotación" 
                />
                <Bar 
                  dataKey="rupture" 
                  fill="#71D1B7" 
                  radius={[4, 4, 0, 0]} 
                  barSize={15} 
                  name="Tasa de Ruptura" 
                />
                <Bar 
                  dataKey="rational" 
                  fill="#FFB347" 
                  radius={[4, 4, 0, 0]} 
                  barSize={15} 
                  name="Tasa de Uso Racional" 
                />
              </BarChart>
           </ResponsiveContainer>
        </div>
        <div className="flex justify-end mt-4">
          <p className="text-[9px] font-bold text-slate-300 italic tracking-widest uppercase">Fuente: Sistema Integral PharmaLink AI</p>
        </div>
      </div>

      {/* AI Vision Section (Mockup 3) */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="">AI Visión Operativa</h3>
          <button className="flex items-center gap-1 text-primary hover:text-[#005a45] transition-colors">
            <span className="text-[11px] font-black tracking-widest">Ver Todo</span>
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


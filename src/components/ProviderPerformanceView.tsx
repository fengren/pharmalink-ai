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
  ArrowUp, 
  ArrowDown, 
  Download, 
  Search,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Clock,
  Package,
  CheckCircle,
  Zap
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { cn } from '../lib/utils';

const ProviderPerformanceView: React.FC = () => {
  const { t } = useLanguage();

  const kpis = [
    { label: t('provider.on_time_delivery'), value: '96.8%', change: '2.1%', trend: 'up', icon: Clock, color: 'text-emerald-500', bg: 'bg-emerald-50' },
    { label: t('provider.order_fulfillment'), value: '94.5%', change: '1.2%', trend: 'down', icon: Package, color: 'text-rose-500', bg: 'bg-blue-50' },
    { label: t('provider.approved_quality'), value: '99.2%', change: '0.5%', trend: 'up', icon: CheckCircle, color: 'text-emerald-500', bg: 'bg-amber-50' },
    { label: t('provider.response_capacity'), value: '4.8', change: '0.2', trend: 'up', icon: Zap, color: 'text-emerald-500', bg: 'bg-purple-50' },
  ];

  const providerRanking = [
    { rank: 1, name: 'Laboratorios PiSA', score: 96.8, onTime: '98.2%', fulfillment: '95.5%', quality: '99.4%' },
    { rank: 2, name: 'Chinoin', score: 95.4, onTime: '96.8%', fulfillment: '94.2%', quality: '99.1%' },
    { rank: 3, name: 'Liomont', score: 94.9, onTime: '95.7%', fulfillment: '93.8%', quality: '98.9%' },
  ];

  const trendData = [
    { name: 'Semana 1 de Junio', rotation: 95, rupture: 93, rational: 98 },
    { name: 'Semana 2 de Junio', rotation: 96, rupture: 94, rational: 98.5 },
    { name: 'Semana 3 de Junio', rotation: 95.5, rupture: 94, rational: 99 },
    { name: 'Semana 4 de Junio', rotation: 97, rupture: 95, rational: 99.2 },
    { name: 'Semana 1 de Julio', rotation: 96.8, rupture: 94.5, rational: 99.2 },
  ];

  const alerts = [
    { status: 'En Proceso', type: 'Retraso en la Entrega', provider: 'Laboratorios PiSA', scope: 'Ceftriaxona Inyectable y 4 más', time: '2025-07-02 14:30', color: 'bg-blue-50 text-blue-600' },
    { status: 'Pendiente', type: 'Problema de Calidad', provider: 'Chinoin', scope: 'Ambroxol (Lote 20250601)', time: '2025-07-01 09:15', color: 'bg-rose-50 text-rose-600' },
    { status: 'Completado', type: 'Escasez de Inventario', provider: 'Liomont', scope: 'Ambroxol (Lote 20250601)', time: '2025-06-30 16:45', color: 'bg-emerald-50 text-emerald-600' },
  ];

  return (
    <div className="space-y-6">
      {/* Filters Header */}
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="relative">
            <button className="flex items-center gap-2 px-4 py-2 bg-white rounded-xl border border-slate-200 text-sm font-bold text-slate-700 hover:bg-slate-50 transition-all">
              <span>Últimos 30 Días</span>
              <ChevronDown className="w-4 h-4 text-slate-400" />
            </button>
          </div>
          <div className="relative min-w-[300px]">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input 
              type="text" 
              placeholder="Buscar Proveedor" 
              className="w-full bg-white border border-slate-200 rounded-xl pl-10 pr-4 py-2 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
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
              <p className="text-xs font-black text-slate-400 tracking-widest leading-relaxed max-w-[150px]">{kpi.label}</p>
              <div className={cn("p-2 rounded-xl", kpi.bg)}>
                <kpi.icon className={cn("w-5 h-5", kpi.color)} />
              </div>
            </div>
            <div className="space-y-1">
              <p className="text-3xl font-black text-slate-800 tracking-tighter">{kpi.value}</p>
              <div className="flex items-center gap-2">
                {kpi.trend === 'up' ? <ArrowUp className="w-3 h-3 text-emerald-500" /> : <ArrowDown className="w-3 h-3 text-rose-500" />}
                <span className={cn("text-xs font-black", kpi.trend === 'up' ? "text-emerald-500" : "text-rose-500")}>{kpi.change}</span>
                <span className="text-[10px] font-bold text-slate-400 tracking-widest">{t('common.previous_period')}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Ranking Table */}
        <div className="lg:col-span-2 bg-white p-6 rounded-[32px] border border-slate-100 shadow-xl shadow-slate-200/50">
          <div className="flex items-center justify-between mb-8">
            <h3 className="">{t('provider.classification')}</h3>
            <div className="relative">
              <button className="flex items-center gap-2 px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs font-bold text-slate-600">
                <span>Por Puntuación General</span>
                <ChevronDown className="w-3 h-3 text-slate-400" />
              </button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="text-[10px] font-black text-slate-400 tracking-widest">
                  <th className="pb-4 px-4">{t('provider.name')}</th>
                  <th className="pb-4 px-4">Puntuación Global</th>
                  <th className="pb-4 px-4">Tasa de Puntualidad</th>
                  <th className="pb-4 px-4">Tasa de Cumplimiento</th>
                  <th className="pb-4 px-4">Tasa de Calidad Aprobada</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {providerRanking.map((prov, i) => (
                  <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-3">
                        <div className={cn(
                          "w-8 h-8 rounded-full flex items-center justify-center font-black text-sm",
                          i === 0 ? "bg-amber-100 text-amber-600" : "bg-slate-100 text-slate-500"
                        )}>
                          {i === 0 ? '🥇' : i === 1 ? '🥈' : '🥉'}
                        </div>
                        <span className="text-sm font-bold text-slate-700">{prov.name}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-sm font-black text-slate-800">{prov.score}</td>
                    <td className="py-4 px-4 text-sm font-medium text-slate-600">{prov.onTime}</td>
                    <td className="py-4 px-4 text-sm font-medium text-slate-600">{prov.fulfillment}</td>
                    <td className="py-4 px-4 text-sm font-medium text-slate-600">{prov.quality}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Trend Area Chart */}
        <div className="bg-white p-6 rounded-[32px] border border-slate-100 shadow-xl shadow-slate-200/50">
          <div className="flex items-center justify-between mb-8">
            <h3 className="">{t('provider.trend')}</h3>
            <div className="flex bg-slate-100 p-1 rounded-xl">
              {['Semana', 'Mes', 'Trimestre'].map((period, i) => (
                <button key={i} className={cn("px-4 py-1.5 text-xs font-bold rounded-lg", i === 1 ? "bg-white shadow-sm" : "text-slate-500")}>
                  {period}
                </button>
              ))}
            </div>
          </div>
          <div className="h-[250px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={trendData}>
                <defs>
                  <linearGradient id="colorRot" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#3B82F6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} fontSize={8} fontStyle="bold" />
                <YAxis domain={[90, 100]} axisLine={false} tickLine={false} fontSize={8} fontStyle="bold" />
                <Tooltip contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 25px -5px rgba(0,0,0,0.1)' }} />
                <Area type="monotone" dataKey="rotation" stroke="#3B82F6" fillOpacity={1} fill="url(#colorRot)" strokeWidth={2} />
                <Line type="monotone" dataKey="rupture" stroke="#10B981" strokeWidth={2} dot={false} />
                <Line type="monotone" dataKey="rational" stroke="#F59E0B" strokeWidth={2} dot={false} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4 flex items-center justify-center gap-4">
             <div className="flex items-center gap-1.5">
               <div className="w-2 h-2 rounded-full bg-blue-500"></div>
               <span className="text-[10px] font-bold text-slate-400">Rotación</span>
             </div>
             <div className="flex items-center gap-1.5">
               <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
               <span className="text-[10px] font-bold text-slate-400">Cumplimiento</span>
             </div>
             <div className="flex items-center gap-1.5">
               <div className="w-2 h-2 rounded-full bg-amber-500"></div>
               <span className="text-[10px] font-bold text-slate-400">Calidad</span>
             </div>
          </div>
        </div>
      </div>

      {/* Alerts Table */}
      <div className="bg-white rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50 overflow-hidden">
        <div className="p-6 border-b border-slate-100 flex items-center justify-between">
          <h3 className="">{t('provider.anomaly_alerts')}</h3>
          <div className="flex gap-4">
            <div className="relative">
              <button className="flex items-center gap-2 px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs font-bold text-slate-600">
                <span>Todos los Tipos</span>
                <ChevronDown className="w-3 h-3 text-slate-400" />
              </button>
            </div>
            <div className="relative">
              <button className="flex items-center gap-2 px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs font-bold text-slate-600">
                <span>Todos los Estados</span>
                <ChevronDown className="w-3 h-3 text-slate-400" />
              </button>
            </div>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50/50">
                <th className="px-6 py-4 w-12"><input type="checkbox" className="rounded" /></th>
                <th className="px-4 py-4 text-[11px] font-black text-slate-500 tracking-widest">{t('common.status')}</th>
                <th className="px-4 py-4 text-[11px] font-black text-slate-500 tracking-widest">{t('common.alert_type')}</th>
                <th className="px-4 py-4 text-[11px] font-black text-slate-500 tracking-widest">{t('provider.name')}</th>
                <th className="px-4 py-4 text-[11px] font-black text-slate-500 tracking-widest">Ámbito Afectado</th>
                <th className="px-4 py-4 text-[11px] font-black text-slate-500 tracking-widest">Fecha de Ocurrencia</th>
                <th className="px-6 py-4 text-[11px] font-black text-slate-500 tracking-widest text-center">{t('common.actions')}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {alerts.map((alert, idx) => (
                <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-6 py-4"><input type="checkbox" className="rounded" /></td>
                  <td className="px-4 py-4">
                    <span className={cn("px-4 py-1.5 rounded-full text-[10px] font-black tracking-tight", alert.color)}>
                      {alert.status}
                    </span>
                  </td>
                  <td className="px-4 py-4 text-sm font-bold text-rose-500">{alert.type}</td>
                  <td className="px-4 py-4 text-sm font-bold text-slate-700">{alert.provider}</td>
                  <td className="px-4 py-4 text-sm font-medium text-slate-600">{alert.scope}</td>
                  <td className="px-4 py-4 text-sm font-bold text-slate-800">{alert.time}</td>
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

export default ProviderPerformanceView;

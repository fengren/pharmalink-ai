import React from 'react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Legend,
  Cell
} from 'recharts';
import { 
  Sparkles, 
  Filter, 
  Download, 
  ArrowUpRight, 
  ArrowDownRight,
  TrendingUp,
  Target,
  Box,
  AlertCircle,
  History,
  FileText,
  ChevronDown
} from 'lucide-react';
import { cn } from '../lib/utils';
import { useLanguage } from '../contexts/LanguageContext';

const inventoryStateData = [
  { name: 'Cefaclor', current: 520, min: 100, optimal: 150, max: 200 },
  { name: 'Metronidazol', current: 650, min: 20, optimal: 30, max: 50 },
  { name: 'Aspirina', current: 720, min: 40, optimal: 100, max: 150 },
  { name: 'Ibuprofeno', current: 600, min: 120, optimal: 200, max: 300 },
];

export default function PredictionView() {
  const { t, language } = useLanguage();

  return (
    <div className="space-y-8 max-w-[1600px] mx-auto">
      {/* Forecasting Status Bar */}
      <div className="bg-white rounded-xl border border-border-subtle p-4 shadow-sm flex items-center justify-between">
        <div className="flex items-center gap-6">
          <button className="bg-primary text-white px-6 py-2.5 rounded-lg flex items-center gap-2 font-bold text-sm shadow-lg shadow-primary/20 hover:translate-y-[-1px] transition-all">
            <Sparkles className="w-4 h-4" />
            {t('prediction.reforecast')}
          </button>
          <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            {t('prediction.last_result')}: <span className="text-slate-800 ml-1">2025-07-04</span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 border border-border-subtle rounded-lg text-xs font-bold uppercase tracking-wider text-slate-500 hover:bg-slate-50 transition-colors">
            <Filter className="w-3.5 h-3.5" /> {language === 'es' ? 'Filtrar' : 'Filter'}
          </button>
          <button className="flex items-center gap-2 px-4 py-2 border border-border-subtle rounded-lg text-xs font-bold uppercase tracking-wider text-slate-500 hover:bg-slate-50 transition-colors">
            <Download className="w-3.5 h-3.5" /> {language === 'es' ? 'Exportar' : 'Export'}
          </button>
        </div>
      </div>

      {/* Prediction KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <KPIItem 
          label={t('prediction.total_meds')} 
          value="2,358" 
          trend="+4.6%" 
          trendUp={true} 
          icon={Box} 
          iconBg="bg-primary/10 text-primary border-primary/20"
        />
        <KPIItem 
          label={t('prediction.accuracy')} 
          value="92.7%" 
          trend="+2.3%" 
          trendUp={true} 
          icon={Target} 
          iconBg="bg-slate-50 text-slate-700 border-slate-200"
        />
        <KPIItem 
          label={t('prediction.optimization')} 
          value="85.3%" 
          trend="+6.2%" 
          trendUp={true} 
          icon={TrendingUp} 
          iconBg="bg-purple-50/50 text-purple-600 border-purple-100"
        />
        <KPIItem 
          label={t('prediction.alerts')} 
          value="18" 
          trend="3" 
          trendUp={false} 
          icon={AlertCircle} 
          iconBg="bg-rose-50/50 text-rose-600 border-rose-100"
        />
      </div>

      {/* Inventory State Bar Chart */}
      <div className="bg-white rounded-xl border border-border-subtle p-8 shadow-sm">
        <div className="flex items-center justify-between mb-10">
          <h3 className="text-lg font-black text-slate-900 tracking-tight">{t('dashboard.hospital_state')}</h3>
          <div className="flex gap-3">
            <select className="bg-slate-50/50 border border-border-subtle rounded-lg px-2 py-1 text-[10px] font-bold text-slate-500 uppercase tracking-wider focus:outline-none">
              <option>{language === 'es' ? 'Categoría' : 'Category'}</option>
            </select>
          </div>
        </div>

        <div className="h-[350px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart 
              layout="vertical" 
              data={inventoryStateData}
              margin={{ top: 5, right: 30, left: 100, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke="#F1F5F9" />
              <XAxis type="number" axisLine={false} tickLine={false} tick={{fill: '#94A3B8', fontSize: 11, fontWeight: 600}} />
              <YAxis 
                dataKey="name" 
                type="category" 
                axisLine={false} 
                tickLine={false} 
                width={100}
                tick={{fill: '#475569', fontSize: 11, fontWeight: 700}} 
              />
              <Tooltip 
                cursor={{fill: '#F8FAFC'}}
                contentStyle={{borderRadius: '12px', border: 'none', shadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)'}}
              />
              <Legend verticalAlign="bottom" align="center" wrapperStyle={{paddingTop: '30px', fontSize: '11px', fontWeight: '700', textTransform: 'uppercase'}} />
              <Bar dataKey="current" name={language === 'es' ? 'Actual' : 'Current'} stackId="a" fill="#006B52" barSize={24} radius={[0, 4, 4, 0]} />
              <Bar dataKey="min" name={language === 'es' ? 'Mínimo' : 'Min'} stackId="a" fill="#FFB86C" barSize={24} />
              <Bar dataKey="optimal" name={language === 'es' ? 'Óptimo' : 'Optimal'} stackId="a" fill="#88D4CC" barSize={24} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="space-y-6">
        <h3 className="text-lg font-black text-slate-900 tracking-tight px-2">{t('prediction.detail_subtitle')}</h3>
        <PredictionDetailCard 
          name={language === 'es' ? 'Cápsulas de Amoxicilina' : 'Amoxicillin Capsules'}
          provider="GSK"
          leadTime="3—5 Días"
          prediction="350 Unidades"
          precision="94.8%"
          available="1,250"
          avgCons="320"
          forecastCons="45 Unidades/Day"
          minStock="640"
          maxStock="960"
          optimalStock="1,280"
          lastEntry="2025-07-20"
          status="Low Stock"
          analysis={language === 'es' ? 'Según el método CPM y el consumo de los últimos 12 meses, se estima que se necesitarán 400 unidades en los próximos 30 días. Además, considerando la próxima temporada de gripe, el método PharmaLink recomienda 960 unidades para hacer frente a una posible demanda repentina.' : 'According to the CPM method and consumption over the last 12 months, it is estimated that 400 units will be needed in the next 30 days. Additionally, considering the upcoming flu season, the PharmaLink method recommends 960 units to meet possible sudden demand.'}
        />
        <PredictionDetailCard 
          name={language === 'es' ? 'Gránulos de Ganmaoling' : 'Ganmaoling Granules'}
          provider="GSK"
          leadTime="3—5 Días"
          prediction="350 Unidades"
          precision="94.8%"
          available="1,250"
          avgCons="320"
          forecastCons="45 Unidades/Day"
          minStock="640"
          maxStock="960"
          optimalStock="1,280"
          lastEntry="2025-07-20"
          status="Low Stock"
          analysis={language === 'es' ? 'Según el método CPM y el consumo de los últimos 12 meses, se estima que se necesitarán 400 unidades en los próximos 30 días.' : 'According to the CPM method and consumption over the last 12 months, it is estimated that 400 units will be needed in the next 30 days.'}
        />
      </div>
    </div>
  );
}

function KPIItem({ label, value, trend, trendUp, icon: Icon, iconBg }: any) {
  const { language } = useLanguage();
  return (
    <div className="bg-white rounded-[24px] border border-slate-100 p-5 shadow-sm flex items-center justify-between group transition-all hover:shadow-md h-[140px]">
      <div className="flex flex-col h-full justify-between py-1">
        <p className="text-xs font-medium text-slate-500">{label}</p>
        <h4 className="text-2xl font-black text-slate-900 tracking-tight my-1">{value}</h4>
        <div className={cn(
          "flex items-center gap-1 text-[11px] font-bold",
          trendUp ? "text-emerald-500" : "text-rose-500"
        )}>
          {trendUp ? <TrendingUp className="w-3.5 h-3.5" /> : <ArrowDownRight className="w-3.5 h-3.5" />}
          {trend} <span className="text-slate-400 font-medium ml-0.5 whitespace-nowrap">vs. {language === 'es' ? 'Mes Anterior' : 'Last Month'}</span>
        </div>
      </div>
      <div className={cn("w-12 h-12 rounded-[16px] flex items-center justify-center shrink-0 transition-transform group-hover:scale-110", iconBg)}>
        <Icon className="w-6 h-6" />
      </div>
    </div>
  );
}

function PredictionDetailCard({ 
  name, 
  provider, 
  leadTime, 
  prediction, 
  precision, 
  available, 
  avgCons,
  forecastCons,
  minStock,
  maxStock,
  optimalStock,
  lastEntry, 
  status,
  analysis 
}: any) {
  const { t, language } = useLanguage();
  return (
    <div className="bg-rose-50/50 rounded-[32px] border border-rose-100/50 p-6 relative overflow-hidden transition-all hover:shadow-lg hover:shadow-rose-500/5 group border-b-4 border-b-rose-200/30">
      {/* Card Header-like Info */}
      <div className="flex items-start justify-between mb-6">
        <div className="space-y-1">
          <h4 className="text-lg font-black text-slate-900 tracking-tight">{name}</h4>
          <div className="flex items-center gap-6 text-[12px] font-medium text-slate-500">
            <span>{t('prediction.provider')}: <span className="text-slate-700 font-bold ml-1">{provider}</span></span>
            <span>{t('prediction.lead_time')}: <span className="text-slate-700 font-bold ml-1">{leadTime}</span></span>
          </div>
        </div>
        <div className="bg-rose-500 text-white px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg shadow-rose-500/20">
          {language === 'es' ? 'Stock Bajo' : 'Low Stock'}
        </div>
      </div>

      {/* Main Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
        <div className="col-span-1 bg-gradient-to-r from-blue-600 to-purple-600 p-4 rounded-2xl text-white shadow-xl shadow-blue-500/20 flex flex-col justify-center gap-1">
          <p className="text-[10px] font-bold uppercase tracking-wider flex items-center gap-1.5 opacity-90">
            <Sparkles className="w-3 h-3" />
            {t('prediction.replenishment_planned')}
          </p>
          <p className="text-xl font-black tracking-tight">{prediction}</p>
        </div>

        <MetricItem label={t('prediction.forecast_accuracy')} value={precision} />
        <MetricItem label={t('prediction.expected_consumption')} value={forecastCons} />
        <MetricItem label={t('prediction.available_stock')} value={available} />
        <MetricItem label={t('prediction.monthly_avg_consumption')} value={avgCons} />
      </div>

      {/* Secondary Stats Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 px-1">
        <MetricItem label={t('prediction.min_stock')} value={minStock} />
        <MetricItem label={t('prediction.max_stock')} value={maxStock} />
        <MetricItem label={t('prediction.optimal_stock')} value={optimalStock} />
        <MetricItem label={t('prediction.last_entry')} value={lastEntry} />
      </div>

      {/* Analysis Box */}
      <div className="bg-white rounded-2xl p-5 border border-white shadow-sm mb-8">
        <h5 className="text-[12px] font-bold text-slate-800 mb-2 flex items-center gap-2">
          {t('prediction.analysis_title')}
        </h5>
        <p className="text-[11px] text-slate-500 leading-relaxed font-medium">
          {analysis}
        </p>
      </div>

      {/* Actions */}
      <div className="flex flex-wrap gap-3">
        <button className="bg-[#004D40] text-white px-6 py-3 rounded-xl font-bold text-xs transition-all hover:bg-[#00382E] shadow-lg shadow-teal-900/10 active:scale-95">
          {t('prediction.confirm_replenishment')}
        </button>
        <button className="bg-white text-slate-700 border border-slate-200 px-6 py-3 rounded-xl font-bold text-xs transition-all hover:bg-slate-50 active:scale-95">
          {t('prediction.modify_quantity')}
        </button>
        <button className="bg-white text-slate-700 border border-slate-200 px-6 py-3 rounded-xl font-bold text-xs transition-all hover:bg-slate-50 active:scale-95">
          {t('prediction.change_provider')}
        </button>
        <button className="bg-white text-slate-700 border border-slate-200 px-6 py-3 rounded-xl font-bold text-xs transition-all hover:bg-slate-50 active:scale-95">
          {t('prediction.view_details')}
        </button>
      </div>
    </div>
  );
}

function MetricItem({ label, value }: any) {
  return (
    <div className="px-1">
      <p className="text-xs font-medium text-slate-500 mb-2 truncate">{label}</p>
      <p className="text-2xl font-black text-slate-900 tracking-tight">{value}</p>
    </div>
  );
}

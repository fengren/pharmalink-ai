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
  { name: 'Cápsulas de Cefaclor', actual: 350, min: 0, optimal: 130, max: 120 },
  { name: 'Comprimidos de Metronidazol', actual: 530, min: 0, optimal: 0, max: 50 },
  { name: 'Aspirina con Recubrimiento Entérico', actual: 640, min: 0, optimal: 0, max: 15 },
  { name: 'Cápsulas de Liberación Prolongada de Ibuprofeno', actual: 450, min: 0, optimal: 150, max: 200 },
  { name: 'Comprimidos de Amlodipino y Benazepril', actual: 820, min: 0, optimal: 0, max: 0 },
  { name: 'Comprimidos de Liberación Controlada de Nifedipino', actual: 100, min: 350, optimal: 0, max: 150 },
  { name: 'Comprimidos de Clorhidrato de Metformina', actual: 580, min: 0, optimal: 40, max: 230 },
  { name: 'Cápsulas de Amoxicilina', actual: 1250, min: 0, optimal: 0, max: 30 },
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
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 border border-border-subtle rounded-lg text-xs font-bold tracking-wider text-slate-500 hover:bg-slate-50 transition-colors">
            <Filter className="w-3.5 h-3.5" /> {language === 'es' ? 'Filtrar' : 'Filter'}
          </button>
          <button className="flex items-center gap-2 px-4 py-3 border border-border-subtle rounded-lg text-xs font-bold tracking-wider text-slate-500 hover:bg-slate-50 transition-colors">
            <Download className="w-3.5 h-3.5 text-slate-400" /> {language === 'es' ? 'Exportar' : 'Export'}
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
          <h3 className="text-xl font-black text-slate-800">{language === 'es' ? 'Estado de Inventario' : 'Inventory Status'}</h3>
          <div className="flex gap-3">
            <div className="relative">
              <select className="appearance-none bg-slate-50/50 border border-border-subtle rounded-lg pl-3 pr-8 py-1.5 text-[10px] font-bold text-slate-500 tracking-wider focus:outline-none cursor-pointer">
                <option>{language === 'es' ? 'Categoría de Medicamento' : 'Medication Category'}</option>
              </select>
              <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-3 h-3 text-slate-400 pointer-events-none" />
            </div>
            <div className="relative">
              <select className="appearance-none bg-slate-50/50 border border-border-subtle rounded-lg pl-3 pr-8 py-1.5 text-[10px] font-bold text-slate-500 tracking-wider focus:outline-none cursor-pointer">
                <option>{language === 'es' ? 'Farmacia' : 'Pharmacy'}</option>
              </select>
              <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-3 h-3 text-slate-400 pointer-events-none" />
            </div>
          </div>
        </div>

        <div className="h-[450px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart 
              layout="vertical" 
              data={inventoryStateData}
              margin={{ top: 5, right: 30, left: 180, bottom: 5 }}
              barGap={0}
            >
              <CartesianGrid strokeDasharray="3 3" horizontal={false} vertical={true} stroke="#E2E8F0" />
              <XAxis 
                type="number" 
                axisLine={false} 
                tickLine={false} 
                tick={{fill: '#94A3B8', fontSize: 11, fontWeight: 600}}
                domain={[0, 1300]}
                ticks={[0, 300, 600, 900, 1200]}
              />
              <YAxis 
                dataKey="name" 
                type="category" 
                axisLine={false} 
                tickLine={false} 
                width={180}
                tick={{fill: '#64748B', fontSize: 10, fontWeight: 700}} 
              />
              <Tooltip 
                cursor={{fill: '#F8FAFC', opacity: 0.5}}
                contentStyle={{borderRadius: '12px', border: 'none', shadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)'}}
              />
              <Legend 
                verticalAlign="bottom" 
                align="center" 
                wrapperStyle={{paddingTop: '40px', fontSize: '11px', fontWeight: '700', color: '#64748B'}} 
                iconType="rect"
              />
              <Bar dataKey="actual" name={language === 'es' ? 'Stock Actual' : 'Current Stock'} stackId="a" fill="#1FBDF2" barSize={22} radius={[0, 2, 2, 0]} />
              <Bar dataKey="min" name={language === 'es' ? 'Stock Mínimo' : 'Minimum Stock'} stackId="a" fill="#FFB347" barSize={22} radius={[0, 2, 2, 0]} />
              <Bar dataKey="optimal" name={language === 'es' ? 'Stock Óptimo' : 'Optimal Stock'} stackId="a" fill="#72D2B5" barSize={22} radius={[0, 2, 2, 0]} />
              <Bar dataKey="max" name={language === 'es' ? 'Stock Máximo' : 'Maximum Stock'} stackId="a" fill="#FFDFD0" barSize={22} radius={[0, 4, 4, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
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

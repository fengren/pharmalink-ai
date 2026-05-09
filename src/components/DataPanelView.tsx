import React, { useState, useEffect } from 'react';
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend
} from 'recharts';
import {
  Hospital,
  AlertCircle,
  CheckCircle2,
  Truck,
  Users,
  ChevronDown,
  ArrowUp,
  ArrowDown,
  LogOut,
  Sparkles,
  MapPin,
  ShoppingCart,
  ArrowLeft
} from 'lucide-react';
import { cn } from '../lib/utils';
import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';
import MexicoMap from './MexicoMap';

interface DataPanelViewProps {
  onClose?: () => void;
}

export default function DataPanelView({ onClose }: DataPanelViewProps) {
  const { t, language } = useLanguage();

  const [activeTab1, setActiveTab1] = useState(0);
  const [activeTab2, setActiveTab2] = useState(0);
  const [activeTab3, setActiveTab3] = useState(0);
  const [activeTab4, setActiveTab4] = useState(0);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatDateTime = (date: Date) => {
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, '0');
    const d = String(date.getDate()).padStart(2, '0');
    const hh = String(date.getHours()).padStart(2, '0');
    const mm = String(date.getMinutes()).padStart(2, '0');
    const ss = String(date.getSeconds()).padStart(2, '0');
    return `${y}-${m}-${d} | ${hh}:${mm}:${ss}`;
  };


  const consumoData = [
    { value: '28,764', comparison: '3.22', comparisonType: 'up', label: t('dashboard.comparison_annual') },
    { value: '2,347', comparison: '24.68', comparisonType: 'down', label: t('dashboard.comparison_monthly') },
    { value: '28,764', comparison: '12.5', comparisonType: 'up', label: t('dashboard.comparison_annual') },
  ];

  const inventarioData = [
    { ratio: '4562.12/5000', percent: 75, annual: 3.22, monthly: 24.68, rotation: '4.2%' },
    { ratio: '3200/5000', percent: 64, annual: 2.8, monthly: 18.5, rotation: '3.8%' },
  ];

  const proporcionData = [
    [
      { name: t('dashboard.med_emergency'), value: 25, color: '#3B82F6' },
      { name: t('dashboard.med_antiinfective'), value: 25, color: '#10B981' },
      { name: t('dashboard.med_chronic'), value: 25, color: '#0EA5E9' },
      { name: t('dashboard.med_other'), value: 25, color: '#8B5CF6' },
    ],
    [
      { name: t('nav.med_info'), value: 30, color: '#EF4444' },
      { name: t('dashboard.med_antiinfective'), value: 20, color: '#10B981' },
      { name: t('dashboard.performance'), value: 25, color: '#F59E0B' },
      { name: t('dashboard.med_other'), value: 25, color: '#8B5CF6' },
    ],
  ];

  const proveedorData = [
    [
      { name: 'Laboratorios PISA', score: '96.8', rank: 1, color: 'bg-amber-100 text-amber-600' },
      { name: 'Chinoin', score: '95.4', rank: 2, color: 'bg-slate-100 text-slate-500' },
      { name: 'Liomont', score: '94.9', rank: 3, color: 'bg-orange-100 text-orange-600' },
      { name: 'Genomma Lab Internacional', score: '93.0', rank: 4, color: 'bg-blue-100 text-blue-600' },
    ],
    [
      { name: 'Pisa Pharma', score: '98.2', rank: 1, color: 'bg-amber-100 text-amber-600' },
      { name: 'Chinoin', score: '96.1', rank: 2, color: 'bg-slate-100 text-slate-500' },
      { name: 'Liomont', score: '95.5', rank: 3, color: 'bg-orange-100 text-orange-600' },
      { name: 'Sanofi', score: '94.2', rank: 4, color: 'bg-blue-100 text-blue-600' },
    ],
    [
      { name: 'PiSA', score: '97.5', rank: 1, color: 'bg-amber-100 text-amber-600' },
      { name: 'Bayer', score: '96.8', rank: 2, color: 'bg-slate-100 text-slate-500' },
      { name: 'Liomont', score: '95.1', rank: 3, color: 'bg-orange-100 text-orange-600' },
      { name: 'Genomma', score: '94.7', rank: 4, color: 'bg-blue-100 text-blue-600' },
    ],
  ];

  const summaryStats = [
    { label: t('dashboard.hospitals_count'), value: '176', icon: Hospital, color: 'text-rose-500', bg: 'bg-white' },
    { label: t('dashboard.stock_insufficient'), value: '55', icon: AlertCircle, color: 'text-amber-500', bg: 'bg-white' },
    { label: t('dashboard.replenish_rec'), value: '34', icon: ShoppingCart, color: 'text-blue-500', bg: 'bg-white' },
    { label: t('dashboard.stock_sufficient'), value: '105', icon: CheckCircle2, color: 'text-emerald-500', bg: 'bg-white' },
    { label: t('dashboard.providers_count'), value: '266', icon: Users, color: 'text-cyan-500', bg: 'bg-white' },
  ];

  const medicationProportionData = [
    { name: t('dashboard.med_emergency'), value: 25, color: '#3B82F6' },
    { name: t('dashboard.med_antiinfective'), value: 25, color: '#10B981' },
    { name: t('dashboard.med_chronic'), value: 25, color: '#0EA5E9' },
    { name: t('dashboard.med_other'), value: 25, color: '#8B5CF6' },
  ];

  const providerRankings = [
    { name: 'Laboratorios PiSA', score: '96.8', rank: 1, color: 'bg-amber-100 text-amber-600' },
    { name: 'Chinoin', score: '95.4', rank: 2, color: 'bg-slate-100 text-slate-500' },
    { name: 'Liomont', score: '94.9', rank: 3, color: 'bg-orange-100 text-orange-600' },
    { name: 'Genomma Lab Internacional', score: '93.0', rank: 4, color: 'bg-blue-100 text-blue-600' },
  ];

  const inventoryItems = [
    { 
      status: t('dashboard.status.low_stock'), 
      statusColor: 'text-rose-600 bg-rose-50',
      name: t('dashboard.med.amoxicillin'), 
      date: '2024-07-25', 
      daysLeft: 6, 
      currentInv: '1,250', 
      avgMonth: '320', 
      min: '640', 
      opt: '950', 
      max: '1,280' 
    },
    { 
      status: t('dashboard.status.low_stock'), 
      statusColor: 'text-rose-600 bg-rose-50',
      name: t('dashboard.med.metformin'), 
      date: '2024-08-03', 
      daysLeft: 12, 
      currentInv: '1,250', 
      avgMonth: '320', 
      min: '640', 
      opt: '950', 
      max: '1,280' 
    },
    { 
      status: t('dashboard.status.replenish'), 
      statusColor: 'text-orange-600 bg-orange-50',
      name: t('dashboard.med.nifedipine'), 
      date: '2024-07-28', 
      daysLeft: 3, 
      currentInv: '1,250', 
      avgMonth: '320', 
      min: '640', 
      opt: '950', 
      max: '1,280' 
    },
    { 
      status: t('dashboard.status.replenish'), 
      statusColor: 'text-orange-600 bg-orange-50',
      name: t('dashboard.med.amlodipine'), 
      date: '2024-08-10', 
      daysLeft: 18, 
      currentInv: '1,250', 
      avgMonth: '320', 
      min: '640', 
      opt: '950', 
      max: '1,280' 
    },
  ];

  return (
    <div className="min-h-screen bg-[#E0F2F1] -m-8 p-8 font-sans overflow-x-hidden selection:bg-teal-500 selection:text-white">
      {/* Integrated Command Center Header */}
      <div className="bg-[#004D40] text-white -mt-8 -mx-8 px-8 py-4 flex items-center justify-between mb-8 shadow-2xl relative border-b-4 border-cyan-400">
        <div className="flex items-center gap-4">
          <button 
            onClick={onClose}
            className="bg-white/10 hover:bg-white/20 p-2.5 rounded-xl transition-all border border-white/20 group"
          >
            <ArrowLeft className="w-5 h-5 text-cyan-100 group-hover:scale-110 transition-transform" />
          </button>
          <div className="h-8 w-px bg-white/20 mx-2"></div>
          <h1 className="opacity-80 text-white">{t('dashboard.header.admin_console')}</h1>
        </div>

        <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-3">
          <div className="w-10 h-10 bg-cyan-400 rounded-xl flex items-center justify-center shadow-[0_0_15px_rgba(34,211,238,0.5)]">
            <Truck className="w-6 h-6 text-[#004D40]" />
          </div>
          <div className="flex flex-col">
            <span className="font-black text-2xl tracking-tighter leading-none">PharmaLink</span>
            <span className="text-[10px] font-bold tracking-[0.3em] text-cyan-300/80">{t('dashboard.title')}</span>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className="flex flex-col items-end">
            <p className="text-xs font-black">{formatDateTime(currentTime)}</p>
          </div>
          <button className="flex items-center gap-2 bg-rose-500/10 hover:bg-rose-500/20 px-5 py-2.5 rounded-xl transition-all border border-rose-500/20 group text-rose-300">
            <LogOut className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="text-xs font-black tracking-widest">{t('dashboard.header.logout')}</span>
          </button>
        </div>
      </div>

      <div className="max-w-[1750px] mx-auto space-y-6 relative">
        {/* Main Dashboard Body */}
        <div className="flex flex-col lg:flex-row gap-6 items-start">
          
          {/* Left Column: Metrics */}
          <div className="w-full lg:w-[340px] shrink-0 flex flex-col gap-3">
            <div className="flex items-center justify-center gap-3">
              <Dropdown label={t('dashboard.hospitals')} className="w-[340px]" />
              <Dropdown label={t('dashboard.medicines')} className="w-[340px]" />
            </div>

            <Card
              tabs={[t('dashboard.total_consumption'), t('dashboard.avg_monthly_consumption'), t('dashboard.annual_consumption')]}
              activeTab={activeTab1}
              onTabChange={setActiveTab1}
              bodyClassName="w-[340px]"
              className="border-b-0 shadow-none relative z-10 h-[250px]"
              customTitle={(
                <div className="flex flex-row items-center justify-between mb-6 pt-4">
                  <div className="text-left">
                    <p className="text-[9.5px] font-black text-slate-400 tracking-widest mb-1">{t('dashboard.total_consumption')}</p>
                    <p className="text-xl font-black text-slate-800 tracking-tighter leading-none">{consumoData[activeTab1].value}</p>
                  </div>

                  <div className="flex gap-3 pr-1">
                    <div className="flex flex-col items-center">
                      <div className="flex items-end gap-1.5 mb-2 h-8 justify-center">
                        <div className="flex flex-col items-end whitespace-nowrap">
                          <span className="text-[9px] font-black text-slate-800 leading-tight">{t('common.comparison')}</span>
                          <span className="text-[8px] font-bold text-slate-400 leading-tight">{t('dashboard.comparison_annual')}</span>
                        </div>
                        <div className="bg-emerald-500 p-0.5 rounded-sm mb-0.5">
                          <ArrowUp className="w-2.5 h-2.5 text-white stroke-[3]" />
                        </div>
                      </div>
                      <div className="relative w-20 h-20 flex items-center justify-center">
                        <svg className="w-20 h-20 transform -rotate-90">
                          <circle cx="40" cy="40" r="34" stroke="#F1F5F9" strokeWidth="4" fill="#F0FDF4" />
                          <circle cx="40" cy="40" r="34" stroke="#F1F5F9" strokeWidth="4" fill="none" strokeDasharray="1 4" />
                          <circle cx="40" cy="40" r="34" stroke="#06B6D4" strokeWidth="6" fill="none" strokeDasharray="213.6" strokeDashoffset="200" strokeLinecap="round" />
                        </svg>
                        <div className="absolute flex items-center">
                          <span className="text-lg font-black text-slate-800 tracking-tighter">{consumoData[activeTab1].comparison}</span>
                          <span className="text-[9px] font-bold text-slate-400 mt-1 ml-0.5">%</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col items-center">
                      <div className="flex items-end gap-1.5 mb-2 h-8 justify-center">
                        <div className="flex flex-col items-end whitespace-nowrap">
                          <span className="text-[9px] font-black text-slate-800 leading-tight">{t('common.comparison')}</span>
                          <span className="text-[8px] font-bold text-slate-400 leading-tight">{t('dashboard.comparison_monthly')}</span>
                        </div>
                        <div className="bg-rose-500 p-0.5 rounded-sm mb-0.5">
                          <ArrowDown className="w-2.5 h-2.5 text-white stroke-[3]" />
                        </div>
                      </div>
                      <div className="relative w-20 h-20 flex items-center justify-center">
                        <svg className="w-20 h-20 transform -rotate-90">
                          <circle cx="40" cy="40" r="34" stroke="#F1F5F9" strokeWidth="4" fill="#F0FDF4" />
                          <circle cx="40" cy="40" r="34" stroke="#F1F5F9" strokeWidth="4" fill="none" strokeDasharray="1 4" />
                          <circle cx="40" cy="40" r="34" stroke="#F97316" strokeWidth="6" fill="none" strokeDasharray="213.6" strokeDashoffset="160" strokeLinecap="round" />
                        </svg>
                        <div className="absolute flex items-center">
                          <span className="text-lg font-black text-slate-800 tracking-tighter">24.68</span>
                          <span className="text-[9px] font-bold text-slate-400 mt-1 ml-0.5">%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            >
              <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-[#06B6D4] to-[#10B981] rounded-full" style={{ width: activeTab1 === 0 ? '75%' : '65%' }}></div>
              </div>
            </Card>

            <Card
              tabs={[t('dashboard.inventory_rotation'), t('common.status')]}
              activeTab={activeTab2}
              onTabChange={setActiveTab2}
              className="border-b-0 shadow-none relative z-10 h-[250px]"
              customTitle={(
                <div className="space-y-2 mb-2">
                  <div className="flex justify-between items-end">
                    <div className="text-left">
                       <p className="text-[10px] font-black text-teal-600 tracking-widest mb-1">{t('dashboard.stock_turnover_rate')}</p>
                       <p className="text-xs font-bold text-slate-500 leading-tight">
                         {t('dashboard.inventory_turnover')}
                       </p>
                    </div>
                    <p className="text-xl font-black text-slate-800 tracking-tight">
                      {inventarioData[activeTab2].ratio}
                    </p>
                  </div>
                  <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden p-0.5 shadow-inner">
                    <div className="h-full bg-gradient-to-r from-[#00D2FF] to-[#00E676] rounded-full" style={{ width: `${inventarioData[activeTab2].percent}%` }}></div>
                  </div>
                </div>
              )}
            >
              <div className="flex items-center gap-2">
                {/* Comparison Section */}
                <div className="flex-1 flex gap-4">
                  {/* Annual */}
                  <div className="flex flex-col items-center">
                    <div className="flex items-end gap-1 mb-1 h-8 justify-center">
                      <div className="flex flex-col items-end whitespace-nowrap">
                        <span className="text-[9px] font-black text-slate-800 leading-tight">{t('common.comparison')}</span>
                        <span className="text-[8px] font-bold text-slate-400 leading-tight">{t('day.sat')}</span>
                      </div>
                      <div className="w-3.5 h-3.5 bg-emerald-500 rounded flex items-center justify-center mb-0.5">
                        <ArrowUp className="w-2.5 h-2.5 text-white" />
                      </div>
                    </div>
                    <div className="relative w-16 h-16 flex items-center justify-center">
                      <svg className="w-full h-full transform -rotate-90">
                        <circle cx="32" cy="32" r="30" stroke="#E2E8F0" strokeWidth="1" fill="#F0FDF4" strokeDasharray="2 2" />
                        <circle cx="32" cy="32" r="28" stroke="#F1F5F9" strokeWidth="0.5" fill="none" />
                        <circle cx="32" cy="32" r="28" stroke="#00D2FF" strokeWidth="3" fill="none" strokeDasharray="175.9" strokeDashoffset="170" strokeLinecap="round" />
                      </svg>
                      <div className="absolute flex items-baseline">
                        <span className="text-[11px] font-black text-slate-800">{inventarioData[activeTab2].annual}</span>
                        <span className="text-[8px] font-bold text-slate-400 ml-0.5">%</span>
                      </div>
                    </div>
                  </div>

                  {/* Monthly */}
                  <div className="flex flex-col items-center">
                    <div className="flex items-end gap-1 mb-1 h-8 justify-center">
                      <div className="flex flex-col items-end whitespace-nowrap">
                        <span className="text-[9px] font-black text-slate-800 leading-tight">{t('common.comparison')}</span>
                        <span className="text-[8px] font-bold text-slate-400 leading-tight">{t('common.month')}</span>
                      </div>
                      <div className="w-3.5 h-3.5 bg-rose-500 rounded flex items-center justify-center mb-0.5">
                        <ArrowDown className="w-2.5 h-2.5 text-white" />
                      </div>
                    </div>
                    <div className="relative w-16 h-16 flex items-center justify-center">
                      <svg className="w-full h-full transform -rotate-90">
                        <circle cx="32" cy="32" r="30" stroke="#E2E8F0" strokeWidth="1" fill="#F0FDF4" strokeDasharray="2 2" />
                        <circle cx="32" cy="32" r="28" stroke="#F1F5F9" strokeWidth="0.5" fill="none" />
                        <circle cx="32" cy="32" r="28" stroke="#F4511E" strokeWidth="3" fill="none" strokeDasharray="175.9" strokeDashoffset="140" strokeLinecap="round" />
                      </svg>
                      <div className="absolute flex items-baseline">
                        <span className="text-[11px] font-black text-slate-800">{inventarioData[activeTab2].monthly}</span>
                        <span className="text-[8px] font-bold text-slate-400 ml-0.5">%</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Stat */}
                <div className="min-w-[70px] flex flex-col items-start justify-center border-l border-slate-100 pl-4 h-full">
                  <p className="text-[9.5px] font-black text-slate-400 leading-tight mb-1">Rotación</p>
                  <p className="text-xl font-black text-slate-800 tracking-tighter leading-none">{inventarioData[activeTab2].rotation}</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Center Column: KPI & Map */}
          <div className="flex-1 min-w-0 space-y-6">
            <div className="backdrop-blur-md rounded-[12px] bg-[#e4f8f0] border-2 border-[#77dcb8] shadow-2xl shadow-teal-900/5 p-4 flex items-center justify-between gap-4 overflow-hidden relative group">
              <div className="flex items-center gap-4 px-4 border-r border-slate-100 shrink-0">
                 <div className="space-y-1">
                   <h3 className="mb-1 tracking-[0.1em]">Hospitales</h3>
                   <p className="text-xl font-black text-[#008f78] tracking-tighter leading-none">176</p>
                 </div>
              </div>

              <div className="flex-1 flex items-center justify-around px-2">
                 {summaryStats.slice(1, 4).map((stat, idx) => (
                   <div key={idx} className="flex items-center gap-3 group/item">
                     <div className={cn(
                       "w-10 h-10 rounded-full flex items-center justify-center shrink-0 shadow-lg border-2 border-slate-50 transition-all duration-300 group-hover/item:scale-110 group-hover/item:-translate-y-1",
                       stat.bg, stat.color
                     )}>
                       <stat.icon className="w-4 h-4 stroke-[2.5]" />
                     </div>
                     <div className="min-w-0">
                       <p className={cn("text-[7px] font-black tracking-widest leading-none mb-1.5 opacity-60", stat.color)}>{stat.label}</p>
                       <p className="text-l font-black text-slate-800 tracking-tighter leading-none">{stat.value}</p>
                     </div>
                   </div>
                 ))}
              </div>

              <div className="flex items-center gap-6 px-2 border-l border-slate-100 shrink-0">
                  <div className="text-right space-y-1">
                    <h3 className="mb-1 tracking-[0.1em]">Proveedores</h3>
                    <p className="text-xl font-black text-[#008f78] tracking-tighter leading-none">266</p>
                  </div>
              </div>
            </div>

            <MapCard hideHeader customTitle={null}>
              <div className="bg-transparent flex flex-col items-center justify-center relative h-[450px] overflow-hidden">
                {/* Ambient Glow Background */}
                <div className="bg-transparent absolute inset-0  via-emerald-50/50 to-cyan-50/30"></div>

                <div className="bg-transparent relative w-full h-full flex items-center justify-center z-10">
                  <div className="bg-transparent relative w-full max-w-2xl transform hover:scale-[1.02] transition-transform duration-300">
                    <MexicoMap className="bg-transparent drop-shadow-1xl" />
                  </div>
                </div>
              </div>
            </MapCard>
          </div>

          {/* Right Column: Insights */}
          <div className="w-full lg:w-[340px] shrink-0 flex flex-col gap-3">
            <div className="flex items-center justify-center gap-3">
              <Dropdown label={t('dashboard.year_2025')} light className="w-[340px]" />
              <Dropdown label={t('dashboard.january')} light className="w-[340px]" />
            </div>

            <Card
              tabs={[t('dashboard.medicine_proportion'), t('dashboard.income_trend')]}
              activeTab={activeTab3}
              onTabChange={setActiveTab3}
              bodyClassName="w-[340px]"
              className="border-b-0 shadow-none relative z-10 h-[250px]"
            >
              <div className="flex flex-row items-center h-[160px]">
                {/* Legend on the Left */}
                <div className="flex-1 space-y-2 pl-2 pr-2">
                   {proporcionData[activeTab3].map((item, idx) => (
                     <div key={idx} className="flex items-center gap-3 group">
                       <div
                         className="w-4 h-4 rounded-full border-2 bg-white shrink-0 group-hover:scale-110 transition-transform"
                         style={{ borderColor: item.color }}
                       ></div>
                       <p className="text-[10px] font-bold text-slate-700 leading-tight">
                         {item.name}
                       </p>
                     </div>
                   ))}
                </div>

                {/* Chart on the Right */}
                <div className="w-[180px] h-full relative flex items-center justify-center">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={proporcionData[activeTab3]}
                        cx="50%"
                        cy="50%"
                        innerRadius={50}
                        outerRadius={80}
                        paddingAngle={2}
                        dataKey="value"
                        stroke="none"
                      >
                        {proporcionData[activeTab3].map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>

                  {/* Center text */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                  </div>

                  {/* Outer labels */}
                  <div className="absolute top-0 right-0 text-right">
                    <span className="text-[10px] font-bold" style={{ color: proporcionData[activeTab3][0].color }}>
                      {proporcionData[activeTab3][0].value}%
                    </span>
                  </div>
                  <div className="absolute bottom-0 right-0 text-right">
                    <span className="text-[10px] font-bold" style={{ color: proporcionData[activeTab3][1].color }}>
                      {proporcionData[activeTab3][1].value}%
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 text-left">
                    <span className="text-[10px] font-bold" style={{ color: proporcionData[activeTab3][2].color }}>
                      {proporcionData[activeTab3][2].value}%
                    </span>
                  </div>
                  <div className="absolute top-0 left-0 text-left">
                    <span className="text-[10px] font-bold" style={{ color: proporcionData[activeTab3][3].color }}>
                      {proporcionData[activeTab3][3].value}%
                    </span>
                  </div>
                </div>
              </div>
            </Card>

            <Card
              tabs={[t('prediction.provider'), t('dashboard.compliance')]}
              activeTab={activeTab4}
              onTabChange={setActiveTab4}
              bodyClassName="w-[340px]"
              className="border-b-0 shadow-none relative z-10 h-[250px]"
            >
              <div className="space-y-4">
                <div className="space-y-2">
                   {proveedorData[activeTab4].map((prov, idx) => (
                     <div key={idx} className="flex items-center gap-3 group cursor-pointer">
                       <div className={cn("w-8 h-8 rounded-lg flex items-center justify-center font-black text-xs transition-transform group-hover:scale-110 shadow-sm", prov.color)}>
                         {prov.rank === 1 ? '🥇' : prov.rank === 2 ? '🥈' : prov.rank === 3 ? '🥉' : prov.rank}
                       </div>
                       <div className="flex-1 min-w-0">
                         <div className="flex items-center justify-between mb-1">
                           <h5 className="text-[9.5px] font-bold text-slate-800 truncate pr-2 tracking-widest leading-none">{prov.name}</h5>
                           <div className="text-[9.5px] font-bold text-teal-600 flex items-center gap-1">
                             <span className="text-slate-400 font-bold text-[7px] scale-90 origin-right">{t('dashboard.score')}</span>
                             <span className="font-black text-xs">{prov.score}</span>
                           </div>
                         </div>
                         <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden p-[1px]">
                           <div className="h-full bg-gradient-to-r from-teal-400 to-emerald-400 rounded-full shadow-[0_0_6px_rgba(45,212,191,0.4)]" style={{ width: `${prov.score}%` }}></div>
                         </div>
                       </div>
                     </div>
                   ))}
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Bottom Table Section */}
        <div className="bg-white rounded-[32px] border border-slate-100 shadow-xl shadow-teal-900/5 overflow-hidden">
          <div className="p-8 pb-4">
             <h3 className="mb-6 flex items-center gap-3">
               <div className="w-1.5 h-8 bg-teal-400 rounded-full"></div>
               {t('dashboard.med_inventory')}
             </h3>
          </div>
          
          <div className="overflow-x-auto px-8 pb-8">
            <table className="w-full text-left border-separate border-spacing-y-2">
              <thead>
                <tr className="text-[9px] font-black text-slate-400 tracking-[0.2em] border-b border-slate-100">
                  <th className="pb-4 pl-4">{t('dashboard.table.status')}</th>
                  <th className="pb-4">{t('dashboard.table.med_name')}</th>
                  <th className="pb-4">
                    <div className="flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                      {t('dashboard.table.est_replenish_date')}
                    </div>
                  </th>
                  <th className="pb-4">
                    <div className="flex items-center gap-1.5">
                       <Sparkles className="w-3.5 h-3.5 text-rose-400" />
                       {t('dashboard.table.days_left')}
                    </div>
                  </th>
                  <th className="pb-4 text-center">{t('dashboard.table.current_inv')}</th>
                  <th className="pb-4 text-center">{t('dashboard.avg_monthly_consumption')}</th>
                  <th className="pb-4 text-center">{t('dashboard.table.stock_min')}</th>
                  <th className="pb-4 text-center">{t('dashboard.table.stock_opt')}</th>
                  <th className="pb-4 text-center">{t('dashboard.table.stock_max')}</th>
                </tr>
              </thead>
              <tbody>
                {inventoryItems.map((item, idx) => (
                  <tr key={idx} className={cn("group transition-all hover:bg-white hover:translate-x-1", idx % 2 === 0 ? "bg-white/40" : "bg-teal-50/10")}>
                    <td className="py-3 pl-4 first:rounded-l-2xl">
                      <span className={cn("px-2.5 py-1 rounded-lg text-[9px] font-black tracking-widest shadow-sm", item.statusColor)}>
                        {item.status}
                      </span>
                    </td>
                    <td className="py-3 font-black text-slate-800 text-xs tracking-tight">{item.name}</td>
                    <td className="py-3 text-slate-600 font-bold text-[11px] font-mono">{item.date}</td>
                    <td className="py-3 font-black text-xs">
                      <span className={item.daysLeft < 10 ? "text-rose-500" : "text-slate-600"}>{item.daysLeft}</span>
                    </td>
                    <td className="py-3 text-center text-slate-800 font-black text-xs">{item.currentInv}</td>
                    <td className="py-3 text-center text-slate-500 font-bold text-xs">{item.avgMonth}</td>
                    <td className="py-3 text-center text-slate-500 font-bold text-xs">{item.min}</td>
                    <td className="py-3 text-center text-slate-500 font-bold text-xs">{item.opt}</td>
                    <td className="py-3 text-center text-slate-500 font-bold text-xs last:rounded-r-2xl pr-4">{item.max}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

function Dropdown({ label, light, className }: { label: string; light?: boolean; className?: string }) {
  return (
    <div className={cn("relative w-full mb-2 h-8", className)}>
      <button className={cn(
        "w-full px-4 py-2 rounded-xl flex items-center justify-between text-[10px] font-bold transition-all border shadow-sm active:scale-95 text-teal-800",
        light ? "bg-white border-white" : "bg-white border-teal-100"
      )}>
        {label}
        <ChevronDown className="w-3 h-3 text-teal-400 ml-1" />
      </button>
    </div>
  );
}

function Card({
  title,
  subtitle,
  tabs,
  children,
  customTitle,
  bodyClassName,
  hideHeader,
  className,
  activeTab,
  onTabChange
}: {
  title?: string;
  subtitle?: string;
  tabs?: string[];
  children: React.ReactNode;
  customTitle?: React.ReactNode;
  bodyClassName?: string;
  hideHeader?: boolean;
  className?: string;
  activeTab?: number;
  onTabChange?: (index: number) => void;
}) {
  return (
    <div className={cn("bg-white rounded-[12px] border border-teal-100 shadow-xl shadow-teal-900/5 overflow-hidden group transition-all", className)}>
      {/* Folder Style Tabs */}
      {!hideHeader && tabs && tabs.length > 0 && (
        <div className="flex h-[48px] bg-[#E2F9EB]">
          {tabs.map((tab, idx) => (
            <div key={idx} 
              className={cn(
                "relative flex-1 flex flex-col items-center justify-center cursor-pointer transition-all px-2",
                idx === activeTab
                  ? "bg-white z-20 rounded-t-[14px] shadow-[0_-4px_12px_rgba(45,212,191,0.1)]"
                  : "bg-[#E2F9EB]/60 z-10 hover:bg-[#D5F5E0] border-r border-[#CFEBD9]/30"
              )}
              onClick={() => onTabChange?.(idx)}
            >
              {idx === activeTab && (
                <div className="absolute top-0 left-0 right-0 h-1 bg-teal-500 rounded-t-[14px] mx-0.5 animate-in fade-in slide-in-from-top-1"></div>
              )}
              <span className={cn(
                "text-[8.5px] font-black tracking-tight text-center whitespace-normal leading-[1.1] transition-colors duration-200",
                idx === activeTab ? "text-slate-900" : "text-[#2DA273] opacity-50 hover:opacity-100"
              )}>
                {tab.split(' ').map((word, i) => (
                  <React.Fragment key={i}>
                    {word}
                    {i < tab.split(' ').length - 1 && <br />}
                  </React.Fragment>
                ))}
              </span>
            </div>
          ))}
        </div>
      )}

      <div className={cn("p-3", bodyClassName)}>
        {customTitle !== undefined ? (
          customTitle
        ) : (
          (title || subtitle) && (
            <div className="mb-2">
              {subtitle && <p className="text-[9px] font-black text-teal-600 tracking-widest opacity-40 mb-1">{subtitle}</p>}
              {title && <h4 className="text-sm font-black text-slate-800 tracking-tighter leading-tight">{title}</h4>}
            </div>
          )
        )}

        {children}
      </div>
    </div>
  );
}

function MapCard({
  title,
  subtitle,
  tabs,
  children,
  customTitle,
  bodyClassName,
  hideHeader,
  className,
  activeTab,
  onTabChange
}: {
  title?: string;
  subtitle?: string;
  tabs?: string[];
  children: React.ReactNode;
  customTitle?: React.ReactNode;
  bodyClassName?: string;
  hideHeader?: boolean;
  className?: string;
  activeTab?: number;
  onTabChange?: (index: number) => void;
}) {
  return (
    <div className={cn("shadow-xl shadow-teal-900/5 overflow-hidden group transition-all", className)}>
      {/* Folder Style Tabs */}
      {!hideHeader && tabs && tabs.length > 0 && (
        <div className="flex h-[48px] bg-[#E2F9EB]">
          {tabs.map((tab, idx) => (
            <div key={idx} 
              className={cn(
                "relative flex-1 flex flex-col items-center justify-center cursor-pointer transition-all px-2",
                idx === activeTab
                  ? "bg-white z-20 rounded-t-[14px] shadow-[0_-4px_12px_rgba(45,212,191,0.1)]"
                  : "bg-[#E2F9EB]/60 z-10 hover:bg-[#D5F5E0] border-r border-[#CFEBD9]/30"
              )}
              onClick={() => onTabChange?.(idx)}
            >
              {idx === activeTab && (
                <div className="absolute top-0 left-0 right-0 h-1 bg-teal-500 rounded-t-[14px] mx-0.5 animate-in fade-in slide-in-from-top-1"></div>
              )}
              <span className={cn(
                "text-[8.5px] font-black tracking-tight text-center whitespace-normal leading-[1.1] transition-colors duration-200",
                idx === activeTab ? "text-slate-900" : "text-[#2DA273] opacity-50 hover:opacity-100"
              )}>
                {tab.split(' ').map((word, i) => (
                  <React.Fragment key={i}>
                    {word}
                    {i < tab.split(' ').length - 1 && <br />}
                  </React.Fragment>
                ))}
              </span>
            </div>
          ))}
        </div>
      )}

      <div className={cn("p-3", bodyClassName)}>
        {customTitle !== undefined ? (
          customTitle
        ) : (
          (title || subtitle) && (
            <div className="mb-2">
              {subtitle && <p className="text-[9px] font-black text-teal-600 tracking-widest opacity-40 mb-1">{subtitle}</p>}
              {title && <h4 className="text-sm font-black text-slate-800 tracking-tighter leading-tight">{title}</h4>}
            </div>
          )
        )}

        {children}
      </div>
    </div>
  );
}

function Pin({ color, icon: Icon }: { color: string; icon?: React.ElementType }) {
  const { t } = useLanguage();
  return (
    <div className="relative group cursor-pointer">
       {/* Marker Shadow */}
       <div className="absolute top-full left-1/2 -translate-x-1/2 w-6 h-3 bg-black/15 rounded-full blur-sm transform scale-x-110"></div>
       
       {/* Marker Body - White Circle with Color Icon Overlay */}
       <div className={cn(
         "w-8 h-8 rounded-full bg-white border-2 border-white shadow-lg flex items-center justify-center transition-all duration-300 group-hover:scale-125 group-hover:-translate-y-2 relative z-10 overflow-hidden"
       )}>
         <div className={cn("absolute inset-0 opacity-10", color)}></div>
         {Icon ? <Icon className={cn("w-4 h-4 z-10", color.replace('bg-', 'text-'))} /> : <MapPin className={cn("w-4 h-4 z-10", color.replace('bg-', 'text-'))} />}
       </div>

       {/* Floating Ping Ring */}
       <div className={cn("w-10 h-10 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-25 animate-ping", color)}></div>
       
       {/* Enhanced Tooltip */}
       <div className="absolute bottom-12 left-1/2 -translate-x-1/2 bg-slate-900/95 backdrop-blur-md text-white px-3 py-2 rounded-2xl text-[10px] font-black opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0 whitespace-nowrap shadow-2xl z-30 border border-white/10 tracking-[0.15em] ring-4 ring-slate-900/10">
         <div className="flex items-center gap-2">
           <div className={cn("w-2 h-2 rounded-full shadow-[0_0_8px_rgba(255,255,255,0.5)]", color)}></div>
           {t('dashboard.hospital_regional')}
         </div>
         <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-slate-900/95 rotate-45 border-r border-b border-white/5"></div>
       </div>
    </div>
  );
}

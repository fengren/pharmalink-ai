import React, { useState } from 'react';
import { 
  Search, 
  Download, 
  Plus, 
  Upload,
  ChevronLeft, 
  ChevronRight,
  ArrowUpDown
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { cn } from '../lib/utils';

const PharmacyInfoView: React.FC = () => {
  const { t } = useLanguage();
  const [currentPage, setCurrentPage] = useState(1);

  const pharmacies = [
    { status: 'Operación normal', name: 'Hospital General de México', code: 'CLAS_2025001', location: 'Alcaldía Cuauhtémoc', type: 'Hospital general', responsible: 'Juan Martínez', role: 'Farmacéutico jefe' },
    { status: 'Operación normal', name: 'Centro Médico ABC', code: 'CLAS_2025002', location: 'Alcaldía Miguel Hidalgo', type: 'Hospital general', responsible: 'María González', role: 'Farmacéutico jefe' },
    { status: 'Actualización del sistema', name: 'Instituto Nacional de Cancerología', code: 'CLAS_2025003', location: 'Alcaldía Tlalpan', type: 'Hospital especializado', responsible: 'Carlos Rodríguez', role: 'Farmacéutico jefe de MTC' },
    { status: 'Operación normal', name: 'Instituto Nacional de Cancerología', code: 'CLAS_2025004', location: 'Alcaldía Iztapalapa', type: 'Hospital comunitario', responsible: 'Sofía Hernández', role: 'Farmacéutico supervisor' },
  ];

  return (
    <div className="space-y-6">
      {/* Search & Filters */}
      <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-3">
          <div className="relative">
            <select className="appearance-none bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 pr-10 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-slate-700">
              <option>Regiones</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
          </div>
          <div className="relative">
            <select className="appearance-none bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 pr-10 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-slate-700">
              <option>los Tipos</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
          </div>
          <div className="relative min-w-[350px]">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input 
              type="text" 
              placeholder="Buscar nombre de farmacia, región, responsable..." 
              className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
            />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2.5 border border-slate-200 rounded-xl text-sm font-bold text-slate-700 hover:bg-slate-50 transition-all">
            <Download className="w-4 h-4" />
            <span>{t('common.export')}</span>
          </button>
          <button className="flex items-center gap-2 px-4 py-2.5 border border-slate-200 rounded-xl text-sm font-bold text-slate-700 hover:bg-slate-50 transition-all">
            <Upload className="w-4 h-4" />
            <span>Importar</span>
          </button>
          <button className="flex items-center gap-2 px-4 py-2.5 bg-[#14532D] text-white rounded-xl text-sm font-bold hover:bg-[#14532D]/90 transition-all shadow-lg shadow-green-900/10">
            <Plus className="w-4 h-4" />
            <span>{t('common.add_pharmacy')}</span>
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50/50 border-b border-slate-100">
                <th className="px-6 py-4 w-12">
                  <input type="checkbox" className="rounded border-slate-300 text-primary focus:ring-primary" />
                </th>
                <th className="px-4 py-4 text-[11px] font-black text-slate-500 tracking-widest whitespace-nowrap">
                  <div className="flex items-center gap-2 group cursor-pointer">
                    {t('pharmacy.status')}
                    <ArrowUpDown className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </th>
                <th className="px-4 py-4 text-[11px] font-black text-slate-500 tracking-widest whitespace-nowrap">
                  <div className="flex items-center gap-2 group cursor-pointer">
                    {t('pharmacy.name')}
                    <ArrowUpDown className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </th>
                <th className="px-4 py-4 text-[11px] font-black text-slate-500 tracking-widest whitespace-nowrap">
                  <div className="flex items-center gap-2 group cursor-pointer">
                    {t('pharmacy.location')}
                    <ArrowUpDown className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </th>
                <th className="px-4 py-4 text-[11px] font-black text-slate-500 tracking-widest whitespace-nowrap text-center">
                  <div className="flex items-center justify-center gap-2 group cursor-pointer">
                    {t('pharmacy.type')}
                    <ArrowUpDown className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </th>
                <th className="px-4 py-4 text-[11px] font-black text-slate-500 tracking-widest whitespace-nowrap">
                  <div className="flex items-center gap-2 group cursor-pointer">
                    {t('pharmacy.responsible')}
                    <ArrowUpDown className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </th>
                <th className="px-6 py-4 text-[11px] font-black text-slate-500 tracking-widest text-center whitespace-nowrap border-l border-slate-100">
                  {t('common.actions')}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {pharmacies.map((item, idx) => (
                <tr key={idx} className="group hover:bg-slate-50/50 transition-colors">
                  <td className="px-6 py-4">
                    <input type="checkbox" className="rounded border-slate-300 text-primary focus:ring-primary" />
                  </td>
                  <td className="px-4 py-4">
                    <span className={cn(
                      "px-4 py-1.5 rounded-full text-[11px] font-black tracking-tight",
                      item.status === 'Operación normal' ? "bg-emerald-50 text-emerald-600" : "bg-amber-50 text-amber-600"
                    )}>
                      {item.status}
                    </span>
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-slate-800">{item.name}</span>
                      <span className="text-[10px] font-bold text-slate-400 tracking-widest">{item.code}</span>
                    </div>
                  </td>
                  <td className="px-4 py-4 text-sm font-bold text-slate-700">{item.location}</td>
                  <td className="px-4 py-4 text-center">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-500 border border-blue-100">
                      {item.type}
                    </span>
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-slate-800">{item.responsible}</span>
                      <span className="text-[10px] text-slate-400 font-medium">{item.role}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 border-l border-slate-100">
                    <div className="flex items-center justify-center gap-4 text-[11px] font-bold">
                      <button className="text-emerald-500 hover:opacity-80 transition-opacity">{t('common.edit')}</button>
                      <button className="text-rose-500 hover:opacity-80 transition-opacity">{t('common.delete')}</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="px-6 py-4 bg-slate-50/30 border-t border-slate-100 flex items-center justify-between">
          <p className="text-xs font-medium text-slate-500">
            {t('common.total_records').replace('{count}', '56')}
          </p>
          <div className="flex items-center gap-2">
            <button className="p-1.5 rounded-lg border border-slate-200 text-slate-400 hover:bg-white disabled:opacity-50" disabled>
              <ChevronLeft className="w-4 h-4" />
            </button>
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map(p => (
                <button 
                  key={p}
                  onClick={() => setCurrentPage(p)}
                  className={cn(
                    "w-8 h-8 rounded-lg text-xs font-bold transition-all",
                    currentPage === p ? "bg-[#14532D] text-white" : "border border-slate-200 text-slate-600 hover:bg-white"
                  )}
                >
                  {p}
                </button>
              ))}
            </div>
            <button className="p-1.5 rounded-lg border border-slate-200 text-slate-400 hover:bg-white">
              <ChevronRight className="w-4 h-4" />
            </button>
            
            <div className="flex items-center gap-2 ml-4">
              <span className="text-xs text-slate-500">{t('common.jump_to')}</span>
              <input type="text" className="w-10 h-8 bg-white border border-slate-200 rounded-lg text-center text-xs focus:outline-none focus:ring-1 focus:ring-primary" />
              <span className="text-xs text-slate-500">page</span>
            </div>

            <div className="relative ml-4">
              <select className="appearance-none bg-white border border-slate-200 rounded-lg px-3 py-1.5 text-[11px] font-bold text-slate-600 pr-8 focus:outline-none">
                <option>10 {t('common.records_per_page')}</option>
              </select>
              <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-3 h-3 text-slate-400 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ChevronDown: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m6 9 6 6 6-6"/>
  </svg>
);

export default PharmacyInfoView;

import React, { useState } from 'react';
import { 
  Search, 
  Download, 
  Plus, 
  MoreHorizontal, 
  ChevronLeft, 
  ChevronRight,
  Filter,
  ArrowUpDown
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { cn } from '../lib/utils';

const MedicationInfoView: React.FC = () => {
  const { t } = useLanguage();
  const [currentPage, setCurrentPage] = useState(1);

  const medications = [
    { id: 'GEN 3383', genericName: 'Cápsula de amoxicilina', commercialName: 'Amoxian', specification: '0.25g*24 unidades/paquete', brand: 'Laboratorios PiSA' },
    { id: 'GEN 3384', genericName: 'Tabletas de hidrocloruro de ambroxol', commercialName: 'Mucosolvan', specification: '30mg*20 tabletas/paquete', brand: 'Genomma Lab Internacional' },
    { id: 'GEN 3385', genericName: 'Ceftriaxona sódica para inyección', commercialName: 'Rochefin', specification: '1.0g*10 viales/paquete', brand: 'Chinoin' },
    { id: 'GEN 3386', genericName: 'Tabletas de hidrocloruro de metformina', commercialName: 'Glucophage', specification: '0.5g*20 tabletas/paquete', brand: 'Landsteiner Scientific' },
    { id: 'GEN 3387', genericName: 'Tabletas de liberación prolongada de nifedipino', commercialName: 'Baypress', specification: '20mg*30 tabletas/paquete', brand: 'Liomont' },
  ];

  return (
    <div className="space-y-6">
      {/* Search & Filters */}
      <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-3">
          <div className="relative">
            <select className="appearance-none bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 pr-10 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-slate-700">
              <option>{t('common.brand')}</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
          </div>
          <div className="relative">
            <select className="appearance-none bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 pr-10 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-slate-700">
              <option>Tipo de medicamento</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
          </div>
          <div className="relative min-w-[300px]">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input 
              type="text" 
              placeholder="Buscar código/nombre/fabricante" 
              className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
            />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2.5 border border-slate-200 rounded-xl text-sm font-bold text-slate-700 hover:bg-slate-50 transition-all">
            <Download className="w-4 h-4" />
            <span>{t('common.export')}</span>
          </button>
          <button className="flex items-center gap-2 px-4 py-2.5 bg-[#14532D] text-white rounded-xl text-sm font-bold hover:bg-[#14532D]/90 transition-all shadow-lg shadow-green-900/10">
            <Plus className="w-4 h-4" />
            <span>{t('common.add_medication')}</span>
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50/50 border-b border-slate-100">
                <th className="px-6 py-4">
                  <input type="checkbox" className="rounded border-slate-300 text-primary focus:ring-primary" />
                </th>
                <th className="px-4 py-4 text-[11px] font-black text-slate-500 tracking-widest whitespace-nowrap">
                  <div className="flex items-center gap-2 group cursor-pointer">
                    {t('common.id_generic')}
                    <ArrowUpDown className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </th>
                <th className="px-4 py-4 text-[11px] font-black text-slate-500 tracking-widest whitespace-nowrap">
                  <div className="flex items-center gap-2 group cursor-pointer">
                    {t('common.name_generic')}
                    <ArrowUpDown className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </th>
                <th className="px-4 py-4 text-[11px] font-black text-slate-500 tracking-widest whitespace-nowrap">
                  <div className="flex items-center gap-2 group cursor-pointer">
                    {t('common.name_commercial')}
                    <ArrowUpDown className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </th>
                <th className="px-4 py-4 text-[11px] font-black text-slate-500 tracking-widest whitespace-nowrap">
                  <div className="flex items-center gap-2 group cursor-pointer">
                    {t('common.specification')}
                    <ArrowUpDown className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </th>
                <th className="px-4 py-4 text-[11px] font-black text-slate-500 tracking-widest whitespace-nowrap">
                  <div className="flex items-center gap-2 group cursor-pointer">
                    {t('common.brand')}
                    <ArrowUpDown className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </th>
                <th className="px-6 py-4 text-[11px] font-black text-slate-500 tracking-widest text-center">
                  {t('common.actions')}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {medications.map((item, idx) => (
                <tr key={idx} className="group hover:bg-slate-50/50 transition-colors">
                  <td className="px-6 py-4">
                    <input type="checkbox" className="rounded border-slate-300 text-primary focus:ring-primary" />
                  </td>
                  <td className="px-4 py-4 text-sm font-bold text-slate-700">{item.id}</td>
                  <td className="px-4 py-4 text-sm font-medium text-slate-600 max-w-[200px]">{item.genericName}</td>
                  <td className="px-4 py-4 text-sm font-medium text-slate-600">{item.commercialName}</td>
                  <td className="px-4 py-4 text-sm text-slate-500">{item.specification}</td>
                  <td className="px-4 py-4 text-sm text-slate-500">{item.brand}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-center gap-4 text-[11px] font-bold">
                      <button className="text-emerald-500 hover:opacity-80 transition-opacity">{t('common.details')}</button>
                      <button className="text-slate-400 hover:text-slate-600 transition-colors">{t('common.edit')}</button>
                      <button className="text-rose-500 hover:text-rose-700 transition-colors">{t('common.delete')}</button>
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

export default MedicationInfoView;

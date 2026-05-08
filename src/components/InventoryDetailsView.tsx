import React from 'react';
import { 
  Search, 
  Download, 
  ChevronLeft, 
  ChevronRight,
  ChevronDown,
  LayoutGrid
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { cn } from '../lib/utils';
import { motion } from 'motion/react';

const InventoryDetailsView: React.FC = () => {
  const { t } = useLanguage();

  const inventory = [
    { status: 'Stock Bajo', statusColor: 'bg-rose-100 text-rose-600', name: 'Aspirina con Recubrimiento Entérico', code: 'GEN10025', category: 'Antibióticos', hospital: 'Hospital General de México', stock: 120 },
    { status: 'Stock Bajo', statusColor: 'bg-rose-100 text-rose-600', name: 'Cápsulas de Liberación Prolongada de Ibuprofeno', code: 'GEN10027', category: 'Antibióticos', hospital: 'Hospital General de México', stock: 120 },
    { status: 'Reabastecer', statusColor: 'bg-orange-100 text-orange-600', name: 'Ceftriaxona Sódica para Inyección', code: 'GEN10026', category: 'Antibióticos', hospital: 'Hospital General de México', stock: 120 },
    { status: 'Suficiente', statusColor: 'bg-emerald-100 text-emerald-600', name: 'Aspirina con Recubrimiento Entérico', code: 'GEN10028', category: 'Antibióticos', hospital: 'Hospital General de México', stock: 120 },
    { status: 'Suficiente', statusColor: 'bg-emerald-100 text-emerald-600', name: 'Comprimidos de Regaliz Compuesto', code: 'GEN10029', category: 'Antibióticos', hospital: 'Hospital General de México', stock: 120 },
    { status: 'Suficiente', statusColor: 'bg-emerald-100 text-emerald-600', name: 'Comprimidos de Regaliz Compuesto', code: 'GEN10029', category: 'Antibióticos', hospital: 'Hospital General de México', stock: 120 },
    { status: 'Suficiente', statusColor: 'bg-emerald-100 text-emerald-600', name: 'Comprimidos de Regaliz Compuesto', code: 'GEN10029', category: 'Antibióticos', hospital: 'Hospital General de México', stock: 120 },
  ];

  return (
    <div className="space-y-6 pb-12">
      {/* Search and Filters */}
      <div className="bg-white p-6 rounded-[32px] border border-slate-100 shadow-sm flex flex-col lg:flex-row lg:items-center gap-6">
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-2 px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl cursor-pointer hover:bg-slate-100 transition-all">
            <span className="text-[11px] font-black text-slate-500 tracking-tight">{t('inventory.category_filter')}</span>
            <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
          </div>
          <div className="flex items-center gap-2 px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl cursor-pointer hover:bg-slate-100 transition-all">
            <span className="text-[11px] font-black text-slate-500 tracking-tight">{t('inventory.hospital_filter')}</span>
            <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
          </div>
          <div className="flex items-center gap-2 px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl cursor-pointer hover:bg-slate-100 transition-all">
            <span className="text-[11px] font-black text-slate-500 tracking-tight">{t('inventory.status_filter')}</span>
            <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
          </div>
        </div>
        
        <div className="flex-1 min-w-[280px]">
          <div className="relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-primary transition-colors" />
            <input 
              type="text" 
              placeholder={t('inventory.search_placeholder')}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-12 pr-4 py-3 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-primary/10 transition-all shadow-sm"
            />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-6 py-3 border border-slate-200 rounded-xl text-xs font-black text-slate-600 hover:bg-slate-50 transition-all tracking-widest shadow-sm">
            <Download className="w-4 h-4" />
            <span>{t('common.export')}</span>
          </button>
          <button className="flex items-center gap-2 px-7 py-3 bg-primary text-white rounded-xl text-xs font-black hover:bg-[#005a45] transition-all shadow-lg shadow-primary/20 active:scale-95 tracking-widest leading-none">
            <LayoutGrid className="w-4 h-4" />
            <span>{t('nav.inv_expiry')}</span>
          </button>
        </div>
      </div>

      {/* Inventory Table */}
      <div className="bg-white rounded-[32px] border border-slate-100 shadow-xl shadow-slate-200/50 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50/50 border-b border-slate-100">
                <th className="px-8 py-6 w-12"><input type="checkbox" className="rounded-md border-slate-300" /></th>
                <th className="px-4 py-6 text-[10px] font-black text-slate-400 tracking-widest">
                  <div className="flex items-center gap-2">
                    {t('inventory.col_status')}
                    <ChevronDown className="w-3 h-3" />
                  </div>
                </th>
                <th className="px-4 py-6 text-[10px] font-black text-slate-400 tracking-widest">
                  <div className="flex items-center gap-2">
                    {t('inventory.col_name')}
                    <ChevronDown className="w-3 h-3" />
                  </div>
                </th>
                <th className="px-4 py-6 text-[10px] font-black text-slate-400 tracking-widest">
                  <div className="flex items-center gap-2">
                    {t('inventory.col_category')}
                    <ChevronDown className="w-3 h-3" />
                  </div>
                </th>
                <th className="px-4 py-6 text-[10px] font-black text-slate-400 tracking-widest whitespace-nowrap">
                  <div className="flex items-center gap-2">
                    {t('inventory.col_hospital')}
                    <ChevronDown className="w-3 h-3" />
                  </div>
                </th>
                <th className="px-4 py-6 text-[10px] font-black text-slate-400 tracking-widest text-center">
                  <div className="flex items-center justify-center gap-2">
                    {t('inventory.col_stock')}
                    <ChevronDown className="w-3 h-3" />
                  </div>
                </th>
                <th className="px-8 py-6 text-[10px] font-black text-slate-400 tracking-widest text-center">{t('inventory.actions')}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {inventory.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50/80 transition-all duration-200 group">
                  <td className="px-8 py-6"><input type="checkbox" className="rounded-md border-slate-300" /></td>
                  <td className="px-4 py-6">
                    <span className={cn("px-4 py-1.5 rounded-full text-[10px] font-black tracking-tight shadow-sm inline-block", row.statusColor)}>
                      {row.status}
                    </span>
                  </td>
                  <td className="px-4 py-6">
                    <div className="flex flex-col gap-1">
                      <span className="text-sm font-bold text-slate-700 leading-tight group-hover:text-primary transition-colors">{row.name}</span>
                      <span className="text-[10px] font-bold text-slate-400 tracking-wider">#{row.code}</span>
                    </div>
                  </td>
                  <td className="px-4 py-6">
                    <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-lg text-[10px] font-black tracking-tight">{row.category}</span>
                  </td>
                  <td className="px-4 py-6 text-[11px] font-bold text-slate-500 max-w-[200px] truncate">{row.hospital}</td>
                  <td className="px-4 py-6 text-sm font-black text-slate-900 text-center">{row.stock}</td>
                  <td className="px-8 py-6">
                    <div className="flex items-center justify-center gap-5">
                      <button className="text-primary text-[10px] font-black hover:scale-105 active:scale-95 transition-all tracking-widest">{t('inventory.actions.details')}</button>
                      <button className="text-slate-400 text-[10px] font-black hover:text-slate-600 transition-all tracking-widest">{t('inventory.actions.edit')}</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="p-8 border-t border-slate-100 flex items-center justify-between bg-slate-50/30">
          <p className="text-xs font-medium text-slate-400 tracking-widest">Total <span className="font-black text-slate-800">56</span> Records</p>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <button className="p-2.5 rounded-xl border border-slate-200 text-slate-300 hover:bg-white disabled:opacity-50 transition-all" disabled>
                <ChevronLeft className="w-4 h-4" />
              </button>
              <div className="flex items-center gap-1.5 mx-2">
                {[1, 2, 3, 4, 5].map((page) => (
                  <button 
                    key={page} 
                    className={cn(
                      "w-10 h-10 rounded-xl text-xs font-black transition-all",
                      page === 1 ? "bg-primary text-white shadow-xl shadow-primary/20 ring-4 ring-primary/5" : "text-slate-500 hover:bg-white hover:shadow-sm"
                    )}
                  >
                    {page}
                  </button>
                ))}
              </div>
              <button className="p-2.5 rounded-xl border border-slate-200 text-slate-400 hover:bg-white transition-all shadow-sm">
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
            
            <div className="h-8 w-px bg-slate-200 mx-2"></div>

            <div className="flex items-center gap-5">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-black text-slate-400 tracking-widest">Jump to</span>
                <input type="text" className="w-12 h-10 border border-slate-200 rounded-xl text-center text-xs font-black text-slate-800 focus:ring-2 focus:ring-primary/10 outline-none transition-all shadow-inner" />
              </div>
              <select className="h-10 border border-slate-200 rounded-xl px-4 text-[10px] font-black text-slate-600 outline-none bg-white shadow-sm cursor-pointer tracking-widest">
                <option>10 / page</option>
                <option>20 / page</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InventoryDetailsView;

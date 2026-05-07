import React from 'react';
import { 
  Search, 
  Download, 
  ChevronLeft, 
  ChevronRight,
  ChevronDown,
  Calendar,
  LayoutGrid
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { cn } from '../lib/utils';
import { motion } from 'motion/react';

const ExpiryManagementView: React.FC = () => {
  const { t } = useLanguage();

  const inventory = [
    { status: 'Próximo a Vencer (31 días)', statusColor: 'bg-rose-100 text-rose-600', name: 'Ceftriaxona Sódica para Inyección', spec: '1.0g', lot: 'LOTE 001', validity: '2025-07-03 10:30' },
    { status: 'Próximo a Vencer (51 días)', statusColor: 'bg-rose-100 text-rose-600', name: 'Comprimidos de Clorhidrato de Levofloxacino', spec: '0.1g*12 paquete', lot: 'LOTE 002', validity: '2025-07-03 09:15' },
    { status: 'Cercano a la Fecha de Vencimiento (66 días)', statusColor: 'bg-amber-100 text-amber-600', name: 'Solución Oral de Clorhidrato de Ambroxol', spec: '100ml:0.6g', lot: 'LOTE 003', validity: '2025-07-02 16:45' },
    { status: 'Cercano a la Fecha de Vencimiento (87 días)', statusColor: 'bg-amber-100 text-amber-600', name: 'Compound Licorice Tablets', spec: '0.5g*24 paquete', lot: 'LOTE 004', validity: '2025-07-02 14:20' },
    { status: 'Cercano a la Fecha de Vencimiento (87 días)', statusColor: 'bg-amber-100 text-amber-600', name: 'Compound Licorice Tablets', spec: '0.5g*24 paquete', lot: 'LOTE 004', validity: '2025-07-02 14:20' },
    { status: 'Cercano a la Fecha de Vencimiento (87 días)', statusColor: 'bg-amber-100 text-amber-600', name: 'Compound Licorice Tablets', spec: '0.5g*24 paquete', lot: 'LOTE 004', validity: '2025-07-02 14:20' },
  ];

  return (
    <div className="space-y-6 pb-12">
      {/* Search and Filters */}
      <div className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm flex flex-col lg:flex-row lg:items-center gap-6">
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-2 px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl cursor-pointer hover:bg-slate-100 transition-all group">
             <Calendar className="w-4 h-4 text-slate-400 group-hover:text-primary transition-colors" />
             <span className="text-[11px] font-black text-slate-500 uppercase tracking-tight">{t('expiry.validity_filter')}</span>
             <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
          </div>
          <div className="flex items-center gap-2 px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl cursor-pointer hover:bg-slate-100 transition-all">
             <span className="text-[11px] font-black text-slate-500 uppercase tracking-tight">{t('expiry.status_filter')}</span>
             <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
          </div>
        </div>
        
        <div className="flex-1 min-w-[280px]">
          <div className="relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-primary transition-colors" />
            <input 
              type="text" 
              placeholder="Nombre de Medicamento / Lote..."
              className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-12 pr-4 py-3 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-primary/10 transition-all shadow-sm"
            />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-6 py-3 border border-slate-200 rounded-xl text-xs font-black text-slate-600 hover:bg-slate-50 transition-all uppercase tracking-widest shadow-sm">
            <Download className="w-4 h-4" />
            <span>{t('common.export')}</span>
          </button>
          <button className="flex items-center gap-3 px-8 py-3 bg-primary text-white rounded-xl text-xs font-black hover:bg-[#005a45] transition-all shadow-lg shadow-primary/20 active:scale-95 uppercase tracking-widest leading-none">
            <LayoutGrid className="w-4 h-4" />
            <span>{t('nav.inv_expiry')}</span>
          </button>
        </div>
      </div>

      {/* Checkboxes */}
      <div className="flex items-center gap-8 px-4 py-2">
        <label className="flex items-center gap-3 cursor-pointer group">
          <div className="w-5 h-5 border-2 border-slate-200 rounded-lg group-hover:border-primary transition-all flex items-center justify-center bg-white shadow-sm">
             <div className="w-2.5 h-2.5 rounded-[2px] bg-primary scale-0 group-hover:scale-100 transition-transform"></div>
          </div>
          <span className="text-[11px] font-black text-slate-400 uppercase tracking-widest group-hover:text-slate-600 transition-colors">Strock Disponible</span>
        </label>
        <label className="flex items-center gap-3 cursor-pointer group">
          <div className="w-5 h-5 border-2 border-slate-200 rounded-lg group-hover:border-primary transition-all flex items-center justify-center bg-white shadow-sm">
             <div className="w-2.5 h-2.5 rounded-[2px] bg-primary scale-0 group-hover:scale-100 transition-transform"></div>
          </div>
          <span className="text-[11px] font-black text-slate-400 uppercase tracking-widest group-hover:text-slate-600 transition-colors">Procesados</span>
        </label>
      </div>

      {/* Expiry Table */}
      <div className="bg-white rounded-[32px] border border-slate-100 shadow-xl shadow-slate-200/50 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50/50 border-b border-slate-100">
                <th className="px-8 py-6 w-12"><input type="checkbox" className="rounded-md border-slate-300 shadow-sm" /></th>
                <th className="px-4 py-6 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                   <div className="flex items-center gap-2">
                    {t('expiry.col_status')}
                    <ChevronDown className="w-3 h-3" />
                  </div>
                </th>
                <th className="px-4 py-6 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                   <div className="flex items-center gap-2">
                    {t('expiry.col_med')}
                    <ChevronDown className="w-3 h-3" />
                  </div>
                </th>
                <th className="px-4 py-6 text-[10px] font-black text-slate-400 uppercase tracking-widest text-center">
                   <div className="flex items-center justify-center gap-2">
                    {t('expiry.col_lot')}
                    <ChevronDown className="w-3 h-3" />
                  </div>
                </th>
                <th className="px-4 py-6 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                   <div className="flex items-center gap-2">
                    {t('expiry.col_validity')}
                    <ChevronDown className="w-3 h-3" />
                  </div>
                </th>
                <th className="px-8 py-6 text-[10px] font-black text-slate-400 uppercase tracking-widest text-right">{t('common.actions')}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {inventory.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50/80 transition-all duration-200 group">
                  <td className="px-8 py-6"><input type="checkbox" className="rounded-md border-slate-300" /></td>
                  <td className="px-4 py-6">
                    <span className={cn("inline-block px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-tight shadow-sm leading-tight", row.statusColor)}>
                      {row.status}
                    </span>
                  </td>
                  <td className="px-4 py-6">
                    <div className="flex flex-col gap-1">
                      <span className="text-sm font-bold text-slate-700 leading-tight group-hover:text-primary transition-colors">{row.name}</span>
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tight">{row.spec}</span>
                    </div>
                  </td>
                  <td className="px-4 py-6 text-xs font-black text-slate-400 tracking-widest text-center">#{row.lot}</td>
                  <td className="px-4 py-6">
                    <div className="flex items-center gap-2 text-slate-600">
                       <Calendar className="w-3.5 h-3.5 text-slate-400" />
                       <span className="text-xs font-bold">{row.validity}</span>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <div className="flex items-center justify-end gap-5">
                      <button className="text-primary text-[10px] font-black hover:scale-105 transition-all uppercase tracking-widest">{t('expiry.action_transfer')}</button>
                      <button className="text-amber-500 text-[10px] font-black hover:scale-105 transition-all uppercase tracking-widest">{t('expiry.action_promo')}</button>
                      <button className="text-rose-500 text-[10px] font-black hover:scale-105 transition-all uppercase tracking-widest">{t('expiry.action_return')}</button>
                    </div>
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

export default ExpiryManagementView;

import React from 'react';
import { 
  Search, 
  Download, 
  Plus, 
  ChevronLeft, 
  ChevronRight,
  ChevronDown,
  Calendar
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { cn } from '../lib/utils';
import { motion } from 'motion/react';

const InboundInventoryView: React.FC = () => {
  const { t } = useLanguage();

  const transactions = [
    { status: 'En Proceso', statusColor: 'bg-blue-100 text-blue-600', id: 'NO8878459347', code: 'GEN8839', approval: 'LOTE001', requested: 500, providerId: 'RFC10023', date: '2025-07-05' },
    { status: 'En Proceso', statusColor: 'bg-blue-100 text-blue-600', id: 'NO8878459348', code: 'GEN8839', approval: 'LOTE001', requested: 200, providerId: 'RFC10023', date: '2025-07-05' },
    { status: 'En Proceso', statusColor: 'bg-blue-100 text-blue-600', id: 'NO8878459349', code: 'GEN8839', approval: 'LOTE001', requested: 350, providerId: 'RFC10023', date: '2025-07-05' },
    { status: 'Anomalia', statusColor: 'bg-rose-100 text-rose-600', id: 'NO8878459340', code: 'GEN8839', approval: 'LOTE001', requested: 150, providerId: 'RFC10023', date: '2025-07-05' },
    { status: 'Resuelto', statusColor: 'bg-emerald-100 text-emerald-600', id: 'NO8878459341', code: 'GEN8839', approval: 'LOTE001', requested: 420, providerId: 'RFC10023', date: '2025-07-05' },
    { status: 'Resuelto', statusColor: 'bg-emerald-100 text-emerald-600', id: 'NO8878459342', code: 'GEN8839', approval: 'LOTE001', requested: 88, providerId: 'RFC10023', date: '2025-07-05' },
    { status: 'Resuelto', statusColor: 'bg-emerald-100 text-emerald-600', id: 'NO8878459343', code: 'GEN8839', approval: 'LOTE001', requested: 102, providerId: 'RFC10023', date: '2025-07-05' },
    { status: 'Anomalia', statusColor: 'bg-rose-100 text-rose-600', id: 'NO8878459344', code: 'GEN8839', approval: 'LOTE001', requested: 423, providerId: 'RFC10023', date: '2025-07-05' },
  ];

  return (
    <div className="space-y-6 pb-12">
      {/* Search and Filters */}
      <div className="bg-white p-6 rounded-[32px] border border-slate-100 shadow-sm flex flex-col lg:flex-row lg:items-center gap-6">
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-2 px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl cursor-pointer hover:bg-slate-100 transition-all group">
             <Calendar className="w-4 h-4 text-slate-400 group-hover:text-primary transition-colors" />
             <span className="text-[11px] font-black text-slate-500 tracking-tight">{t('inbound.id_filter')}</span>
             <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
          </div>
          <div className="flex items-center gap-2 px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl cursor-pointer hover:bg-slate-100 transition-all">
             <span className="text-[11px] font-black text-slate-500 tracking-tight">{t('inbound.provider_filter')}</span>
             <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
          </div>
          <div className="flex items-center gap-2 px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl cursor-pointer hover:bg-slate-100 transition-all">
             <span className="text-[11px] font-black text-slate-500 tracking-tight">{t('inbound.status_filter')}</span>
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
          <button className="flex items-center gap-3 px-8 py-3 bg-primary text-white rounded-xl text-xs font-black hover:bg-[#005a45] transition-all shadow-lg shadow-primary/20 active:scale-95 tracking-widest leading-none">
            <Plus className="w-4 h-4" />
            <span>Nueva Orden</span>
          </button>
        </div>
      </div>

      {/* Inbound Table */}
      <div className="bg-white rounded-[32px] border border-slate-100 shadow-xl shadow-slate-200/50 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50/50 border-b border-slate-100">
                <th className="px-8 py-6 w-12"><input type="checkbox" className="rounded-md border-slate-300 shadow-sm" /></th>
                <th className="px-4 py-6 text-[10px] font-black text-slate-400 tracking-widest">
                   <div className="flex items-center gap-2">
                    {t('inbound.col_status')}
                    <ChevronDown className="w-3 h-3" />
                  </div>
                </th>
                <th className="px-4 py-6 text-[10px] font-black text-slate-400 tracking-widest">
                   <div className="flex items-center gap-2">
                    {t('inbound.col_id')}
                    <ChevronDown className="w-3 h-3" />
                  </div>
                </th>
                <th className="px-4 py-6 text-[10px] font-black text-slate-400 tracking-widest">
                   <div className="flex items-center gap-2">
                    {t('inbound.col_code')}
                    <ChevronDown className="w-3 h-3" />
                  </div>
                </th>
                <th className="px-4 py-6 text-[10px] font-black text-slate-400 tracking-widest">
                   <div className="flex items-center gap-2">
                    {t('inbound.col_requested')}
                    <ChevronDown className="w-3 h-3" />
                  </div>
                </th>
                <th className="px-4 py-6 text-[10px] font-black text-slate-400 tracking-widest">
                   <div className="flex items-center gap-2">
                    {t('inbound.col_provider')}
                    <ChevronDown className="w-3 h-3" />
                  </div>
                </th>
                <th className="px-4 py-6 text-[10px] font-black text-slate-400 tracking-widest whitespace-nowrap">
                   <div className="flex items-center gap-2">
                    {t('inbound.col_date')}
                    <ChevronDown className="w-3 h-3" />
                  </div>
                </th>
                <th className="px-8 py-6 text-[10px] font-black text-slate-400 tracking-widest text-center">{t('common.actions')}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {transactions.map((tx, idx) => (
                <tr key={idx} className="hover:bg-slate-50/80 transition-all duration-200 group">
                  <td className="px-8 py-6"><input type="checkbox" className="rounded-md border-slate-300" /></td>
                  <td className="px-4 py-6">
                    <span className={cn("px-4 py-1.5 rounded-full text-[10px] font-black tracking-tight shadow-sm inline-block", tx.statusColor)}>
                      {tx.status}
                    </span>
                  </td>
                  <td className="px-4 py-6 text-xs font-black text-slate-700 group-hover:text-primary transition-colors">{tx.id}</td>
                  <td className="px-4 py-6 text-xs font-bold text-slate-400 tracking-wider">#{tx.code}</td>
                  <td className="px-4 py-6 text-sm font-black text-slate-900">{tx.requested}</td>
                  <td className="px-4 py-6 text-[11px] font-bold text-slate-500 tracking-tight">{tx.providerId}</td>
                  <td className="px-4 py-6">
                    <div className="flex items-center gap-2">
                       <Calendar className="w-3.5 h-3.5 text-slate-400" />
                       <span className="text-xs font-bold text-slate-600">{tx.date}</span>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <div className="flex items-center justify-center gap-5">
                      <button className="text-primary text-[10px] font-black hover:scale-105 active:scale-95 transition-all tracking-widest">{t('common.details')}</button>
                      <button className="text-slate-400 text-[10px] font-black hover:text-slate-600 transition-all tracking-widest">{t('common.edit')}</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination placeholder */}
        <div className="p-8 border-t border-slate-100 flex items-center justify-between bg-slate-50/30">
          <p className="text-xs font-medium text-slate-400 tracking-widest">Total <span className="font-black text-slate-800">56</span> Records</p>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <button className="p-2.5 rounded-xl border border-slate-200 text-slate-300 hover:bg-white disabled:opacity-50 transition-all" disabled>
                <ChevronLeft className="w-4 h-4" />
              </button>
              <div className="flex items-center gap-1.5 mx-2">
                {[1, 2, 3].map((page) => (
                  <button 
                    key={page} 
                    className={cn(
                      "w-10 h-10 rounded-xl text-xs font-black transition-all",
                      page === 1 ? "bg-primary text-white shadow-xl shadow-primary/20" : "text-slate-500 hover:bg-white"
                    )}
                  >
                    {page}
                  </button>
                ))}
              </div>
              <button className="p-2.5 rounded-xl border border-slate-200 text-slate-400 hover:bg-white transition-all">
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
            <select className="h-10 border border-slate-200 rounded-xl px-4 text-[10px] font-black text-slate-600 outline-none bg-white shadow-sm cursor-pointer tracking-widest">
              <option>10 / page</option>
              <option>20 / page</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InboundInventoryView;

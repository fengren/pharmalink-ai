import React from 'react';
import { 
  Search, 
  RotateCw, 
  Download, 
  Plus, 
  ChevronLeft, 
  ChevronRight,
  ClipboardList,
  Truck,
  PackageCheck,
  Package
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { cn } from '../lib/utils';

const ReplenishmentMgmtView: React.FC = () => {
  const { t } = useLanguage();

  const kpis = [
    { label: t('replenish.pending_approval'), value: '12 Órdenes', icon: ClipboardList, color: 'text-blue-500', bg: 'bg-blue-50' },
    { label: t('replenish.pending_shipment'), value: '8 Órdenes', icon: Truck, color: 'text-emerald-500', bg: 'bg-emerald-50' },
    { label: t('replenish.in_transit'), value: '5 Órdenes', icon: RotateCw, color: 'text-amber-500', bg: 'bg-amber-50' },
    { label: t('replenish.confirm_receipt'), value: '3 Órdenes', icon: PackageCheck, color: 'text-purple-500', bg: 'bg-purple-50' },
  ];

  const orders = [
    { status: 'Generadas - 3', statusColor: 'bg-emerald-50 text-emerald-600', orderNo: 'NO_REP 45367432', med: 'Cápsulas de Amoxicilina', spec: '0.5g*24 /paquete', quantity: '120 Unidades', date: '2025-07-15 10:30' },
    { status: 'Confirmadas - 0', statusColor: 'bg-blue-50 text-blue-600', orderNo: 'NO_REP 45367432', med: 'Comprimidos de Liberación Prolongada de Nifedipino', spec: '20mg*30 comprimidos/paquete', quantity: '30 Unidades', date: '2025-07-14 10:30' },
    { status: 'En Proceso - 2', statusColor: 'bg-purple-50 text-purple-600', orderNo: 'NO_REP 45367432', med: 'Cápsulas Entéricas de Omeprazol', spec: '20mg*14 cápsulas/paquete', quantity: '10 Unidades', date: '2025-07-12 10:30' },
    { status: 'No Satisfechas - 1', statusColor: 'bg-rose-50 text-rose-600', orderNo: 'NO_REP 45367432', med: 'Cápsulas de Clorhidrato de Flunarizina', spec: '5mg*20 cápsulas/paquete', quantity: '25 Unidades', date: '2025-07-11 10:30' },
  ];

  return (
    <div className="space-y-6">
      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {kpis.map((kpi, idx) => (
          <div key={idx} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex items-center gap-4">
            <div className={cn("p-4 rounded-3xl", kpi.bg)}>
              <kpi.icon className={cn("w-6 h-6", kpi.color)} />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{kpi.label}</p>
              <p className="text-2xl font-black text-slate-800 tracking-tight">{kpi.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Table Section */}
      <div className="bg-white rounded-[32px] border border-slate-100 shadow-xl shadow-slate-200/50 overflow-hidden">
        {/* Table Header Controls */}
        <div className="p-6 border-b border-slate-100 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3 flex-1 min-w-[300px]">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input 
                type="text" 
                placeholder="Buscar por Nº de Orden/Hospital/Medicamento" 
                className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="flex items-center gap-2 px-4 py-2.5 bg-white rounded-xl border border-slate-200 text-sm font-bold text-slate-600 hover:bg-slate-50">
              <RotateCw className="w-4 h-4" />
              <span>{t('common.update')}</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2.5 bg-white rounded-xl border border-slate-200 text-sm font-bold text-slate-600 hover:bg-slate-50">
              <Download className="w-4 h-4" />
              <span>{t('common.export')}</span>
            </button>
            <button className="flex items-center gap-2 px-6 py-2.5 bg-[#14532D] text-white rounded-xl text-sm font-bold hover:bg-[#14532D]/90 shadow-lg shadow-green-900/20">
              <Plus className="w-4 h-4" />
              <span>{t('replenish.new_replenish_order')}</span>
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50/50">
                <th className="px-6 py-4 w-12"><input type="checkbox" className="rounded" /></th>
                <th className="px-4 py-4 text-[11px] font-black text-slate-500 uppercase tracking-widest">{t('replenish.order_status')}</th>
                <th className="px-4 py-4 text-[11px] font-black text-slate-500 uppercase tracking-widest">{t('replenish.order_no')}</th>
                <th className="px-4 py-4 text-[11px] font-black text-slate-500 uppercase tracking-widest">{t('replenish.med_name')}</th>
                <th className="px-4 py-4 text-[11px] font-black text-slate-500 uppercase tracking-widest text-center">{t('replenish.quantity_requested')}</th>
                <th className="px-4 py-4 text-[11px] font-black text-slate-500 uppercase tracking-widest">{t('replenish.expected_delivery')}</th>
                <th className="px-4 py-4 text-[11px] font-black text-slate-500 uppercase tracking-widest">ID</th>
                <th className="px-6 py-4 text-[11px] font-black text-slate-500 uppercase tracking-widest text-center">{t('common.actions')}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {orders.map((order, idx) => (
                <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-6 py-4"><input type="checkbox" className="rounded" /></td>
                  <td className="px-4 py-4">
                    <span className={cn("px-4 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-tight", order.statusColor)}>
                      {order.status}
                    </span>
                  </td>
                  <td className="px-4 py-4 text-sm font-bold text-slate-700">{order.orderNo}</td>
                  <td className="px-4 py-4">
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-slate-800">{order.med}</span>
                      <span className="text-[10px] font-medium text-slate-400 uppercase">{order.spec}</span>
                    </div>
                  </td>
                  <td className="px-4 py-4 text-sm font-black text-slate-800 text-center">{order.quantity}</td>
                  <td className="px-4 py-4 text-sm font-medium text-slate-600">{order.date}</td>
                  <td className="px-4 py-4 text-sm font-medium text-slate-500">RI</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-center gap-4">
                      <button className="text-emerald-500 text-xs font-bold hover:underline">{t('common.details')}</button>
                      <button className="text-slate-400 text-xs font-bold hover:text-slate-600">{t('common.edit')}</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="p-6 border-t border-slate-100 flex items-center justify-between">
          <p className="text-xs font-medium text-slate-400">Total <span className="font-bold text-slate-800">56</span> Records</p>
          <div className="flex items-center gap-2">
            <button className="p-2 rounded-lg border border-slate-200 text-slate-400 hover:bg-slate-50 disabled:opacity-50">
              <ChevronLeft className="w-4 h-4" />
            </button>
            {[1, 2, 3, 4, 5].map((page) => (
              <button 
                key={page} 
                className={cn(
                  "w-8 h-8 rounded-lg text-xs font-bold transition-all",
                  page === 1 ? "bg-[#14532D] text-white shadow-lg shadow-green-900/20" : "text-slate-500 hover:bg-slate-50"
                )}
              >
                {page}
              </button>
            ))}
            <button className="p-2 rounded-lg border border-slate-200 text-slate-400 hover:bg-slate-50">
              <ChevronRight className="w-4 h-4" />
            </button>
            <div className="flex items-center gap-2 ml-4">
              <span className="text-xs text-slate-400">Jump to</span>
              <input type="text" className="w-12 h-8 border border-slate-200 rounded-lg text-center text-xs font-bold" />
              <span className="text-xs text-slate-400">page</span>
            </div>
            <select className="ml-4 h-8 border border-slate-200 rounded-lg px-2 text-xs font-bold text-slate-600 outline-none">
              <option>10 / page</option>
              <option>20 / page</option>
              <option>50 / page</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReplenishmentMgmtView;

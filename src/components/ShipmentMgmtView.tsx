import React from 'react';
import { 
  Search, 
  Calendar,
  ChevronDown,
  Plus, 
  ChevronLeft, 
  ChevronRight,
  Filter,
  CheckCheck,
  Printer
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { cn } from '../lib/utils';

const ShipmentMgmtView: React.FC = () => {
  const { t } = useLanguage();

  const shipments = [
    { shipmentNo: 'FH20250703001', lotNo: 'LOTE 001', hospital: 'Hospital General de México', meds: 'Cápsulas de Amoxicilina y 4 más', total: '2,000 Unidades', date: '2025-07-03 10:30', status: 'delivered' },
    { shipmentNo: 'FH20250703002', lotNo: 'LOTE 002', hospital: 'Centro Médico ABC', meds: 'Comprimidos de Ambroxol y 2 más', total: '1,500 Unidades', date: '2025-07-03 09:15', status: 'delivered' },
    { shipmentNo: 'FH20250702003', lotNo: 'LOTE 003', hospital: 'Instituto Nacional de Cancerología', meds: 'Ceftriaxona Inyectable y 7 más', total: '3,000 Unidades', date: '2025-07-02 16:45', status: 'pending_confirm', canConfirm: true },
    { shipmentNo: 'FH20250702004', lotNo: 'LOTE 004', hospital: 'Hospital Comunitario de Iztapalapa', meds: 'Ceftriaxona Inyectable y 7 más', total: '1,800 Unidades', date: '2025-07-02 14:20', status: 'delivered' },
    { shipmentNo: 'FH20250702005', lotNo: 'LOTE 005', hospital: 'Hospital Comunitario de Santa Fe', meds: 'Azitromicina Inyectable y 3 más', total: '1,800 Unidades', date: '2025-07-02 14:20', status: 'delivered' },
    { shipmentNo: 'FH20250702006', lotNo: 'LOTE 006', hospital: 'Hospital Comunitario de Santa Fe', meds: 'Cápsulas de Amoxicilina y 4 más', total: '2,000 Unidades', date: '2025-07-02 14:20', status: 'delivered' },
    { shipmentNo: 'FH20250702007', lotNo: 'LOTE 007', hospital: 'Hospital Comunitario de Santa Fe', meds: 'Comprimidos de Ambroxol y 2 más', total: '1,500 Unidades', date: '2025-07-02 14:20', status: 'delivered' },
  ];

  return (
    <div className="space-y-6">
      {/* Filters Header */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-white rounded-xl border border-slate-200 text-sm font-bold text-slate-700 hover:bg-slate-50 transition-all">
            <Calendar className="w-4 h-4 text-primary" />
            <span>{t('shipment.shipment_date')}</span>
            <ChevronDown className="w-4 h-4 text-slate-400" />
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-white rounded-xl border border-slate-200 text-sm font-bold text-slate-700 hover:bg-slate-50 transition-all">
            <span>{t('shipment.shipment_status')}</span>
            <ChevronDown className="w-4 h-4 text-slate-400" />
          </button>
          <div className="relative min-w-[300px]">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input 
              type="text" 
              placeholder="Buscar por Nº de Envío/Nombre del Hospital" 
              className="w-full bg-white border border-slate-200 rounded-xl pl-10 pr-4 py-2 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
          </div>
        </div>
        <button className="flex items-center gap-2 px-5 py-2.5 bg-[#14532D] text-white rounded-xl text-sm font-bold hover:bg-[#14532D]/90 transition-all shadow-lg shadow-green-900/20">
          <Plus className="w-4 h-4" />
          <span>Nueva Orden de Envío</span>
        </button>
      </div>

      {/* Table Section */}
      <div className="bg-white rounded-[32px] border border-slate-100 shadow-xl shadow-slate-200/50 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50/50">
                <th className="px-6 py-4 w-12"><input type="checkbox" className="rounded" /></th>
                <th className="px-4 py-4 text-[11px] font-black text-slate-500 tracking-widest">{t('shipment.shipment_no')}</th>
                <th className="px-4 py-4 text-[11px] font-black text-slate-500 tracking-widest">{t('shipment.lot_no')}</th>
                <th className="px-4 py-4 text-[11px] font-black text-slate-500 tracking-widest">{t('shipment.receiving_hospital')}</th>
                <th className="px-4 py-4 text-[11px] font-black text-slate-500 tracking-widest">{t('shipment.actual_quantity')}</th>
                <th className="px-4 py-4 text-[11px] font-black text-slate-500 tracking-widest">{t('shipment.actual_delivery_date')}</th>
                <th className="px-6 py-4 text-[11px] font-black text-slate-500 tracking-widest">{t('common.actions')}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {shipments.map((ship, idx) => (
                <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-6 py-4"><input type="checkbox" className="rounded" /></td>
                  <td className="px-4 py-4 text-sm font-bold text-slate-700">{ship.shipmentNo}</td>
                  <td className="px-4 py-4 text-sm font-medium text-slate-500">{ship.lotNo}</td>
                  <td className="px-4 py-4 text-sm font-bold text-slate-700">{ship.hospital}</td>
                  <td className="px-4 py-4">
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-slate-800">{ship.meds}</span>
                      <span className="text-[10px] font-medium text-slate-400">Total: {ship.total}</span>
                    </div>
                  </td>
                  <td className="px-4 py-4 text-sm font-medium text-slate-600">{ship.date}</td>
                  <td className="px-6 py-4">
                    <div className="flex flex-col items-start gap-1">
                      <div className="flex gap-4">
                        <button className="text-emerald-500 text-xs font-bold hover:underline">{t('common.details')}</button>
                        <button className="text-slate-400 text-xs font-bold hover:text-slate-600 flex items-center gap-1">
                          {t('shipment.print')}
                        </button>
                      </div>
                      {ship.canConfirm && (
                        <button className="text-emerald-600 text-xs font-black mt-2 px-3 py-1 bg-emerald-50 rounded-lg hover:bg-emerald-100 transition-colors">
                          Confirmar Recepción
                        </button>
                      )}
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
            <button className="w-8 h-8 rounded-lg text-xs font-bold bg-[#14532D] text-white shadow-lg shadow-green-900/20">1</button>
            {[2, 3, 4, 5].map(p => (
              <button key={p} className="w-8 h-8 rounded-lg text-xs font-bold text-slate-500 hover:bg-slate-50">{p}</button>
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
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShipmentMgmtView;

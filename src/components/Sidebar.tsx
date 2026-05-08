import React, { useState } from 'react';
import { 
  BarChart3, 
  Bell, 
  Package, 
  LineChart, 
  Info, 
  Bot,
  ChevronDown,
  Activity,
  LayoutDashboard,
  BrainCircuit,
  Layers,
  ShoppingCart
} from 'lucide-react';
import { cn } from '../lib/utils';
import { View } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

interface SidebarProps {
  currentView: View;
  onViewChange: (view: View) => void;
}

export default function Sidebar({ currentView, onViewChange }: SidebarProps) {
  const { t } = useLanguage();
  const [expandedItems, setExpandedItems] = useState<string[]>(['prediction', 'inventory', 'basic-info']);

  const navItems = [
    { id: 'data-panel', label: t('nav.data_panel'), icon: Activity },
    { id: 'control', label: t('nav.control'), icon: LayoutDashboard },
    { 
      id: 'prediction', 
      label: t('nav.prediction'), 
      icon: LineChart,
      subItems: [
        { id: 'prediction-summary', label: t('nav.prediction_summary') },
        { id: 'param-config', label: t('nav.param_config') },
        { id: 'prediction-comparison', label: t('nav.prediction_comparison') },
      ]
    },
    { id: 'alerts', label: t('nav.alerts'), icon: Bell },
    { 
      id: 'inventory', 
      label: t('nav.inventory_mgmt'), 
      icon: Layers,
      subItems: [
        { id: 'inv-details', label: t('nav.inv_details') },
        { id: 'cons-analysis', label: t('nav.cons_analysis') },
        { id: 'inv-inbound', label: t('nav.inv_inbound') },
        { id: 'inv-expiry', label: t('nav.inv_expiry') },
      ]
    },
    { 
      id: 'replenishment', 
      label: t('nav.replenish_smart'), 
      icon: ShoppingCart,
      subItems: [
        { id: 'replenish-mgmt', label: t('nav.replenish_mgmt') },
        { id: 'shipment-mgmt', label: t('nav.shipment_mgmt') },
        { id: 'supply-tracking', label: t('nav.supply_tracking') },
      ]
    },
    { 
      id: 'performance', 
      label: t('nav.performance'), 
      icon: BarChart3,
      subItems: [
        { id: 'hospital-perf', label: t('nav.hospital_perf') },
        { id: 'provider-perf', label: t('nav.provider_perf') },
      ]
    },
    { 
      id: 'basic-info', 
      label: t('nav.basic_info'), 
      icon: Info,
      subItems: [
        { id: 'med-info', label: t('nav.med_info') },
        { id: 'pharm-info', label: t('nav.pharm_info') },
        { id: 'prov-info', label: t('nav.prov_info') },
      ]
    },
    { id: 'ai-assistant', label: t('nav.ai_assistant'), icon: Bot },
  ];

  const toggleExpand = (id: string) => {
    setExpandedItems(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  return (
    <aside className="w-72 h-screen bg-sidebar-bg border-r border-slate-200 flex flex-col fixed left-0 top-0 z-20">
      <div className="p-6 flex items-center gap-3 shrink-0">
        <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center shadow-lg shadow-primary/20">
          <Activity className="text-white w-6 h-6" />
        </div>
        <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight whitespace-nowrap">PharmaLink</h2>
      </div>

      <nav className="flex-1 overflow-y-auto px-4 py-4 scrollbar-hide">
        <div className="space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isExpanded = expandedItems.includes(item.id);
            const isParentActive = currentView === item.id || item.subItems?.some(s => s.id === currentView);

            return (
              <div key={item.id} className="space-y-1">
                <button
                  onClick={() => {
                    if (item.subItems) {
                      toggleExpand(item.id);
                    } else {
                      onViewChange(item.id as View);
                    }
                  }}
                  className={cn(
                    "w-full flex items-center justify-between px-3 py-2.5 rounded-lg transition-all group whitespace-nowrap",
                    isParentActive 
                      ? "bg-primary/10 text-primary font-semibold" 
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                  )}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <Icon className={cn("w-4 h-4 shrink-0", isParentActive ? "text-primary" : "text-slate-400 group-hover:text-slate-600")} />
                    <span className="text-xs font-medium truncate">{item.label}</span>
                  </div>
                  {item.subItems && (
                    <ChevronDown className={cn("w-3.5 h-3.5 transition-transform shrink-0", isExpanded ? "rotate-0" : "-rotate-90")} />
                  )}
                </button>

                {item.subItems && isExpanded && (
                  <div className="ml-9 space-y-1 mt-1 transition-all duration-300">
                    {item.subItems.map((sub) => {
                      const isSubActive = currentView === sub.id;
                      return (
                        <button
                          key={sub.id}
                          onClick={() => onViewChange(sub.id as View)}
                          className={cn(
                            "w-full text-left px-3 py-1.5 text-[11px] transition-all rounded-md whitespace-nowrap overflow-hidden text-ellipsis",
                            isSubActive 
                              ? "bg-primary/10 text-primary font-bold" 
                              : "text-slate-500 hover:text-slate-900 hover:bg-slate-50"
                          )}
                        >
                          {sub.label}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </nav>
    </aside>
  );
}

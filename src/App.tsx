import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import DashboardView from './components/DashboardView';
import PredictionView from './components/PredictionView';
import ParameterConfig from './components/ParameterConfig';
import DataPanelView from './components/DataPanelView';
import MedicationInfoView from './components/MedicationInfoView';
import PharmacyInfoView from './components/PharmacyInfoView';
import ProviderInfoView from './components/ProviderInfoView';
import HospitalPerformanceView from './components/HospitalPerformanceView';
import ProviderPerformanceView from './components/ProviderPerformanceView';
import ReplenishmentMgmtView from './components/ReplenishmentMgmtView';
import ShipmentMgmtView from './components/ShipmentMgmtView';
import SupplyTrackingView from './components/SupplyTrackingView';
import AlertsCenterView from './components/AlertsCenterView';
import InventoryDetailsView from './components/InventoryDetailsView';
import ConsumptionAnalysisView from './components/ConsumptionAnalysisView';
import InboundInventoryView from './components/InboundInventoryView';
import ExpiryManagementView from './components/ExpiryManagementView';
import ResultComparisonView from './components/ResultComparisonView';
import AIAssistantView from './components/AIAssistantView';
import { View } from './types';
import { Activity } from 'lucide-react';
import { LanguageProvider, useLanguage } from './contexts/LanguageContext';
import { cn } from './lib/utils';

function AppContent() {
  const [currentView, setCurrentView] = useState<View>('control');
  const { t } = useLanguage();

  const getViewTitle = (view: View) => {
    switch (view) {
      case 'data-panel': return t('nav.data_panel');
      case 'control': return t('nav.control');
      case 'prediction': return t('nav.prediction');
      case 'prediction-summary': return t('nav.prediction_summary');
      case 'param-config': return t('nav.param_config');
      case 'prediction-comparison': return t('nav.prediction_comparison');
      case 'alerts': return t('nav.alerts');
      case 'inventory': return t('nav.inventory_mgmt');
      case 'inv-details': return t('nav.inv_details');
      case 'cons-analysis': return t('nav.cons_analysis');
      case 'inv-inbound': return t('nav.inv_inbound');
      case 'inv-expiry': return t('nav.inv_expiry');
      case 'replenishment': return t('nav.replenish_smart');
      case 'replenish-mgmt': return t('nav.replenish_mgmt');
      case 'shipment-mgmt': return t('nav.shipment_mgmt');
      case 'supply-tracking': return t('nav.supply_tracking');
      case 'performance': return t('nav.performance');
      case 'hospital-perf': return t('nav.hospital_perf');
      case 'provider-perf': return t('nav.provider_perf');
      case 'basic-info': return t('nav.basic_info');
      case 'med-info': return t('nav.med_info');
      case 'pharm-info': return t('nav.pharm_info');
      case 'prov-info': return t('nav.prov_info');
      case 'ai-assistant': return t('nav.ai_assistant');
      default: return 'Module';
    }
  };

  return (
    <div className="min-h-screen bg-app-bg font-sans text-text-main">
      {currentView !== 'data-panel' && (
        <Sidebar 
          currentView={currentView} 
          onViewChange={setCurrentView} 
        />
      )}
      
      <div className={cn("flex flex-col min-h-screen", currentView !== 'data-panel' && "pl-72")}>
        {currentView !== 'data-panel' && <Header title={getViewTitle(currentView)} />}
        
        <main className={cn("flex-1", currentView !== 'data-panel' && currentView !== 'ai-assistant' ? "mt-16 p-8" : currentView === 'ai-assistant' ? "mt-16" : "p-8")}>
          {currentView === 'control' && <DashboardView />}
          {currentView === 'data-panel' && <DataPanelView onClose={() => setCurrentView('control')} />}
          {currentView === 'prediction-summary' && <PredictionView />}
          {currentView === 'param-config' && <ParameterConfig />}
          {currentView === 'med-info' && <MedicationInfoView />}
          {currentView === 'pharm-info' && <PharmacyInfoView />}
          {currentView === 'prov-info' && <ProviderInfoView />}
          {currentView === 'hospital-perf' && <HospitalPerformanceView />}
          {currentView === 'provider-perf' && <ProviderPerformanceView />}
          {currentView === 'replenish-mgmt' && <ReplenishmentMgmtView />}
          {currentView === 'shipment-mgmt' && <ShipmentMgmtView />}
          {currentView === 'supply-tracking' && <SupplyTrackingView />}
          {currentView === 'alerts' && <AlertsCenterView />}
          {currentView === 'inv-details' && <InventoryDetailsView />}
          {currentView === 'cons-analysis' && <ConsumptionAnalysisView />}
          {currentView === 'inv-inbound' && <InboundInventoryView />}
          {currentView === 'inv-expiry' && <ExpiryManagementView />}
          {currentView === 'prediction-comparison' && <ResultComparisonView />}
          {currentView === 'ai-assistant' && <AIAssistantView />}

          {!['control', 'data-panel', 'prediction-summary', 'param-config', 'med-info', 'pharm-info', 'prov-info', 'hospital-perf', 'provider-perf', 'replenish-mgmt', 'shipment-mgmt', 'supply-tracking', 'alerts', 'inv-details', 'cons-analysis', 'inv-inbound', 'inv-expiry', 'prediction-comparison', 'ai-assistant'].includes(currentView) && (
            <div className="flex flex-col items-center justify-center h-[calc(100vh-12rem)]">
              <div className="bg-white p-12 rounded-[32px] border border-slate-100 shadow-xl shadow-slate-200/50 flex flex-col items-center gap-8 max-w-md text-center">
                <div className="w-20 h-20 bg-primary/5 rounded-3xl flex items-center justify-center text-primary border border-primary/10 animate-pulse">
                  <Activity className="w-10 h-10" />
                </div>
                <div>
                  <h3 className="mb-3">Coming Soon</h3>
                  <p className="text-sm text-slate-500 font-medium leading-relaxed px-4">
                    {t('placeholder.module_prepping')}
                    <span className="font-bold text-primary mx-1">{getViewTitle(currentView)}</span>
                    {t('placeholder.explore_control')}
                  </p>
                </div>
                <button 
                  onClick={() => setCurrentView('control')}
                  className="bg-slate-900 text-white w-full py-4 rounded-2xl font-black transition-all hover:bg-slate-800 shadow-lg shadow-slate-900/10 active:scale-95"
                >
                  {t('common.back')}
                </button>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

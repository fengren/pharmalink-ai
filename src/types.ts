export type View = 
  | 'control' 
  | 'prediction' | 'prediction-summary' | 'param-config' | 'prediction-comparison'
  | 'alerts' 
  | 'inventory' | 'inv-details' | 'cons-analysis' | 'inv-inbound' | 'inv-expiry'
  | 'replenishment' | 'replenish-mgmt' | 'shipment-mgmt' | 'supply-tracking'
  | 'performance' | 'hospital-perf' | 'provider-perf'
  | 'basic-info' | 'med-info' | 'pharm-info' | 'prov-info'
  | 'ai-assistant' 
  | 'data-panel';

export interface NavItem {
  id: View;
  label: string;
  icon: string;
  children?: { id: string; label: string }[];
}

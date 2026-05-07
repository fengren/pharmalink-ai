import React, { useState } from 'react';
import { 
  Plus, 
  Search, 
  MessageSquare, 
  Trash2, 
  MoreVertical, 
  Send, 
  BrainCircuit,
  BarChart3,
  FileText,
  User,
  Sparkles,
  Calendar
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { cn } from '../lib/utils';
import { motion } from 'motion/react';

interface ChatHistoryItem {
  id: string;
  title: string;
  date: string;
}

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const AIAssistantView: React.FC = () => {
  const { t } = useLanguage();
  const [input, setInput] = useState('');

  const chatHistory: ChatHistoryItem[] = [
    { id: '1', title: 'Informe de Desempeño del Proveedor', date: '2025-07-02 14:23' },
    { id: '2', title: 'Pronóstico de Inventario y Sugerencias de Reposición', date: '2025-07-01 10:45' },
    { id: '3', title: 'Análisis de Alertas de Caducidad de Medicamentos', date: '2025-06-28 16:12' },
    { id: '4', title: 'Plan de Optimización de la Cadena de Suministro', date: '2025-06-25 09:30' },
    { id: '5', title: 'Estrategia de Control de Costos de Adquisición', date: '2025-06-22 11:18' },
  ];

  const initialMessages: Message[] = [
    { 
      role: 'assistant', 
      content: 'Hola, soy el Asistente Inteligente de IMSS. Estoy encantado de ayudarle. Puedo responder preguntas sobre gestión de proveedores, pronóstico de inventario, caducidad de medicamentos, y más. ¿En qué puedo ayudarle?' 
    },
    { 
      role: 'user', 
      content: 'Quiero saber cómo optimizar la gestión de inventario de nuestro hospital, especialmente para insumos de alto valor. ¿Cómo evitar el exceso de stock y garantizar el suministro?' 
    },
    { 
      role: 'assistant', 
      content: 'Para optimizar el inventario de insumos de alto valor, recomiendo las siguientes estrategias:\n\n1. **Implemente la clasificación ABC**: clasifique los insumos de alto valor en tipos A, B y C según su frecuencia de uso y valor. Aplique un control más estricto a los del tipo A.\n\n2. **Establezca niveles de stock de seguridad**: utilice datos históricos, tiempos de entrega y variabilidad de la demanda para definir el stock de seguridad por producto.\n\n3. **Adopte el reabastecimiento JIT (Justo a Tiempo)**: colabore estrechamente con proveedores clave para entregas frecuentes y en pequeñas cantidades.' 
    }
  ];

  const suggestedQuestions = [
    'Causas de baja rotación de inventario',
    'Cómo configurar alertas de caducidad'
  ];

  return (
    <div className="flex h-[calc(100vh-10rem)] gap-8 overflow-hidden pb-8">
      {/* Sidebar - Chat History */}
      <div className="w-80 flex flex-col bg-white rounded-[40px] border border-slate-100 shadow-xl shadow-slate-200/40 overflow-hidden min-w-[320px]">
        <div className="p-8 border-b border-slate-50 bg-slate-50/20">
          <div className="flex items-center justify-between">
            <h3 className="text-[13px] font-black text-slate-800 uppercase tracking-widest">{t('ai.history_title')}</h3>
            <button className="p-2 hover:bg-slate-100 rounded-xl transition-all">
              <Search className="w-4 h-4 text-slate-400" />
            </button>
          </div>
        </div>
        <div className="flex-1 overflow-y-auto px-6 py-6 space-y-3">
          {chatHistory.map((item) => (
            <button 
              key={item.id}
              className={cn(
                "w-full text-left p-5 rounded-[24px] transition-all border group relative overflow-hidden",
                item.id === '2' 
                  ? "bg-emerald-50/50 border-emerald-100 shadow-sm" 
                  : "bg-white border-transparent hover:bg-slate-50"
              )}
            >
              {item.id === '2' && <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary"></div>}
              <p className={cn(
                "text-xs font-black mb-2 line-clamp-2 leading-tight tracking-tight",
                item.id === '2' ? "text-primary" : "text-slate-700"
              )}>
                {item.title}
              </p>
              <div className="flex items-center gap-2">
                <Calendar className="w-3 h-3 text-slate-300" />
                <p className="text-[10px] font-black text-slate-300 uppercase tracking-tight group-hover:text-slate-400 transition-colors">{item.date}</p>
              </div>
            </button>
          ))}
        </div>
        <div className="p-8 border-t border-slate-50">
          <button className="w-full flex items-center justify-center gap-3 py-4.5 bg-primary text-white rounded-[22px] text-xs font-black hover:bg-[#005a45] transition-all shadow-lg shadow-primary/20 active:scale-95 uppercase tracking-widest">
            <Plus className="w-4 h-4" />
            <span>{t('ai.new_chat')}</span>
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col gap-8 overflow-hidden">
        {/* Chat Interface */}
        <div className="flex-1 bg-white rounded-[40px] border border-slate-100 shadow-xl shadow-slate-200/40 overflow-hidden flex flex-col relative">
          {/* Chat Header */}
          <div className="px-10 py-6 border-b border-slate-50 flex items-center justify-between bg-white/80 backdrop-blur-xl sticky top-0 z-10">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center text-white shadow-lg shadow-primary/20">
                <BrainCircuit className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-base font-black text-slate-900 tracking-tight uppercase leading-none">{t('ai.chat_default_title')}</h3>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1.5">IA Generativa Avanzada Activa</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button className="p-3 text-slate-400 hover:text-rose-500 hover:bg-rose-50 rounded-2xl transition-all">
                <Trash2 className="w-5 h-5" />
              </button>
              <button className="p-3 text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded-2xl transition-all">
                <MoreVertical className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto p-10 space-y-10 bg-slate-50/30">
            {initialMessages.map((msg, idx) => (
              <div 
                key={idx} 
                className={cn(
                  "flex items-start gap-6 max-w-[85%]",
                  msg.role === 'user' ? "ml-auto flex-row-reverse" : ""
                )}
              >
                <div className={cn(
                  "w-12 h-12 rounded-[22px] flex-shrink-0 flex items-center justify-center ring-4 ring-white shadow-xl transition-transform hover:scale-110",
                  msg.role === 'assistant' ? "bg-primary text-white" : "bg-indigo-600 text-white"
                )}>
                  {msg.role === 'assistant' ? <Sparkles className="w-6 h-6" /> : <User className="w-6 h-6" />}
                </div>
                <div className={cn(
                  "p-8 rounded-[40px] text-sm leading-relaxed whitespace-pre-wrap shadow-sm",
                  msg.role === 'assistant' 
                    ? "bg-white text-slate-700 rounded-tl-none border border-slate-100" 
                    : "bg-indigo-600 text-white rounded-tr-none font-medium shadow-indigo-100"
                )}>
                  {msg.content}
                </div>
              </div>
            ))}
          </div>

          {/* Input Area */}
          <div className="p-10 bg-white border-t border-slate-100 space-y-6">
             <div className="flex flex-wrap items-center gap-3">
               <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest self-center mr-3">{t('ai.suggested_questions')}</span>
               {suggestedQuestions.map((q) => (
                 <button 
                   key={q}
                   className="px-5 py-2.5 bg-slate-50 border border-slate-200 rounded-2xl text-[11px] font-black text-slate-600 hover:bg-white hover:border-primary hover:text-primary transition-all shadow-sm"
                 >
                   {q}
                 </button>
               ))}
               <button className="p-2 text-primary hover:bg-primary/5 rounded-full transition-colors">
                  <Plus className="w-4 h-4" />
               </button>
             </div>
             <div className="relative group">
               <input 
                 type="text"
                 value={input}
                 onChange={(e) => setInput(e.target.value)}
                 placeholder={t('ai.input_placeholder')}
                 className="w-full bg-slate-50 border border-slate-200 rounded-[30px] py-6 pl-8 pr-20 text-sm font-medium focus:outline-none focus:ring-4 focus:ring-primary/5 focus:bg-white focus:border-primary transition-all shadow-inner"
               />
               <button className={cn(
                 "absolute right-3 top-1/2 -translate-y-1/2 p-4 rounded-[22px] transition-all shadow-lg active:scale-90",
                 input.trim() ? "bg-primary text-white shadow-primary/30" : "bg-slate-200 text-slate-400"
               )}>
                 <Send className="w-5 h-5" />
               </button>
             </div>
             <div className="flex items-center justify-center gap-8">
                {[
                  { label: 'Smart Analysis', icon: BrainCircuit },
                  { label: 'Data Insights', icon: BarChart3 },
                  { label: 'Report Gen', icon: FileText },
                ].map(item => (
                  <div key={item.label} className="flex items-center gap-2 opacity-30 hover:opacity-100 transition-opacity cursor-pointer grayscale hover:grayscale-0">
                    <item.icon className="w-3.5 h-3.5 text-slate-400" />
                    <span className="text-[9px] font-black text-slate-400 uppercase tracking-tighter">{item.label}</span>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIAssistantView;

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
      content: 'Para optimizar el inventario de insumos de alto valor, recomiendo las siguientes estrategias:\n\n1. **Implemente la clasificación ABC**:\nclasifique los insumos de alto valor en tipos A, B y C según su frecuencia de uso y valor. Aplique un control más estricto a los del tipo A.\n\n2. **Establezca niveles de stock de seguridad**:\nutilice datos históricos, tiempos de entrega y variabilidad de la demanda para definir el stock de seguridad por producto.\n\n3. **Adopte el reabastecimiento JIT (Justo a Tiempo)**:\ncolabore estrechamente con proveedores clave para entregas frecuentes y en pequeñas cantidades.' 
    }
  ];

  const suggestedQuestions = [
    'Causas de baja rotación de inventario',
    'Cómo configurar alertas de caducidad'
  ];

  return (
    <div className="flex h-[calc(100vh-4rem)] gap-0 overflow-hidden bg-white">
      {/* Sidebar - Chat History */}
      <div className="w-64 flex flex-col bg-[#F8F9FA] border-r border-slate-200">
        <div className="p-5 px-6">
          <h3 className="text-[11px] font-black text-slate-400 tracking-widest uppercase mb-4">{t('ai.history_title')}</h3>
        </div>
        
        <div className="flex-1 overflow-y-auto">
          {chatHistory.map((item) => (
            <button 
              key={item.id}
              className={cn(
                "w-full text-left px-6 py-4 border-t border-slate-100 transition-colors hover:bg-slate-200/50",
                item.id === '2' ? "bg-white border-l-4 border-l-[#006B5D]" : "border-l-4 border-l-transparent"
              )}
            >
              <p className={cn(
                "text-[11px] font-bold mb-1 leading-snug line-clamp-1",
                item.id === '2' ? "text-[#006B5D]" : "text-slate-700"
              )}>
                {item.title}
              </p>
              <p className="text-[9px] font-bold text-slate-400 uppercase tracking-tighter">{item.date}</p>
            </button>
          ))}
        </div>

        <div className="p-6 border-t border-slate-100">
          <button className="w-full flex items-center justify-center gap-2 py-3 bg-[#006B5D] text-white rounded-xl text-[11px] font-black hover:bg-[#005a4e] transition-all shadow-lg shadow-emerald-900/10 active:scale-95 tracking-widest uppercase">
            <Plus className="w-3.5 h-3.5" />
            <span>{t('ai.new_chat')}</span>
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col bg-white relative">
        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-6">
          {initialMessages.map((msg, idx) => (
            <div 
              key={idx} 
              className={cn(
                "flex items-start gap-3 max-w-4xl mx-auto w-full",
                msg.role === 'user' ? "flex-row-reverse" : "flex-row"
              )}
            >
              {/* Avatar Icons */}
              <div className={cn(
                "w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center shadow-sm",
                msg.role === 'assistant' ? "bg-[#004D40] text-emerald-100" : "bg-[#2196F3] text-white"
              )}>
                {msg.role === 'assistant' ? (
                  <BrainCircuit className="w-4 h-4" />
                ) : (
                  <span className="text-[10px] font-bold">张</span>
                )}
              </div>

              {/* Message Bubble */}
              <div className={cn(
                "p-4 rounded-2xl text-[11px] leading-relaxed shadow-sm",
                msg.role === 'assistant' 
                  ? "bg-[#F3F4F6] text-slate-700 border border-slate-100" 
                  : "bg-[#006B5D] text-white font-medium"
              )}>
                <div className="whitespace-pre-wrap">
                  {msg.content.split('\n').map((line, i) => {
                    if (line.match(/^\d\./)) {
                      return (
                        <p key={i} className="mb-1.5">
                           <span className="font-bold">{line}</span>
                        </p>
                      );
                    }
                    return line ? (
                      <p key={i} className="mb-1.5 last:mb-0">
                        {line.split('**').map((part, j) => j % 2 === 1 ? <span key={j} className="font-bold">{part}</span> : part)}
                      </p>
                    ) : <div key={i} className="h-1" />;
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Input Area */}
        <div className="px-8 pb-8 pt-4 bg-white border-t border-slate-100">
          <div className="max-w-3xl mx-auto">
            <div className="mb-4">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">{t('ai.suggested_questions')}</p>
              <div className="flex flex-wrap gap-2">
                {suggestedQuestions.map((q) => (
                  <button 
                    key={q}
                    className="px-3 py-1.5 bg-[#F3F4F6] border border-slate-200 rounded-lg text-[10px] font-bold text-slate-600 hover:bg-white hover:border-emerald-500 hover:text-emerald-700 transition-all shadow-sm"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="relative flex items-center gap-3">
               <div className="flex-1 relative group">
                 <input 
                   type="text"
                   value={input}
                   onChange={(e) => setInput(e.target.value)}
                   placeholder="Ingrese su pregunta..."
                   className="w-full bg-[#F8F9FA] border border-slate-200 rounded-xl py-3 pl-5 pr-14 text-[12px] font-medium focus:outline-none focus:ring-4 focus:ring-emerald-500/5 focus:bg-white focus:border-emerald-500 transition-all placeholder:text-slate-400 shadow-inner"
                 />
               </div>
               <button className={cn(
                 "w-12 h-10 flex-shrink-0 flex items-center justify-center rounded-xl transition-all shadow-lg active:scale-90",
                 input.trim() ? "bg-[#006B5D] text-white shadow-emerald-900/20" : "bg-slate-200 text-slate-400"
               )}>
                 <Send className="w-4 h-4 rotate-[-45deg] translate-y-[-1px] translate-x-[2px]" />
               </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIAssistantView;

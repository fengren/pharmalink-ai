import React from 'react';
import { Bell, Sparkles, ChevronDown, Languages } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface HeaderProps {
  title: string;
}

export default function Header({ title }: HeaderProps) {
  const { language, setLanguage, t } = useLanguage();

  return (
    <header className="h-16 bg-white border-b border-border-subtle flex items-center justify-between px-8 fixed top-0 right-0 left-64 z-10 shadow-[0_1px_2px_rgba(0,0,0,0.03)]">
      <h1 className="text-lg font-bold text-slate-800 tracking-tight">{title}</h1>

      <div className="flex items-center gap-6">
        <div className="flex items-center gap-4">
          <div className="relative">
            <select className="appearance-none bg-slate-50/50 border border-border-subtle rounded-lg px-4 py-1.5 pr-10 text-xs font-semibold text-slate-600 focus:outline-none focus:ring-2 focus:ring-primary/10 transition-all">
              <option>{t('header.all_hospitals')}</option>
              <option>Hospital General de México</option>
              <option>Centro Médico ABC</option>
            </select>
            <ChevronDown className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button 
            onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
            className="flex items-center gap-2 px-3 py-1.5 bg-slate-50 border border-border-subtle rounded-lg text-[10px] font-black uppercase tracking-widest text-slate-500 hover:bg-slate-100 transition-all"
            title="Switch Language"
          >
            <Languages className="w-3.5 h-3.5 text-primary" />
            {language}
          </button>

          <button className="p-2 text-slate-400 hover:bg-slate-50 rounded-lg transition-colors relative group">
            <Bell className="w-5 h-5 group-hover:text-slate-600" />
            <span className="absolute top-2 right-2 w-2 h-2 bg-rose-500 rounded-full border-2 border-white"></span>
          </button>
          <button className="p-2 text-primary hover:bg-primary/10 rounded-lg transition-colors">
            <Sparkles className="w-5 h-5" />
          </button>
        </div>

        <div className="h-6 w-px bg-slate-200 mx-2"></div>

        <button className="flex items-center gap-3 pl-2 group">
          <div className="flex flex-col items-end mr-1">
            <p className="text-sm font-bold text-slate-700 leading-none">Dr. Zhang</p>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">{t('header.admin')}</p>
          </div>
          <div className="w-9 h-9 bg-slate-800 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-inner overflow-hidden border-2 border-white">
            Z
          </div>
          <ChevronDown className="w-4 h-4 text-slate-400 group-hover:text-slate-600" />
        </button>
      </div>
    </header>
  );
}

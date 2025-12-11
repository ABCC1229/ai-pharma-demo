import React from 'react';
import { Screen } from '../types';
import { Bot, User, ArrowRight, ShieldCheck } from 'lucide-react';

interface HomeScreenProps {
  onNavigate: (screen: Screen) => void;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[65vh] space-y-10 text-center">
      
      {/* Hero Text */}
      <div className="space-y-6 max-w-xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 shadow-sm mb-2">
          <ShieldCheck className="w-4 h-4 text-blue-600" />
          <span className="text-xs font-bold text-blue-700 uppercase tracking-wider">Trusted Healthcare AI</span>
        </div>
        
        <h2 className="text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
          Modernizing <br />
          <span className="text-gradient-primary">
            Indian Pharmacies
          </span>
        </h2>
        
        <p className="text-slate-500 text-lg md:text-xl leading-relaxed max-w-md mx-auto font-medium">
          The intelligent operating system for pharmacy management, safety checks, and patient care.
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col gap-4 w-full max-w-sm">
        <button
          onClick={() => onNavigate(Screen.AI_DEMO)}
          className="group relative w-full bg-gradient-premium-button text-white px-8 py-5 rounded-full shadow-xl shadow-blue-500/20 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] overflow-hidden"
        >
          <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 rounded-full"></div>
          <div className="relative flex items-center justify-center gap-3">
            <Bot className="w-6 h-6" />
            <span className="font-bold text-lg tracking-wide">Launch AI Demo</span>
            <ArrowRight className="w-5 h-5 opacity-70 group-hover:translate-x-1 transition-all" />
          </div>
        </button>

        <button
          onClick={() => onNavigate(Screen.ABOUT)}
          className="group w-full bg-white text-slate-700 border border-slate-200 px-8 py-5 rounded-full shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-3"
        >
          <User className="w-5 h-5 text-slate-400 group-hover:text-blue-600 transition-colors" />
          <span className="font-semibold text-lg">Founder & Vision</span>
        </button>
      </div>

      <div className="pt-8 opacity-60">
        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">
          Powered by Gemini 2.0 Flash
        </p>
      </div>
    </div>
  );
};

export default HomeScreen;
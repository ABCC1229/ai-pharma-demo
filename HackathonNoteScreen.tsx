import React from 'react';
import { Info, AlertCircle } from 'lucide-react';

const HackathonNoteScreen: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto h-[60vh] flex flex-col justify-center items-center">
      <div className="glass-card w-full rounded-[32px] overflow-hidden relative shadow-2xl shadow-blue-900/10">
        <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-premium-header"></div>
        
        <div className="p-10 text-center">
          <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm">
            <Info className="w-8 h-8 text-blue-600" />
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mb-6">
            Prototype Disclaimer
          </h2>

          <div className="space-y-6 text-slate-600 leading-relaxed font-medium">
            <p>
              This application is a functional prototype designed for <span className="text-blue-600 font-bold">Hackathon Demonstration</span> purposes.
            </p>
            
            <div className="bg-amber-50/80 border border-amber-100 rounded-2xl p-5 flex items-start gap-3 text-left">
              <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <p className="text-amber-800 text-sm font-semibold">
                Backend services, payment gateways, and database connections are simulated. Do not use for real medical prescriptions.
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-slate-50/50 p-4 text-center border-t border-slate-100">
          <p className="text-[10px] text-slate-400 uppercase tracking-[0.2em] font-bold">
            AI-Pharma Build v0.1 • Hackathon Edition
          </p>
        </div>
      </div>
    </div>
  );
};

export default HackathonNoteScreen;
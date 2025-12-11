import React, { useState } from 'react';
import { 
  LayoutDashboard, CreditCard, Package, AlertTriangle, 
  Truck, Stethoscope, FileBarChart, Bot, X
} from 'lucide-react';

const FuturePreviewScreen: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleCardClick = () => {
    setShowPopup(true);
  };

  return (
    <div className="pb-10">
      <div className="text-center mb-10 space-y-3">
        <h2 className="text-3xl font-bold text-slate-900">Future Ecosystem</h2>
        <p className="text-slate-500 font-medium max-w-md mx-auto">
          A preview of the enterprise modules coming in the full build.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12">
        <PreviewCard onClick={handleCardClick} icon={LayoutDashboard} title="Dashboard" gradient="from-blue-500 to-blue-600" />
        <PreviewCard onClick={handleCardClick} icon={CreditCard} title="Billing" gradient="from-emerald-500 to-teal-500" />
        <PreviewCard onClick={handleCardClick} icon={Package} title="Inventory" gradient="from-violet-500 to-purple-600" />
        <PreviewCard onClick={handleCardClick} icon={AlertTriangle} title="Expiry Alerts" gradient="from-orange-500 to-amber-500" />
        <PreviewCard onClick={handleCardClick} icon={Truck} title="Suppliers" gradient="from-cyan-500 to-blue-500" />
        <PreviewCard onClick={handleCardClick} icon={Stethoscope} title="Doctors" gradient="from-pink-500 to-rose-500" />
        <PreviewCard onClick={handleCardClick} icon={FileBarChart} title="Analytics" gradient="from-indigo-500 to-blue-600" />
        <PreviewCard onClick={handleCardClick} icon={Bot} title="AI Assistant" gradient="from-teal-400 to-emerald-500" />
      </div>

      <div className="flex justify-center">
        <div className="glass-panel px-6 py-2 rounded-full flex items-center gap-2">
           <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
           <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Development In Progress</span>
        </div>
      </div>

      {/* Glass Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center px-4">
          <div className="absolute inset-0 bg-slate-900/20 backdrop-blur-sm transition-opacity" onClick={() => setShowPopup(false)}></div>
          <div className="glass-card rounded-[32px] p-8 max-w-sm w-full relative transform animate-premium-entry shadow-2xl">
            <button 
              onClick={() => setShowPopup(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 p-2 hover:bg-slate-100 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-premium-button flex items-center justify-center shadow-lg shadow-blue-500/30">
                <Bot className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900">Coming Soon</h3>
                <p className="text-slate-500 mt-2 text-sm leading-relaxed">
                  This enterprise feature is currently under development for the full production build.
                </p>
              </div>
              <button 
                onClick={() => setShowPopup(false)}
                className="mt-4 w-full py-3 rounded-xl bg-slate-100 text-slate-700 font-semibold text-sm hover:bg-slate-200 transition-colors"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

interface PreviewCardProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  gradient: string;
  onClick: () => void;
}

const PreviewCard: React.FC<PreviewCardProps> = ({ icon: Icon, title, gradient, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className="group glass-card p-6 rounded-[24px] flex flex-col items-center justify-center gap-4 cursor-pointer transition-premium hover:scale-105 active:scale-95 hover:shadow-xl hover:border-blue-200"
    >
      <div className={`bg-gradient-to-br ${gradient} p-4 rounded-2xl text-white shadow-lg opacity-90 group-hover:opacity-100 transition-opacity`}>
        <Icon className="w-7 h-7" />
      </div>
      <h3 className="font-bold text-slate-700 text-sm group-hover:text-blue-600 transition-colors">
        {title}
      </h3>
    </div>
  );
};

export default FuturePreviewScreen;
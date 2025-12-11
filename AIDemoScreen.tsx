import React, { useState } from 'react';
import { Search, Loader2, Pill, AlertTriangle, Sparkles } from 'lucide-react';

const AIDemoScreen: React.FC = () => {
  const [query, setQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    
    setIsSearching(true);
    setShowResult(false);
    
    setTimeout(() => {
      setIsSearching(false);
      setShowResult(true);
    }, 1500);
  };

  return (
    <div className="max-w-xl mx-auto space-y-8 animate-fade-in">
      <div className="text-center space-y-3">
        <h2 className="text-2xl font-bold text-slate-900">Medicine Intelligence</h2>
        <p className="text-slate-500">Instant substitutes, safety checks & analysis.</p>
      </div>

      <form onSubmit={handleSearch} className="relative group">
        <div className="absolute -inset-0.5 bg-gradient-premium-button rounded-full opacity-30 group-hover:opacity-50 blur transition duration-500"></div>
        <div className="relative flex items-center bg-white rounded-full p-2 shadow-sm">
           <Search className="ml-4 text-slate-400 w-5 h-5" />
           <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search medicine (e.g. Dolo 650)"
            className="w-full bg-transparent px-4 py-3 text-slate-700 placeholder-slate-400 focus:outline-none font-medium"
          />
          <button 
            type="submit"
            className="bg-gradient-premium-button text-white px-6 py-2.5 rounded-full font-semibold shadow-md hover:shadow-lg transition-all active:scale-95 flex items-center gap-2"
          >
            {isSearching ? <Loader2 className="w-4 h-4 animate-spin" /> : <Sparkles className="w-4 h-4" />}
            <span>Analyze</span>
          </button>
        </div>
      </form>

      {showResult && (
        <div className="glass-card rounded-[28px] overflow-hidden animate-premium-entry border border-white/60">
          <div className="bg-emerald-50/50 p-6 flex items-center gap-3 border-b border-emerald-100/50">
            <div className="p-2 bg-emerald-100 rounded-xl">
               <Pill className="w-5 h-5 text-emerald-600" />
            </div>
            <div>
               <h3 className="font-bold text-emerald-900">Analysis Complete</h3>
               <p className="text-emerald-700/70 text-xs font-medium uppercase tracking-wider">Verified by AI</p>
            </div>
          </div>
          
          <div className="p-6 space-y-6">
            <div>
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Cost-Effective Substitutes</h4>
              <div className="space-y-3">
                <SubstituteRow name="Para-500 Tab" price="₹12.50" original="₹30" />
                <SubstituteRow name="Acetamol Gen" price="₹10.00" original="₹30" />
              </div>
            </div>

            <div className="bg-amber-50 rounded-2xl p-4 border border-amber-100 flex gap-4">
              <AlertTriangle className="w-6 h-6 text-amber-500 shrink-0 mt-0.5" />
              <div className="space-y-1">
                 <h5 className="font-bold text-amber-800 text-sm">Safety Precaution</h5>
                 <p className="text-sm text-amber-700 leading-relaxed opacity-90">
                  Contains Paracetamol. Avoid concurrent use with other acetaminophen products to prevent liver toxicity.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const SubstituteRow: React.FC<{ name: string, price: string, original: string }> = ({ name, price, original }) => (
  <div className="flex justify-between items-center p-4 bg-slate-50/80 rounded-2xl hover:bg-white transition-colors border border-transparent hover:border-blue-100 group">
    <div className="flex items-center gap-3">
       <div className="w-2 h-2 rounded-full bg-blue-400 group-hover:scale-125 transition-transform"></div>
       <span className="font-semibold text-slate-700">{name}</span>
    </div>
    <div className="text-right">
      <span className="block font-bold text-emerald-600">{price}</span>
      <span className="text-xs text-slate-400 line-through">{original}</span>
    </div>
  </div>
);

export default AIDemoScreen;
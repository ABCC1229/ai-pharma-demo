import React from 'react';
import { User, HeartPulse, ShieldCheck, Brain, ArrowRight, Phone, Instagram, Award } from 'lucide-react';

const AboutScreen: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto space-y-8 pb-10">
      {/* Founder Card */}
      <div className="glass-card rounded-[32px] overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-blue-900/5">
        <div className="relative h-32 bg-gradient-premium-header">
           <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2">
              <div className="w-40 h-40 rounded-full p-1 bg-white shadow-2xl shadow-blue-900/20">
                 {/* 
                     USING DIRECT IMAGE SOURCE PATTERN AS REQUESTED.
                     NO FALLBACK LOGIC. NO PLACEHOLDER.
                 */}
                 <img 
                   src="https://i.ibb.co/RkszKNxF/founder.jpg" 
                   alt="Ali Rafiq Khokhar"
                   className="w-full h-full object-cover rounded-full border-4 border-white"
                 />
              </div>
           </div>
        </div>
        
        <div className="pt-20 pb-8 px-8 text-center">
            <h3 className="text-2xl font-bold text-slate-900 mb-1">Ali Rafiq Khokhar</h3>
            <p className="text-blue-500 font-semibold mb-6">@DiamondAli</p>
            
            <div className="flex flex-wrap justify-center gap-3 mb-8">
               <Badge icon={ShieldCheck} text="Cybersecurity" color="text-teal-600" bg="bg-teal-50" />
               <Badge icon={HeartPulse} text="App Dev" color="text-blue-600" bg="bg-blue-50" />
               <Badge icon={Brain} text="AI Expert" color="text-purple-600" bg="bg-purple-50" />
            </div>

            <div className="grid grid-cols-2 gap-4 border-t border-slate-100 pt-6 max-w-md mx-auto">
              <ContactPill icon={Phone} text="+91 7567649104" href="tel:+917567649104" />
              <ContactPill icon={Instagram} text="@DiamondAliWeb" href="#" />
            </div>
        </div>
      </div>

      {/* Concept Card */}
      <div className="glass-card rounded-[32px] p-8 border-l-4 border-l-[#0CCFD1]">
        <div className="flex items-start justify-between mb-6">
           <div>
             <h2 className="text-xl font-bold text-slate-900">About AI-Pharma</h2>
             <p className="text-slate-500 text-sm mt-1">Smart Medical Ecosystem</p>
           </div>
           <div className="p-3 bg-blue-50 rounded-2xl">
             <Award className="w-6 h-6 text-blue-600" />
           </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mb-8">
           <FeatureItem text="Substitute Finder" />
           <FeatureItem text="Safety Warnings" />
           <FeatureItem text="AI Prescription Read" />
           <FeatureItem text="Workflow Automation" />
        </div>

        <div className="bg-gradient-to-r from-slate-50 to-white border border-slate-100 rounded-2xl p-6 text-center shadow-sm">
           <p className="text-slate-600 italic font-medium leading-relaxed">
             "To modernize Indian pharmacies with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500 font-bold">AI automation</span> and smart tools."
           </p>
        </div>
      </div>
    </div>
  );
};

const Badge: React.FC<{ icon: any, text: string, color: string, bg: string }> = ({ icon: Icon, text, color, bg }) => (
  <div className={`flex items-center gap-1.5 px-4 py-2 rounded-full ${bg} border border-transparent hover:border-slate-200 transition-colors`}>
    <Icon className={`w-3.5 h-3.5 ${color}`} />
    <span className={`text-xs font-bold ${color} tracking-wide uppercase`}>{text}</span>
  </div>
);

const ContactPill: React.FC<{ icon: any, text: string, href: string }> = ({ icon: Icon, text, href }) => (
  <a href={href} className="flex flex-col items-center justify-center gap-2 p-3 rounded-2xl hover:bg-slate-50 transition-colors group">
    <Icon className="w-5 h-5 text-slate-400 group-hover:text-blue-600 transition-colors" />
    <span className="text-xs font-semibold text-slate-600">{text}</span>
  </a>
);

const FeatureItem: React.FC<{ text: string }> = ({ text }) => (
  <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50/50 hover:bg-white border border-transparent hover:border-slate-100 transition-all shadow-sm">
    <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
      <ArrowRight className="w-3 h-3 text-blue-600" />
    </div>
    <span className="text-sm font-semibold text-slate-700">{text}</span>
  </div>
);

export default AboutScreen;
import React from 'react';
import { Screen } from '../types';
import { User, Rocket, Info } from 'lucide-react';

interface NavigationProps {
  currentScreen: Screen;
  onNavigate: (screen: Screen) => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentScreen, onNavigate }) => {
  const navItems = [
    { id: Screen.ABOUT, label: 'About', icon: User },
    { id: Screen.FUTURE, label: 'Future', icon: Rocket },
    { id: Screen.DISCLAIMER, label: 'Note', icon: Info },
  ];

  return (
    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 w-auto">
      <div className="glass-panel rounded-full p-2 flex items-center gap-2 shadow-2xl shadow-blue-900/10">
        {navItems.map((item) => {
          const isActive = currentScreen === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`
                relative flex items-center gap-2.5 px-6 py-3.5 rounded-full transition-all duration-300 font-semibold text-sm group
                ${isActive 
                  ? 'bg-gradient-premium-button text-white shadow-lg shadow-blue-500/30 scale-105' 
                  : 'text-slate-500 hover:text-slate-700 hover:bg-slate-50/50'
                }
              `}
            >
              <item.icon 
                className={`w-4 h-4 transition-transform duration-300 ${isActive ? 'scale-110' : 'group-hover:scale-110'}`} 
              />
              <span>{item.label}</span>
              
              {/* Subtle shine effect for active tab */}
              {isActive && (
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/20 to-transparent opacity-50 pointer-events-none"></div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Navigation;
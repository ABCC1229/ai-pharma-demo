import React, { useState, useRef } from 'react';
import { Screen } from './types';
import HomeScreen from './components/HomeScreen';
import AIDemoScreen from './components/AIDemoScreen';
import AboutScreen from './components/AboutScreen';
import FuturePreviewScreen from './components/FuturePreviewScreen';
import HackathonNoteScreen from './components/HackathonNoteScreen';
import Navigation from './components/Navigation';
import { Activity, ArrowLeft, Sparkles } from 'lucide-react';

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<Screen>(Screen.HOME);
  
  // Swipe Logic
  const touchStart = useRef<number | null>(null);
  const touchEnd = useRef<number | null>(null);
  
  const tabOrder = [Screen.HOME, Screen.ABOUT, Screen.FUTURE, Screen.DISCLAIMER];

  const onTouchStart = (e: React.TouchEvent) => {
    touchEnd.current = null; 
    touchStart.current = e.targetTouches[0].clientX;
  };

  const onTouchMove = (e: React.TouchEvent) => {
    touchEnd.current = e.targetTouches[0].clientX;
  };

  const onTouchEnd = () => {
    if (!touchStart.current || !touchEnd.current) return;
    const distance = touchStart.current - touchEnd.current;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    const currentIndex = tabOrder.indexOf(currentScreen);
    if (currentIndex === -1) return;

    if (isLeftSwipe && currentIndex < tabOrder.length - 1) {
      setCurrentScreen(tabOrder[currentIndex + 1]);
    }

    if (isRightSwipe && currentIndex > 0) {
      setCurrentScreen(tabOrder[currentIndex - 1]);
    }
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case Screen.HOME:
        return <HomeScreen onNavigate={setCurrentScreen} />;
      case Screen.AI_DEMO:
        return <AIDemoScreen />;
      case Screen.ABOUT:
        return <AboutScreen />;
      case Screen.FUTURE:
        return <FuturePreviewScreen />;
      case Screen.DISCLAIMER:
        return <HackathonNoteScreen />;
      default:
        return <HomeScreen onNavigate={setCurrentScreen} />;
    }
  };

  const showBottomNav = [Screen.ABOUT, Screen.FUTURE, Screen.DISCLAIMER].includes(currentScreen) || currentScreen === Screen.HOME;
  const showBackButton = currentScreen === Screen.AI_DEMO;

  return (
    <div 
      className="min-h-screen bg-[#F5F8FF] text-slate-800 pb-32 relative overflow-hidden"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {/* Soft Background Gradient Blobs */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] bg-blue-100/50 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute top-[40%] -left-[10%] w-[500px] h-[500px] bg-teal-100/40 rounded-full blur-3xl opacity-60"></div>
      </div>

      {/* Premium Header */}
      <header className="sticky top-0 z-40 transition-all duration-300">
        <div className="bg-gradient-premium-header shadow-lg shadow-blue-900/10 rounded-b-[30px]">
          <div className="max-w-5xl mx-auto px-6 py-6 flex items-center justify-between">
            <div className="flex items-center gap-3 cursor-pointer group" onClick={() => setCurrentScreen(Screen.HOME)}>
              {showBackButton ? (
                 <button 
                  onClick={(e) => { e.stopPropagation(); setCurrentScreen(Screen.HOME); }} 
                  className="mr-1 p-2 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-md transition-all"
                 >
                   <ArrowLeft className="w-5 h-5 text-white" />
                 </button>
              ) : (
                <div className="bg-white/10 p-2.5 rounded-xl backdrop-blur-md border border-white/10 shadow-inner">
                  <Activity className="w-6 h-6 text-white" />
                </div>
              )}
              <div className="flex flex-col">
                <h1 className="text-xl font-bold text-white tracking-tight leading-none">
                  AI-Pharma
                </h1>
                <span className="text-[10px] text-blue-100 font-medium tracking-widest uppercase mt-1 opacity-80">
                  Enterprise Health
                </span>
              </div>
            </div>
            
            <div className="flex items-center gap-2 bg-white/10 border border-white/10 px-3 py-1.5 rounded-full backdrop-blur-md">
              <Sparkles className="w-3 h-3 text-cyan-200" />
              <span className="text-[10px] font-bold text-white tracking-wider">DEMO v1.0</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-4xl mx-auto px-6 py-8 md:py-12 relative z-10">
        <div className="animate-premium-entry">
          {renderScreen()}
        </div>
      </main>

      {/* Navigation */}
      {showBottomNav && (
        <Navigation currentScreen={currentScreen} onNavigate={setCurrentScreen} />
      )}
    </div>
  );
};

export default App;
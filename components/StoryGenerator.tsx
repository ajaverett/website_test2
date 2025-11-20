import React from 'react';

interface StoryGeneratorProps {
  onStart: () => void;
}

export const StoryGenerator: React.FC<StoryGeneratorProps> = ({ onStart }) => {
  return (
    <section className="relative w-full bg-[#0f172a] text-white overflow-hidden snap-start h-screen flex items-center justify-center">
      {/* Hero Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Column */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            <div>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight mb-6">
                Magnetic <br className="hidden lg:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                  Scrollytelling
                </span>
              </h1>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Experience an immersive, scroll-snapping narrative layout. 
                Decoupled visuals and magnetic anchors create a seamless reading experience.
              </p>
            </div>

            <div className="w-full max-w-lg mx-auto lg:mx-0 pt-4">
              <button
                onClick={onStart}
                className="px-8 py-4 rounded-lg bg-white text-slate-900 font-bold text-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-white transition-all whitespace-nowrap shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]"
              >
                Begin Journey
              </button>
            </div>
            
            <div className="pt-8 flex flex-wrap justify-center lg:justify-start gap-6 text-sm font-medium text-slate-400">
               <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                  Scroll Snap
               </span>
               <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                  React 19
               </span>
               <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-purple-400"></span>
                  Sticky Visuals
               </span>
            </div>
          </div>

          {/* Visual Column */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
             <div className="relative group cursor-default">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-pink-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative w-64 h-64 md:w-80 md:h-80 bg-slate-800 ring-1 ring-white/10 rounded-2xl flex items-center justify-center overflow-hidden shadow-2xl transform rotate-3 transition-transform group-hover:rotate-0 duration-500">
                   <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-700/50 to-slate-900"></div>
                   {/* Abstract Icon */}
                   <svg className="w-32 h-32 text-white/20 group-hover:text-white/90 transition-colors duration-700 transform group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                   </svg>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

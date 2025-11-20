import React from 'react';
import { StoryStep } from '../types';

interface VisualPanelProps {
  activeStep: StoryStep;
  totalSteps: number;
}

export const VisualPanel: React.FC<VisualPanelProps> = ({ activeStep, totalSteps }) => {
  return (
    <div className="sticky top-6 h-[calc(100vh-3rem)] w-full rounded-3xl overflow-hidden shadow-2xl border border-gray-200 transition-all duration-700 ease-out">
      <div
        className="absolute inset-0 transition-colors duration-700 ease-linear flex items-center justify-center p-8 text-center"
        style={{ backgroundColor: activeStep.color }}
      >
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent scale-150" />
        
        <div className="relative z-10 text-white max-w-lg">
            <div className="mb-6 flex justify-center">
                 <span className="inline-flex items-center justify-center w-16 h-16 rounded-full border-2 border-white/30 bg-white/10 text-xl font-bold backdrop-blur-sm">
                    {activeStep.id + 1} / {totalSteps}
                 </span>
            </div>
          
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 drop-shadow-md transition-all duration-500 transform translate-y-0 opacity-100">
            {activeStep.visualText}
          </h1>
          
          <div className="w-24 h-1 bg-white/40 mx-auto rounded-full" />
        </div>
      </div>
    </div>
  );
};

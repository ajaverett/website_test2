import React, { useRef, useEffect } from 'react';
import { StoryStep as StoryStepType } from '../types';

interface StoryStepProps {
  step: StoryStepType;
  isActive: boolean;
  onIntersect: (id: number) => void;
}

export const StoryStep: React.FC<StoryStepProps> = ({ step, isActive, onIntersect }) => {
  const stepRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = stepRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            onIntersect(step.id);
          }
        });
      },
      {
        root: null, // viewport
        rootMargin: '-40% 0px -40% 0px', // Trigger when element is in the middle 20% of screen
        threshold: 0.1,
      }
    );

    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [step.id, onIntersect]);

  return (
    <div
      ref={stepRef}
      className={`
        transition-all duration-700 ease-out
        mb-[70vh] last:mb-0
        p-8 md:p-12 rounded-3xl border
        snap-start scroll-mt-8
        ${isActive 
          ? 'bg-white border-gray-200 shadow-2xl scale-100 opacity-100' 
          : 'bg-gray-50/50 border-transparent shadow-none scale-95 opacity-40 blur-[1px]'
        }
      `}
      data-step={step.id}
    >
      <div className="flex items-center gap-3 mb-6">
        <span 
          className="inline-block px-4 py-1.5 text-xs font-bold tracking-widest uppercase rounded-full text-white shadow-md transition-colors duration-500"
          style={{ backgroundColor: step.color }}
        >
          {step.badgeText || `Step ${step.id + 1}`}
        </span>
      </div>
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 leading-tight tracking-tight">
        {step.title}
      </h2>
      <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-medium">
        {step.description}
      </p>
    </div>
  );
};
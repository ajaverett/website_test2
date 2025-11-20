import React, { useState, useCallback } from 'react';
import { StoryStep } from './components/StoryStep';
import { VisualPanel } from './components/VisualPanel';
import { StoryGenerator } from './components/StoryGenerator';
import { StoryStep as StoryStepType } from './types';

// Default initial data
const INITIAL_STEPS: StoryStepType[] = [
  {
    id: 0,
    title: "Step 1 — The Beginning",
    description: "Scroll down. Each panel will 'snap' cleanly and update the visual. This experience demonstrates magnetic scrollytelling.",
    color: "#111827",
    visualText: "Start Here",
    badgeText: "Intro"
  },
  {
    id: 1,
    title: "Step 2 — The Blue Phase",
    description: "The visualization background transforms. The content is decoupled from the visual, allowing for flexible layouts and immersive reading.",
    color: "#2563eb",
    visualText: "Deep Dive",
    badgeText: "Discovery"
  },
  {
    id: 2,
    title: "Step 3 — Growth & Scale",
    description: "Another clear snap. This pattern is perfect for data stories, product tours, or educational content that requires pacing.",
    color: "#059669",
    visualText: "Expansion",
    badgeText: "Growth"
  },
  {
    id: 3,
    title: "Step 4 — The Conclusion",
    description: "Final stop. Magnetic scrolling keeps the story aligned. Notice how the sticky element stays with you until the very end.",
    color: "#d97706",
    visualText: "Finale",
    badgeText: "End"
  }
];

function App() {
  const [steps] = useState<StoryStepType[]>(INITIAL_STEPS);
  const [activeStepId, setActiveStepId] = useState<number>(0);

  const handleStart = () => {
    const storyStart = document.getElementById('story-start');
    if (storyStart) {
        storyStart.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleIntersect = useCallback((id: number) => {
    setActiveStepId(id);
  }, []);

  const activeStep = steps.find(s => s.id === activeStepId) || steps[0];

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-blue-100">
      
      {/* Hero Generator Section */}
      <StoryGenerator onStart={handleStart} />

      {/* Quote Section (Inspiration Style) */}
      <div className="w-full bg-gray-50 border-b border-gray-200 snap-start">
         <div className="max-w-3xl mx-auto px-6 py-24 text-center">
            <blockquote className="relative">
               <span className="absolute -top-8 left-0 text-6xl text-gray-200 font-serif font-black">“</span>
               <p className="text-2xl md:text-4xl font-serif font-medium text-gray-800 leading-snug">
                 Stories are the creative conversion of life itself into a more powerful, clearer, more meaningful experience.
               </p>
               <span className="absolute -bottom-12 right-0 text-6xl text-gray-200 font-serif font-black transform rotate-180">“</span>
            </blockquote>
            <div className="mt-10 flex items-center justify-center gap-3">
               <div className="h-px w-12 bg-gray-300"></div>
               <span className="text-sm font-bold text-gray-500 uppercase tracking-widest">Robert McKee</span>
               <div className="h-px w-12 bg-gray-300"></div>
            </div>
         </div>
      </div>

      {/* Main Scrollytelling Section */}
      <main id="story-start" className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left Column: Scrolling Text Steps */}
          <div className="relative z-10">
            {/* Mobile Sticky Indicator */}
             <div className="lg:hidden sticky top-4 z-50 mb-12 transition-transform duration-300 ease-in-out">
                 <div 
                    className="px-6 py-3 rounded-full text-white text-sm font-bold shadow-xl flex items-center justify-between backdrop-blur-md"
                    style={{ backgroundColor: activeStep.color }}
                 >
                    <span>{activeStep.badgeText}</span>
                    <span>{activeStepId + 1} / {steps.length}</span>
                 </div>
             </div>

            <div className="flex flex-col pt-4">
              {steps.map((step) => (
                <StoryStep
                  key={step.id}
                  step={step}
                  isActive={activeStepId === step.id}
                  onIntersect={handleIntersect}
                />
              ))}
            </div>
            
            {/* Extra padding for last item scroll */}
            <div className="h-[50vh]"></div>
          </div>

          {/* Right Column: Sticky Visual */}
          <div className="hidden lg:block relative">
             {/* The VisualPanel handles its own sticky behavior via props or internal CSS, but we wrap it to be safe */}
             <div className="h-full">
                <VisualPanel activeStep={activeStep} totalSteps={steps.length} />
             </div>
          </div>
          
        </div>
      </main>

      <footer className="bg-white border-t border-gray-100 py-12 snap-start">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
           <p>© {new Date().getFullYear()} Magnetic Scrollytelling.</p>
           <div className="flex gap-6 mt-4 md:mt-0">
              <span className="hover:text-gray-600 cursor-pointer transition-colors">Privacy</span>
              <span className="hover:text-gray-600 cursor-pointer transition-colors">Terms</span>
              <span className="hover:text-gray-600 cursor-pointer transition-colors">GitHub</span>
           </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

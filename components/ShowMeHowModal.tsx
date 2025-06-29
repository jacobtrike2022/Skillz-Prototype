import { useState, useEffect, useRef } from 'react';
import { GlassCard } from './GlassCard';
import { Badge } from './ui/badge';
import { ArrowLeft, ArrowRight, Check, Minus, Scan, ShoppingCart, ClipboardCheck } from 'lucide-react';
import { cn } from './ui/utils';

interface ShowMeHowModalProps {
  isOpen: boolean;
  onClose: () => void;
  taskName?: string;
}

interface TutorialStep {
  id: number;
  title: string;
  videoUrl: string;
  tools: string[];
  instructions: string;
  animationType: 'scanning' | 'arranging' | 'completing';
}

// Animated Video Placeholder Component
function AnimatedVideoPlaceholder({ step, isActive }: { step: TutorialStep; isActive: boolean }) {
  const getAnimationContent = () => {
    switch (step.animationType) {
      case 'scanning':
        return (
          <div className="relative w-full h-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
            {/* Animated scanning beam */}
            <div 
              className={cn(
                "absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-[#E31837] to-transparent opacity-80",
                isActive && "animate-scan-beam"
              )}
            />
            
            {/* Mock barcode scanning interface */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="w-32 h-20 border-2 border-[#E31837] border-dashed rounded-lg bg-[#E31837]/10 flex items-center justify-center">
                  <Scan size={40} className="text-[#E31837]" />
                </div>
                <div className="space-y-2">
                  <div className="h-2 w-24 bg-white/80 rounded mx-auto" />
                  <div className="h-2 w-16 bg-white/60 rounded mx-auto" />
                  <div className="h-2 w-20 bg-white/40 rounded mx-auto" />
                </div>
                <div className={cn(
                  "text-[#E31837] font-brand text-lg",
                  isActive && "animate-pulse"
                )}>
                  Scanning Items...
                </div>
              </div>
            </div>
            
            {/* Floating scan particles */}
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className={cn(
                  "absolute w-1 h-1 bg-[#E31837] rounded-full opacity-60",
                  isActive && "animate-float-particle"
                )}
                style={{
                  left: `${20 + i * 10}%`,
                  top: `${30 + (i % 3) * 20}%`,
                  animationDelay: `${i * 0.5}s`
                }}
              />
            ))}
          </div>
        );
        
      case 'arranging':
        return (
          <div className="relative w-full h-full bg-gradient-to-br from-blue-900 via-purple-900 to-blue-900 overflow-hidden">
            {/* Mock product arrangement interface */}
            <div className="absolute inset-0 p-8">
              <div className="grid grid-cols-2 gap-4 h-full">
                {/* Before section */}
                <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                  <h3 className="text-white/80 text-sm font-medium mb-3">Before</h3>
                  <div className="space-y-2">
                    {[...Array(4)].map((_, i) => (
                      <div
                        key={i}
                        className={cn(
                          "h-8 bg-gray-600 rounded transition-all duration-1000",
                          isActive && "animate-slide-out"
                        )}
                        style={{ animationDelay: `${i * 0.3}s` }}
                      />
                    ))}
                  </div>
                </div>
                
                {/* After section */}
                <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                  <h3 className="text-white/80 text-sm font-medium mb-3">After</h3>
                  <div className="space-y-2">
                    {[...Array(4)].map((_, i) => (
                      <div
                        key={i}
                        className={cn(
                          "h-8 rounded transition-all duration-1000 opacity-0",
                          isActive && "animate-slide-in bg-gradient-to-r from-[#E31837] to-[#FF1E42]"
                        )}
                        style={{ animationDelay: `${1 + i * 0.3}s` }}
                      />
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Animated arrows */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <ArrowRight 
                  size={32} 
                  className={cn(
                    "text-[#E31837]",
                    isActive && "animate-pulse-scale"
                  )} 
                />
              </div>
            </div>
            
            {/* Floating arrangement particles */}
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className={cn(
                  "absolute w-2 h-2 bg-gradient-to-r from-[#E31837] to-[#FF1E42] rounded-full opacity-70",
                  isActive && "animate-orbit"
                )}
                style={{
                  left: `${30 + (i % 4) * 10}%`,
                  top: `${40 + Math.floor(i / 4) * 20}%`,
                  animationDelay: `${i * 0.4}s`
                }}
              />
            ))}
          </div>
        );
        
      case 'completing':
        return (
          <div className="relative w-full h-full bg-gradient-to-br from-green-900 via-emerald-800 to-green-900 overflow-hidden">
            {/* Completion checklist interface */}
            <div className="absolute inset-0 flex items-center justify-center p-8">
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm w-full max-w-sm">
                <div className="text-center mb-6">
                  <div className={cn(
                    "w-16 h-16 mx-auto rounded-full bg-[#8BB501] flex items-center justify-center mb-3",
                    isActive && "animate-checkmark-bounce"
                  )}>
                    <ClipboardCheck size={32} className="text-white" />
                  </div>
                  <h3 className="text-white font-brand text-lg">Task Complete!</h3>
                </div>
                
                <div className="space-y-3">
                  {[
                    'Equipment returned',
                    'Report submitted',
                    'Labels applied',
                    'Final check done'
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className={cn(
                        "w-5 h-5 rounded-full bg-[#8BB501] flex items-center justify-center opacity-0",
                        isActive && "animate-check-appear"
                      )}
                      style={{ animationDelay: `${i * 0.5}s` }}
                      >
                        <Check size={12} className="text-white" />
                      </div>
                      <span className={cn(
                        "text-white/80 text-sm opacity-0",
                        isActive && "animate-fade-in"
                      )}
                      style={{ animationDelay: `${i * 0.5}s` }}
                      >
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Success particles */}
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className={cn(
                  "absolute w-1 h-1 bg-[#8BB501] rounded-full opacity-80",
                  isActive && "animate-success-particle"
                )}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${i * 0.2}s`
                }}
              />
            ))}
          </div>
        );
        
      default:
        return (
          <div className="w-full h-full bg-gradient-to-br from-gray-900 to-gray-700 flex items-center justify-center">
            <div className="text-white/60 text-center">
              <div className="text-lg font-brand mb-2">Tutorial Video</div>
              <div className="text-sm">Step {step.id}</div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="w-full h-full relative overflow-hidden rounded-lg">
      {getAnimationContent()}
      
      {/* Video overlay indicators */}
      <div className="absolute top-4 left-4 flex items-center gap-2">
        <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
        <span className="text-white/80 text-xs font-medium">LIVE TUTORIAL</span>
      </div>
      
      <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1">
        <span className="text-white/80 text-xs font-medium">
          {step.id}/3
        </span>
      </div>
    </div>
  );
}

export function ShowMeHowModal({ isOpen, onClose, taskName = 'current task' }: ShowMeHowModalProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);

  // Tutorial steps with animated placeholders
  const tutorialSteps: TutorialStep[] = [
    {
      id: 1,
      title: 'Step 1',
      videoUrl: 'PLACEHOLDERVID01', // Replace with actual video URL
      tools: ['Scanner', 'Price Gun', 'Inventory Sheet'],
      instructions: 'Begin by gathering all necessary equipment from the supply closet. Ensure your scanner is charged and the price gun has sufficient labels before starting the inventory process.',
      animationType: 'scanning'
    },
    {
      id: 2,
      title: 'Step 2',
      videoUrl: 'PLACEHOLDERVID02', // Replace with actual video URL
      tools: ['Mobile Device', 'Inventory App', 'Barcode Scanner'],
      instructions: 'Scan each item systematically from left to right, top to bottom. Update quantities in the inventory app as you go, ensuring accuracy with each entry.',
      animationType: 'arranging'
    },
    {
      id: 3,
      title: 'Step 3',
      videoUrl: 'PLACEHOLDERVID03', // Replace with actual video URL
      tools: ['Completion Form', 'Manager Approval', 'Storage Labels'],
      instructions: 'Complete the final inventory report and submit for manager approval. Apply any new storage labels as needed and return all equipment to designated locations.',
      animationType: 'completing'
    }
  ];

  const currentStepData = tutorialSteps.find(step => step.id === currentStep) || tutorialSteps[0];

  // Close drawer when step changes
  useEffect(() => {
    setIsDrawerOpen(false);
  }, [currentStep]);

  // Handle clicks outside the drawer to close it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isDrawerOpen && 
        drawerRef.current && 
        !drawerRef.current.contains(event.target as Node)
      ) {
        setIsDrawerOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isOpen, isDrawerOpen]);

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    } else {
      onClose();
    }
  };

  const handleNext = () => {
    if (currentStep < tutorialSteps.length) {
      setCurrentStep(prev => prev + 1);
    } else {
      onClose();
    }
  };

  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const handleStepDotClick = (stepId: number) => {
    setCurrentStep(stepId);
  };

  const handleBackgroundClick = (e: React.MouseEvent) => {
    // If drawer is closed and clicking on video background, open drawer
    if (!isDrawerOpen && e.target === e.currentTarget) {
      setIsDrawerOpen(true);
    }
    // If drawer is open and clicking on video background (not the drawer itself), close drawer
    else if (isDrawerOpen && e.target === e.currentTarget) {
      setIsDrawerOpen(false);
    }
  };

  const handleTapToViewClick = () => {
    setIsDrawerOpen(true);
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 bg-black"
      onClick={handleBackgroundClick}
    >
      {/* Fullscreen Animated Video Background */}
      <div className="absolute inset-0" onClick={handleBackgroundClick}>
        <div
          className="w-full h-full transition-all duration-300"
          style={{ 
            filter: isDrawerOpen ? 'brightness(0.7) blur(2px)' : 'brightness(1)',
          }}
        >
          <AnimatedVideoPlaceholder 
            step={currentStepData} 
            isActive={isOpen}
          />
        </div>
      </div>

      {/* Floating Navigation Controls */}
      <div className="absolute top-8 left-0 right-0 flex justify-between items-center px-6 z-20">
        {/* Back Arrow */}
        <button
          onClick={handlePrevious}
          className="w-12 h-12 bg-[#E31837] hover:bg-[#FF1E42] rounded-full flex items-center justify-center transition-all duration-200 spring-scale shadow-lg backdrop-blur-sm"
        >
          <ArrowLeft size={20} className="text-white" />
        </button>

        {/* Step Indicator - Now Clickable */}
        <div className="flex items-center gap-2 bg-black/30 backdrop-blur-sm rounded-full px-4 py-2">
          {tutorialSteps.map((step, index) => (
            <button
              key={step.id}
              onClick={() => handleStepDotClick(step.id)}
              className={cn(
                "w-3 h-3 rounded-full transition-all duration-300 hover:scale-110 focus:outline-none",
                currentStep === step.id 
                  ? "bg-[#E31837] scale-125 shadow-lg" 
                  : "bg-white/30 hover:bg-white/50 cursor-pointer"
              )}
            />
          ))}
        </div>

        {/* Next/Complete Arrow */}
        <button
          onClick={handleNext}
          className="w-12 h-12 bg-[#E31837] hover:bg-[#FF1E42] rounded-full flex items-center justify-center transition-all duration-200 spring-scale shadow-lg backdrop-blur-sm"
        >
          {currentStep === tutorialSteps.length ? (
            <Check size={20} className="text-white" />
          ) : (
            <ArrowRight size={20} className="text-white" />
          )}
        </button>
      </div>

      {/* Sliding Glass Drawer */}
      <div 
        ref={drawerRef}
        className={cn(
          "absolute bottom-0 left-0 right-0 transition-transform duration-500 ease-out z-10",
          isDrawerOpen ? "translate-y-0" : "translate-y-[calc(100%-4rem)]"
        )}
      >
        {/* Glassmorphic Container */}
        <div className="glass-card rounded-t-3xl border-t border-white/10 min-h-[24rem] relative">
          {/* Drag Handle */}
          <button 
            onClick={handleDrawerToggle}
            className="absolute top-4 left-1/2 transform -translate-x-1/2 focus:outline-none hover:bg-white/10 rounded-full p-2 transition-colors"
          >
            <div className="w-12 h-1 bg-white/30 rounded-full" />
          </button>

          {/* Drawer Content */}
          <div 
            className="pt-8 pb-8 px-6 cursor-pointer"
            onClick={handleDrawerToggle}
          >
            {/* Step Header */}
            <div className="mb-6">
              <h2 className="text-white text-2xl font-brand mb-2">
                {currentStepData.title}
              </h2>
              <p className="text-white/60 text-sm">
                {taskName} Tutorial
              </p>
            </div>

            {/* Content that shows when drawer is open */}
            <div className={cn(
              "transition-opacity duration-300",
              isDrawerOpen ? "opacity-100" : "opacity-0"
            )}>
              {/* Tools Needed Section */}
              <div className="mb-6">
                <h3 className="text-white/80 text-sm font-medium mb-3">Tools Needed</h3>
                <div className="flex flex-wrap gap-2">
                  {currentStepData.tools.map((tool, index) => (
                    <Badge 
                      key={index}
                      variant="outline"
                      className="text-[#E31837] bg-[#E31837]/10 border-[#E31837] text-xs px-3 py-1 backdrop-blur-sm"
                    >
                      {tool}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Instructions Section */}
              <div>
                <h3 className="text-white/80 text-sm font-medium mb-3">Instructions</h3>
                <p className="text-white/70 text-base leading-relaxed">
                  {currentStepData.instructions}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tap to expand hint (only when drawer is closed) - Now Clickable */}
      {!isDrawerOpen && (
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-20">
          <button
            onClick={handleTapToViewClick}
            className="bg-black/50 backdrop-blur-sm rounded-full px-4 py-2 animate-pulse hover:bg-black/70 transition-colors focus:outline-none spring-scale"
          >
            <p className="text-white/80 text-sm">Tap to view instructions</p>
          </button>
        </div>
      )}
    </div>
  );
}
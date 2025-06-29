import { useState, useEffect } from 'react';
import { X, Camera } from 'lucide-react';
import { cn } from './ui/utils';
import coffeeImage from 'figma:asset/8a254386d5013f47f34e1edf67319ca395b863aa.png';

interface CameraModalProps {
  isOpen: boolean;
  onClose: () => void;
  onPhotoTaken: (photoUrl: string) => void;
}

export function CameraModal({ isOpen, onClose, onPhotoTaken }: CameraModalProps) {
  const [isCapturing, setIsCapturing] = useState(false);
  const [showFlash, setShowFlash] = useState(false);

  const handleCapture = () => {
    setIsCapturing(true);
    setShowFlash(true);
    
    // Simulate camera capture
    setTimeout(() => {
      setShowFlash(false);
      setTimeout(() => {
        onPhotoTaken(coffeeImage);
        setIsCapturing(false);
        onClose();
      }, 300);
    }, 200);
  };

  useEffect(() => {
    if (!isOpen) {
      setIsCapturing(false);
      setShowFlash(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black">
      {/* Flash effect */}
      {showFlash && (
        <div className="absolute inset-0 bg-white z-50 animate-ping" />
      )}
      
      {/* Camera viewfinder */}
      <div className="relative w-full h-full flex flex-col">
        {/* Top bar */}
        <div className="flex justify-between items-center p-4 text-white">
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-black/50 flex items-center justify-center"
            disabled={isCapturing}
          >
            <X size={20} />
          </button>
          <span className="text-lg font-medium">Camera</span>
          <div className="w-8 h-8" /> {/* Spacer */}
        </div>

        {/* Viewfinder area */}
        <div className="flex-1 relative overflow-hidden">
          {/* Simulated camera preview with coffee shop background */}
          <div 
            className="w-full h-full bg-cover bg-center relative"
            style={{
              backgroundImage: `url(${coffeeImage})`,
              filter: 'brightness(0.8) contrast(1.1)'
            }}
          >
            {/* Grid overlay */}
            <div className="absolute inset-0 opacity-30">
              <div className="w-full h-full grid grid-cols-3 grid-rows-3">
                {Array.from({ length: 9 }).map((_, i) => (
                  <div key={i} className="border border-white/20" />
                ))}
              </div>
            </div>

            {/* Focus indicator */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className={cn(
                "w-20 h-20 border-2 border-white rounded-lg",
                isCapturing ? "animate-pulse" : "animate-pulse"
              )} />
            </div>
          </div>
        </div>

        {/* Bottom controls */}
        <div className="p-6 bg-black">
          <div className="flex items-center justify-center">
            {/* Capture button */}
            <button
              onClick={handleCapture}
              disabled={isCapturing}
              className={cn(
                "w-16 h-16 rounded-full border-4 border-white bg-white/20 flex items-center justify-center transition-all duration-200",
                isCapturing ? "scale-90 opacity-50" : "hover:scale-105 active:scale-95"
              )}
            >
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                <Camera size={24} className="text-black" />
              </div>
            </button>
          </div>
          
          <div className="flex justify-center mt-3">
            <span className="text-white/60 text-sm">
              {isCapturing ? 'Capturing...' : 'Tap to capture'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
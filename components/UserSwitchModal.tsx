import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { cn } from './ui/utils';

interface UserSwitchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function UserSwitchModal({ isOpen, onClose }: UserSwitchModalProps) {
  const [pin, setPin] = useState('');
  const maxLength = 4;

  useEffect(() => {
    if (pin.length === maxLength) {
      // Auto-close after entering 4 characters
      setTimeout(() => {
        onClose();
        setPin(''); // Reset pin for next time
      }, 300);
    }
  }, [pin, onClose]);

  const handleKeyPress = (key: string) => {
    if (pin.length < maxLength) {
      setPin(prev => prev + key);
    }
  };

  const handleBackspace = () => {
    setPin(prev => prev.slice(0, -1));
  };

  const handleClose = () => {
    setPin('');
    onClose();
  };

  // Handle keyboard input
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isOpen) return;

      if (event.key >= '0' && event.key <= '9') {
        handleKeyPress(event.key);
      } else if (event.key >= 'a' && event.key <= 'z') {
        handleKeyPress(event.key.toUpperCase());
      } else if (event.key >= 'A' && event.key <= 'Z') {
        handleKeyPress(event.key);
      } else if (event.key === 'Backspace') {
        handleBackspace();
      } else if (event.key === 'Escape') {
        handleClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, pin]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop with full screen glassmorphism blur */}
      <div 
        className="absolute inset-0 backdrop-blur-md"
        style={{
          background: 'rgba(10, 10, 11, 0.8)',
          backdropFilter: 'blur(20px)',
        }}
        onClick={handleClose}
      />
      
      {/* Modal Content */}
      <div className="relative z-10 w-80 mx-4">
        <div className="glass-card p-8 rounded-3xl text-center relative">
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors spring-scale"
          >
            <X size={16} className="text-white/60" />
          </button>

          {/* Header */}
          <h2 className="text-white text-2xl font-brand mb-2">User Switch</h2>
          <p className="text-white/60 text-sm mb-8">Enter your pin to switch users.</p>

          {/* PIN Input Dots */}
          <div className="flex justify-center gap-3 mb-8">
            {Array.from({ length: maxLength }).map((_, index) => (
              <div
                key={index}
                className={cn(
                  "w-4 h-4 rounded-full border-2 transition-all duration-200",
                  index < pin.length
                    ? "bg-[#E31837] border-[#E31837] scale-110"
                    : "border-white/30 bg-transparent"
                )}
              />
            ))}
          </div>

          {/* Virtual Keypad */}
          <div className="grid grid-cols-3 gap-3 max-w-48 mx-auto">
            {['1', '2', '3', '4', '5', '6', '7', '8', '9', '*', '0', '#'].map((key) => (
              <button
                key={key}
                onClick={() => handleKeyPress(key)}
                disabled={pin.length >= maxLength}
                className={cn(
                  "w-12 h-12 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-all duration-200 spring-scale",
                  "disabled:opacity-50 disabled:cursor-not-allowed"
                )}
              >
                {key}
              </button>
            ))}
          </div>

          {/* Backspace Button */}
          <button
            onClick={handleBackspace}
            disabled={pin.length === 0}
            className={cn(
              "mt-4 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-sm transition-all duration-200 spring-scale",
              "disabled:opacity-50 disabled:cursor-not-allowed"
            )}
          >
            Clear
          </button>

          {/* Instructions */}
          <p className="text-white/40 text-xs mt-6">
            Use keyboard or tap numbers above
          </p>
        </div>
      </div>
    </div>
  );
}
import { useState, useEffect, useRef } from 'react';
import { Button } from './ui/button';
import { X } from 'lucide-react';
import { cn } from './ui/utils';

interface NotesModalProps {
  isOpen: boolean;
  onClose: () => void;
  taskName: string;
}

export function NotesModal({ isOpen, onClose, taskName }: NotesModalProps) {
  const [noteText, setNoteText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [isSending, setIsSending] = useState(false);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  // Blinking cursor effect
  useEffect(() => {
    if (!isOpen) return;
    
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, [isOpen]);

  // Auto-focus when modal opens
  useEffect(() => {
    if (isOpen && textAreaRef.current) {
      setTimeout(() => {
        textAreaRef.current?.focus();
      }, 100);
    }
  }, [isOpen]);

  // Reset state when modal closes
  useEffect(() => {
    if (!isOpen) {
      setNoteText('');
      setIsSending(false);
      setShowCursor(true);
    }
  }, [isOpen]);

  const handleSend = async () => {
    if (!noteText.trim()) return;
    
    setIsSending(true);
    
    // Simulate sending delay
    await new Promise(resolve => setTimeout(resolve, 800));
    
    console.log('📝 Sending note:', { taskName, noteText });
    
    // Auto-close after sending
    onClose();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) {
      e.preventDefault();
      handleSend();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-60 flex items-center justify-center">
      {/* Backdrop with increased transparency blur */}
      <div 
        className="absolute inset-0 backdrop-blur-md"
        style={{
          background: 'rgba(10, 10, 11, 0.7)', // Reduced from 0.75 to 0.7 for additional 5% transparency
        }}
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative z-10 w-full max-w-md mx-4">
        {/* Exit Button - Minimal */}
        <div className="flex justify-end mb-4">
          <button
            onClick={onClose}
            className="text-white/40 hover:text-white/60 transition-colors duration-200 p-2"
          >
            <X size={20} />
          </button>
        </div>

        {/* Main Content Area */}
        <div className="text-center space-y-8">
          {/* Header */}
          <div className="space-y-2">
            <h2 className="text-white font-brand text-xl">Notes</h2>
            <div className="space-y-1">
              <p className="text-white/60 text-base font-normal">Alex's notes on</p>
              <h3 className="text-white/60 text-base font-normal">{taskName}</h3>
            </div>
          </div>

          {/* Text Input Area */}
          <div className="relative min-h-[120px] flex items-center justify-center">
            {/* Hidden textarea for actual input */}
            <textarea
              ref={textAreaRef}
              value={noteText}
              onChange={(e) => setNoteText(e.target.value)}
              onKeyDown={handleKeyDown}
              className="absolute inset-0 bg-transparent text-transparent caret-transparent resize-none outline-none border-none z-10"
              placeholder=""
              disabled={isSending}
            />
            
            {/* Visual text display */}
            <div className="text-white text-lg leading-relaxed text-center px-4 relative min-h-[60px] flex items-center justify-center">
              <div className="flex items-center">
                {noteText && <span>{noteText}</span>}
                {/* Red blinking cursor */}
                {showCursor && (
                  <span 
                    className={cn(
                      "inline-block w-0.5 h-6 bg-[#E31837] ml-1 transition-opacity duration-100",
                      noteText.length === 0 ? "" : ""
                    )}
                  />
                )}
              </div>
            </div>
          </div>

          {/* Send Button - Transparent with red outline */}
          <Button
            onClick={handleSend}
            disabled={!noteText.trim() || isSending}
            className={cn(
              "px-8 py-3 text-lg font-medium transition-all duration-200 spring-scale bg-transparent border border-[#E31837] text-[#E31837] hover:bg-[#E31837]/10",
              isSending && "opacity-50 cursor-not-allowed"
            )}
          >
            {isSending ? 'Sending...' : 'Send'}
          </Button>
        </div>
      </div>
    </div>
  );
}
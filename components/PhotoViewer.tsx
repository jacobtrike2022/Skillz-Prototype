import { X } from 'lucide-react';

interface PhotoViewerProps {
  isOpen: boolean;
  onClose: () => void;
  photoUrl: string;
}

export function PhotoViewer({ isOpen, onClose, photoUrl }: PhotoViewerProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop with glassmorphism blur */}
      <div 
        className="absolute inset-0 backdrop-blur-md"
        style={{
          background: 'rgba(10, 10, 11, 0.8)',
          backdropFilter: 'blur(20px)',
        }}
        onClick={onClose}
      />
      
      {/* Photo container */}
      <div className="relative z-10 w-80 mx-4">
        <div className="glass-card p-4 rounded-3xl relative">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors spring-scale z-10"
          >
            <X size={16} className="text-white/60" />
          </button>

          {/* Photo */}
          <div className="w-full aspect-square rounded-2xl overflow-hidden">
            <img
              src={photoUrl}
              alt="Task Evidence"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Photo info */}
          <div className="mt-4 text-center">
            <h3 className="text-white font-medium">Task Evidence</h3>
            <p className="text-white/60 text-sm mt-1">
              {new Date().toLocaleDateString()} at {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
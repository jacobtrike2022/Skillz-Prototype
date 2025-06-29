import { useState, useEffect } from 'react';
import { GlassCard } from './GlassCard';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { X, Camera, Video, Trash2, CheckCircle2, Star, FileText } from 'lucide-react';
import { CameraModal } from './CameraModal';
import { PhotoViewer } from './PhotoViewer';
import { ConfettiAnimation } from './ConfettiAnimation';
import { NotesModal } from './NotesModal';
import { cn } from './ui/utils';

interface TaskCompletionProps {
  isOpen: boolean;
  onClose: () => void;
  taskName?: string;
  autoOpenCamera?: boolean;
  skipConfetti?: boolean;
}

interface PhotoEvidence {
  id: string;
  url: string;
  timestamp: Date;
}

export function TaskCompletion({ 
  isOpen, 
  onClose, 
  taskName = "Update seasonal product placement", 
  autoOpenCamera = false,
  skipConfetti = false
}: TaskCompletionProps) {
  const [showCamera, setShowCamera] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [photos, setPhotos] = useState<PhotoEvidence[]>([]);
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [hasTriggeredConfetti, setHasTriggeredConfetti] = useState(false);
  const [rating, setRating] = useState<number>(0);
  const [hoveredRating, setHoveredRating] = useState<number>(0);
  const [showNotes, setShowNotes] = useState(false);

  // Debug logging
  useEffect(() => {
    console.log('🎊 TaskCompletion state:', { 
      isOpen, 
      taskName, 
      autoOpenCamera, 
      skipConfetti,
      showTaskCompletion: isOpen 
    });
  }, [isOpen, taskName, autoOpenCamera, skipConfetti]);

  // Animation effect when component opens - only trigger once and respect skipConfetti
  useEffect(() => {
    if (isOpen && !hasTriggeredConfetti) {
      console.log('🎯 TaskCompletion opened, starting animations');
      setIsAnimating(true);
      
      // Only show confetti if not skipped
      if (!skipConfetti) {
        console.log('🎉 Starting confetti');
        setShowConfetti(true);
      } else {
        console.log('⏭️ Skipping confetti');
      }
      
      setHasTriggeredConfetti(true);
      
      // Auto-open camera if requested
      if (autoOpenCamera) {
        const delay = skipConfetti ? 300 : 1000;
        console.log(`📷 Auto-opening camera in ${delay}ms`);
        setTimeout(() => {
          setShowCamera(true);
        }, delay);
      }
      
      const timer = setTimeout(() => setIsAnimating(false), 2000);
      return () => clearTimeout(timer);
    } else if (!isOpen) {
      // Reset when component closes
      console.log('🔄 TaskCompletion reset');
      setShowConfetti(false);
      setHasTriggeredConfetti(false);
      setIsAnimating(false);
      setRating(0);
      setHoveredRating(0);
      setShowNotes(false);
    }
  }, [isOpen, hasTriggeredConfetti, autoOpenCamera, skipConfetti]);

  const handlePhotoTaken = (photoUrl: string) => {
    const newPhoto: PhotoEvidence = {
      id: Date.now().toString(),
      url: photoUrl,
      timestamp: new Date()
    };
    setPhotos(prev => [...prev, newPhoto]);
  };

  const handleDeletePhoto = (photoId: string) => {
    setPhotos(prev => prev.filter(photo => photo.id !== photoId));
  };

  const handleCameraClick = () => {
    setShowCamera(true);
  };

  const handleVideoClick = () => {
    // For now, simulate video capture with same camera modal
    setShowVideo(true);
    setShowCamera(true);
  };

  const handleNotesClick = () => {
    setShowNotes(true);
  };

  const handleStarClick = (starValue: number) => {
    setRating(starValue);
    console.log('⭐ Task rated:', starValue, 'stars for', taskName);
  };

  const handleStarHover = (starValue: number) => {
    setHoveredRating(starValue);
  };

  const handleStarLeave = () => {
    setHoveredRating(0);
  };

  const getRatingMessage = (rating: number) => {
    switch (rating) {
      case 1: return "that was rough...";
      case 2: return "bit of a struggle...";
      case 3: return "not bad, not great...";
      case 4: return "almost nailed it...";
      case 5: return "easy peasy lemon squeezy...";
      default: return "";
    }
  };

  if (!isOpen) {
    console.log('❌ TaskCompletion not rendering - isOpen is false');
    return null;
  }

  console.log('✅ TaskCompletion rendering');

  return (
    <>
      {/* Confetti Animation - Only run if not skipped */}
      {!skipConfetti && (
        <ConfettiAnimation 
          isActive={showConfetti} 
          onComplete={() => setShowConfetti(false)} 
        />
      )}

      <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm">
        <div className="absolute inset-x-0 bottom-0 top-16 bg-[#0A0A0B] rounded-t-3xl overflow-hidden">
          {/* Header - Understated */}
          <div className="sticky top-0 z-10 glass-card border-b border-white/10 p-4">
            <div className="flex items-center justify-between">
              <div className="flex-1" />
              <div className="text-center">
                <h1 className="text-white/60 text-xl font-brand">Task Complete</h1>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={onClose}
                className="bg-white/5 hover:bg-white/10 rounded-full w-10 h-10 p-0"
              >
                <X size={18} className="text-white" />
              </Button>
            </div>
          </div>

          {/* Scrollable Content */}
          <div className={cn(
            "h-full pb-24",
            photos.length > 0 ? "overflow-y-auto" : "overflow-hidden"
          )}>
            <div className="p-6 space-y-6">
              {/* Celebration Animation */}
              <div className="text-center">
                <div className={cn(
                  "w-24 h-24 mx-auto rounded-full flex items-center justify-center mb-4 transition-all duration-1000 relative",
                  isAnimating ? "scale-110" : "scale-100"
                )}
                style={{
                  background: 'rgba(227, 24, 55, 0.2)',
                  border: '3px solid #E31837',
                  boxShadow: isAnimating 
                    ? '0 0 30px rgba(227, 24, 55, 0.6), 0 0 60px rgba(227, 24, 55, 0.3)' 
                    : '0 0 20px rgba(227, 24, 55, 0.4)'
                }}
                >
                  <CheckCircle2 
                    size={40} 
                    className={cn(
                      "text-[#E31837] transition-all duration-1000",
                      isAnimating && "animate-pulse"
                    )} 
                  />
                  
                  {/* Pulsing ring animation */}
                  <div 
                    className={cn(
                      "absolute inset-0 rounded-full border-2 border-[#E31837] transition-all duration-1000 animate-pulse-ring",
                      isAnimating ? "scale-150 opacity-0" : "scale-100 opacity-100"
                    )}
                  />
                </div>
                <h2 className="text-white text-2xl font-brand mb-2">Sweet!</h2>
                <p className="text-white/70">{taskName}</p>
              </div>

              {/* How'd it go? Rating */}
              <GlassCard className="text-center p-6">
                <h3 className="text-white/60 text-base font-normal mb-4">How'd it go?</h3>
                <div className="flex justify-center gap-2 mb-2">
                  {[1, 2, 3, 4, 5].map((star) => {
                    const isActive = star <= (hoveredRating || rating);
                    return (
                      <button
                        key={star}
                        onClick={() => handleStarClick(star)}
                        onMouseEnter={() => handleStarHover(star)}
                        onMouseLeave={handleStarLeave}
                        className="transition-all duration-200 spring-scale hover:scale-110"
                      >
                        <Star 
                          size={32} 
                          className={cn(
                            "transition-all duration-200",
                            isActive 
                              ? "text-[#E31837]" 
                              : "text-white/30 hover:text-white/50"
                          )}
                          style={isActive ? {
                            fill: 'url(#starGradient)',
                            stroke: 'url(#starGradient)',
                          } : {}}
                        />
                      </button>
                    );
                  })}
                </div>
                {rating > 0 && (
                  <p className="text-white/60 text-sm">
                    {getRatingMessage(rating)}
                  </p>
                )}
                
                {/* SVG Gradient Definition */}
                <svg width="0" height="0" style={{ position: 'absolute' }}>
                  <defs>
                    <linearGradient id="starGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#E31837" />
                      <stop offset="100%" stopColor="#FF1E42" />
                    </linearGradient>
                  </defs>
                </svg>
              </GlassCard>

              {/* Points Cards with Glow Effects */}
              <div className="grid grid-cols-2 gap-4">
                {/* XP Points with Red Glow */}
                <GlassCard className="text-center p-6">
                  <div 
                    className="text-3xl font-bold text-[#E31837] mb-2"
                    style={{
                      textShadow: '0 0 10px rgba(227, 24, 55, 0.4), 0 0 20px rgba(227, 24, 55, 0.2)'
                    }}
                  >
                    +25
                  </div>
                  <div className="text-white/60 text-sm">XP Points</div>
                  <div className="w-full bg-[#E31837]/20 h-1 rounded-full mt-3">
                    <div className={cn(
                      "h-1 bg-[#E31837] rounded-full transition-all duration-1000 delay-500",
                      isAnimating ? "w-full" : "w-0"
                    )} />
                  </div>
                </GlassCard>

                {/* Team Points with Green Glow */}
                <GlassCard className="text-center p-6">
                  <div 
                    className="text-3xl font-bold text-[#8BB501] mb-2"
                    style={{
                      textShadow: '0 0 10px rgba(139, 181, 1, 0.4), 0 0 20px rgba(139, 181, 1, 0.2)'
                    }}
                  >
                    +10
                  </div>
                  <div className="text-white/60 text-sm">Team Points</div>
                  <div className="w-full bg-[#8BB501]/20 h-1 rounded-full mt-3">
                    <div className={cn(
                      "h-1 bg-[#8BB501] rounded-full transition-all duration-1000 delay-700",
                      isAnimating ? "w-full" : "w-0"
                    )} />
                  </div>
                </GlassCard>
              </div>

              {/* Achievement Badge with Neon Glow */}
              <GlassCard 
                className="p-4 relative"
                style={{
                  boxShadow: `
                    0 8px 25px rgba(0, 0, 0, 0.15),
                    0 0 0 1px rgba(227, 24, 55, 0.03),
                    0 0 20px rgba(251, 191, 36, 0.2),
                    inset 0 1px 0 rgba(255, 255, 255, 0.1)
                  `
                }}
              >
                <div className="flex items-center gap-3">
                  <div 
                    className="w-12 h-12 bg-gradient-to-r from-[#FBBF24] to-[#F59E0B] rounded-full flex items-center justify-center relative"
                    style={{
                      boxShadow: '0 0 15px rgba(251, 191, 36, 0.4)'
                    }}
                  >
                    <span className="text-xl">⭐</span>
                  </div>
                  <div>
                    <h3 className="text-white font-medium">Task Master</h3>
                    <p className="text-white/60 text-sm">Completed task efficiently and on time</p>
                  </div>
                  <Badge className="ml-auto bg-[#FBBF24]/20 text-[#FBBF24] border-[#FBBF24]/30">
                    New!
                  </Badge>
                </div>
              </GlassCard>

              {/* Photo Evidence Section */}
              {photos.length > 0 && (
                <div className="space-y-3">
                  <h3 className="text-white text-lg font-brand">Task Evidence</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {photos.map((photo) => (
                      <div key={photo.id} className="relative group">
                        <div 
                          className="aspect-square rounded-xl overflow-hidden bg-white/5 cursor-pointer transition-transform hover:scale-105"
                          onClick={() => setSelectedPhoto(photo.url)}
                        >
                          <img
                            src={photo.url}
                            alt="Task Evidence"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <button
                          onClick={() => handleDeletePhoto(photo.id)}
                          className="absolute -top-2 -right-2 w-6 h-6 bg-[#E31837] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity spring-scale"
                        >
                          <Trash2 size={12} className="text-white" />
                        </button>
                        <div className="text-white/60 text-xs mt-1 text-center">
                          {photo.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Action Buttons - Now with Notes */}
              <div className="grid grid-cols-3 gap-4">
                <Button
                  onClick={handleCameraClick}
                  className="bg-white/5 hover:bg-white/10 text-white border border-white/20 py-6"
                >
                  <Camera size={20} className="mr-2" />
                  Photo
                </Button>
                
                <Button
                  onClick={handleVideoClick}
                  className="bg-white/5 hover:bg-white/10 text-white border border-white/20 py-6"
                >
                  <Video size={20} className="mr-2" />
                  Video
                </Button>

                <Button
                  onClick={handleNotesClick}
                  className="bg-white/5 hover:bg-white/10 text-white border border-white/20 py-6"
                >
                  <FileText size={20} className="mr-2" />
                  Note
                </Button>
              </div>

              {/* Continue Button */}
              <Button
                onClick={onClose}
                className="w-full bg-[#E31837] hover:bg-[#E31837]/80 text-white py-6 text-lg font-medium"
              >
                Continue Working
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Camera Modal */}
      <CameraModal
        isOpen={showCamera}
        onClose={() => {
          setShowCamera(false);
          setShowVideo(false);
        }}
        onPhotoTaken={handlePhotoTaken}
      />

      {/* Photo Viewer */}
      <PhotoViewer
        isOpen={!!selectedPhoto}
        onClose={() => setSelectedPhoto(null)}
        photoUrl={selectedPhoto || ''}
      />

      {/* Notes Modal */}
      <NotesModal
        isOpen={showNotes}
        onClose={() => setShowNotes(false)}
        taskName={taskName}
      />
    </>
  );
}
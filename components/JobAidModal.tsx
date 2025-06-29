import { useState } from 'react';
import { X } from 'lucide-react';
import entranceImage from 'figma:asset/b746ef617a900bdef5cc93b677755ee658fc19c9.png';
import merchandisingImage from 'figma:asset/8c3765360e3a73df833831a2066969c8da40530e.png';

interface JobAidModalProps {
  isOpen: boolean;
  onClose: () => void;
  taskName?: string;
  flowId?: number;
}

export function JobAidModal({ isOpen, onClose, taskName, flowId }: JobAidModalProps) {
  if (!isOpen) return null;

  // Determine which image and content to show based on flow and task
  const getJobAidContent = () => {
    if (flowId === 1) {
      // Morning Floor Setup - Clean and organize entrance area
      return {
        image: entranceImage,
        alt: "Job Aid - Clean & Organize the Entrance Area",
        title: "Entrance Area Setup",
        description: "Follow these steps to clean and organize the entrance area effectively"
      };
    } else if (flowId === 2) {
      // Visual merchandising update - Update seasonal product placement
      return {
        image: merchandisingImage,
        alt: "Job Aid - Update Seasonal Product Placement",
        title: "Seasonal Product Display",
        description: "Use this layout guide for optimal seasonal product placement"
      };
    } else {
      // Default fallback
      return {
        image: entranceImage,
        alt: "Job Aid",
        title: "Job Aid",
        description: "Follow these steps to complete your task effectively"
      };
    }
  };

  const content = getJobAidContent();

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-60 w-10 h-10 rounded-full bg-[#E31837]/20 hover:bg-[#E31837]/30 backdrop-blur-sm border border-[#E31837]/30 flex items-center justify-center transition-all duration-200 spring-scale"
      >
        <X size={20} className="text-[#E31837]" />
      </button>

      {/* Modal content */}
      <div className="relative max-w-4xl max-h-[90vh] w-full">
        {/* Header */}
        <div className="text-center mb-4">
          <h2 className="text-white text-xl font-brand mb-2">{content.title}</h2>
          {taskName && (
            <p className="text-white/60 text-sm">{taskName}</p>
          )}
        </div>

        {/* Image container with glass card styling */}
        <div className="glass-card rounded-2xl p-4 shadow-2xl">
          <img
            src={content.image}
            alt={content.alt}
            className="w-full h-auto rounded-xl shadow-lg"
            style={{
              maxHeight: '70vh',
              objectFit: 'contain'
            }}
          />
        </div>

        {/* Footer with helpful text */}
        <div className="text-center mt-4">
          <p className="text-white/60 text-sm">
            {content.description}
          </p>
        </div>
      </div>
    </div>
  );
}
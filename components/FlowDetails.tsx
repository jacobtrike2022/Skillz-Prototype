import { useState, useEffect } from 'react';
import { GlassCard } from './GlassCard';
import { TaskCompletion } from './TaskCompletion';
import { CameraModal } from './CameraModal';
import { NotesModal } from './NotesModal';
import { ShowMeHowModal } from './ShowMeHowModal';
import { JobAidModal } from './JobAidModal';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { Button } from './ui/button';
import { 
  ArrowLeft, 
  MoreHorizontal, 
  Clock, 
  Play, 
  MessageSquare, 
  Share, 
  CheckCircle2, 
  Circle, 
  AlertCircle,
  Eye,
  Book,
  FileText,
  Camera,
  ClipboardList,
  Check,
  FileImage
} from 'lucide-react';
import { cn } from './ui/utils';

interface FlowDetailsProps {
  isOpen: boolean;
  onClose: () => void;
  flow?: {
    id: number;
    title: string;
    estimatedTime: string;
    progress: number;
    collaborators: string[];
    priority: 'High' | 'Medium' | 'Low';
    timeSlot: string;
  };
}

interface SubTask {
  id: number;
  title: string;
  description: string;
  status: 'completed' | 'in-progress' | 'pending';
  completedAt?: string;
  startedAt?: string;
  dependency?: string;
  hasReference?: boolean;
  hasTutorial?: boolean;
  hasGuidelines?: boolean;
  hasChecklist?: boolean;
}

interface MainTask {
  id: number;
  title: string;
  description: string;
  status: 'completed' | 'in-progress' | 'pending';
  completedAt?: string;
  startedAt?: string;
  dependency?: string;
  hasReference?: boolean;
  hasTutorial?: boolean;
  hasGuidelines?: boolean;
  hasChecklist?: boolean;
  hasJobAid?: boolean;
  subtasks?: SubTask[];
  isInteractive?: boolean; // Only the main task with subtasks should be interactive
}

export function FlowDetails({ isOpen, onClose, flow }: FlowDetailsProps) {
  const [showTaskCompletion, setShowTaskCompletion] = useState(false);
  const [showCamera, setShowCamera] = useState(false);
  const [showNotes, setShowNotes] = useState(false);
  const [showTutorial, setShowTutorial] = useState(false);
  const [showJobAid, setShowJobAid] = useState(false);
  const [completingTaskName, setCompletingTaskName] = useState('');
  const [autoOpenCamera, setAutoOpenCamera] = useState(false);
  const [skipConfetti, setSkipConfetti] = useState(false);

  const defaultFlow = {
    id: 2,
    title: 'Visual merchandising update',
    estimatedTime: '30 min',
    progress: 45,
    collaborators: [
      'https://images.unsplash.com/photo-1494790108755-2616b9f70db4?w=32&h=32&fit=crop&crop=face',
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face',
    ],
    priority: 'High' as const,
    timeSlot: '2:00 PM - 4:00 PM',
  };

  const flowData = flow || defaultFlow;

  // Generate tasks based on the flow ID
  const getTasksForFlow = (flowId: number) => {
    switch (flowId) {
      case 1: // Morning Floor Setup
        return [
          {
            id: 1,
            title: 'Safety equipment check',
            description: 'Verify all safety equipment is in place and functional',
            status: 'completed' as const,
            completedAt: '20 mins ago',
            hasChecklist: true,
            isInteractive: false,
          },
          {
            id: 2,
            title: 'Clean and organize entrance area',
            description: 'Ensure entrance is welcoming and properly arranged for morning customers',
            status: 'in-progress' as const,
            startedAt: '10 mins ago',
            hasTutorial: true,
            hasJobAid: true,
            isInteractive: true, // Main interactive task for Morning Floor Setup
            subtasks: [
              {
                id: 21,
                title: 'Sweep and mop entrance',
                description: 'Clean the floor thoroughly',
                status: 'completed' as const,
                completedAt: '8 mins ago',
              },
              {
                id: 22,
                title: 'Arrange promotional displays',
                description: 'Set up morning promotional items',
                status: 'in-progress' as const,
                startedAt: '3 mins ago',
              },
              {
                id: 23,
                title: 'Check lighting and signage',
                description: 'Ensure all lights work and signs are visible',
                status: 'pending' as const,
                dependency: 'Starts after displays',
              },
            ]
          },
          {
            id: 3,
            title: 'Stock morning essentials',
            description: 'Ensure coffee, pastries, and breakfast items are fully stocked',
            status: 'pending' as const,
            dependency: 'Starts after current task',
            hasGuidelines: true,
            isInteractive: false,
          },
          {
            id: 4,
            title: 'Final walkthrough',
            description: 'Complete final check of all morning setup items',
            status: 'pending' as const,
            dependency: 'Final step',
            hasChecklist: true,
            isInteractive: false,
          },
        ];
      
      case 2: // Visual merchandising update
      default:
        return [
          {
            id: 1,
            title: 'Review current window displays',
            description: 'Document existing layout and identify areas for improvement',
            status: 'completed' as const,
            completedAt: '30 mins ago',
            hasChecklist: true, // Changed from hasReference to hasChecklist
            isInteractive: false,
          },
          {
            id: 2,
            title: 'Update seasonal product placement',
            description: 'Reorganize front displays with new spring collection items',
            status: 'in-progress' as const,
            startedAt: '15 mins ago',
            hasTutorial: true,
            hasJobAid: true,
            isInteractive: true, // Main interactive task for Visual merchandising
            subtasks: [
              {
                id: 21,
                title: 'Clear existing displays',
                description: 'Remove current items from front displays',
                status: 'completed' as const,
                completedAt: '10 mins ago',
              },
              {
                id: 22,
                title: 'Arrange new spring items',
                description: 'Place new seasonal products in optimal positions',
                status: 'in-progress' as const,
                startedAt: '5 mins ago',
              },
              {
                id: 23,
                title: 'Add pricing and signage',
                description: 'Ensure all items have proper pricing and promotional signage',
                status: 'pending' as const,
                dependency: 'Starts after arrangement',
              },
            ]
          },
          {
            id: 3,
            title: 'Photography for social media',
            description: 'Capture new display setup for store\'s Instagram account',
            status: 'pending' as const,
            dependency: 'Starts after current task',
            hasGuidelines: true,
            isInteractive: false,
          },
          {
            id: 4,
            title: 'Final quality check',
            description: 'Review completed setup and ensure brand standards compliance',
            status: 'pending' as const,
            dependency: 'Final step',
            hasChecklist: true,
            isInteractive: false,
          },
        ];
    }
  };

  const [mainTasks, setMainTasks] = useState<MainTask[]>(() => getTasksForFlow(flowData.id));

  // Update tasks when flow changes
  useEffect(() => {
    setMainTasks(getTasksForFlow(flowData.id));
  }, [flowData.id]);

  const triggerTaskCompletion = (taskName: string, withConfetti: boolean = true, withCamera: boolean = false) => {
    console.log('🎯 Triggering task completion:', { taskName, withConfetti, withCamera }); // Debug log
    setCompletingTaskName(taskName);
    setSkipConfetti(!withConfetti);
    setAutoOpenCamera(withCamera);
    // Force a small delay to ensure state is set
    setTimeout(() => {
      setShowTaskCompletion(true);
      console.log('🚀 Task completion modal should now be showing'); // Debug log
    }, 100);
  };

  const getCurrentInteractiveTaskName = () => {
    const interactiveTask = mainTasks.find(task => task.isInteractive);
    return interactiveTask?.title || 'current task';
  };

  const handleMainTaskToggle = (taskId: number) => {
    console.log('📝 Main task toggle clicked:', taskId);
    setMainTasks(prev => {
      const newTasks = [...prev];
      const taskIndex = newTasks.findIndex(task => task.id === taskId);
      const task = newTasks[taskIndex];

      if (task.status === 'completed') {
        // Uncomplete the task
        task.status = 'in-progress';
        task.completedAt = undefined;
        task.startedAt = '15 mins ago'; // Reset start time
        // If it has subtasks, revert the last one to in-progress
        if (task.subtasks) {
          const lastSubtask = task.subtasks[task.subtasks.length - 1];
          if (lastSubtask) {
            lastSubtask.status = 'in-progress';
            lastSubtask.completedAt = undefined;
          }
        }
      } else {
        // Complete the task
        task.status = 'completed';
        task.completedAt = 'Just now';
        task.startedAt = undefined; // Clear start time when completed
        
        // If it has subtasks, mark them all as completed
        if (task.subtasks) {
          task.subtasks.forEach(subtask => {
            subtask.status = 'completed';
            subtask.completedAt = 'Just now';
          });
        }

        // Trigger Task Complete screen with confetti
        console.log('🎉 About to trigger task completion for:', task.title);
        triggerTaskCompletion(task.title, true, false);
      }

      return newTasks;
    });
  };

  const handleSubtaskToggle = (mainTaskId: number, subtaskId: number) => {
    console.log('📋 Subtask toggle clicked:', mainTaskId, subtaskId);
    setMainTasks(prev => {
      const newTasks = [...prev];
      const mainTaskIndex = newTasks.findIndex(task => task.id === mainTaskId);
      const mainTask = newTasks[mainTaskIndex];
      
      if (mainTask.subtasks) {
        const subtaskIndex = mainTask.subtasks.findIndex(subtask => subtask.id === subtaskId);
        const subtask = mainTask.subtasks[subtaskIndex];

        if (subtask.status === 'completed') {
          // Uncomplete the subtask
          subtask.status = subtask.id === 21 ? 'completed' : 'pending'; // First subtask stays completed
          subtask.completedAt = undefined;
          if (subtask.id !== 21) {
            // Find the previous subtask and make it in-progress
            const prevSubtaskIndex = subtaskIndex - 1;
            if (prevSubtaskIndex >= 0) {
              mainTask.subtasks[prevSubtaskIndex].status = 'in-progress';
              mainTask.subtasks[prevSubtaskIndex].completedAt = undefined;
            }
          }
        } else {
          // Complete the subtask
          subtask.status = 'completed';
          subtask.completedAt = 'Just now';
          
          // Update next subtask to in-progress if it exists
          const nextIncompletedIndex = mainTask.subtasks.findIndex((task, index) => 
            index > subtaskIndex && task.status !== 'completed'
          );
          
          if (nextIncompletedIndex !== -1) {
            mainTask.subtasks[nextIncompletedIndex].status = 'in-progress';
          }
        }

        // Check if all subtasks are completed
        const allSubtasksCompleted = mainTask.subtasks.every(subtask => subtask.status === 'completed');
        if (allSubtasksCompleted && mainTask.status !== 'completed') {
          // Auto-complete the main task
          mainTask.status = 'completed';
          mainTask.completedAt = 'Just now';
          mainTask.startedAt = undefined; // Clear start time when completed
          
          // Trigger Task Complete screen with confetti
          console.log('🎊 All subtasks completed, triggering task completion for:', mainTask.title);
          triggerTaskCompletion(mainTask.title, true, false);
        }
      }

      return newTasks;
    });
  };

  const handleMainTaskComplete = () => {
    console.log('✅ Complete button clicked');
    // Find the main interactive task
    const mainTask = mainTasks.find(task => task.isInteractive);
    if (mainTask) {
      console.log('Found interactive task:', mainTask.title);
      // Mark task as complete first
      setMainTasks(prev => {
        const newTasks = [...prev];
        const taskIndex = newTasks.findIndex(task => task.id === mainTask.id);
        const task = newTasks[taskIndex];
        
        task.status = 'completed';
        task.completedAt = 'Just now';
        task.startedAt = undefined;
        
        // Mark all subtasks as completed
        if (task.subtasks) {
          task.subtasks.forEach(subtask => {
            subtask.status = 'completed';
            subtask.completedAt = 'Just now';
          });
        }
        
        return newTasks;
      });
      
      // Trigger Task Complete screen with confetti
      triggerTaskCompletion(mainTask.title, true, false);
    } else {
      console.log('❌ No interactive task found');
    }
  };

  const handleCompleteWithCamera = () => {
    console.log('📷 Photo button clicked');
    // Find the main interactive task
    const mainTask = mainTasks.find(task => task.isInteractive);
    if (mainTask) {
      console.log('Found interactive task for camera:', mainTask.title);
      // Mark task as complete first
      setMainTasks(prev => {
        const newTasks = [...prev];
        const taskIndex = newTasks.findIndex(task => task.id === mainTask.id);
        const task = newTasks[taskIndex];
        
        task.status = 'completed';
        task.completedAt = 'Just now';
        task.startedAt = undefined;
        
        // Mark all subtasks as completed
        if (task.subtasks) {
          task.subtasks.forEach(subtask => {
            subtask.status = 'completed';
            subtask.completedAt = 'Just now';
          });
        }
        
        return newTasks;
      });
      
      // Trigger Task Complete screen without confetti but with auto camera
      triggerTaskCompletion(mainTask.title, false, true);
    } else {
      console.log('❌ No interactive task found for camera');
    }
  };

  const handleNotesClick = () => {
    console.log('📝 Notes button clicked');
    setShowNotes(true);
  };

  const handleShowMeHowClick = () => {
    console.log('🎥 Show Me How button clicked');
    setShowTutorial(true);
  };

  const handleJobAidClick = () => {
    console.log('📋 Job Aid button clicked');
    setShowJobAid(true);
  };

  // NEW: Handle text clicks to open Show Me How
  const handleTaskTextClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('📝 Task text clicked - opening Show Me How');
    handleShowMeHowClick();
  };

  const handleSubtaskTextClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('📋 Subtask text clicked - opening Show Me How');
    handleShowMeHowClick();
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'text-[#8BB501]';
      case 'in-progress': return 'text-[#E31837]';
      case 'pending': return 'text-white/60';
      default: return 'text-white/60';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High': return 'text-[#E31837] bg-[#E31837]/20';
      case 'Medium': return 'text-[#038FC7] bg-[#038FC7]/20';
      case 'Low': return 'text-[#8BB501] bg-[#8BB501]/20';
      default: return 'text-white/60 bg-white/10';
    }
  };

  // Get appropriate Skillz based on flow type
  const getSkillzForFlow = (flowId: number) => {
    switch (flowId) {
      case 1: // Morning Floor Setup
        return ['Store Operations', 'Customer Service'];
      case 2: // Visual merchandising
      default:
        return ['Visual Design', 'Brand Standards'];
    }
  };

  if (!isOpen) return null;

  const currentProgress = Math.round((mainTasks.filter(task => task.status === 'completed').length / mainTasks.length) * 100);
  const skillzForFlow = getSkillzForFlow(flowData.id);

  return (
    <>
      <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm">
        <div className="absolute inset-x-0 bottom-0 top-16 bg-[#0A0A0B] rounded-t-3xl overflow-hidden">
          {/* Header - Updated styling */}
          <div className="sticky top-0 z-10 glass-card border-b border-white/10 p-4">
            <div className="flex items-center justify-between">
              <Button
                variant="ghost"
                size="sm"
                onClick={onClose}
                className="bg-white/5 hover:bg-white/10 rounded-full w-10 h-10 p-0"
              >
                <ArrowLeft size={18} className="text-white" />
              </Button>
              
              <Button
                variant="ghost"
                size="sm"
                className="bg-white/5 hover:bg-white/10 rounded-full w-10 h-10 p-0"
              >
                <MoreHorizontal size={18} className="text-white" />
              </Button>
            </div>
          </div>

          {/* Scrollable Content */}
          <div className="overflow-y-auto h-full pb-32">
            {/* Main Flow Card */}
            <div className="p-4">
              <GlassCard className="space-y-4 relative">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h2 className="text-white text-xl font-brand mb-2">{flowData.title}</h2>
                    
                    <div className="flex items-center gap-4 text-white/60 text-sm mb-1">
                      <div className="flex items-center gap-1">
                        <Clock size={14} />
                        <span>{flowData.timeSlot}</span>
                      </div>
                      <span>•</span>
                      <Badge className={cn("text-xs", getPriorityColor(flowData.priority))}>
                        {flowData.priority} Priority
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div 
                      className="text-[#E31837] text-2xl font-bold"
                      style={{
                        textShadow: '0 0 10px rgba(227, 24, 55, 0.4), 0 0 20px rgba(227, 24, 55, 0.2)'
                      }}
                    >
                      {currentProgress}%
                    </div>
                    <div className="text-white/60 text-xs">Complete</div>
                  </div>
                </div>

                {/* Collaborators */}
                {flowData.collaborators.length > 0 && (
                  <div className="flex items-center gap-2">
                    <span className="text-white/60 text-sm">Working with:</span>
                    <div className="flex -space-x-2">
                      {flowData.collaborators.map((avatar, index) => (
                        <div key={index} className="relative">
                          <Avatar className="w-8 h-8 ring-2 ring-background">
                            <AvatarImage src={avatar} />
                            <AvatarFallback className="text-xs">
                              {index === 0 ? 'A' : 'S'}
                            </AvatarFallback>
                          </Avatar>
                          <div className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-[#8BB501] border-2 border-background rounded-full"></div>
                        </div>
                      ))}
                    </div>
                    <span className="text-white/60 text-sm ml-2">Alex & Sarah</span>
                  </div>
                )}

                {/* Progress Bar */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-white/60">Progress</span>
                  </div>
                  <Progress value={currentProgress} className="h-2 bg-white/10" />
                </div>

                {/* Skillz Impact Indicators - Bottom right position */}
                <div className="flex items-center justify-end gap-2">
                  {skillzForFlow.map((skill, index) => (
                    <Badge 
                      key={index} 
                      variant="outline"
                      className="text-[#E31837] bg-transparent border-[#E31837] text-xs"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </GlassCard>
            </div>

            {/* Tasks Section */}
            <div className="px-4 space-y-4">
              <h3 className="text-white text-xl font-brand">Tasks</h3>
              
              {mainTasks.map((task) => {
                const isActive = task.status === 'in-progress';
                const isCompleted = task.status === 'completed';
                
                return (
                  <div key={task.id} className="relative">
                    <GlassCard 
                      className={cn(
                        "space-y-4",
                        isActive && "border-[#E31837]/30 bg-[#E31837]/5",
                        task.status === 'pending' && "opacity-70"
                      )}
                    >
                      <div className="flex items-start gap-3">
                        {/* Task Radio Button - Only interactive for the main task */}
                        {task.isInteractive ? (
                          <button
                            onClick={() => handleMainTaskToggle(task.id)}
                            className={cn(
                              "w-6 h-6 rounded-full flex items-center justify-center mt-1 cursor-pointer transition-all duration-200 spring-scale",
                              task.status === 'completed' && "bg-[#8BB501]",
                              task.status === 'in-progress' && "border-2 border-[#E31837] bg-[#E31837]/20 hover:bg-[#E31837]/30",
                              task.status === 'pending' && "border border-white/30 hover:border-white/50"
                            )}
                          >
                            {task.status === 'completed' ? (
                              <CheckCircle2 size={12} className="text-white" />
                            ) : task.status === 'in-progress' ? (
                              <div className="w-2 h-2 bg-[#E31837] rounded-full" />
                            ) : null}
                          </button>
                        ) : (
                          <div className={cn(
                            "w-6 h-6 rounded-full flex items-center justify-center mt-1",
                            task.status === 'completed' && "bg-[#8BB501]",
                            task.status === 'in-progress' && "border-2 border-[#E31837] bg-[#E31837]/20",
                            task.status === 'pending' && "border border-white/30"
                          )}>
                            {task.status === 'completed' ? (
                              <CheckCircle2 size={12} className="text-white" />
                            ) : task.status === 'in-progress' ? (
                              <div className="w-2 h-2 bg-[#E31837] rounded-full" />
                            ) : null}
                          </div>
                        )}
                        
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-1">
                            <h4 
                              className={cn(
                                "font-medium transition-all duration-200 cursor-pointer hover:text-[#E31837] hover:underline",
                                task.status === 'completed' && "text-white/60 line-through",
                                task.status === 'in-progress' && "text-white font-bold",
                                task.status === 'pending' && "text-white/70"
                              )}
                              onClick={handleTaskTextClick}
                              title="Click to view tutorial"
                            >
                              {task.title}
                            </h4>
                            <Badge 
                              variant="outline" 
                              className={cn("text-xs ml-2", getStatusColor(task.status))}
                            >
                              {task.status === 'completed' && 'Completed'}
                              {task.status === 'in-progress' && 'In Progress'}
                              {task.status === 'pending' && 'Pending'}
                            </Badge>
                          </div>
                          
                          <p className="text-white/60 text-sm mb-3">{task.description}</p>

                          {/* Subtasks - Only for the interactive task */}
                          {task.subtasks && task.isInteractive && (
                            <div className="space-y-2 mb-3 pl-4 border-l border-white/10">
                              {task.subtasks.map((subtask) => (
                                <div key={subtask.id} className="flex items-center gap-2">
                                  <button
                                    onClick={() => handleSubtaskToggle(task.id, subtask.id)}
                                    className={cn(
                                      "w-4 h-4 rounded-full flex items-center justify-center cursor-pointer transition-all duration-200 spring-scale",
                                      subtask.status === 'completed' && "bg-[#8BB501]",
                                      subtask.status === 'in-progress' && "border border-[#E31837] bg-[#E31837]/20",
                                      subtask.status === 'pending' && "border border-white/30"
                                    )}
                                  >
                                    {subtask.status === 'completed' ? (
                                      <CheckCircle2 size={8} className="text-white" />
                                    ) : subtask.status === 'in-progress' ? (
                                      <div className="w-1 h-1 bg-[#E31837] rounded-full" />
                                    ) : null}
                                  </button>
                                  <span 
                                    className={cn(
                                      "text-sm cursor-pointer hover:text-[#E31837] hover:underline transition-colors duration-200",
                                      subtask.status === 'completed' && "text-white/60 line-through",
                                      subtask.status === 'in-progress' && "text-white font-bold",
                                      subtask.status === 'pending' && "text-white/60"
                                    )}
                                    onClick={handleSubtaskTextClick}
                                    title="Click to view tutorial"
                                  >
                                    {subtask.title}
                                  </span>
                                </div>
                              ))}
                            </div>
                          )}

                          {/* Footer with timing and actions */}
                          <div className="flex items-center justify-between text-xs">
                            <div className="flex items-center gap-1 text-white/60">
                              <Clock size={12} />
                              {task.completedAt && <span>Completed {task.completedAt}</span>}
                              {task.startedAt && !task.completedAt && <span>Started {task.startedAt}</span>}
                              {task.dependency && !task.completedAt && !task.startedAt && <span>{task.dependency}</span>}
                            </div>
                            
                            <div className="flex items-center gap-2">
                              {task.hasChecklist && (
                                <Button variant="ghost" size="sm" className="text-white/60 text-xs h-6 px-2">
                                  <ClipboardList size={10} className="mr-1" />
                                  Checklist
                                </Button>
                              )}
                              {task.hasTutorial && (
                                <Button 
                                  variant="ghost" 
                                  size="sm" 
                                  className="text-[#E31837] text-xs h-6 px-2 hover:bg-[#E31837]/10 transition-colors"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    handleShowMeHowClick();
                                  }}
                                >
                                  <Play size={10} className="mr-1" />
                                  Tutorial
                                </Button>
                              )}
                              {task.hasJobAid && (
                                <Button 
                                  variant="ghost" 
                                  size="sm" 
                                  className="text-white/60 text-xs h-6 px-2 hover:bg-white/10 transition-colors"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    handleJobAidClick();
                                  }}
                                >
                                  <FileImage size={10} className="mr-1" />
                                  Job Aid
                                </Button>
                              )}
                              {task.hasGuidelines && (
                                <Button variant="ghost" size="sm" className="text-white/60 text-xs h-6 px-2">
                                  <Book size={10} className="mr-1" />
                                  Guidelines
                                </Button>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </GlassCard>

                    {/* Floating Action Buttons with Blurred Border Effect - Slightly overlapping */}
                    {isActive && (
                      <div className="relative -mt-2">
                        {/* Blurred border connecting element */}
                        <div 
                          className="absolute -top-1 left-4 right-4 h-2 bg-gradient-to-b from-white/10 to-transparent"
                          style={{
                            backdropFilter: 'blur(4px)',
                            maskImage: 'linear-gradient(to bottom, white, transparent)',
                          }}
                        />
                        
                        <div className="px-4">
                          <GlassCard className="flex items-center gap-3 p-3 border-t-0">
                            <Button 
                              className="bg-[#E31837]/20 hover:bg-[#E31837]/30 text-[#E31837] border-[#E31837]/30 flex-1 animate-gentle-glow"
                              onClick={handleShowMeHowClick}
                            >
                              <Play size={16} className="mr-2" />
                              Show Me How
                            </Button>
                            
                            <Button
                              variant="ghost"
                              size="sm"
                              className="bg-white/5 hover:bg-white/10 rounded-xl w-12 h-9"
                              onClick={handleJobAidClick}
                            >
                              <FileImage size={16} className="text-white" />
                            </Button>
                            
                            <Button
                              variant="ghost"
                              size="sm"
                              className="bg-white/5 hover:bg-white/10 rounded-xl w-12 h-9"
                              onClick={handleNotesClick}
                            >
                              <MessageSquare size={16} className="text-white" />
                            </Button>
                          </GlassCard>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Bottom Action Bar - ORIGINAL DESIGN PRESERVED */}
          <div className="fixed bottom-0 left-0 right-0 z-10">
            <div className="glass-card rounded-t-3xl border-t border-white/10 p-4">
              <div className="flex justify-around items-center">
                {/* Complete Button */}
                <button
                  className="flex flex-col items-center gap-1 p-3 rounded-2xl transition-all duration-200 spring-scale bg-[#E31837] hover:bg-[#E31837]/80 text-white"
                  onClick={handleMainTaskComplete}
                >
                  <Check size={24} />
                  <span className="text-xs">Complete</span>
                </button>

                {/* Documentation Button */}
                <button
                  className="flex flex-col items-center gap-1 p-3 rounded-2xl transition-all duration-200 spring-scale text-white/60 hover:text-white/80 hover:bg-white/5"
                  onClick={handleNotesClick}
                >
                  <FileText size={24} />
                  <span className="text-xs">Notes</span>
                </button>

                {/* Camera Button */}
                <button
                  className="flex flex-col items-center gap-1 p-3 rounded-2xl transition-all duration-200 spring-scale text-white/60 hover:text-white/80 hover:bg-white/5"
                  onClick={handleCompleteWithCamera}
                >
                  <Camera size={24} />
                  <span className="text-xs">Photo</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Task Completion Modal */}
      <TaskCompletion
        isOpen={showTaskCompletion}
        onClose={() => {
          console.log('🔄 Closing task completion modal');
          setShowTaskCompletion(false);
          setCompletingTaskName('');
          setAutoOpenCamera(false);
          setSkipConfetti(false);
          // Don't close flow details - user should stay in the flow
        }}
        taskName={completingTaskName}
        autoOpenCamera={autoOpenCamera}
        skipConfetti={skipConfetti}
      />

      {/* Camera Modal */}
      <CameraModal
        isOpen={showCamera}
        onClose={() => setShowCamera(false)}
        onPhotoTaken={() => {}}
      />

      {/* Notes Modal */}
      <NotesModal
        isOpen={showNotes}
        onClose={() => setShowNotes(false)}
        taskName={getCurrentInteractiveTaskName()}
      />

      {/* Show Me How Tutorial Modal */}
      <ShowMeHowModal
        isOpen={showTutorial}
        onClose={() => setShowTutorial(false)}
        taskName={getCurrentInteractiveTaskName()}
      />

      {/* Job Aid Modal */}
      <JobAidModal
        isOpen={showJobAid}
        onClose={() => setShowJobAid(false)}
        taskName={getCurrentInteractiveTaskName()}
        flowId={flowData.id}
      />
    </>
  );
}
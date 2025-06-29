import { useState } from 'react';
import { GlassCard } from './GlassCard';
import { TodaysTeam } from './TodaysTeam';
import { UserSwitchModal } from './UserSwitchModal';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { Button } from './ui/button';
import { Plus, Clock, HelpCircle, CheckCircle2, Play, ArrowRight } from 'lucide-react';
import { FlowDetails } from './FlowDetails';
import { cn } from './ui/utils';

export function DailyTasks() {
  const [activeTab, setActiveTab] = useState('team');
  const [selectedFlow, setSelectedFlow] = useState<any>(null);
  const [showFlowDetails, setShowFlowDetails] = useState(false);
  const [showUserSwitch, setShowUserSwitch] = useState(false);

  const tabs = [
    { id: 'team', label: 'Team Flows' },
    { id: 'my', label: 'My Flows' },
    { id: 'completed', label: 'Completed' },
  ];

  const teamTasks = [
    {
      id: 1,
      title: 'Morning Floor Setup',
      estimatedTime: '15 min',
      progress: 75,
      collaborators: [
        'https://images.unsplash.com/photo-1494790108755-2616b9f70db4?w=32&h=32&fit=crop&crop=face',
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face',
      ],
      isShared: true,
      onlineStatus: [true, true],
      priority: 'Medium' as const,
      timeSlot: '9:00 AM - 9:15 AM',
    },
    {
      id: 2,
      title: 'Visual merchandising update',
      estimatedTime: '30 min',
      progress: 45,
      collaborators: [
        'https://images.unsplash.com/photo-1494790108755-2616b9f70db4?w=32&h=32&fit=crop&crop=face',
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face',
      ],
      isShared: true,
      onlineStatus: [true, true],
      priority: 'High' as const,
      timeSlot: '2:00 PM - 4:00 PM',
    },
  ];

  const myTasks = [
    {
      id: 3,
      title: 'Update inventory counts',
      estimatedTime: '20 min',
      progress: 60,
      collaborators: [],
      isShared: false,
      onlineStatus: [],
      priority: 'Medium' as const,
      timeSlot: '1:00 PM - 1:20 PM',
    },
    {
      id: 4,
      title: 'Complete safety checklist',
      estimatedTime: '10 min',
      progress: 0,
      collaborators: [],
      isShared: false,
      onlineStatus: [],
      priority: 'High' as const,
      timeSlot: '10:00 AM - 10:10 AM',
    },
  ];

  const completedTasks = [
    {
      id: 5,
      title: 'Customer Service Excellence',
      estimatedTime: '25 min',
      progress: 100,
      collaborators: [],
      isShared: false,
      completedAt: '2 hours ago',
      onlineStatus: [],
      priority: 'Low' as const,
      timeSlot: '8:00 AM - 8:25 AM',
    },
  ];

  const getCurrentTasks = () => {
    switch (activeTab) {
      case 'team':
        return teamTasks;
      case 'my':
        return myTasks;
      case 'completed':
        return completedTasks;
      default:
        return teamTasks;
    }
  };

  const handleFlowClick = (task: any) => {
    setSelectedFlow(task);
    setShowFlowDetails(true);
  };

  const handleActionClick = (task: any, e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent flow card click
    setSelectedFlow(task);
    setShowFlowDetails(true);
  };

  return (
    <>
      <div className="p-4 pb-32 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h1 className="text-white text-2xl font-brand">Daily Flows</h1>
          <Badge className="bg-[#E31837]/20 text-[#E31837] border-[#E31837]/30">
            6 flows today
          </Badge>
        </div>

        {/* Segmented Control - More Subtle */}
        <div className="glass-card p-1 rounded-2xl">
          <div className="flex">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "flex-1 py-3 px-4 rounded-xl transition-all duration-300 text-sm font-medium spring-scale",
                  activeTab === tab.id
                    ? "bg-white/10 text-white backdrop-blur-sm shadow-sm"
                    : "text-white/50 hover:text-white/70 hover:bg-white/5"
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Task Cards */}
        <div className="space-y-4">
          {getCurrentTasks().map((task) => (
            <div key={task.id} className="flex gap-3">
              <GlassCard 
                className={cn(
                  "flex-1 space-y-4 cursor-pointer transition-all duration-200",
                  "hover:bg-white/8 hover:border-white/20 spring-scale"
                )}
                onClick={() => handleFlowClick(task)}
                style={{
                  boxShadow: `
                    0 8px 25px rgba(0, 0, 0, 0.15),
                    0 0 0 1px rgba(227, 24, 55, 0.06),
                    inset 0 1px 0 rgba(255, 255, 255, 0.1)
                  `
                }}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-white">{task.title}</h3>
                      {task.isShared && (
                        <Badge variant="outline" className="border-[#E31837]/30 text-[#E31837] text-xs">
                          Shared
                        </Badge>
                      )}
                    </div>
                    
                    <div className="flex items-center gap-4 text-white/60 text-sm">
                      <div className="flex items-center gap-1">
                        <Clock size={14} />
                        <span>{task.estimatedTime}</span>
                      </div>
                      
                      {task.completedAt && (
                        <div className="flex items-center gap-1">
                          <CheckCircle2 size={14} className="text-green-400" />
                          <span>{task.completedAt}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-[#E31837] hover:bg-[#E31837]/10 spring-scale"
                    onClick={(e) => {
                      e.stopPropagation();
                      // Handle help action
                    }}
                  >
                    <HelpCircle size={16} />
                  </Button>
                </div>

                {/* Collaborators */}
                {task.collaborators.length > 0 && (
                  <div className="flex items-center gap-2">
                    <span className="text-white/60 text-sm">Working with:</span>
                    <div className="flex -space-x-2">
                      {task.collaborators.map((avatar, index) => (
                        <div key={index} className="relative">
                          <Avatar className="w-6 h-6 ring-2 ring-background">
                            <AvatarImage src={avatar} />
                            <AvatarFallback className="text-xs">
                              {index === 0 ? 'A' : index === 1 ? 'M' : 'E'}
                            </AvatarFallback>
                          </Avatar>
                          {task.onlineStatus[index] && (
                            <div className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-[#8BB501] border-2 border-background rounded-full"></div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Progress Bar */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-white/60">Progress</span>
                    <span className="text-[#E31837]">{task.progress}%</span>
                  </div>
                  <Progress 
                    value={task.progress} 
                    className="h-2 bg-white/10"
                  />
                </div>

                {/* Completed Status */}
                {task.progress === 100 && (
                  <div className="flex items-center gap-2 text-green-400">
                    <CheckCircle2 size={16} />
                    <span className="text-sm">Completed</span>
                  </div>
                )}
              </GlassCard>

              {/* Action Icon - Only Red Arrows */}
              {task.progress < 100 && (
                <div className="bg-[#E31837]/10 backdrop-blur-sm border border-[#E31837]/20 rounded-xl p-3 flex items-center justify-center min-w-[56px]">
                  <button 
                    className="w-10 h-10 bg-[#E31837] rounded-full flex items-center justify-center spring-scale hover:bg-[#E31837]/80"
                    onClick={(e) => handleActionClick(task, e)}
                  >
                    {task.progress > 0 ? (
                      <ArrowRight size={20} className="text-white" />
                    ) : (
                      <Play size={20} className="text-white ml-0.5" />
                    )}
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Today's Team Section - Floating above bottom menu */}
        <TodaysTeam 
          onClick={() => setShowUserSwitch(true)}
          className="fixed bottom-24 left-4 right-4 z-10"
        />

        {/* Floating Action Button */}
        <button className="fixed bottom-20 right-4 w-14 h-14 sheetz-button-gradient rounded-full flex items-center justify-center shadow-lg glow-accent spring-scale z-20">
          <Plus size={24} className="text-white" />
        </button>
      </div>

      {/* Flow Details Overlay */}
      <FlowDetails
        isOpen={showFlowDetails}
        onClose={() => {
          setShowFlowDetails(false);
          setSelectedFlow(null);
        }}
        flow={selectedFlow}
      />

      {/* User Switch Modal */}
      <UserSwitchModal 
        isOpen={showUserSwitch}
        onClose={() => setShowUserSwitch(false)}
      />
    </>
  );
}
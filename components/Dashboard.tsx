import { useState } from 'react';
import { GlassCard } from './GlassCard';
import { SheetzLogo } from './SheetzLogo';
import { TodaysTeam } from './TodaysTeam';
import { UserSwitchModal } from './UserSwitchModal';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { Clock, CheckCircle2, AlertCircle, Users, TrendingUp } from 'lucide-react';
import alexProfileImage from 'figma:asset/9a7c090324a6b6bb61e411af53004183d20e68d3.png';

interface DashboardProps {
  onNavigate: (tab: string) => void;
}

export function Dashboard({ onNavigate }: DashboardProps) {
  const [showUserSwitch, setShowUserSwitch] = useState(false);

  const todaysTasks = [
    {
      id: 1,
      title: 'Morning inventory check',
      time: '9:00 AM',
      completed: true,
      collaborators: [
        'https://images.unsplash.com/photo-1494790108755-2616b9f70db4?w=32&h=32&fit=crop&crop=face',
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face',
      ]
    },
    {
      id: 2,
      title: 'Product training session',
      time: '11:30 AM',
      completed: true,
      collaborators: [
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=32&h=32&fit=crop&crop=face',
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face',
      ]
    },
    {
      id: 3,
      title: 'Visual merchandising update',
      time: '2:00 PM',
      completed: false,
      inProgress: true,
      collaborators: [
        'https://images.unsplash.com/photo-1494790108755-2616b9f70db4?w=32&h=32&fit=crop&crop=face',
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face',
      ]
    },
    {
      id: 4,
      title: 'End of day report',
      time: '6:30 PM',
      completed: false,
      inProgress: false,
      collaborators: [
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=32&h=32&fit=crop&crop=face',
      ]
    },
  ];

  const myTasks = [
    {
      id: 1,
      title: 'Restock premium section',
      duration: '30 mins',
      priority: 'High priority',
      progress: 60,
      priorityColor: '#E31837'
    },
    {
      id: 2,
      title: 'Customer satisfaction survey',
      duration: '15 mins',
      priority: 'Medium priority',
      progress: 25,
      priorityColor: '#038FC7'
    },
  ];

  const dailyCompletion = 75;
  const weeklyData = [
    { day: 'Mon', value: 65 },
    { day: 'Tue', value: 72 },
    { day: 'Wed', value: 68 },
    { day: 'Thu', value: 82 },
    { day: 'Fri', value: 78 },
    { day: 'Sat', value: 85 },
    { day: 'Sun', value: 75 },
  ];

  const completedTasks = todaysTasks.filter(task => task.completed).length;
  const totalTasks = todaysTasks.length;
  const completionPercentage = Math.round((completedTasks / totalTasks) * 100);

  // Navigation handlers
  const handleFlowsNavigation = () => {
    onNavigate('tasks');
  };

  const handleProfileNavigation = () => {
    onNavigate('profile');
  };

  const handleTeamNavigation = () => {
    onNavigate('team');
  };

  const handleSkillzNavigation = () => {
    onNavigate('skills');
  };

  return (
    <>
      <div className="p-4 pb-24 space-y-6">
        {/* Header Section with Sheetz Branding */}
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              {/* Sheetz Logo */}
              <div className="flex items-center gap-2">
                <SheetzLogo size={32} />
              </div>
            </div>
            <h1 className="text-white text-2xl mb-1 font-brand">Good afternoon, Alex</h1>
            <div className="flex items-center gap-2">
              <span className="text-white/60">Sales Associate</span>
              <span className="text-white/40">•</span>
              <button 
                className="text-[#E31837] hover:text-[#FF1E42] transition-colors"
                onClick={handleTeamNavigation}
              >
                Store #478
              </button>
            </div>
          </div>
          <button onClick={handleProfileNavigation}>
            <Avatar className="w-12 h-12 ring-2 ring-[#E31837]/30 hover:ring-[#E31837]/50 transition-all cursor-pointer">
              <AvatarImage src={alexProfileImage} />
              <AvatarFallback>A</AvatarFallback>
            </Avatar>
          </button>
        </div>

        {/* Today's Flow Card - Clickable */}
        <button onClick={handleFlowsNavigation} className="w-full text-left">
          <GlassCard hover glow className="transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-white text-xl font-brand">Today's Flow</h2>
              <span className="text-[#E31837] px-2 py-1 rounded-full bg-[#E31837]/10">
                {completionPercentage}% Complete
              </span>
            </div>
            
            <div className="space-y-4">
              {todaysTasks.map((task) => (
                <div key={task.id} className="flex items-center gap-3">
                  <div className="flex-shrink-0">
                    {task.completed ? (
                      <CheckCircle2 size={20} className="text-green-400" />
                    ) : task.inProgress ? (
                      <div className="w-5 h-5 border-2 border-[#E31837] rounded-full flex items-center justify-center animate-pulse-glow">
                        <div className="w-2 h-2 bg-[#E31837] rounded-full animate-pulse" />
                      </div>
                    ) : (
                      <div className="w-5 h-5 border-2 border-white/30 rounded-full" />
                    )}
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <p className={`${task.completed ? 'text-white/60 line-through' : 'text-white'}`}>
                      {task.title}
                    </p>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="flex -space-x-1">
                        {task.collaborators.map((avatar, index) => (
                          <Avatar key={index} className="w-5 h-5 ring-1 ring-background">
                            <AvatarImage src={avatar} />
                            <AvatarFallback className="text-xs">
                              {index === 0 ? 'S' : index === 1 ? 'M' : 'E'}
                            </AvatarFallback>
                          </Avatar>
                        ))}
                      </div>
                      {task.completed && (
                        <span className="text-green-400 text-xs">✓ Completed</span>
                      )}
                      {task.inProgress && (
                        <span className="text-[#E31837] text-xs">⏳ In progress</span>
                      )}
                      {!task.completed && !task.inProgress && (
                        <span className="text-white/40 text-xs">⏰ Upcoming</span>
                      )}
                    </div>
                  </div>
                  
                  <span className="text-white/60 text-sm flex-shrink-0">{task.time}</span>
                </div>
              ))}
            </div>
          </GlassCard>
        </button>

        {/* Data Visualization Cards - Clickable */}
        <div className="grid grid-cols-2 gap-4">
          {/* Daily Completion - Clickable */}
          <button onClick={handleSkillzNavigation} className="w-full h-full">
            <GlassCard hover className="flex flex-col items-center justify-between py-4 px-2 h-full transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]">
              <p className="text-white/60 text-sm mb-3">Daily Completion</p>
              <div className="relative mb-3 flex-1 flex items-center justify-center">
                <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 36 36">
                  <path
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="rgba(255,255,255,0.1)"
                    strokeWidth="2.5"
                  />
                  <path
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#E31837"
                    strokeWidth="2.5"
                    strokeDasharray={`${dailyCompletion}, 100`}
                    className="drop-shadow-sm animate-pulse-glow"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-white font-semibold text-lg">{dailyCompletion}%</span>
                </div>
              </div>
              <span className="text-white/60 text-xs">Today</span>
            </GlassCard>
          </button>

          {/* Weekly Performance - Clickable */}
          <button onClick={handleSkillzNavigation} className="w-full h-full">
            <GlassCard hover className="flex flex-col items-center justify-between py-4 px-2 h-full transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]">
              <p className="text-white/60 text-sm mb-3">Weekly Performance</p>
              <div className="flex items-end justify-center gap-1.5 h-12 mb-3 flex-1">
                {weeklyData.map((item, index) => (
                  <div key={item.day} className="flex flex-col items-center gap-1 h-full justify-end">
                    <div
                      className="bg-gradient-to-t from-[#1E1B4B] to-[#E31837] rounded-sm transition-all duration-300"
                      style={{ 
                        height: `${(item.value / 100) * 40}px`, 
                        width: '6px',
                        opacity: index === weeklyData.length - 1 ? 1 : 0.7
                      }}
                    />
                  </div>
                ))}
              </div>
              <div className="flex gap-1.5">
                {weeklyData.map((item) => (
                  <span key={item.day} className="text-white/40 text-xs w-6 text-center">
                    {item.day.slice(0, 1)}
                  </span>
                ))}
              </div>
            </GlassCard>
          </button>
        </div>

        {/* My Tasks Section */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-white text-xl font-brand">My Taskz</h3>
            <button 
              className="text-[#E31837] text-sm hover:text-[#FF1E42] transition-colors"
              onClick={handleFlowsNavigation}
            >
              View All
            </button>
          </div>
          
          <div className="space-y-3">
            {myTasks.map((task) => (
              <button key={task.id} onClick={handleFlowsNavigation} className="w-full text-left">
                <GlassCard hover className="transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]">
                  <div className="flex items-start gap-3">
                    <div 
                      className="w-3 h-3 rounded-full mt-2 flex-shrink-0"
                      style={{ backgroundColor: task.priorityColor }}
                    />
                    
                    <div className="flex-1 min-w-0">
                      <h4 className="text-white mb-1">{task.title}</h4>
                      <div className="flex items-center gap-4 text-sm text-white/60 mb-3">
                        <div className="flex items-center gap-1">
                          <Clock size={12} />
                          <span>{task.duration}</span>
                        </div>
                        <span style={{ color: task.priorityColor }}>
                          {task.priority}
                        </span>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-white/40 text-sm">Progress</span>
                        <span className="text-white/60 text-sm">{task.progress}%</span>
                      </div>
                      <div className="w-full bg-white/10 rounded-full h-1.5 mt-1">
                        <div 
                          className="h-1.5 rounded-full transition-all duration-300"
                          style={{ 
                            width: `${task.progress}%`,
                            backgroundColor: task.priorityColor
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </button>
            ))}
          </div>
        </div>

        {/* Today's Team Section */}
        <TodaysTeam onClick={() => setShowUserSwitch(true)} />
      </div>

      {/* User Switch Modal */}
      <UserSwitchModal 
        isOpen={showUserSwitch}
        onClose={() => setShowUserSwitch(false)}
      />
    </>
  );
}
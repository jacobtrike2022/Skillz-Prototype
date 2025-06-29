import { useState } from 'react';
import { GlassCard } from './GlassCard';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Progress } from './ui/progress';
import { UserSwitchModal } from './UserSwitchModal';
import { TrendingUp, Users, Clock, Star, ArrowRight } from 'lucide-react';

interface TeamProps {
  onNavigate?: (tab: string) => void;
}

export function Team({ onNavigate }: TeamProps) {
  const [showUserSwitch, setShowUserSwitch] = useState(false);

  const teamStats = [
    { label: 'Completion Rate', value: '87%', color: '#E31837' },
    { label: 'Flows Done', value: '42', color: '#8BB501' },
    { label: 'Avg Rating', value: '6.8', color: '#038FC7' },
  ];

  const activeMembers = [
    {
      id: 1,
      name: 'Sarah Chen',
      role: 'Team Lead',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b9f70db4?w=48&h=48&fit=crop&crop=face',
      completion: 95,
      tasksCompleted: '8/8',
      status: 'online',
      borderColor: '#E31837'
    },
    {
      id: 2,
      name: 'Mike Rodriguez',
      role: 'Sales Associate',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=48&h=48&fit=crop&crop=face',
      completion: 88,
      tasksCompleted: '7/8',
      status: 'online',
      borderColor: '#8BB501'
    },
    {
      id: 3,
      name: 'Emma Watson',
      role: 'Sales Associate',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=48&h=48&fit=crop&crop=face',
      completion: 82,
      tasksCompleted: '6/8',
      status: 'online',
      borderColor: '#FBBF24',
      hasAlert: true
    },
    {
      id: 4,
      name: 'Alex Johnson',
      role: 'Sales Associate',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=48&h=48&fit=crop&crop=face',
      completion: 75,
      tasksCompleted: '6/8',
      status: 'online',
      borderColor: '#038FC7'
    },
  ];

  const liveCollaboration = [
    {
      id: 1,
      title: 'Visual Merchandising Update',
      startedTime: '15 mins ago',
      status: 'In Progress',
      progress: 65,
      members: [
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face',
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face',
      ],
      memberCount: 2,
      gradient: 'from-[#4a0072] to-[#E31837]'
    },
    {
      id: 2,
      title: 'Inventory Count - Electronics',
      startedTime: '8 mins ago',
      status: 'Active',
      progress: 42,
      members: [
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face',
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=32&h=32&fit=crop&crop=face',
        'https://images.unsplash.com/photo-1494790108755-2616b9f70db4?w=32&h=32&fit=crop&crop=face',
      ],
      memberCount: 3,
      gradient: 'from-[#8BB501] to-[#038FC7]'
    },
  ];

  const leaderboard = [
    {
      id: 1,
      name: 'Sarah Chen',
      role: 'Team Lead',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b9f70db4?w=40&h=40&fit=crop&crop=face',
      points: 1250,
      rank: 1,
      badgeColor: '#FBBF24',
      pointsColor: '#FBBF24'
    },
    {
      id: 2,
      name: 'Mike Rodriguez',
      role: 'Sales Associate',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face',
      points: 1180,
      rank: 2,
      badgeColor: '#9CA3AF',
      pointsColor: '#9CA3AF'
    },
    {
      id: 3,
      name: 'Emma Watson',
      role: 'Sales Associate',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face',
      points: 1120,
      rank: 3,
      badgeColor: '#EA580C',
      pointsColor: '#EA580C'
    },
  ];

  const handleArrowClick = () => {
    setShowUserSwitch(true);
  };

  const handleUserSwitchClose = () => {
    setShowUserSwitch(false);
    // Navigate to flows screen after user switch modal closes
    if (onNavigate) {
      onNavigate('tasks');
    }
  };

  const handleViewAllClick = () => {
    // Navigate to skills screen with team average view
    if (onNavigate) {
      onNavigate('skills');
      // Dispatch custom event after navigation to ensure component is mounted
      setTimeout(() => {
        window.dispatchEvent(new CustomEvent('setSkillsView', { detail: 'team' }));
      }, 100);
    }
  };

  const handlePerformanceChartClick = () => {
    // Same functionality as View All button
    handleViewAllClick();
  };

  return (
    <div className="p-4 pb-24 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-white text-2xl font-brand">Team Dashboard</h1>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-white/60 text-sm">Store #478</span>
            <Badge className="bg-[#8BB501]/20 text-[#8BB501] border-[#8BB501]/30 text-xs">
              7 Active
            </Badge>
          </div>
        </div>
        
        {/* User Switch Arrow */}
        <button
          onClick={handleArrowClick}
          className="relative w-10 h-10 rounded-full bg-[#E31837]/20 backdrop-blur-sm border border-[#E31837]/30 flex items-center justify-center hover:bg-[#E31837]/30 transition-all duration-200 spring-scale"
        >
          <ArrowRight size={16} className="text-[#E31837]" />
        </button>
      </div>

      {/* Team Performance */}
      <GlassCard className="space-y-6">
        <h2 className="text-white text-xl font-brand">Team Performance</h2>
        
        <div className="grid grid-cols-3 gap-4">
          {teamStats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl font-bold mb-1" style={{ color: stat.color }}>
                {stat.value}
              </div>
              <div className="text-white/60 text-xs">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Performance Chart Placeholder - Now Clickable */}
        <div 
          className="h-16 bg-white/5 rounded-xl flex items-center justify-center py-2 cursor-pointer hover:bg-white/8 transition-colors"
          onClick={handlePerformanceChartClick}
        >
          <div className="text-white/40 text-sm">Weekly Performance Chart</div>
        </div>
      </GlassCard>

      {/* Weekly Leaderboard - MOVED UP */}
      <GlassCard className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-white text-xl font-brand">Weekly Leaderboard</h3>
          <Button 
            variant="ghost" 
            size="sm" 
            className="text-[#E31837] hover:bg-[#E31837]/10"
            onClick={handleViewAllClick}
          >
            View All
          </Button>
        </div>

        <div className="space-y-3">
          {leaderboard.map((member) => (
            <div 
              key={member.id} 
              className={`p-3 rounded-xl ${member.rank === 1 ? 'bg-gradient-to-r from-[#FBBF24]/20 to-[#E31837]/20' : 'glass-card'}`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div 
                    className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold"
                    style={{ backgroundColor: member.badgeColor }}
                  >
                    <span className={member.rank === 1 ? 'text-black' : 'text-white'}>
                      {member.rank}
                    </span>
                  </div>
                  
                  <Avatar 
                    className="w-10 h-10" 
                    style={{ border: `2px solid ${member.badgeColor}` }}
                  >
                    <AvatarImage src={member.avatar} />
                    <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  
                  <div>
                    <div className="text-white font-medium">{member.name}</div>
                    <div className="text-white/60 text-sm">{member.role}</div>
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-lg font-bold" style={{ color: member.pointsColor }}>
                    {member.points.toLocaleString()}
                  </div>
                  <div className="text-white/60 text-xs">points</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </GlassCard>

      {/* Active Members - NOW BELOW LEADERBOARD */}
      <GlassCard className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-white text-xl font-brand">Active Members</h3>
          <span className="text-white/60 text-sm">7/9 online</span>
        </div>

        <div className="space-y-3">
          {activeMembers.map((member) => (
            <div key={member.id} className="glass-card p-3 rounded-xl hover:bg-white/8 transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <Avatar className="w-12 h-12" style={{ border: `2px solid ${member.borderColor}` }}>
                      <AvatarImage src={member.avatar} />
                      <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-[#8BB501] border-2 border-background rounded-full" />
                    {member.hasAlert && (
                      <div className="absolute -top-1 -right-1 w-4 h-4 bg-[#E31837] rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">!</span>
                      </div>
                    )}
                  </div>
                  
                  <div>
                    <div className="text-white font-medium">{member.name}</div>
                    <div className="text-white/60 text-sm">{member.role}</div>
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-sm mb-1" style={{ color: member.borderColor }}>
                    {member.completion}%
                  </div>
                  <div className="text-white/60 text-xs">{member.tasksCompleted} flows</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Button 
          variant="ghost" 
          className="w-full text-[#E31837] hover:bg-[#E31837]/10"
        >
          View All Team Members
        </Button>
      </GlassCard>

      {/* Live Collaboration */}
      <GlassCard className="space-y-4">
        <h3 className="text-white text-xl font-brand">Live Collaboration</h3>

        <div className="space-y-4">
          {liveCollaboration.map((collab) => (
            <div 
              key={collab.id} 
              className={`p-4 rounded-xl bg-gradient-to-r ${collab.gradient} bg-opacity-20 border border-white/10`}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h4 className="text-white font-medium mb-1">{collab.title}</h4>
                  <p className="text-white/60 text-sm">Started {collab.startedTime}</p>
                </div>
                <Badge className={`${collab.status === 'Active' ? 'bg-[#8BB501]/20 text-[#8BB501]' : 'bg-[#E31837]/20 text-[#E31837]'} border-0`}>
                  {collab.status}
                </Badge>
              </div>

              <div className="flex items-center gap-4 mb-3">
                <div className="flex -space-x-2">
                  {collab.members.map((avatar, index) => (
                    <Avatar key={index} className="w-8 h-8 ring-2 ring-background">
                      <AvatarImage src={avatar} />
                      <AvatarFallback className="text-xs">U</AvatarFallback>
                    </Avatar>
                  ))}
                </div>
                <div className="flex items-center gap-1 text-white/60 text-sm">
                  <Users size={12} />
                  <span>{collab.memberCount} members working</span>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-white/60">Progress</span>
                  <span className="text-white">{collab.progress}%</span>
                </div>
                <Progress value={collab.progress} className="h-1.5 bg-white/10" />
              </div>
            </div>
          ))}
        </div>
      </GlassCard>

      {/* User Switch Modal */}
      <UserSwitchModal 
        isOpen={showUserSwitch} 
        onClose={handleUserSwitchClose}
      />
    </div>
  );
}
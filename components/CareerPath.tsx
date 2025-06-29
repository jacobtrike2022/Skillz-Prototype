import { useState } from 'react';
import { GlassCard } from './GlassCard';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { UserSwitchModal } from './UserSwitchModal';
import { ArrowRight, Clock, Users, Target, TrendingUp, Snowflake, Shirt, Users as MentorIcon } from 'lucide-react';
import alexProfileImage from 'figma:asset/9a7c090324a6b6bb61e411af53004183d20e68d3.png';

interface CareerPathProps {
  onNavigate?: (tab: string) => void;
}

export function CareerPath({ onNavigate }: CareerPathProps) {
  const [viewMode, setViewMode] = useState('split'); // 'split' or 'single'
  const [showUserSwitch, setShowUserSwitch] = useState(false);

  const currentRole = {
    title: 'Sales Associate',
    skills: [
      { name: 'Customer Service', current: 85, target: 85 },
      { name: 'Product Knowledge', current: 72, target: 75 },
      { name: 'Sales Techniques', current: 68, target: 70 },
      { name: 'POS Systems', current: 90, target: 85 },
      { name: 'Communication', current: 78, target: 80 },
      { name: 'Problem Solving', current: 65, target: 70 },
    ]
  };

  const targetRole = {
    title: 'Assistant Manager',
    skills: [
      { name: 'Customer Service', current: 85, target: 90 },
      { name: 'Product Knowledge', current: 72, target: 85 },
      { name: 'Sales Techniques', current: 68, target: 80 },
      { name: 'Korn Ferry Leadership: Level 1', current: 0, target: 75 },
      { name: 'Visual Merchandising', current: 30, target: 70 },
      { name: 'Data Analysis', current: 15, target: 65 },
      { name: 'Inventory Management', current: 45, target: 80 },
      { name: 'Training & Development', current: 0, target: 70 },
    ]
  };

  const gapSkills = targetRole.skills.filter(skill => skill.current < skill.target * 0.5);

  const mentors = [
    { name: 'Sarah Chen', role: 'Store Manager', avatar: 'https://images.unsplash.com/photo-1494790108755-2616b9f70db4?w=40&h=40&fit=crop&crop=face' },
    { name: 'Mike Rodriguez', role: 'Assistant Manager', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face' },
  ];

  // Earned badges data
  const earnedBadges = [
    {
      id: 'mentor-master',
      name: 'Mentor Master',
      description: 'Helped train 3+ new team members',
      icon: MentorIcon,
      color: '#8BB501',
      bgGradient: 'from-[#8BB501] to-[#A3C72A]',
      shadowColor: 'rgba(139, 181, 1, 0.4)'
    },
    {
      id: 'cooler-queen',
      name: 'Cooler Queen',
      description: 'Maintained perfect cold storage standards',
      icon: Snowflake,
      color: '#038FC7',
      bgGradient: 'from-[#038FC7] to-[#0EA5E9]',
      shadowColor: 'rgba(3, 143, 199, 0.4)'
    },
    {
      id: 'dress-code-perfect',
      name: 'Dress Code Perfect',
      description: 'Maintained perfect uniform standards',
      icon: Shirt,
      color: '#E31837',
      bgGradient: 'from-[#E31837] to-[#FF1E42]',
      shadowColor: 'rgba(227, 24, 55, 0.4)'
    }
  ];

  const handleTeamNavigation = () => {
    if (onNavigate) {
      onNavigate('team');
    }
  };

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

  const handleSkillsNavigation = () => {
    if (onNavigate) {
      onNavigate('skills');
    }
  };

  const RadarChart = ({ skills, title, color }: { skills: any[], title: string, color: string }) => {
    const size = 120;
    const center = size / 2;
    const radius = 40;
    
    const points = skills.slice(0, 6).map((skill, index) => {
      const angle = (index * 60 - 90) * (Math.PI / 180);
      const value = skill.current / 100;
      const x = center + Math.cos(angle) * radius * value;
      const y = center + Math.sin(angle) * radius * value;
      return `${x},${y}`;
    });

    const targetPoints = skills.slice(0, 6).map((skill, index) => {
      const angle = (index * 60 - 90) * (Math.PI / 180);
      const value = skill.target / 100;
      const x = center + Math.cos(angle) * radius * value;
      const y = center + Math.sin(angle) * radius * value;
      return `${x},${y}`;
    });

    return (
      <div className="text-center">
        <h3 className="text-white text-sm mb-2 font-brand">{title}</h3>
        <svg width={size} height={size} className="mx-auto">
          {/* Grid circles */}
          {[0.2, 0.4, 0.6, 0.8, 1].map((scale) => (
            <circle
              key={scale}
              cx={center}
              cy={center}
              r={radius * scale}
              fill="none"
              stroke="rgba(255,255,255,0.1)"
              strokeWidth="1"
            />
          ))}
          
          {/* Grid lines */}
          {skills.slice(0, 6).map((_, index) => {
            const angle = (index * 60 - 90) * (Math.PI / 180);
            const x = center + Math.cos(angle) * radius;
            const y = center + Math.sin(angle) * radius;
            return (
              <line
                key={index}
                x1={center}
                y1={center}
                x2={x}
                y2={y}
                stroke="rgba(255,255,255,0.1)"
                strokeWidth="1"
              />
            );
          })}
          
          {/* Target area */}
          <polygon
            points={targetPoints.join(' ')}
            fill="none"
            stroke="rgba(255,255,255,0.3)"
            strokeWidth="2"
            strokeDasharray="3,3"
          />
          
          {/* Current area */}
          <polygon
            points={points.join(' ')}
            fill={`${color}20`}
            stroke={color}
            strokeWidth="2"
          />
          
          {/* Skill points */}
          {points.map((point, index) => {
            const [x, y] = point.split(',').map(Number);
            return (
              <circle
                key={index}
                cx={x}
                cy={y}
                r="3"
                fill={color}
                className="animate-pulse-glow"
              />
            );
          })}
        </svg>
      </div>
    );
  };

  return (
    <div className="p-4 pb-24 space-y-6">
      {/* Header with Arrow */}
      <div className="flex items-center justify-end">
        {/* User Switch Arrow */}
        <button
          onClick={handleArrowClick}
          className="relative w-10 h-10 rounded-full bg-[#E31837]/20 backdrop-blur-sm border border-[#E31837]/30 flex items-center justify-center hover:bg-[#E31837]/30 transition-all duration-200 spring-scale"
        >
          <ArrowRight size={16} className="text-[#E31837]" />
        </button>
      </div>

      {/* Profile Content - Centered */}
      <div className="text-center">
        {/* Profile Image with Red Glow */}
        <div className="relative inline-block mb-6">
          <div className="absolute inset-0 bg-[#E31837] rounded-full blur-xl opacity-30 scale-110 animate-pulse-glow" />
          <img
            src={alexProfileImage}
            alt="Alex's Profile"
            className="relative w-24 h-24 rounded-full object-cover border-2 border-[#E31837]/30"
          />
        </div>
        
        {/* Profile Info - Updated spacing */}
        <div className="space-y-1">
          <h2 className="text-white text-xl font-brand">Alex</h2>
          <div className="text-white/80">Store Team Member</div>
          <div className="text-white/60 text-sm italic">9 weeks in current role</div>
          <button 
            className="text-[#E31837] hover:text-[#FF1E42] transition-colors text-sm font-medium"
            onClick={handleTeamNavigation}
          >
            Store #478
          </button>
        </div>
      </div>

      {/* Career Path Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-white text-xl font-brand">Career Path</h2>
        <div className="flex gap-2">
          <Button
            variant={viewMode === 'split' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setViewMode('split')}
            className={viewMode === 'split' ? 'bg-[#E31837]' : 'border-white/20 text-white/80'}
          >
            Split
          </Button>
          <Button
            variant={viewMode === 'single' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setViewMode('single')}
            className={viewMode === 'single' ? 'bg-[#E31837]' : 'border-white/20 text-white/80'}
          >
            Single
          </Button>
        </div>
      </div>

      {/* Progress Overview - Clickable */}
      <GlassCard 
        gradient 
        glow 
        className="cursor-pointer hover:bg-white/8 transition-all duration-200 spring-scale"
        onClick={handleSkillsNavigation}
      >
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-white font-brand">Ready for Assistant Manager</h3>
            <p className="text-white/60 text-sm">4 skills to develop</p>
          </div>
          <div className="text-right">
            <div className="text-2xl text-[rgba(255,255,255,1)] font-bold bg-[rgba(17,31,237,0)]">68%</div>
            <p className="text-white/60 text-sm">Complete</p>
          </div>
        </div>
        
        <div className="mt-4 w-full bg-white/10 rounded-full h-3">
          <div 
            className="h-3 rounded-full bg-gradient-to-r from-[#1E1B4B] to-[#E31837]"
            style={{ width: '68%' }}
          />
        </div>
      </GlassCard>

      {/* Radar Charts */}
      {viewMode === 'split' ? (
        <div className="grid grid-cols-2 gap-4">
          <GlassCard>
            <RadarChart 
              skills={currentRole.skills} 
              title={currentRole.title}
              color="#E31837"
            />
          </GlassCard>
          <GlassCard>
            <RadarChart 
              skills={targetRole.skills} 
              title={targetRole.title}
              color="#038FC7"
            />
          </GlassCard>
        </div>
      ) : (
        <GlassCard>
          <div className="flex justify-center">
            <RadarChart 
              skills={targetRole.skills} 
              title="Target: Assistant Manager"
              color="#E31837"
            />
          </div>
        </GlassCard>
      )}

      {/* Recommended Next Steps - MOVED HERE */}
      <GlassCard>
        <h3 className="text-white mb-4 flex items-center gap-2 text-xl font-brand">
          <TrendingUp size={20} className="text-[#E31837]" />
          Recommended Path
          <ArrowRight size={16} className="text-[#038FC7] ml-auto" />
        </h3>
        
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#E31837] rounded-full flex items-center justify-center text-white text-sm">1</div>
            <div className="flex-1">
              <p className="text-white">Complete Team Leadership fundamentals</p>
              <p className="text-white/60 text-sm">2 weeks • Online course</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#038FC7]/50 rounded-full flex items-center justify-center text-white text-sm">2</div>
            <div className="flex-1">
              <p className="text-white/60">Shadow current Assistant Manager</p>
              <p className="text-white/40 text-sm">3 weeks • On-the-job training</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center text-white/40 text-sm">3</div>
            <div className="flex-1">
              <p className="text-white/40">Complete a successful grocery order</p>
              <p className="text-white/30 text-sm">4 weeks • Practical application</p>
            </div>
          </div>
        </div>
      </GlassCard>

      {/* Earned Stampz Section */}
      <div className="space-y-4">
        <h3 className="text-white text-xl font-brand">Earned Stampz</h3>
        
        <div className="grid grid-cols-1 gap-3">
          {earnedBadges.map((badge) => {
            const IconComponent = badge.icon;
            return (
              <GlassCard 
                key={badge.id}
                className="p-4 relative"
                style={{
                  boxShadow: `
                    0 8px 25px rgba(0, 0, 0, 0.15),
                    0 0 0 1px rgba(227, 24, 55, 0.03),
                    0 0 20px ${badge.shadowColor},
                    inset 0 1px 0 rgba(255, 255, 255, 0.1)
                  `
                }}
              >
                <div className="flex items-center gap-3">
                  <div 
                    className={`w-12 h-12 bg-gradient-to-r ${badge.bgGradient} rounded-full flex items-center justify-center relative`}
                    style={{
                      boxShadow: `0 0 15px ${badge.shadowColor}`
                    }}
                  >
                    <IconComponent size={20} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-white font-medium">{badge.name}</h4>
                    <p className="text-white/60 text-sm">{badge.description}</p>
                  </div>
                  <Badge 
                    className="bg-white/10 text-white/80 border-white/20"
                    style={{ color: badge.color }}
                  >
                    Earned
                  </Badge>
                </div>
              </GlassCard>
            );
          })}
        </div>
      </div>

      {/* Gap Analysis / Skillz Catalog - NOW COMES AFTER EARNED STAMPZ */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-white text-xl font-brand">Skillz Catalog</h3>
          <Badge className="bg-[#E31837]/20 text-[#E31837] border-[#E31837]/30">
            {gapSkills.length} gaps
          </Badge>
        </div>

        {gapSkills.map((skill) => (
          <GlassCard key={skill.name} hover className="space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="text-white">{skill.name}</h4>
              <Badge variant="outline" className="border-white/20 text-white/60">
                {skill.target - skill.current}% gap
              </Badge>
            </div>
            
            <div className="flex items-center gap-3 text-sm text-white/60">
              <div className="flex items-center gap-1">
                <Clock size={14} className="text-[#038FC7]" />
                <span>6-8 weeks</span>
              </div>
              <div className="flex items-center gap-1">
                <Target size={14} className="text-[#8BB501]" />
                <span>{skill.target}% target</span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex -space-x-2">
                {mentors.map((mentor) => (
                  <Avatar key={mentor.name} className="w-6 h-6 ring-2 ring-background">
                    <AvatarImage src={mentor.avatar} />
                    <AvatarFallback>{mentor.name[0]}</AvatarFallback>
                  </Avatar>
                ))}
                <div className="w-6 h-6 bg-white/10 rounded-full ring-2 ring-background flex items-center justify-center">
                  <span className="text-xs text-white/60">+</span>
                </div>
              </div>
              
              <Button 
                size="sm" 
                className="sheetz-button-gradient hover:opacity-90 spring-scale"
              >
                Start Learning
              </Button>
            </div>
          </GlassCard>
        ))}
      </div>

      {/* User Switch Modal */}
      <UserSwitchModal 
        isOpen={showUserSwitch} 
        onClose={handleUserSwitchClose}
      />
    </div>
  );
}
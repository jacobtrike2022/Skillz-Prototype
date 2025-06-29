import { GlassCard } from './GlassCard';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

interface TodaysTeamProps {
  onClick: () => void;
  className?: string;
}

export function TodaysTeam({ onClick, className = '' }: TodaysTeamProps) {
  const teamMembers = [
    { name: 'Sarah', avatar: 'https://images.unsplash.com/photo-1494790108755-2616b9f70db4?w=40&h=40&fit=crop&crop=face' },
    { name: 'Mike', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face' },
    { name: 'Emma', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face' },
    { name: 'Jordan', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face' },
    { name: 'Taylor', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=40&h=40&fit=crop&crop=face' },
  ];

  return (
    <div className={className}>
      <GlassCard 
        hover 
        glow 
        className="cursor-pointer transition-all duration-200"
        onClick={onClick}
      >
        <div className="flex items-center justify-between">
          <h3 className="text-white text-xl font-brand">Today's Team</h3>
          <div className="text-right">
            <p className="text-white text-sm">{teamMembers.length}/7 Online</p>
            <p className="text-white/60 text-xs">Team sync active</p>
          </div>
        </div>
        
        <div className="flex items-center justify-between mt-4">
          <div className="flex -space-x-2">
            {teamMembers.map((member, index) => (
              <div key={member.name} className="relative">
                <Avatar className="w-10 h-10 ring-2 ring-background">
                  <AvatarImage src={member.avatar} />
                  <AvatarFallback>{member.name[0]}</AvatarFallback>
                </Avatar>
                <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-[#8BB501] rounded-full border-2 border-background animate-pulse" />
              </div>
            ))}
            <div className="w-10 h-10 bg-white/10 rounded-full ring-2 ring-background flex items-center justify-center">
              <span className="text-white/60 text-sm">+2</span>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#8BB501] rounded-full animate-pulse" />
            <span className="text-[#8BB501] text-sm">Live</span>
          </div>
        </div>
      </GlassCard>
    </div>
  );
}
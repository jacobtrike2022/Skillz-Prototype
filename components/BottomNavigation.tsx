import { Home, Workflow, Trophy, Users, User } from 'lucide-react';
import { cn } from './ui/utils';

interface BottomNavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const tabs = [
  { id: 'dashboard', label: 'Home', icon: Home },
  { id: 'tasks', label: 'Flows', icon: Workflow },
  { id: 'skills', label: 'Skillz', icon: Trophy },
  { id: 'team', label: 'Team', icon: Users },
  { id: 'profile', label: 'Profile', icon: User },
];

export function BottomNavigation({ activeTab, onTabChange }: BottomNavigationProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 glass-card rounded-t-3xl border-t border-white/10 p-2">
      <div className="flex justify-around items-center">
        {tabs.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => onTabChange(id)}
            className={cn(
              "flex flex-col items-center gap-1 p-3 rounded-xl transition-all duration-200 spring-scale",
              activeTab === id 
                ? "text-[#E31837] bg-[#E31837]/10" 
                : "text-white/60 hover:text-white/80"
            )}
          >
            <Icon size={20} />
            <span className="text-xs">{label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
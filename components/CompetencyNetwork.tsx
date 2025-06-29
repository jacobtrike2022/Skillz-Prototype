import { useState, useEffect } from 'react';
import { GlassCard } from './GlassCard';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Progress } from './ui/progress';
import { Filter, Target, Zap, Users, TrendingUp, Star, Clock, CheckCircle, DollarSign, TrendingUp as TrendingUpIcon, BarChart3, PieChart, Monitor, Wrench } from 'lucide-react';
import { cn } from './ui/utils';

interface SpiderWebChartProps {
  skills: Array<{
    name: string;
    score: number;
    category: string;
  }>;
  onSkillClick: (skill: any) => void;
  selectedSkill: any;
}

function SpiderWebChart({ skills, onSkillClick, selectedSkill }: SpiderWebChartProps) {
  const centerX = 200;
  const centerY = 200;
  const maxRadius = 150;
  const skillCount = skills.length;

  // Create points for the spider web
  const createWebPoints = (radius: number) => {
    return skills.map((_, index) => {
      const angle = (index * 2 * Math.PI) / skillCount - Math.PI / 2;
      return {
        x: centerX + Math.cos(angle) * radius,
        y: centerY + Math.sin(angle) * radius,
      };
    });
  };

  // Create skill plot points based on scores
  const skillPoints = skills.map((skill, index) => {
    const angle = (index * 2 * Math.PI) / skillCount - Math.PI / 2;
    const radius = (skill.score / 100) * maxRadius;
    return {
      x: centerX + Math.cos(angle) * radius,
      y: centerY + Math.sin(angle) * radius,
      skill,
      angle,
      radius,
    };
  });

  // Create the filled area path
  const createAreaPath = () => {
    if (skillPoints.length === 0) return '';
    return skillPoints.reduce((path, point, index) => {
      const command = index === 0 ? 'M' : 'L';
      return `${path}${command}${point.x},${point.y}`;
    }, '') + 'Z';
  };

  return (
    <div className="relative">
      <svg width="400" height="400" className="overflow-visible">
        {/* Background web rings */}
        {[20, 40, 60, 80, 100].map((percentage) => (
          <g key={percentage}>
            <polygon
              points={createWebPoints((percentage / 100) * maxRadius)
                .map(p => `${p.x},${p.y}`)
                .join(' ')}
              fill="none"
              stroke="rgba(255, 255, 255, 0.1)"
              strokeWidth="1"
              strokeDasharray={percentage === 100 ? "none" : "2,2"}
            />
          </g>
        ))}

        {/* Web spokes */}
        {skills.map((_, index) => {
          const angle = (index * 2 * Math.PI) / skillCount - Math.PI / 2;
          const endX = centerX + Math.cos(angle) * maxRadius;
          const endY = centerY + Math.sin(angle) * maxRadius;
          return (
            <line
              key={index}
              x1={centerX}
              y1={centerY}
              x2={endX}
              y2={endY}
              stroke="rgba(255, 255, 255, 0.1)"
              strokeWidth="1"
            />
          );
        })}

        {/* Filled area representing current skills */}
        <path
          d={createAreaPath()}
          fill="rgba(227, 24, 55, 0.15)"
          stroke="#E31837"
          strokeWidth="2"
          className="transition-all duration-300"
        />

        {/* Skill points */}
        {skillPoints.map((point, index) => (
          <g key={index}>
            {/* Glow effect for selected skill */}
            {selectedSkill?.name === point.skill.name && (
              <circle
                cx={point.x}
                cy={point.y}
                r="12"
                fill="rgba(227, 24, 55, 0.3)"
                className="animate-pulse"
              />
            )}
            
            {/* Main skill point */}
            <circle
              cx={point.x}
              cy={point.y}
              r="6"
              fill="#E31837"
              stroke="rgba(255, 255, 255, 0.8)"
              strokeWidth="2"
              className={cn(
                "cursor-pointer transition-all duration-200 hover:r-8",
                selectedSkill?.name === point.skill.name && "scale-125"
              )}
              onClick={() => onSkillClick(point.skill)}
              style={{
                filter: `drop-shadow(0 0 8px rgba(227, 24, 55, 0.6))`,
              }}
            />

            {/* Score indicator */}
            <circle
              cx={point.x}
              cy={point.y}
              r="3"
              fill="white"
              className="pointer-events-none"
            />
          </g>
        ))}

        {/* Skill labels */}
        {skills.map((skill, index) => {
          const angle = (index * 2 * Math.PI) / skillCount - Math.PI / 2;
          const labelRadius = maxRadius + 25;
          const labelX = centerX + Math.cos(angle) * labelRadius;
          const labelY = centerY + Math.sin(angle) * labelRadius;
          
          return (
            <g key={index}>
              <text
                x={labelX}
                y={labelY}
                textAnchor="middle"
                dominantBaseline="middle"
                fill="white"
                fontSize="12"
                fontWeight="500"
                className={cn(
                  "cursor-pointer transition-all duration-200 hover:fill-[#E31837]",
                  selectedSkill?.name === skill.name && "fill-[#E31837] font-bold"
                )}
                onClick={() => onSkillClick(skill)}
              >
                {skill.name}
              </text>
              <text
                x={labelX}
                y={labelY + 15}
                textAnchor="middle"
                dominantBaseline="middle"
                fill="rgba(255, 255, 255, 0.6)"
                fontSize="10"
                className="pointer-events-none"
              >
                {skill.score}%
              </text>
            </g>
          );
        })}

        {/* Center score indicator */}
        <circle
          cx={centerX}
          cy={centerY}
          r="25"
          fill="rgba(227, 24, 55, 0.2)"
          stroke="#E31837"
          strokeWidth="2"
        />
        <text
          x={centerX}
          y={centerY - 3}
          textAnchor="middle"
          dominantBaseline="middle"
          fill="#E31837"
          fontSize="14"
          fontWeight="Bold"
        >
          {Math.round(skills.reduce((sum, skill) => sum + skill.score, 0) / skills.length)}%
        </text>
        <text
          x={centerX}
          y={centerY + 12}
          textAnchor="middle"
          dominantBaseline="middle"
          fill="rgba(255, 255, 255, 0.6)"
          fontSize="10"
        >
          Overall
        </text>
      </svg>
    </div>
  );
}

// Skill insights data
const skillInsights = {
  'Customer Service': {
    color: '#8BB501',
    icon: Star,
    metrics: [
      {
        label: 'Customer Satisfaction Score',
        value: '4.8/5',
        icon: Star,
        description: 'Average rating from customers',
        visual: 'stars'
      },
      {
        label: 'Resolved Customer Tickets',
        value: '145',
        icon: CheckCircle,
        description: 'Tickets resolved this month',
        visual: 'number'
      },
      {
        label: 'Positive Feedback',
        value: '92%',
        icon: TrendingUpIcon,
        description: 'Positive ratings from customers',
        visual: 'circular'
      },
      {
        label: 'Average Response Time',
        value: '3.2 min',
        icon: Clock,
        description: 'Response time to customer inquiries',
        visual: 'number'
      }
    ]
  },
  'Product Knowledge': {
    color: '#038FC7',
    icon: BarChart3,
    metrics: [
      {
        label: 'Completed Product Modules',
        value: '18/25',
        icon: BarChart3,
        description: 'Training modules completed',
        visual: 'progress',
        percentage: 72
      },
      {
        label: 'Assessment Accuracy',
        value: '86%',
        icon: Target,
        description: 'Quiz accuracy rate',
        visual: 'circular'
      },
      {
        label: 'Average Module Completion',
        value: '14 min',
        icon: Clock,
        description: 'Average time per module',
        visual: 'number'
      },
      {
        label: 'Products Demonstrated',
        value: '35',
        icon: PieChart,
        description: 'Live product demonstrations given',
        visual: 'number'
      }
    ]
  },
  'Sales Techniques': {
    color: '#E31837',
    icon: TrendingUpIcon,
    metrics: [
      {
        label: 'Monthly Sales Targets Met',
        value: '3/4',
        icon: Target,
        description: 'Targets met in last 4 months',
        visual: 'progress',
        percentage: 75
      },
      {
        label: 'Upsell Conversion Rate',
        value: '22%',
        icon: TrendingUpIcon,
        description: 'Successful upsell rate',
        visual: 'circular'
      },
      {
        label: 'Avg. Transaction Value',
        value: '$28.50',
        icon: DollarSign,
        description: 'Average per transaction',
        visual: 'number'
      },
      {
        label: 'Sales Training Sessions',
        value: '12',
        icon: Users,
        description: 'Sessions attended this quarter',
        visual: 'number'
      }
    ]
  },
  'POS Systems': {
    color: '#8BB501',
    icon: Monitor,
    metrics: [
      {
        label: 'Logged POS Hours',
        value: '112 hrs',
        icon: Clock,
        description: 'Hours logged this month',
        visual: 'number'
      },
      {
        label: 'Cash Accuracy',
        value: '99.8%',
        icon: Target,
        description: 'Cash handling accuracy',
        visual: 'circular'
      },
      {
        label: 'Transactions Handled',
        value: '940',
        icon: BarChart3,
        description: 'Transactions per month average',
        visual: 'number'
      },
      {
        label: 'System Troubleshooting',
        value: '17',
        icon: Wrench,
        description: 'POS issues resolved independently',
        visual: 'number'
      }
    ]
  }
};

interface SkillDrawerProps {
  skill: string;
  isOpen: boolean;
  onClose: () => void;
}

function SkillDrawer({ skill, isOpen, onClose }: SkillDrawerProps) {
  const insights = skillInsights[skill as keyof typeof skillInsights];
  if (!insights) return null;

  const CircularProgress = ({ percentage, color }: { percentage: number; color: string }) => {
    const radius = 20;
    const circumference = 2 * Math.PI * radius;
    const strokeDasharray = `${(percentage / 100) * circumference} ${circumference}`;

    return (
      <div className="relative w-12 h-12 flex items-center justify-center">
        <svg className="w-12 h-12 transform -rotate-90" viewBox="0 0 44 44">
          <circle
            cx="22"
            cy="22"
            r={radius}
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="3"
            fill="none"
          />
          <circle
            cx="22"
            cy="22"
            r={radius}
            stroke={color}
            strokeWidth="3"
            fill="none"
            strokeDasharray={strokeDasharray}
            strokeLinecap="round"
            className="transition-all duration-500 ease-out"
          />
        </svg>
        <span className="absolute text-xs font-medium text-white">
          {percentage}%
        </span>
      </div>
    );
  };

  const StarRating = ({ rating }: { rating: number }) => {
    return (
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            size={16}
            className={star <= rating ? 'text-yellow-400 fill-yellow-400' : 'text-white/20'}
          />
        ))}
      </div>
    );
  };

  return (
    <div 
      className={cn(
        "transition-all duration-500 ease-out overflow-hidden",
        isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
      )}
    >
      <GlassCard className="mt-3 p-4 border-t-2 border-t-[var(--skill-color)] animate-fade-in" style={{ '--skill-color': insights.color } as any}>
        <div className="grid grid-cols-2 gap-4">
          {insights.metrics.map((metric, index) => {
            const IconComponent = metric.icon;
            return (
              <div 
                key={metric.label}
                className="space-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-2">
                  <IconComponent size={16} style={{ color: insights.color }} />
                  <span className="text-white/80 text-sm">{metric.label}</span>
                </div>
                
                <div className="flex items-center gap-3">
                  {metric.visual === 'circular' && (
                    <CircularProgress 
                      percentage={parseInt(metric.value)} 
                      color={insights.color}
                    />
                  )}
                  
                  {metric.visual === 'progress' && (
                    <div className="flex-1">
                      <div className="w-full bg-white/10 rounded-full h-2">
                        <div 
                          className="h-2 rounded-full transition-all duration-700 ease-out"
                          style={{ 
                            width: `${metric.percentage}%`,
                            backgroundColor: insights.color
                          }}
                        />
                      </div>
                    </div>
                  )}
                  
                  {metric.visual === 'stars' && (
                    <StarRating rating={4.8} />
                  )}
                  
                  {metric.visual === 'number' && (
                    <div 
                      className="w-10 h-10 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: `${insights.color}20` }}
                    >
                      <IconComponent size={16} style={{ color: insights.color }} />
                    </div>
                  )}
                  
                  <div className="flex-1">
                    <div className="text-white font-medium">{metric.value}</div>
                    <div className="text-white/50 text-xs">{metric.description}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </GlassCard>
    </div>
  );
}

export function CompetencyNetwork() {
  const [activeFilter, setActiveFilter] = useState('my');
  const [selectedSkill, setSelectedSkill] = useState<any>(null);
  const [openDrawer, setOpenDrawer] = useState<string | null>(null);

  const filters = [
    { id: 'my', label: 'My Skillz', icon: Target },
    { id: 'opportunities', label: 'Opportunities', icon: TrendingUp },
    { id: 'team', label: 'Team Average', icon: Users },
  ];

  const mySkills = [
    { name: 'Customer Service', score: 85, category: 'core' },
    { name: 'Product Knowledge', score: 72, category: 'core' },
    { name: 'Sales Techniques', score: 68, category: 'core' },
    { name: 'POS Systems', score: 90, category: 'technical' },
    { name: 'Inventory Mgmt', score: 45, category: 'technical' },
    { name: 'Communication', score: 78, category: 'soft' },
    { name: 'Problem Solving', score: 62, category: 'soft' },
    { name: 'Time Management', score: 55, category: 'soft' },
  ];

  const opportunitySkills = [
    { name: 'Team Leadership', score: 25, category: 'leadership', description: 'Lead and motivate team members effectively' },
    { name: 'Visual Merchandising', score: 30, category: 'creative', description: 'Create attractive product displays' },
    { name: 'Data Analysis', score: 15, category: 'analytical', description: 'Analyze sales and performance metrics' },
    { name: 'Training & Development', score: 20, category: 'leadership', description: 'Train new team members' },
    { name: 'Conflict Resolution', score: 35, category: 'soft', description: 'Handle customer and team conflicts' },
  ];

  const teamAverageSkills = [
    { name: 'Customer Service', score: 78, category: 'core' },
    { name: 'Product Knowledge', score: 65, category: 'core' },
    { name: 'Sales Techniques', score: 70, category: 'core' },
    { name: 'POS Systems', score: 82, category: 'technical' },
    { name: 'Inventory Mgmt', score: 58, category: 'technical' },
    { name: 'Communication', score: 74, category: 'soft' },
    { name: 'Problem Solving', score: 67, category: 'soft' },
    { name: 'Time Management', score: 63, category: 'soft' },
  ];

  const getCurrentSkills = () => {
    switch (activeFilter) {
      case 'my':
        return mySkills;
      case 'opportunities':
        return opportunitySkills;
      case 'team':
        return teamAverageSkills;
      default:
        return mySkills;
    }
  };

  const handleSkillClick = (skill: any) => {
    setSelectedSkill(skill);
    
    // Only show drawer for 'my' skills and if it has insights
    if (activeFilter === 'my' && skillInsights[skill.name as keyof typeof skillInsights]) {
      setOpenDrawer(openDrawer === skill.name ? null : skill.name);
    } else {
      setOpenDrawer(null);
    }
  };

  const handleLearnClick = () => {
    // Navigate to profile page
    const event = new CustomEvent('navigate', { detail: 'profile' });
    window.dispatchEvent(event);
  };

  // Listen for navigation events and skills view changes using useEffect
  useEffect(() => {
    const handleNavigate = (event: any) => {
      if (event.detail === 'profile') {
        // This would be handled by the parent App component
        console.log('Navigate to profile page');
      }
    };

    const handleSetSkillsView = (event: any) => {
      if (event.detail === 'team') {
        setActiveFilter('team');
        setOpenDrawer(null); // Close any open drawers
        setSelectedSkill(null); // Clear selected skill
      }
    };

    window.addEventListener('navigate', handleNavigate);
    window.addEventListener('setSkillsView', handleSetSkillsView);
    
    return () => {
      window.removeEventListener('navigate', handleNavigate);
      window.removeEventListener('setSkillsView', handleSetSkillsView);
    };
  }, []);

  const overallScore = Math.round(
    getCurrentSkills().reduce((sum, skill) => sum + skill.score, 0) / getCurrentSkills().length
  );

  const hasInsights = (skillName: string) => {
    return activeFilter === 'my' && skillInsights[skillName as keyof typeof skillInsights];
  };

  return (
    <div className="p-4 pb-24 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-white text-2xl font-brand">My Skillz</h1>
        <Badge className="bg-[#E31837]/20 text-[#E31837] border-[#E31837]/30">
          {overallScore}% Overall
        </Badge>
      </div>

      {/* Filter Chips */}
      <div className="flex gap-2 overflow-x-auto">
        {filters.map(({ id, label, icon: Icon }) => (
          <Button
            key={id}
            variant={activeFilter === id ? "default" : "outline"}
            size="sm"
            onClick={() => {
              setActiveFilter(id);
              setOpenDrawer(null); // Close any open drawer when switching filters
            }}
            className={cn(
              "flex items-center gap-2 whitespace-nowrap spring-scale",
              activeFilter === id
                ? "bg-[#E31837] hover:bg-[#E31837]/80"
                : "border-white/20 text-white/80 hover:bg-white/5"
            )}
          >
            <Icon size={16} />
            {label}
          </Button>
        ))}
      </div>

      {/* Spider Web Visualization */}
      <GlassCard className="flex justify-center items-center py-8">
        <SpiderWebChart
          skills={getCurrentSkills()}
          onSkillClick={handleSkillClick}
          selectedSkill={selectedSkill}
        />
      </GlassCard>

      {/* Selected Skill Details */}
      {selectedSkill && !hasInsights(selectedSkill.name) && (
        <GlassCard className="p-4 border-[#E31837]/30 bg-[#E31837]/5">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-white font-brand">{selectedSkill.name}</h3>
            <div className="flex items-center gap-2">
              <div className="w-16 bg-white/10 rounded-full h-2">
                <div
                  className="h-2 rounded-full bg-[#E31837]"
                  style={{ width: `${selectedSkill.score}%` }}
                />
              </div>
              <span className="text-[#E31837] font-bold">{selectedSkill.score}%</span>
            </div>
          </div>
          <p className="text-white/60 text-sm capitalize mb-2">{selectedSkill.category} skill</p>
          {selectedSkill.description && (
            <p className="text-white/80 text-sm">{selectedSkill.description}</p>
          )}
        </GlassCard>
      )}

      {/* Skill Details */}
      <div className="space-y-3">
        <h3 className="text-white text-xl font-brand">
          {activeFilter === 'my' ? 'My Skillz' : 
           activeFilter === 'opportunities' ? 'Opportunities' : 
           'Team Average'}
        </h3>
        
        {getCurrentSkills().map((skill, index) => (
          <div key={`${skill.name}-${index}`}>
            <GlassCard 
              hover 
              className={cn(
                "flex items-center justify-between cursor-pointer",
                selectedSkill?.name === skill.name && "border-[#E31837]/30 bg-[#E31837]/5",
                hasInsights(skill.name) && "relative"
              )}
              onClick={() => handleSkillClick(skill)}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-4 h-4 rounded-full border-2"
                  style={{ 
                    borderColor: activeFilter === 'opportunities' ? '#038FC7' : '#E31837',
                    backgroundColor: `rgba(${activeFilter === 'opportunities' ? '3, 143, 199' : '227, 24, 55'}, 0.2)`
                  }}
                />
                <div>
                  <span className="text-white">{skill.name}</span>
                  {skill.description && activeFilter === 'opportunities' && (
                    <p className="text-white/60 text-xs mt-1">{skill.description}</p>
                  )}
                </div>
              </div>
              <div className="flex items-center gap-3">
                {activeFilter !== 'opportunities' && (
                  <>
                    <div className="w-20 bg-white/10 rounded-full h-2">
                      <div
                        className="h-2 rounded-full"
                        style={{ 
                          width: `${skill.score}%`,
                          background: activeFilter === 'team' 
                            ? 'linear-gradient(90deg, transparent 0%, #8BB501 100%)'
                            : 'linear-gradient(90deg, transparent 0%, #E31837 100%)'
                        }}
                      />
                    </div>
                    <span 
                      className={cn(
                        "text-sm w-8",
                        activeFilter === 'team' ? 'text-[#8BB501]' : 'text-[#E31837]'
                      )}
                    >
                      {skill.score}%
                    </span>
                  </>
                )}
                {activeFilter === 'opportunities' && (
                  <Button 
                    size="sm" 
                    className="bg-[#038FC7] hover:bg-[#038FC7]/80 spring-scale"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleLearnClick();
                    }}
                  >
                    Learn
                  </Button>
                )}
                {hasInsights(skill.name) && (
                  <div className="text-white/40 text-xs">
                    {openDrawer === skill.name ? '▲' : '▼'}
                  </div>
                )}
              </div>
            </GlassCard>
            
            {/* Skill Drawer */}
            {hasInsights(skill.name) && (
              <SkillDrawer
                skill={skill.name}
                isOpen={openDrawer === skill.name}
                onClose={() => setOpenDrawer(null)}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
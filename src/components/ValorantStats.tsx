import { Gamepad2 } from 'lucide-react';

interface Agent {
  name: string;
  imageUrl: string;
}

const ValorantStats = () => {
  const agents: Agent[] = [
    { name: 'Reyna', imageUrl: 'https://images.unsplash.com/photo-1614294148960-9aa740632a87?w=80&h=80&fit=crop' },
    { name: 'Jett', imageUrl: 'https://images.unsplash.com/photo-1615680022647-99c397cbcaea?w=80&h=80&fit=crop' },
    { name: 'Sova', imageUrl: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=80&h=80&fit=crop' },
  ];

  return (
    <div className="w-full max-w-2xl mx-auto mt-12">
      <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6">
        <div className="flex items-center justify-center gap-2 mb-6">
          <Gamepad2 className="w-5 h-5 text-primary" />
          <h3 className="text-lg font-semibold text-foreground">Valorant Stats</h3>
        </div>
        
        <div className="grid grid-cols-4 gap-4">
          {/* Peak Rate */}
          <div className="bg-secondary/50 rounded-xl p-4 flex flex-col items-center justify-center border border-border">
            <div className="w-12 h-12 rounded-full bg-gradient-to-b from-primary to-primary/50 flex items-center justify-center mb-2">
              <span className="text-xl">💎</span>
            </div>
            <span className="text-xs text-muted-foreground text-center">Peak Rate</span>
          </div>

          {/* Agents */}
          {agents.map((agent, index) => (
            <div 
              key={index}
              className="bg-secondary/50 rounded-xl p-4 flex flex-col items-center justify-center border border-border"
            >
              <div className="w-12 h-12 rounded-full overflow-hidden mb-2 bg-muted">
                <img 
                  src={agent.imageUrl} 
                  alt={agent.name}
                  className="w-full h-full object-cover grayscale"
                />
              </div>
              <span className="text-xs text-muted-foreground">{agent.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ValorantStats;

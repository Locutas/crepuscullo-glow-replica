import valorantLogo from '@/assets/valorant-logo.png';
import rankDiamond from '@/assets/rank-diamond.png';
import reynaImg from '@/assets/reyna.png';
import jettImg from '@/assets/jett.png';
import sovaImg from '@/assets/sova.png';

interface Agent {
  name: string;
  imageUrl: string;
}

const ValorantStats = () => {
  const agents: Agent[] = [
    { name: 'Reyna', imageUrl: reynaImg },
    { name: 'Jett', imageUrl: jettImg },
    { name: 'Sova', imageUrl: sovaImg },
  ];

  return (
    <div className="w-full max-w-2xl mx-auto mt-12">
      <div className="bg-card/40 backdrop-blur-sm border border-border/30 rounded-2xl p-6">
        <div className="flex items-center justify-center gap-2 mb-6">
          <img src={valorantLogo} alt="Valorant" className="w-5 h-5 object-contain" />
          <h3 className="text-base font-semibold text-foreground">Valorant Stats</h3>
        </div>
        
        <div className="grid grid-cols-4 gap-3">
          {/* Peak Rate */}
          <div className="bg-secondary/40 rounded-xl p-4 flex flex-col items-center justify-center border border-border/30 card-hover">
            <div className="w-12 h-12 flex items-center justify-center mb-2">
              <img 
                src={rankDiamond} 
                alt="Diamond Rank"
                className="w-10 h-10 object-contain"
              />
            </div>
            <span className="text-xs text-muted-foreground text-center">Peak Rate</span>
          </div>

          {/* Agents */}
          {agents.map((agent, index) => (
            <div 
              key={index}
              className="bg-secondary/40 rounded-xl p-4 flex flex-col items-center justify-center border border-border/30 card-hover"
            >
              <div className="w-12 h-12 rounded-full overflow-hidden mb-2 bg-muted/30">
                <img 
                  src={agent.imageUrl} 
                  alt={agent.name}
                  className="w-full h-full object-cover"
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

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
    <div className="w-full max-w-xl mx-auto mt-16 page-transition">
      <div className="setup-card p-8">
        {/* Header */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <img src={valorantLogo} alt="Valorant" className="w-6 h-6 object-contain brightness-125" />
          <h3 className="text-[13px] font-bold text-white uppercase tracking-[3px]">Valorant Stats</h3>
        </div>
        
        {/* Stats Grid */}
        <div className="grid grid-cols-4 gap-5">
          {/* Peak Rate */}
          <div className="bg-white/5 border border-white/5 rounded-2xl p-4 flex flex-col items-center justify-center transition-all hover:bg-white/10 group">
            <div className="w-16 h-16 flex items-center justify-center mb-2 transition-transform duration-300 group-hover:scale-110">
              <img 
                src={rankDiamond} 
                alt="Diamond Rank"
                className="w-14 h-14 object-contain glow-red"
              />
            </div>
            <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Peak Rate</span>
          </div>

          {/* Agents */}
          {agents.map((agent, index) => (
            <div 
              key={index}
              className="bg-white/5 border border-white/5 rounded-2xl p-4 flex flex-col items-center justify-center transition-all hover:bg-white/10 group"
            >
              <div className="w-16 h-16 rounded-full overflow-hidden mb-2 border-2 border-transparent group-hover:border-primary/50 transition-all duration-300">
                <img 
                  src={agent.imageUrl} 
                  alt={agent.name}
                  className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all"
                />
              </div>
              <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">{agent.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ValorantStats;
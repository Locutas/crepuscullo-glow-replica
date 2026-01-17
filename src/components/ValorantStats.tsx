import valorantLogo from '@/assets/valorant-logo.png';
import rankDiamond from '@/assets/rank-diamond.png';

interface Agent {
  name: string;
  imageUrl: string;
}

const ValorantStats = () => {
  const agents: Agent[] = [
    { 
      name: 'Killjoy', 
      imageUrl: 'https://media.valorant-api.com/agents/1e58de9d-4950-5125-93e9-a0aee9f98746/displayicon.png' 
    },
    { 
      name: 'Sage', 
      imageUrl: 'https://media.valorant-api.com/agents/569fdd95-4d10-4c10-85a1-c8733471f0ad/displayicon.png' 
    },
    { 
      name: 'Cypher', 
      imageUrl: 'https://media.valorant-api.com/agents/117ed9e3-49f3-6512-3ccf-00ad6e383de8/displayicon.png' 
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {/* Peak Rate Item */}
      <div className="bg-white/[0.03] border border-transparent rounded-[16px] p-6 transition-all duration-300 ease-out hover:bg-white/[0.06] hover:border-primary/40 hover:scale-[1.015] group flex flex-col items-center justify-center text-center">
        <div className="w-20 h-20 mb-4 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
          <img 
            src={rankDiamond} 
            alt="Diamond Rank"
            className="w-16 h-16 object-contain glow-red"
          />
        </div>
        <div className="space-y-1">
          <h3 className="text-white text-[13px] font-bold uppercase tracking-widest transition-colors duration-300 group-hover:text-primary/90">
            Peak Rank
          </h3>
          <p className="text-white/30 text-[10px] uppercase tracking-widest transition-colors duration-300 group-hover:text-white/50">
            Diamante 1
          </p>
        </div>
      </div>

      {/* Agents Items */}
      {agents.map((agent, index) => (
        <div 
          key={index}
          className="bg-white/[0.03] border border-transparent rounded-[16px] p-6 transition-all duration-300 ease-out hover:bg-white/[0.06] hover:border-primary/40 hover:scale-[1.015] group flex flex-col items-center justify-center text-center"
        >
          <div className="w-20 h-20 mb-4 rounded-full overflow-hidden border-2 border-transparent group-hover:border-primary/50 transition-all duration-300 bg-black/40">
            <img 
              src={agent.imageUrl} 
              alt={agent.name}
              className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all"
            />
          </div>
          <div className="space-y-1">
            <h3 className="text-white text-[13px] font-bold uppercase tracking-widest transition-colors duration-300 group-hover:text-primary/90">
              {agent.name}
            </h3>
            <p className="text-white/30 text-[10px] uppercase tracking-widest transition-colors duration-300 group-hover:text-white/50">
              Main Agent
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ValorantStats;
import rankDiamond from '@/assets/rank-diamond.png';

interface Agent {
  name: string;
  imageUrl: string;
}

const ValorantStats = () => {
  const agents: Agent[] = [
    { 
      name: 'Killjoy', 
      imageUrl: 'https://i.imgur.com/iCbpnsA.png' 
    },
    { 
      name: 'Reyna', 
      imageUrl: 'https://i.imgur.com/XcrpfUI.png' 
    },
    { 
      name: 'Jett', 
      imageUrl: 'https://i.imgur.com/lvfeGCO.png' 
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {/* Peak Rate Item */}
      <div className="bg-white/[0.03] border border-transparent rounded-[16px] p-6 transition-all duration-300 ease-out hover:bg-white/[0.06] hover:border-primary/40 hover:scale-[1.015] group flex flex-col items-center justify-center text-center">
        <div className="w-20 h-20 mb-4 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
          <img 
            src={rankDiamond} 
            alt="Diamond Rank"
            className="w-16 h-16 object-contain glow-red"
          />
        </div>
        <h3 className="text-white text-[13px] font-bold uppercase tracking-widest transition-colors duration-300 group-hover:text-primary/90">
          Peak Rank
        </h3>
      </div>

      {/* Agents Items */}
      {agents.map((agent, index) => (
        <div 
          key={index}
          className="bg-white/[0.03] border border-transparent rounded-[16px] p-6 transition-all duration-300 ease-out hover:bg-white/[0.06] hover:border-primary/40 hover:scale-[1.015] group flex flex-col items-center justify-center text-center"
        >
          <div className="w-20 h-20 mb-4 rounded-full overflow-hidden transition-all duration-300 bg-black/40">
            <img 
              src={agent.imageUrl} 
              alt={agent.name}
              className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all"
            />
          </div>
          <h3 className="text-white text-[13px] font-bold uppercase tracking-widest transition-colors duration-300 group-hover:text-primary/90">
            {agent.name}
          </h3>
        </div>
      ))}
    </div>
  );
};

export default ValorantStats;
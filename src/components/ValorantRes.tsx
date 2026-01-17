import { Monitor, Maximize, RectangleHorizontal, Expand } from 'lucide-react';

const ValorantRes = () => {
  const settings = [
    { label: "Resolução", value: "1920x1080", icon: <Monitor className="w-4 h-4" /> },
    { label: "Aspect Ratio", value: "16:9", icon: <RectangleHorizontal className="w-4 h-4" /> },
    { label: "Modo", value: "Fullscreen", icon: <Maximize className="w-4 h-4" /> },
    { label: "Scaling", value: "Native", icon: <Expand className="w-4 h-4" /> },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {settings.map((item, index) => (
        <div 
          key={index}
          className="bg-white/[0.03] border border-transparent rounded-[16px] p-6 transition-all duration-300 ease-out hover:bg-white/[0.06] hover:border-primary/40 hover:scale-[1.015] group flex flex-col items-center justify-center text-center"
        >
          <div className="w-12 h-12 mb-4 rounded-full bg-black/40 flex items-center justify-center text-white/40 group-hover:text-primary group-hover:bg-primary/10 transition-all duration-300">
            {item.icon}
          </div>
          <p className="text-white/30 text-[10px] uppercase tracking-[2px] font-bold mb-1">
            {item.label}
          </p>
          <h3 className="text-white text-lg font-bold tracking-widest uppercase transition-colors duration-300 group-hover:text-primary/90">
            {item.value}
          </h3>
        </div>
      ))}
    </div>
  );
};

export default ValorantRes;
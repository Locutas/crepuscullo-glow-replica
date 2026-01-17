import Header from '@/components/Header';
import FallingPetals from '@/components/FallingPetals';
import AudioPlayer from '@/components/AudioPlayer';
import ValorantStats from '@/components/ValorantStats';
import CrosshairCard from '@/components/CrosshairCard';
import { Layout, Crosshair } from 'lucide-react';

const Valorant = () => {
  const crosshairs = [
    {
      name: "Standard Dot",
      code: "0;P;c;7;h;0;f;0;0l;3;0v;3;0o;2;0a;1;0f;0;1b;0",
      imageUrl: "https://i.imgur.com/vH9Xq3w.png"
    },
    {
      name: "Small Cross",
      code: "0;P;h;0;f;0;0l;2;0v;2;0o;2;0a;1;0f;0;1b;0",
      imageUrl: "https://i.imgur.com/fL8lY3O.png"
    },
    {
      name: "Box Crosshair",
      code: "0;P;c;1;h;0;f;0;0l;2;0v;2;0o;0;0a;1;0f;0;1b;0",
      imageUrl: "https://i.imgur.com/S6H1O3O.png"
    }
  ];

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <FallingPetals />
      <Header />
      
      <main className="relative z-10 pt-52 pb-24 px-6">
        <div className="max-w-5xl mx-auto space-y-12">
          
          {/* Hero Section */}
          <div className="flex flex-col items-center text-center mb-16 page-transition">
            <div className="relative w-40 h-40 mb-6 flex items-center justify-center">
              <div className="absolute w-32 h-32 bg-primary/20 blur-[50px] rounded-full pointer-events-none" />
              <div className="absolute w-20 h-20 bg-primary/30 blur-[25px] rounded-full pointer-events-none" />
              
              <img 
                src="https://i.imgur.com/GAgHYgx.png" 
                alt="Valorant Icon" 
                className="relative w-32 h-32 object-contain animate-float z-10"
              />
              
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-20 h-4 bg-black/60 blur-xl rounded-[100%] animate-shadow" />
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-[10px] uppercase font-space">
              VALORANT
            </h1>
            <p className="text-white/50 text-[13px] uppercase tracking-[3px] font-medium max-w-lg mx-auto leading-relaxed">
              O que você precisa está aqui
            </p>
          </div>

          {/* Status Section */}
          <div className="bg-white/[0.02] backdrop-blur-md rounded-[24px] p-6 md:p-8 page-transition">
            <div className="flex items-center gap-3 mb-8">
              <div className="text-white/80">
                <Layout className="w-5 h-5" />
              </div>
              <h2 className="text-lg font-bold text-white tracking-widest uppercase">
                STATUS
              </h2>
            </div>

            <ValorantStats />
          </div>

          {/* Miras Section */}
          <div className="bg-white/[0.02] backdrop-blur-md rounded-[24px] p-6 md:p-8 page-transition">
            <div className="flex items-center gap-3 mb-8">
              <div className="text-white/80">
                <Crosshair className="w-5 h-5" />
              </div>
              <h2 className="text-lg font-bold text-white tracking-widest uppercase">
                MIRAS
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {crosshairs.map((xhair, index) => (
                <CrosshairCard 
                  key={index}
                  name={xhair.name}
                  code={xhair.code}
                  imageUrl={xhair.imageUrl}
                />
              ))}
            </div>
          </div>

        </div>
      </main>
      
      <AudioPlayer />
    </div>
  );
};

export default Valorant;
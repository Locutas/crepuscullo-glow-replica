import { Monitor, Keyboard, Mouse, Headphones, Cpu, HardDrive } from 'lucide-react';
import Header from '@/components/Header';
import FallingPetals from '@/components/FallingPetals';
import AudioPlayer from '@/components/AudioPlayer';

interface SetupItem {
  icon: React.ReactNode;
  category: string;
  name: string;
}

const Setup = () => {
  const setupItems: SetupItem[] = [
    { icon: <Monitor className="w-6 h-6" />, category: 'Monitor', name: 'AOC 24G2 144Hz' },
    { icon: <Keyboard className="w-6 h-6" />, category: 'Teclado', name: 'Redragon Kumara' },
    { icon: <Mouse className="w-6 h-6" />, category: 'Mouse', name: 'Logitech G305' },
    { icon: <Headphones className="w-6 h-6" />, category: 'Headset', name: 'HyperX Cloud Stinger' },
    { icon: <Cpu className="w-6 h-6" />, category: 'Processador', name: 'Ryzen 5 5600X' },
    { icon: <HardDrive className="w-6 h-6" />, category: 'Placa de Vídeo', name: 'RTX 3060' },
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <FallingPetals />
      <Header />
      
      <main className="relative z-10 pt-28 pb-16 px-6">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold text-foreground text-glow text-center mb-8">
            Meu Setup
          </h1>
          
          <div className="grid gap-4">
            {setupItems.map((item, index) => (
              <div 
                key={index}
                className="bg-card/40 backdrop-blur-sm border border-border/30 rounded-xl p-4 flex items-center gap-4 card-hover"
              >
                <div className="w-12 h-12 rounded-lg bg-secondary/50 flex items-center justify-center text-primary">
                  {item.icon}
                </div>
                <div>
                  <span className="text-xs text-muted-foreground">{item.category}</span>
                  <p className="text-foreground font-medium">{item.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      
      <AudioPlayer />
    </div>
  );
};

export default Setup;

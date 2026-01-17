import { Monitor, Headphones, Keyboard, Cpu } from 'lucide-react';
import Header from '@/components/Header';
import FallingPetals from '@/components/FallingPetals';
import AudioPlayer from '@/components/AudioPlayer';

// Assets
import monitorPrincipal from '@/assets/monitor-principal.png';
import monitorSecundario from '@/assets/monitor-secundario.png';
import headsetImg from '@/assets/headset.png';
import foneImg from '@/assets/fone.png';
import microfoneImg from '@/assets/microfone.png';
import tecladoImg from '@/assets/teclado.png';
import mouseImg from '@/assets/mouse.png';

const Setup = () => {
  const setupSections = [
    {
      category: "MONITORES",
      icon: <Monitor className="w-4 h-4" />,
      items: [
        { name: "Monitor Principal", spec: "AOC 144 Hz", image: monitorPrincipal },
        { name: "Monitor Secundário", spec: "Samsung Odyssey G3 27 G30A - 180Hz", image: monitorSecundario }
      ]
    },
    {
      category: "ÁUDIO",
      icon: <Headphones className="w-4 h-4" />,
      items: [
        { name: "Headset", spec: "HyperX Cloud Alpha S", image: headsetImg },
        { name: "Fone de ouvido", spec: "KZ ZS10 Pro", image: foneImg },
        { name: "Microfone", spec: "FIFINE AM8", image: microfoneImg }
      ]
    },
    {
      category: "PERIFÉRICOS",
      icon: <Keyboard className="w-4 h-4" />,
      items: [
        { name: "Teclado", spec: "HyperX Alloy Origins 60", image: tecladoImg },
        { name: "Mouse", spec: "Attack Shark X3", image: mouseImg }
      ]
    },
    {
      category: "HARDWARE",
      icon: <Cpu className="w-4 h-4" />,
      items: [
        { name: "Processador", spec: "Ryzen 7800X3D" },
        { name: "Placa de Vídeo", spec: "Nvidia GeForce RTX 3050" },
        { name: "Placa Mãe", spec: "ASUS TUF B650-M Plus" },
        { name: "Memória RAM", spec: "Kings Fury Beast 32gb (2x16) 5400Mhz DDR5" },
        { name: "Armazenamento", spec: "SSD NVme M2 1TB" },
        { name: "Fonte", spec: "Corsair CX Series CX750, 750W" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <FallingPetals />
      <Header />
      
      <main className="relative z-10 pt-40 pb-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-[1400px] mx-auto">
          {/* Page Title */}
          <div className="text-center mb-24">
            <h1 className="text-6xl md:text-7xl font-bold text-white tracking-[18px] uppercase font-space mb-6">
              SETUP
            </h1>
            <div className="w-20 h-[3px] bg-primary mx-auto rounded-full shadow-[0_0_10px_rgba(255,70,85,0.5)]" />
          </div>

          <div className="space-y-24">
            {setupSections.map((section, idx) => (
              <section key={idx} className="animate-in fade-in slide-in-from-bottom-8 duration-1000">
                {/* Section Header */}
                <div className="flex items-center gap-3 mb-10 ml-1">
                  <div className="w-8 h-8 rounded-lg bg-white/[0.03] border border-white/5 flex items-center justify-center text-primary">
                    {section.icon}
                  </div>
                  <h2 className="text-[11px] font-bold uppercase tracking-[6px] text-white/30 font-space">
                    {section.category}
                  </h2>
                </div>
                
                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {section.items.map((item, itemIdx) => (
                    <div 
                      key={itemIdx} 
                      className="group flex flex-col bg-white/[0.02] border border-white/5 rounded-2xl overflow-hidden hover:bg-white/[0.04] hover:border-primary/20 transition-all duration-500 hover:-translate-y-2"
                    >
                      {item.image ? (
                        <div className="aspect-[4/3] w-full flex items-center justify-center p-10 relative bg-white/[0.01]">
                          {/* Inner soft glow */}
                          <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none" />
                          
                          <img 
                            src={item.image} 
                            alt={item.name}
                            className="max-h-full max-w-full object-contain transition-transform duration-700 group-hover:scale-110 drop-shadow-[0_15px_30px_rgba(0,0,0,0.8)] z-10"
                          />
                        </div>
                      ) : (
                        <div className="h-2 w-full bg-gradient-to-r from-transparent via-white/5 to-transparent" />
                      )}
                      
                      <div className="p-7 pt-5 flex flex-col gap-2 border-t border-white/5">
                        <h3 className="text-white text-sm font-semibold tracking-wide group-hover:text-primary transition-colors duration-300">
                          {item.name}
                        </h3>
                        <p className="text-white/40 text-[11px] leading-relaxed font-medium uppercase tracking-wider">
                          {item.spec}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </main>
      
      <AudioPlayer />
    </div>
  );
};

export default Setup;
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
    <div className="min-h-screen bg-background relative overflow-hidden">
      <FallingPetals />
      <Header />
      
      <main className="relative z-10 pt-36 pb-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white tracking-[15px] uppercase font-space mb-4">
              SETUP
            </h1>
            <div className="w-16 h-[2px] bg-primary mx-auto" />
          </div>

          <div className="space-y-20">
            {setupSections.map((section, idx) => (
              <section key={idx} className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                <div className="flex items-center gap-3 mb-8 ml-2">
                  <div className="p-2 bg-white/5 rounded-lg text-primary">
                    {section.icon}
                  </div>
                  <h2 className="text-[10px] font-bold uppercase tracking-[5px] text-white/40">
                    {section.category}
                  </h2>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {section.items.map((item, itemIdx) => (
                    <div 
                      key={itemIdx} 
                      className="setup-card flex flex-col h-full group hover:translate-y-[-4px] transition-all duration-500"
                    >
                      {item.image ? (
                        <div className="aspect-video w-full overflow-hidden bg-white/[0.01] flex items-center justify-center p-8 border-b border-white/5 relative">
                          <img 
                            src={item.image} 
                            alt={item.name}
                            className="max-h-full max-w-full object-contain transition-transform duration-700 group-hover:scale-110 drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                      ) : (
                        <div className="h-4 bg-white/5 w-full border-b border-white/5" />
                      )}
                      
                      <div className="p-6 flex flex-col justify-between flex-grow">
                        <div>
                          <h3 className="text-white font-medium text-sm mb-2 group-hover:text-primary transition-colors duration-300">
                            {item.name}
                          </h3>
                          <p className="text-white/40 text-[11px] tracking-wider leading-relaxed">
                            {item.spec}
                          </p>
                        </div>
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
import { Monitor, Headphones, Keyboard, Cpu, Mic2 } from 'lucide-react';
import Header from '@/components/Header';
import FallingPetals from '@/components/FallingPetals';
import AudioPlayer from '@/components/AudioPlayer';

// Importando os assets existentes
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
      icon: <Monitor className="w-5 h-5" />,
      items: [
        { name: "Monitor Principal", spec: "AOC 144 Hz", image: monitorPrincipal },
        { name: "Monitor Secundário", spec: "Samsung Odyssey G3 27 G30A - 180Hz", image: monitorSecundario }
      ]
    },
    {
      category: "ÁUDIO",
      icon: <Headphones className="w-5 h-5" />,
      items: [
        { name: "Headset", spec: "HyperX Cloud Alpha S", image: headsetImg },
        { name: "Fone de ouvido", spec: "KZ ZS10 Pro", image: foneImg },
        { name: "Microfone", spec: "FIFINE AM8", image: microfoneImg }
      ]
    },
    {
      category: "PERIFÉRICOS",
      icon: <Keyboard className="w-5 h-5" />,
      items: [
        { name: "Teclado", spec: "HyperX Alloy Origins 60", image: tecladoImg },
        { name: "Mouse", spec: "Attack Shark X3", image: mouseImg }
      ]
    },
    {
      category: "HARDWARE",
      icon: <Cpu className="w-5 h-5" />,
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
      
      <main className="relative z-10 pt-40 pb-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-[12px] uppercase font-['Space_Grotesk'] mb-6">
              SETUP
            </h1>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
          </div>

          <div className="space-y-16">
            {setupSections.map((section, idx) => (
              <section key={idx} className="page-transition">
                <div className="flex items-center gap-4 mb-8 opacity-60">
                  {section.icon}
                  <h2 className="text-xs font-bold uppercase tracking-[4px]">{section.category}</h2>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {section.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="setup-card overflow-hidden group">
                      {item.image && (
                        <div className="h-48 w-full overflow-hidden bg-white/[0.02] flex items-center justify-center p-4 border-b border-white/[0.05]">
                          <img 
                            src={item.image} 
                            alt={item.name}
                            className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-110 drop-shadow-2xl"
                          />
                        </div>
                      )}
                      <div className="p-6">
                        <h3 className="text-white/90 font-bold text-sm mb-1 group-hover:text-primary transition-colors">
                          {item.name}
                        </h3>
                        <p className="text-white/40 text-xs tracking-wider font-medium uppercase">
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
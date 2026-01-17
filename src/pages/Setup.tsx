import { Monitor, Headphones, Keyboard, Cpu, MousePointer2, Mic2 } from 'lucide-react';
import Header from '@/components/Header';
import FallingPetals from '@/components/FallingPetals';
import AudioPlayer from '@/components/AudioPlayer';

const Setup = () => {
  const setupItems = [
    {
      category: "MONITORES",
      icon: <Monitor className="w-5 h-5" />,
      items: [
        { name: "Monitor Principal", spec: "AOC Agon 25G3ZM/BK25 - 240Hz" },
        { name: "Monitor Secundário", spec: "Samsung Odyssey G3 27 G30A - 180Hz" }
      ]
    },
    {
      category: "ÁUDIO",
      icon: <Headphones className="w-5 h-5" />,
      items: [
        { name: "Headset", spec: "HyperX Cloud Alpha S" },
        { name: "Fone de ouvido", spec: "KZ ZS10 Pro" },
        { name: "Microfone", spec: "FIFINE AM8" }
      ]
    },
    {
      category: "PERIFÉRICOS",
      icon: <Keyboard className="w-5 h-5" />,
      items: [
        { name: "Teclado", spec: "HyperX Alloy Origins 60" },
        { name: "Mouse", spec: "Attack Shark X3" }
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
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-[12px] uppercase font-['Space_Grotesk'] mb-6">
              SETUP
            </h1>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
          </div>

          <div className="space-y-12">
            {setupItems.map((section, idx) => (
              <section key={idx} className="page-transition">
                <div className="flex items-center gap-4 mb-8 opacity-60">
                  {section.icon}
                  <h2 className="text-xs font-bold uppercase tracking-[4px]">{section.category}</h2>
                </div>
                
                <div className="grid gap-4">
                  {section.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="setup-card p-6 flex items-center justify-between group">
                      <div>
                        <h3 className="text-white/90 font-medium text-sm mb-1 group-hover:text-primary transition-colors">
                          {item.name}
                        </h3>
                        <p className="text-white/40 text-xs tracking-wider">
                          {item.spec}
                        </p>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <MousePointer2 className="w-3 h-3 text-primary" />
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
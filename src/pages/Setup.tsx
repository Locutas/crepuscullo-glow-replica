import { Monitor, Headphones, Keyboard, Cpu, ChevronRight } from 'lucide-react';
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
    <div className="min-h-screen bg-[#050505] relative overflow-hidden">
      <FallingPetals />
      <Header />
      
      <main className="relative z-10 pt-40 pb-32 px-6">
        <div className="max-w-3xl mx-auto">
          {/* Header Minimalista */}
          <div className="flex flex-col items-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-[12px] uppercase font-space mb-4">
              SETUP
            </h1>
            <div className="w-12 h-1 bg-primary rounded-full" />
          </div>

          <div className="space-y-12">
            {setupSections.map((section, idx) => (
              <section key={idx} className="page-transition">
                {/* Título da Seção */}
                <div className="flex items-center gap-3 mb-6 px-2">
                  <div className="p-2 rounded-lg bg-white/5 text-primary">
                    {section.icon}
                  </div>
                  <h2 className="text-[12px] font-bold uppercase tracking-[4px] text-white/40">
                    {section.category}
                  </h2>
                </div>
                
                {/* Lista de Itens Estilo Horizontal */}
                <div className="grid grid-cols-1 gap-3">
                  {section.items.map((item, itemIdx) => (
                    <div 
                      key={itemIdx} 
                      className="group flex items-center bg-[#0a0a0a] border border-white/[0.04] rounded-2xl p-3 transition-all duration-300 hover:border-primary/30 hover:bg-[#0e0e0e] hover:pl-5"
                    >
                      {/* Image Container */}
                      <div className="w-16 h-16 flex-shrink-0 flex items-center justify-center bg-white/[0.02] border border-white/[0.03] rounded-xl overflow-hidden mr-4">
                        {item.image ? (
                          <img 
                            src={item.image} 
                            alt={item.name}
                            className="w-12 h-12 object-contain transition-transform group-hover:scale-110"
                          />
                        ) : (
                          <Cpu className="w-6 h-6 text-white/10" />
                        )}
                      </div>
                      
                      {/* Text Content */}
                      <div className="flex-grow">
                        <h3 className="text-white text-[14px] font-bold mb-0.5 tracking-wide group-hover:text-primary transition-colors">
                          {item.name}
                        </h3>
                        <p className="text-white/30 text-[11px] font-medium uppercase tracking-wider">
                          {item.spec}
                        </p>
                      </div>

                      {/* Arrow Icon (opcional para dar o look do site) */}
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity pr-4">
                        <ChevronRight className="w-4 h-4 text-primary" />
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
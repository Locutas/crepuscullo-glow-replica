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
    <div className="min-h-screen bg-[#050505] relative overflow-hidden">
      <FallingPetals />
      <Header />
      
      <main className="relative z-10 pt-44 pb-32 px-6 md:px-12 lg:px-20">
        <div className="max-w-[1100px] mx-auto">
          {/* Título Principal */}
          <div className="text-center mb-24">
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-[20px] md:tracking-[30px] uppercase font-space mb-6 ml-[20px] md:ml-[30px]">
              SETUP
            </h1>
            <div className="w-20 h-[3px] bg-primary mx-auto rounded-full shadow-[0_0_15px_rgba(255,70,85,0.5)]" />
          </div>

          <div className="space-y-24">
            {setupSections.map((section, idx) => (
              <section key={idx} className="page-transition">
                {/* Cabeçalho da Seção */}
                <div className="flex items-center gap-3 mb-8 ml-2">
                  <div className="text-primary/70">
                    {section.icon}
                  </div>
                  <h2 className="text-[10px] font-bold uppercase tracking-[6px] text-white/20 font-space">
                    {section.category}
                  </h2>
                </div>
                
                {/* Grid de Cards - Ajustado para ser mais compacto */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {section.items.map((item, itemIdx) => (
                    <div 
                      key={itemIdx} 
                      className="group flex flex-col bg-[#080808] border border-white/[0.04] rounded-[20px] overflow-hidden transition-all duration-500 hover:border-primary/20 hover:bg-[#0c0c0c] hover:-translate-y-2 shadow-xl"
                    >
                      {item.image ? (
                        <div className="aspect-square w-full flex items-center justify-center p-8 relative bg-black/20">
                          <img 
                            src={item.image} 
                            alt={item.name}
                            className="max-h-full max-w-full object-contain transition-transform duration-700 group-hover:scale-110 z-10 drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]"
                          />
                        </div>
                      ) : (
                        <div className="h-1 w-full bg-gradient-to-r from-transparent via-white/5 to-transparent" />
                      )}
                      
                      <div className="p-6 pt-4 flex flex-col items-center text-center">
                        <h3 className="text-white text-[13px] font-semibold mb-1.5 tracking-wide group-hover:text-primary transition-colors duration-300">
                          {item.name}
                        </h3>
                        <p className="text-white/30 text-[10px] font-medium uppercase tracking-widest leading-relaxed">
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
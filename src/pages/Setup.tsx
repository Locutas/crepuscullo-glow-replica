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
    <div className="min-h-screen bg-[#050505] relative overflow-hidden">
      <FallingPetals />
      <Header />
      
      <main className="relative z-10 pt-44 pb-32 px-6 md:px-12 lg:px-20">
        <div className="max-w-[1200px] mx-auto">
          {/* Título Principal Estilo Victrisz */}
          <div className="text-center mb-28">
            <h1 className="text-6xl md:text-8xl font-bold text-white tracking-[25px] md:tracking-[40px] uppercase font-space mb-8 ml-[25px] md:ml-[40px]">
              SETUP
            </h1>
            <div className="w-24 h-[4px] bg-primary mx-auto rounded-full shadow-[0_0_20px_rgba(255,70,85,0.6)]" />
          </div>

          <div className="space-y-32">
            {setupSections.map((section, idx) => (
              <section key={idx} className="page-transition">
                {/* Cabeçalho da Seção */}
                <div className="flex items-center gap-4 mb-12 ml-4">
                  <div className="text-primary/80">
                    {section.icon}
                  </div>
                  <h2 className="text-[12px] font-bold uppercase tracking-[8px] text-white/30 font-space">
                    {section.category}
                  </h2>
                </div>
                
                {/* Grid de Cards - 3 colunas para Periféricos e Áudio */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {section.items.map((item, itemIdx) => (
                    <div 
                      key={itemIdx} 
                      className="group flex flex-col bg-[#0a0a0a] border border-white/[0.03] rounded-[24px] overflow-hidden transition-all duration-500 hover:border-primary/30 hover:bg-[#111111] hover:-translate-y-3 shadow-2xl"
                    >
                      {item.image ? (
                        <div className="aspect-[4/3] w-full flex items-center justify-center p-12 relative">
                          <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent" />
                          <img 
                            src={item.image} 
                            alt={item.name}
                            className="max-h-full max-w-full object-contain transition-transform duration-700 group-hover:scale-115 z-10 drop-shadow-[0_20px_40px_rgba(0,0,0,0.9)]"
                          />
                        </div>
                      ) : (
                        <div className="h-4 w-full bg-gradient-to-r from-transparent via-white/5 to-transparent" />
                      )}
                      
                      <div className="p-10 pt-4 flex flex-col items-center text-center">
                        <h3 className="text-white text-base font-bold mb-2 tracking-wide group-hover:text-primary transition-colors duration-300">
                          {item.name}
                        </h3>
                        <p className="text-white/40 text-[12px] font-medium uppercase tracking-widest leading-relaxed">
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
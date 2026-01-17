import { Monitor, Headphones, Keyboard, Cpu, MousePointer2 } from 'lucide-react';
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
        <div className="max-w-6xl mx-auto">
          {/* Título Principal */}
          <div className="flex flex-col items-center mb-24">
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-[20px] uppercase font-space mb-6 ml-[20px]">
              SETUP
            </h1>
            <div className="w-16 h-1 bg-primary rounded-full shadow-[0_0_15px_rgba(255,70,85,0.4)]" />
          </div>

          <div className="space-y-16">
            {setupSections.map((section, idx) => (
              <section key={idx} className="page-transition">
                {/* Cabeçalho da Seção */}
                <div className="flex items-center gap-3 mb-6 ml-1">
                  <div className="w-7 h-7 rounded bg-white/[0.03] border border-white/[0.05] flex items-center justify-center text-primary/80">
                    {section.icon}
                  </div>
                  <h2 className="text-[10px] font-bold uppercase tracking-[4px] text-white/30 font-space">
                    {section.category}
                  </h2>
                </div>
                
                {/* Grid com tamanhos de cards calibrados */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
                  {section.items.map((item, itemIdx) => (
                    <div 
                      key={itemIdx} 
                      className="group flex items-center bg-[#0a0a0a] border border-white/[0.03] rounded-[20px] p-2.5 transition-all duration-300 hover:border-primary/40 hover:bg-[#0c0c0c] hover:shadow-[0_0_40px_rgba(255,70,85,0.04)]"
                    >
                      {/* Container da Imagem maior (idêntico ao site) */}
                      <div className="w-[84px] h-[84px] flex-shrink-0 flex items-center justify-center bg-[#111] border border-white/[0.03] rounded-[14px] overflow-hidden transition-all duration-500 group-hover:border-primary/20">
                        {item.image ? (
                          <img 
                            src={item.image} 
                            alt={item.name}
                            className="w-14 h-14 object-contain transition-transform duration-500 group-hover:scale-110 drop-shadow-2xl"
                          />
                        ) : (
                          <Cpu className="w-8 h-8 text-white/10 group-hover:text-primary/30 transition-colors" />
                        )}
                      </div>
                      
                      {/* Texto com tipografia refinada */}
                      <div className="ml-5 flex-grow pr-2">
                        <h3 className="text-white text-[15px] font-bold mb-0.5 tracking-wide group-hover:text-primary transition-colors duration-300">
                          {item.name}
                        </h3>
                        <p className="text-white/20 text-[10px] font-bold uppercase tracking-[2px] leading-tight">
                          {item.spec}
                        </p>
                      </div>

                      {/* Indicador lateral */}
                      <div className="pr-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                        <MousePointer2 className="w-4 h-4 text-primary/40" />
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
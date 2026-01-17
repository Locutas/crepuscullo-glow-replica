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
        { name: "Monitor Principal", spec: "AOC Agon 25G3ZM/BK25", badge: "240Hz", image: monitorPrincipal },
        { name: "Monitor Secundário", spec: "Samsung Odyssey G3 27 G30A", badge: "180Hz", image: monitorSecundario }
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
        { name: "Memória RAM", spec: "Kings Fury Beast 32gb (2x16) 5400Mhz DDR5" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <FallingPetals />
      <Header />
      
      <main className="relative z-10 pt-52 pb-24 px-6">
        <div className="max-w-5xl mx-auto space-y-12">
          
          {/* Hero Section do Setup */}
          <div className="flex flex-col items-center text-center mb-16 page-transition">
            <div className="relative w-40 h-40 mb-6">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl animate-pulse" />
              <img 
                src="https://i.imgur.com/cPvNAwl.png" 
                alt="Setup Icon" 
                className="relative w-full h-full object-contain animate-float"
              />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-[10px] uppercase font-space">
              SETUP
            </h1>
            <p className="text-white/50 text-[13px] uppercase tracking-[3px] font-medium whitespace-nowrap">
              Os equipamentos que uso para jogar e fazer as lives
            </p>
          </div>

          {setupSections.map((section, idx) => (
            <div 
              key={idx} 
              className="bg-[#080808] border border-white/[0.05] rounded-[20px] p-6 md:p-8 page-transition"
            >
              {/* Header da Seção */}
              <div className="flex items-center gap-3 mb-6">
                <div className="text-white/80">
                  {section.icon}
                </div>
                <h2 className="text-lg font-bold text-white tracking-widest uppercase">
                  {section.category}
                </h2>
              </div>

              {/* Grid de Itens com efeito suave no card inteiro */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {section.items.map((item, itemIdx) => (
                  <div 
                    key={itemIdx} 
                    className="bg-[#0f0f0f] border border-white/[0.03] rounded-[16px] p-3 transition-all duration-500 ease-out hover:border-primary/20 hover:bg-[#141414] hover:scale-[1.03] hover:shadow-[0_10px_30px_-10px_rgba(255,70,85,0.1)] group"
                  >
                    {/* Imagem do Produto */}
                    <div className="aspect-[21/9] bg-black/40 rounded-lg overflow-hidden mb-3 flex items-center justify-center border border-white/[0.02]">
                      {item.image ? (
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                        />
                      ) : (
                        <Cpu className="w-6 h-6 text-white/5 transition-transform duration-700 group-hover:scale-125" />
                      )}
                    </div>

                    {/* Conteúdo Info */}
                    <div className="space-y-0.5">
                      <div className="flex items-center justify-between gap-2">
                        <h3 className="text-white text-[13px] font-bold truncate transition-colors duration-300 group-hover:text-primary/90">
                          {item.name}
                        </h3>
                        {item.badge && (
                          <span className="px-1.5 py-0.5 rounded bg-[#2d1618] text-[#ff4655] text-[8px] font-bold shadow-sm">
                            {item.badge}
                          </span>
                        )}
                      </div>
                      <p className="text-white/30 text-[11px] leading-relaxed line-clamp-1 uppercase tracking-wider transition-colors duration-300 group-hover:text-white/50">
                        {item.spec}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
      
      <AudioPlayer />
    </div>
  );
};

export default Setup;
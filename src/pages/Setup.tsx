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
      icon: <Monitor className="w-6 h-6" />,
      items: [
        { name: "Monitor Principal", spec: "AOC Agon 25G3ZM/BK25", badge: "240Hz", image: monitorPrincipal },
        { name: "Monitor Secundário", spec: "Samsung Odyssey G3 27 G30A", badge: "180Hz", image: monitorSecundario }
      ]
    },
    {
      category: "ÁUDIO",
      icon: <Headphones className="w-6 h-6" />,
      items: [
        { name: "Headset", spec: "HyperX Cloud Alpha S", image: headsetImg },
        { name: "Fone de ouvido", spec: "KZ ZS10 Pro", image: foneImg },
        { name: "Microfone", spec: "FIFINE AM8", image: microfoneImg }
      ]
    },
    {
      category: "PERIFÉRICOS",
      icon: <Keyboard className="w-6 h-6" />,
      items: [
        { name: "Teclado", spec: "HyperX Alloy Origins 60", image: tecladoImg },
        { name: "Mouse", spec: "Attack Shark X3", image: mouseImg }
      ]
    },
    {
      category: "HARDWARE",
      icon: <Cpu className="w-6 h-6" />,
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
      
      <main className="relative z-10 pt-40 pb-32 px-6">
        <div className="max-w-6xl mx-auto space-y-10">
          {setupSections.map((section, idx) => (
            <div 
              key={idx} 
              className="bg-[#080808] border border-white/[0.05] rounded-[24px] p-8 md:p-10 page-transition"
            >
              {/* Header da Seção */}
              <div className="flex items-center gap-4 mb-10">
                <div className="text-white">
                  {section.icon}
                </div>
                <h2 className="text-xl font-bold text-white tracking-wider">
                  {section.category}
                </h2>
              </div>

              {/* Grid de Itens */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {section.items.map((item, itemIdx) => (
                  <div 
                    key={itemIdx} 
                    className="bg-[#0f0f0f] border border-white/[0.03] rounded-[20px] p-5 transition-all duration-300 hover:border-white/10 hover:bg-[#121212]"
                  >
                    {/* Imagem do Produto (Proporção da imagem enviada) */}
                    <div className="aspect-[16/9] bg-black/40 rounded-xl overflow-hidden mb-5 flex items-center justify-center border border-white/[0.02]">
                      {item.image ? (
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      ) : (
                        <Cpu className="w-10 h-10 text-white/5" />
                      )}
                    </div>

                    {/* Conteúdo Info */}
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between gap-2">
                        <h3 className="text-white text-[15px] font-bold truncate">
                          {item.name}
                        </h3>
                        {item.badge && (
                          <span className="px-2 py-0.5 rounded-md bg-[#2d1618] text-[#ff4655] text-[10px] font-bold">
                            {item.badge}
                          </span>
                        )}
                      </div>
                      <p className="text-white/40 text-[13px] leading-relaxed">
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
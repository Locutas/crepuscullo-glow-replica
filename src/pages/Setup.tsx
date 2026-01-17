import { Monitor, Headphones, Keyboard, Cpu, HardDrive, Layout } from 'lucide-react';
import Header from '@/components/Header';
import FallingPetals from '@/components/FallingPetals';
import AudioPlayer from '@/components/AudioPlayer';

// Assets
import monitorPrincipal from '@/assets/monitor-principal.png';
import microfoneImg from '@/assets/microfone.png';

const Setup = () => {
  const setupSections = [
    {
      category: "MONITOR",
      icon: <Monitor className="w-5 h-5" />,
      items: [
        { name: "Monitor Principal", spec: "AOC Hero 24G2/BK", badge: "144Hz", image: monitorPrincipal }
      ]
    },
    {
      category: "ÁUDIO",
      icon: <Headphones className="w-5 h-5" />,
      items: [
        { name: "Microfone", spec: "FIFINE A6", image: microfoneImg },
        { name: "Fone de ouvido", spec: "FIFINE H6", image: "https://i.imgur.com/IT2eh1J.png" }
      ]
    },
    {
      category: "PERIFÉRICOS",
      icon: <Keyboard className="w-5 h-5" />,
      items: [
        { name: "Mouse", spec: "Dareu Sakura EM90X1", image: "https://i.imgur.com/izc86RZ.png" },
        { name: "Teclado", spec: "Royal Kludge R75", image: "https://i.imgur.com/6OlkGxe.png" },
        { name: "Webcam", spec: "Logitech C920s", image: "https://i.imgur.com/MMezS2q.png" }
      ]
    },
    {
      category: "HARDWARE",
      icon: <Cpu className="w-5 h-5" />,
      noImage: true,
      items: [
        { name: "Processador", spec: "AMD Ryzen 5 5500" },
        { name: "Placa de Vídeo", spec: "NVIDIA GeForce GTX 1660 Super" },
        { name: "Memória RAM", spec: "16 GB" },
        { name: "Armazenamento", spec: "SSD 480 GB / HD 465 GB" },
        { name: "Placa Mãe", spec: "Sei lá kkk" }
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
            <div className="relative w-40 h-40 mb-6 flex items-center justify-center">
              <div className="absolute w-32 h-32 bg-primary/20 blur-[50px] rounded-full pointer-events-none" />
              <div className="absolute w-20 h-20 bg-primary/30 blur-[25px] rounded-full pointer-events-none" />
              
              <img 
                src="https://i.imgur.com/cPvNAwl.png" 
                alt="Setup Icon" 
                className="relative w-full h-full object-contain animate-float z-10"
              />
              
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-20 h-4 bg-black/60 blur-xl rounded-[100%] animate-shadow" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-[10px] uppercase font-space">
              SETUP
            </h1>
            <p className="text-white/50 text-[13px] uppercase tracking-[3px] font-medium whitespace-nowrap">
              Equipamentos que uso para jogar e fazer as lives
            </p>
          </div>

          {setupSections.map((section, idx) => (
            <div 
              key={idx} 
              className="bg-white/[0.02] backdrop-blur-md rounded-[24px] p-6 md:p-8 page-transition"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="text-white/80">
                  {section.icon}
                </div>
                <h2 className="text-lg font-bold text-white tracking-widest uppercase">
                  {section.category}
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {section.items.map((item, itemIdx) => (
                  <div 
                    key={itemIdx} 
                    className="bg-white/[0.03] border border-transparent rounded-[16px] p-4 transition-all duration-300 ease-out hover:bg-white/[0.06] hover:border-primary/40 hover:scale-[1.015] group"
                  >
                    {!section.noImage && (
                      <div className="aspect-[21/9] bg-black/40 rounded-lg overflow-hidden mb-3 flex items-center justify-center">
                        {item.image ? (
                          <img 
                            src={item.image} 
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <Cpu className="w-6 h-6 text-white/5" />
                        )}
                      </div>
                    )}

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
                      <p className="text-white/30 text-[11px] leading-relaxed line-clamp-2 uppercase tracking-wider transition-colors duration-300 group-hover:text-white/50">
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
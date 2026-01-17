import Header from '@/components/Header';
import FallingPetals from '@/components/FallingPetals';
import AudioPlayer from '@/components/AudioPlayer';
import ValorantStats from '@/components/ValorantStats';
import CrosshairCard from '@/components/CrosshairCard';
import { Layout, Crosshair } from 'lucide-react';

const Valorant = () => {
  const crosshairs = [
    { name: "Cruz Larga", code: "0;s;1;P;h;0;0l;7;0v;4;0g;1;0o;2;0a;1;0f;0;1b;0", imageUrl: "https://i.imgur.com/GmL6r3f.png" },
    { name: "Cruz Fina", code: "0;P;h;0;d;1;0t;1;0l;2;0v;3;0g;1;0o;0;0a;1;0f;0;1b;0", imageUrl: "https://i.imgur.com/RBgbwTc.png" },
    { name: "Cruz Fechada", code: "0;P;h;0;0l;4;0o;0;0a;1;0f;0;1b;0", imageUrl: "https://i.imgur.com/pkT0Wcd.png" },
    { name: "Ponto Normal", code: "0;P;h;0;d;1;0b;0;1b;0", imageUrl: "https://i.imgur.com/4mhBUZA.png" },
    { name: "Ponto Pelado", code: "0;P;c;5;h;0;0l;1;0o;1;0a;1;0f;0;1b;0", imageUrl: "https://i.imgur.com/AD5Pqua.png" },
    { name: "Contornado", code: "0;p;0;s;1;P;c;5;o;1;d;1;0t;4;0l;1;0o;0;0a;1;0f;0;1b;0;A;c;7;o;1;d;1;m;1;0l;2;0o;0;0a;1;0f;0;1b;0;S;o;1", imageUrl: "https://i.imgur.com/6BZ4YFd.png" },
    { name: "Intermediaria", code: "0;s;1;P;h;0;0t;3;0l;0;0v;4;0g;1;0o;1;0a;0.707;0f;0;1t;1;1l;6;1v;3;1g;1;1o;2;1a;1;1m;0;1f;0;S;c;5;s;0.542;o;1", imageUrl: "https://i.imgur.com/tZtMHhG.png" },
    { name: "Cruz Fina PQN", code: "0;s;1;P;o;0;f;0;0b;0;1t;1;1o;1;1a;1;1m;0;1f;0", imageUrl: "https://i.imgur.com/0SNBObJ.png" },
    { name: "Cruz 1080", code: "0;c;1;s;1;P;h;0;m;1;0t;3;0l;0;0v;3;0g;1;0o;0;0a;0.626;0f;0;1t;1;1l;4;1g;1;1o;1;1a;1;1m;0;1f;0;S;c;0;s;0.616;o;1", imageUrl: "https://i.imgur.com/uTRrfKj.png" },
    { name: "1080 Média", code: "0;p;0;c;1;s;1;P;u;000000FF;h;0;f;0;m;1;0t;3;0l;0;0v;3;0g;1;0o;1;0a;1;0f;0;1t;1;1l;4;1g;1;1o;1;1a;1;1m;0;1f;0;A;h;0;0l;5;0v;5;0o;0;0a;1;0f;0;1b;0;S;b;1;c;8;t;000000FF;s;0.787;o;1", imageUrl: "https://i.imgur.com/wwCBAdJ.png" },
    { name: "Ponto Pituco", code: "0;s;1;P;c;5;o;1;d;1;z;1;0t;1;0l;1;0o;0;0a;0;0f;0;1b;0;S;c;0;s;0.603;o;0.655", imageUrl: "https://i.imgur.com/gjKrL2m.png" },
    { name: "Ponticão", code: "0;s;1;P;o;1;d;1;z;3;a;0.934;0t;1;0l;2;0o;0;0a;1;0f;0;1b;0;S;c;0;s;1.214;o;0.856", imageUrl: "https://i.imgur.com/dCRZ8El.png" },
    { name: "Cruz Normal", code: "0;P;h;0;f;0;0l;5;0o;2;0a;1;0f;0;1b;0", imageUrl: "https://i.imgur.com/L3UBYu0.png" },
    { name: "Esticadinha", code: "0;s;1;P;c;5;o;1;0v;3;0g;1;0o;0;0a;1;0f;0;1b;0", imageUrl: "https://i.imgur.com/JIl5WnR.png" },
    { name: "Gigantesca", code: "0;s;1;P;h;0;f;0;0l;10;0a;1;0f;0;1l;0;1o;1;1a;1;1m;0;1f;0;S;c;0;s;0.359", imageUrl: "https://i.imgur.com/fT0FClK.png" }
  ];

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <FallingPetals />
      <Header />
      
      <main className="relative z-10 pt-52 pb-24 px-6">
        <div className="max-w-5xl mx-auto space-y-12">
          
          {/* Hero Section */}
          <div className="flex flex-col items-center text-center mb-16 page-transition">
            <div className="relative w-40 h-40 mb-6 flex items-center justify-center">
              <div className="absolute w-32 h-32 bg-primary/20 blur-[50px] rounded-full pointer-events-none" />
              <div className="absolute w-20 h-20 bg-primary/30 blur-[25px] rounded-full pointer-events-none" />
              
              <img 
                src="https://i.imgur.com/GAgHYgx.png" 
                alt="Valorant Icon" 
                className="relative w-32 h-32 object-contain animate-float z-10"
              />
              
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-20 h-4 bg-black/60 blur-xl rounded-[100%] animate-shadow" />
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-[10px] uppercase font-space">
              VALORANT
            </h1>
            <p className="text-white/50 text-[13px] uppercase tracking-[3px] font-medium max-w-lg mx-auto leading-relaxed">
              O que você precisa está aqui
            </p>
          </div>

          {/* Status Section */}
          <div className="bg-white/[0.02] backdrop-blur-md rounded-[24px] p-6 md:p-8 page-transition">
            <div className="flex items-center gap-3 mb-8">
              <div className="text-white/80">
                <Layout className="w-5 h-5" />
              </div>
              <h2 className="text-lg font-bold text-white tracking-widest uppercase">
                STATUS
              </h2>
            </div>

            <ValorantStats />
          </div>

          {/* Miras Section */}
          <div className="bg-white/[0.02] backdrop-blur-md rounded-[24px] p-6 md:p-8 page-transition">
            <div className="flex items-center gap-3 mb-8">
              <div className="text-white/80">
                <Crosshair className="w-5 h-5" />
              </div>
              <h2 className="text-lg font-bold text-white tracking-widest uppercase">
                MIRAS
              </h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
              {crosshairs.map((xhair, index) => (
                <CrosshairCard 
                  key={index}
                  name={xhair.name}
                  code={xhair.code}
                  imageUrl={xhair.imageUrl}
                />
              ))}
            </div>
          </div>

        </div>
      </main>
      
      <AudioPlayer />
    </div>
  );
};

export default Valorant;
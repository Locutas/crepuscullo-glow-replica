import Header from '@/components/Header';
import FallingPetals from '@/components/FallingPetals';
import AudioPlayer from '@/components/AudioPlayer';
import ValorantStats from '@/components/ValorantStats';

const Valorant = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <FallingPetals />
      <Header />
      
      <main className="relative z-10 pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6 tracking-widest">
            VALORANT
          </h1>
          <p className="text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
            Minha jornada tática, agentes favoritos e estatísticas competitivas.
          </p>
          
          <ValorantStats />
        </div>
      </main>
      
      <AudioPlayer />
    </div>
  );
};

export default Valorant;
import Header from '@/components/Header';
import Avatar from '@/components/Avatar';
import SocialLinks from '@/components/SocialLinks';
import FallingPetals from '@/components/FallingPetals';
import AudioPlayer from '@/components/AudioPlayer';

const Index = () => {
  const avatarUrl = "https://i.imgur.com/cwev071.gif";

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <FallingPetals />
      <Header />
      
      <main className="relative z-10 pt-32 pb-16 px-6 flex flex-col items-center justify-center min-h-screen">
        <div className="text-center max-w-3xl flex flex-col items-center scale-110 md:scale-125">
          <Avatar 
            imageUrl={avatarUrl}
            alt="Crepuscullo Avatar" 
          />
          
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 tracking-[8px] uppercase font-['Space_Grotesk'] text-glow">
            CREPUSCULLO
          </h1>

          <p className="text-white/50 text-[14px] mb-12 leading-relaxed max-w-[700px] uppercase tracking-[2px] font-medium">
            Olá! Sou a Crepuscullo, mas você pode me chamar de Bella. Sou streamer de VALORANT (e às vezes, outros joguinhos legais).
          </p>
          
          <SocialLinks />
        </div>
      </main>
      
      <AudioPlayer />
    </div>
  );
};

export default Index;
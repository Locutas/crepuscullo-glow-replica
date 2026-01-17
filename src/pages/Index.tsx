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
        <div className="text-center max-w-2xl flex flex-col items-center">
          <Avatar 
            imageUrl={avatarUrl}
            alt="Crepuscullo Avatar" 
          />
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-[6px] uppercase font-['Space_Grotesk']">
            CREPUSCULLO
          </h1>

          <p className="text-white/40 text-[13px] mb-10 leading-relaxed max-w-[450px] uppercase tracking-[1px] font-medium">
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
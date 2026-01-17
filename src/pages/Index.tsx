import Header from '@/components/Header';
import Avatar from '@/components/Avatar';
import SocialLinks from '@/components/SocialLinks';
import FallingPetals from '@/components/FallingPetals';
import AudioPlayer from '@/components/AudioPlayer';

const Index = () => {
  const avatarUrl = "https://i.imgur.com/DRtX1FY.jpeg";

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <FallingPetals />
      <Header />
      
      <main className="relative z-10 pt-32 pb-16 px-6 flex flex-col items-center justify-center min-h-screen">
        <div className="text-center max-w-xl">
          {/* Avatar */}
          <Avatar 
            imageUrl={avatarUrl}
            alt="Crepuscullo Avatar" 
          />
          
          {/* Nome */}
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 tracking-wider">
            CREPUSCULLO
          </h1>

          {/* Descrição */}
          <p className="text-muted-foreground text-lg mb-10 leading-relaxed px-4">
            Olá! Sou a Crepuscullo, mas você pode me chamar de Bella. Sou streamer de VALORANT (e às vezes, outros joguinhos legais).
          </p>
          
          {/* Social Links */}
          <SocialLinks />
        </div>
      </main>
      
      <AudioPlayer />
    </div>
  );
};

export default Index;
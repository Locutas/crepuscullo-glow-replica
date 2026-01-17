import { MapPin } from 'lucide-react';
import Header from '@/components/Header';
import Avatar from '@/components/Avatar';
import SocialLinks from '@/components/SocialLinks';
import FallingPetals from '@/components/FallingPetals';
import AudioPlayer from '@/components/AudioPlayer';

const Index = () => {
  // Usando a URL direta fornecida para garantir a atualização imediata
  const avatarUrl = "https://i.imgur.com/tRPgLbs.jpeg";

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
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-3 tracking-wider">
            CREPUSCULLO
          </h1>
          
          {/* Location */}
          <div className="flex items-center justify-center gap-1.5 text-muted-foreground mb-6">
            <MapPin className="w-4 h-4" />
            <span className="text-sm">SC</span>
          </div>

          {/* Descrição Refinada */}
          <p className="text-muted-foreground text-lg mb-10 leading-relaxed px-4">
            Streamer de VALORANT, criadora de conteúdo e entusiasta de bons jogos. 
            Entre headshots e risadas, busco construir uma comunidade acolhedora enquanto 
            compartilho minha jornada competitiva e momentos de pura diversão.
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
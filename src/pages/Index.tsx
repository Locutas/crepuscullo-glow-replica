import { useState } from 'react';
import Header from '@/components/Header';
import Avatar from '@/components/Avatar';
import SocialLinks from '@/components/SocialLinks';
import FallingPetals from '@/components/FallingPetals';
import AudioPlayer from '@/components/AudioPlayer';
import EntryOverlay from '@/components/EntryOverlay';

const Index = () => {
  const [hasEntered, setHasEntered] = useState(false);
  const avatarUrl = "https://i.imgur.com/cwev071.gif";

  return (
    <>
      {!hasEntered && <EntryOverlay onEnter={() => setHasEntered(true)} />}
      
      <div className={`min-h-screen bg-background relative overflow-hidden transition-opacity duration-1000 ${hasEntered ? 'opacity-100' : 'opacity-0'}`}>
        <FallingPetals />
        <Header />
        
        <main className="relative z-10 pt-32 pb-16 px-6 flex flex-col items-center justify-center min-h-screen">
          <div className="text-center max-w-2xl flex flex-col items-center">
            {/* Avatar */}
            <Avatar 
              imageUrl={avatarUrl}
              alt="Crepuscullo Avatar" 
            />
            
            {/* Nome com fonte Space Grotesk estilo Alexys */}
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-[6px] uppercase font-['Space_Grotesk']">
              CREPUSCULLO
            </h1>

            {/* Descrição */}
            <p className="text-white/40 text-[13px] mb-10 leading-relaxed max-w-[500px] uppercase tracking-[1px] font-medium">
              Olá! Sou a Crepuscullo, mas você pode me chamar de Bella. Sou streamer de VALORANT (e às vezes, outros joguinhos legais).
            </p>
            
            {/* Social Links */}
            <SocialLinks />
          </div>
        </main>
        
        <AudioPlayer />
      </div>
    </>
  );
};

export default Index;
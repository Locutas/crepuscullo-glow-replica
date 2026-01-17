import { MapPin } from 'lucide-react';
import Header from '@/components/Header';
import Avatar from '@/components/Avatar';
import SocialLinks from '@/components/SocialLinks';
import ValorantStats from '@/components/ValorantStats';
import FallingPetals from '@/components/FallingPetals';
import AudioPlayer from '@/components/AudioPlayer';
import avatarImg from '@/assets/avatar.png';

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <FallingPetals />
      <Header />
      
      <main className="relative z-10 pt-32 pb-16 px-6 flex flex-col items-center justify-center min-h-screen">
        <div className="text-center">
          {/* Avatar */}
          <Avatar 
            imageUrl={avatarImg}
            alt="Crepuscullo Avatar" 
          />
          
          {/* Name */}
          <h1 className="text-5xl md:text-6xl font-bold text-foreground text-glow mb-3 tracking-wider">
            CREPUSCULLO
          </h1>
          
          {/* Location */}
          <div className="flex items-center justify-center gap-1.5 text-muted-foreground mb-6">
            <MapPin className="w-4 h-4" />
            <span className="text-sm">SC</span>
          </div>
          
          {/* Social Links */}
          <SocialLinks />
          
          {/* Valorant Stats */}
          <ValorantStats />
        </div>
      </main>
      
      <AudioPlayer />
    </div>
  );
};

export default Index;

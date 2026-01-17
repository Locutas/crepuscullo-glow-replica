import { MapPin } from 'lucide-react';
import Header from '@/components/Header';
import Avatar from '@/components/Avatar';
import SocialLinks from '@/components/SocialLinks';
import ValorantStats from '@/components/ValorantStats';
import FloatingParticles from '@/components/FloatingParticles';
import AudioPlayer from '@/components/AudioPlayer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <FloatingParticles />
      <Header />
      
      <main className="relative z-10 pt-24 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Avatar */}
          <Avatar 
            imageUrl="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop" 
            alt="Crepuscullo Avatar" 
          />
          
          {/* Name */}
          <h1 className="text-5xl font-bold text-foreground text-glow mb-2 tracking-tight">
            CREPUSCULLO
          </h1>
          
          {/* Location */}
          <div className="flex items-center justify-center gap-1 text-muted-foreground mb-6">
            <MapPin className="w-4 h-4" />
            <span className="text-sm">BR</span>
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

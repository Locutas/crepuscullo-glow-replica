import { cn } from '@/lib/utils';
import twitchIcon from '@/assets/twitch.png';
import instagramIcon from '@/assets/instagram.png';
import twitterIcon from '@/assets/twitter.png';
import discordIcon from '@/assets/discord.png';
import riotIcon from '@/assets/riot.png';

interface SocialLink {
  icon: string;
  url: string;
  label: string;
  hoverColor: string;
  shadowColor: string;
}

const SocialLinks = () => {
  const socialLinks: SocialLink[] = [
    { 
      icon: twitchIcon, 
      url: '#', 
      label: 'Twitch', 
      hoverColor: 'hover:bg-[#9146FF]/20 hover:border-[#9146FF]/50',
      shadowColor: 'group-hover:drop-shadow-[0_0_8px_rgba(145,70,255,0.6)]'
    },
    { 
      icon: instagramIcon, 
      url: '#', 
      label: 'Instagram', 
      hoverColor: 'hover:bg-[#E4405F]/20 hover:border-[#E4405F]/50',
      shadowColor: 'group-hover:drop-shadow-[0_0_8px_rgba(228,64,95,0.6)]'
    },
    { 
      icon: twitterIcon, 
      url: '#', 
      label: 'Twitter', 
      hoverColor: 'hover:bg-white/10 hover:border-white/30',
      shadowColor: 'group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]'
    },
    { 
      icon: discordIcon, 
      url: '#', 
      label: 'Discord', 
      hoverColor: 'hover:bg-[#5865F2]/20 hover:border-[#5865F2]/50',
      shadowColor: 'group-hover:drop-shadow-[0_0_8px_rgba(88,101,242,0.6)]'
    },
    { 
      icon: riotIcon, 
      url: '#', 
      label: 'Riot Games', 
      hoverColor: 'hover:bg-[#EB0029]/20 hover:border-[#EB0029]/50',
      shadowColor: 'group-hover:drop-shadow-[0_0_8px_rgba(235,0,41,0.6)]'
    },
  ];

  return (
    <div className="flex items-center justify-center gap-4">
      {socialLinks.map((link, index) => (
        <a
          key={index}
          href={link.url}
          aria-label={link.label}
          className={cn(
            "w-12 h-12 rounded-full bg-secondary/50 border border-white/5 flex items-center justify-center transition-all duration-300 hover:scale-110 group",
            link.hoverColor
          )}
        >
          <img 
            src={link.icon} 
            alt={link.label}
            className={cn(
              "w-5 h-5 object-contain transition-all duration-300 grayscale group-hover:grayscale-0",
              link.shadowColor
            )}
          />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
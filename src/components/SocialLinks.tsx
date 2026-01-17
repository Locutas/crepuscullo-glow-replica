import twitchIcon from '@/assets/twitch.png';
import instagramIcon from '@/assets/instagram.png';
import twitterIcon from '@/assets/twitter.png';
import discordIcon from '@/assets/discord.png';
import riotIcon from '@/assets/riot.png';

interface SocialLink {
  icon: string;
  url: string;
  label: string;
}

const SocialLinks = () => {
  const socialLinks: SocialLink[] = [
    { icon: twitchIcon, url: '#', label: 'Twitch' },
    { icon: instagramIcon, url: '#', label: 'Instagram' },
    { icon: twitterIcon, url: '#', label: 'Twitter' },
    { icon: discordIcon, url: '#', label: 'Discord' },
    { icon: riotIcon, url: '#', label: 'Riot Games' },
  ];

  return (
    <div className="flex items-center justify-center gap-4">
      {socialLinks.map((link, index) => (
        <a
          key={index}
          href={link.url}
          aria-label={link.label}
          className="w-12 h-12 rounded-full bg-secondary/50 border border-white/5 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-primary/20 hover:border-primary/50 group"
        >
          <img 
            src={link.icon} 
            alt={link.label}
            className="w-5 h-5 object-contain transition-transform group-hover:scale-110"
          />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
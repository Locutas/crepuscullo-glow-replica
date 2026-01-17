import { Twitch, Instagram, Twitter, MessageCircle, Gamepad2 } from 'lucide-react';

interface SocialLink {
  icon: React.ReactNode;
  url: string;
  label: string;
}

const SocialLinks = () => {
  const socialLinks: SocialLink[] = [
    { icon: <Twitch className="w-5 h-5" />, url: '#', label: 'Twitch' },
    { icon: <Instagram className="w-5 h-5" />, url: '#', label: 'Instagram' },
    { icon: <Twitter className="w-5 h-5" />, url: '#', label: 'Twitter' },
    { icon: <MessageCircle className="w-5 h-5" />, url: '#', label: 'Discord' },
    { icon: <Gamepad2 className="w-5 h-5" />, url: '#', label: 'Riot Games' },
  ];

  return (
    <div className="flex items-center justify-center gap-4 mt-6">
      {socialLinks.map((link, index) => (
        <a
          key={index}
          href={link.url}
          aria-label={link.label}
          className="w-12 h-12 rounded-full bg-secondary/50 border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary hover:bg-primary/10 transition-all duration-300"
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;

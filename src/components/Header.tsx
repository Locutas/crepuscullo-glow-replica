import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';

const Header = () => {
  const location = useLocation();

  const links = [
    { name: 'Início', path: '/' },
    { name: 'Setup', path: '/setup' },
    { name: 'Contato', path: '/contato' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo/Name Placeholder */}
        <Link to="/" className="text-xl font-bold tracking-tighter text-foreground hover:text-primary transition-colors">
          CREPUSCULLO
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-8">
          {links.map((link) => (
            <Link 
              key={link.path}
              to={link.path}
              className={cn(
                "text-sm font-medium transition-all duration-300 relative group",
                location.pathname === link.path 
                  ? "text-primary" 
                  : "text-white/70 hover:text-foreground"
              )}
            >
              {link.name}
              <span className={cn(
                "absolute -bottom-1 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full",
                location.pathname === link.path ? "w-full" : "w-0"
              )} />
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';

const Header = () => {
  const location = useLocation();

  const links = [
    { name: 'Início', path: '/' },
    { name: 'Setup', path: '/setup' },
    { name: 'VALORANT', path: '/valorant' },
  ];

  return (
    <header className="fixed top-8 left-0 right-0 z-50 flex justify-center px-6">
      <nav className="bg-[#0a0a0a]/40 backdrop-blur-xl border border-white/[0.05] px-6 py-2 rounded-full flex items-center gap-1 shadow-2xl">
        {links.map((link) => (
          <Link 
            key={link.path}
            to={link.path}
            className={cn(
              "px-4 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-[2px] transition-all duration-300",
              location.pathname === link.path 
                ? "text-white bg-white/10" 
                : "text-white/40 hover:text-white/80"
            )}
          >
            {link.name}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;
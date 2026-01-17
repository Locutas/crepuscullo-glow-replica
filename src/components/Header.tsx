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
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="mx-auto max-w-fit mt-6 px-8 py-3 bg-black/40 backdrop-blur-md border border-white/5 rounded-full">
        <div className="flex items-center gap-10">
          {links.map((link) => (
            <Link 
              key={link.path}
              to={link.path}
              className={cn(
                "text-[13px] font-semibold uppercase tracking-[2px] transition-all duration-300 hover:text-primary",
                location.pathname === link.path 
                  ? "text-primary drop-shadow-[0_0_8px_rgba(255,70,85,0.5)]" 
                  : "text-white/60"
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;
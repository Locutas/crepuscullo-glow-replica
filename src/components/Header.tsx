import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm">
      <nav className="container mx-auto px-6 py-5">
        <div className="flex items-center justify-center gap-10">
          <Link 
            to="/"
            className={`text-sm font-medium transition-colors hover:text-foreground ${
              location.pathname === '/' ? 'text-foreground' : 'text-muted-foreground'
            }`}
          >
            Início
          </Link>
          <Link 
            to="/setup"
            className={`text-sm font-medium transition-colors hover:text-foreground ${
              location.pathname === '/setup' ? 'text-foreground' : 'text-muted-foreground'
            }`}
          >
            Setup
          </Link>
          <Link 
            to="/contato"
            className={`text-sm font-medium transition-colors hover:text-foreground ${
              location.pathname === '/contato' ? 'text-foreground' : 'text-muted-foreground'
            }`}
          >
            Contato
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;

import { useState } from 'react';

const Header = () => {
  const [activeLink, setActiveLink] = useState('');

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border/50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-center gap-8">
          <a 
            href="#setup" 
            onClick={() => setActiveLink('setup')}
            className={`text-sm font-medium transition-colors hover:text-primary ${
              activeLink === 'setup' ? 'text-primary' : 'text-foreground'
            }`}
          >
            Setup
          </a>
          <a 
            href="#contato" 
            onClick={() => setActiveLink('contato')}
            className={`text-sm font-medium transition-colors hover:text-primary ${
              activeLink === 'contato' ? 'text-primary' : 'text-foreground'
            }`}
          >
            Contato
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;

import { useEffect, useRef } from 'react';

const FallingPetals = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const createPetal = () => {
      const petal = document.createElement('div');
      petal.className = 'petal';
      petal.style.left = Math.random() * 100 + '%';
      petal.style.animationDuration = Math.random() * 5 + 8 + 's';
      petal.style.animationDelay = Math.random() * 2 + 's';
      petal.style.opacity = (Math.random() * 0.4 + 0.1).toString();
      
      // Random size
      const size = Math.random() * 8 + 4;
      petal.style.width = size + 'px';
      petal.style.height = size + 'px';
      
      container.appendChild(petal);

      setTimeout(() => {
        petal.remove();
      }, 15000);
    };

    // Create initial petals
    for (let i = 0; i < 30; i++) {
      setTimeout(createPetal, i * 300);
    }

    // Continue creating petals
    const interval = setInterval(createPetal, 500);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 pointer-events-none overflow-hidden z-0"
    />
  );
};

export default FallingPetals;

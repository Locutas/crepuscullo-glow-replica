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
      petal.style.animationDuration = `${Math.random() * 8 + 10}s, ${Math.random() * 2 + 2}s`;
      petal.style.animationDelay = `${Math.random() * 5}s, 0s`;
      
      const size = Math.random() * 6 + 4;
      petal.style.width = size + 'px';
      petal.style.height = size + 'px';
      
      container.appendChild(petal);

      setTimeout(() => {
        petal.remove();
      }, 20000);
    };

    // Create initial petals
    for (let i = 0; i < 40; i++) {
      setTimeout(createPetal, i * 200);
    }

    // Continue creating petals
    const interval = setInterval(createPetal, 400);

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

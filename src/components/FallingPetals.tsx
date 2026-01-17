import { useEffect, useRef } from 'react';

const FallingPetals = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const createPetal = () => {
      const petal = document.createElement('div');
      petal.className = 'petal';
      
      const startX = Math.random() * 110 - 5;
      petal.style.left = startX + '%';
      
      const duration = Math.random() * 8 + 12; // Mais devagar ainda
      petal.style.animationDuration = `${duration}s`;
      
      const size = Math.random() * 6 + 4; // Um pouco menores
      petal.style.width = size + 'px';
      petal.style.height = size + 'px';
      
      petal.style.transform = `rotate(${Math.random() * 360}deg)`;
      petal.style.opacity = (Math.random() * 0.3 + 0.2).toString();

      container.appendChild(petal);

      setTimeout(() => {
        petal.remove();
      }, duration * 1000);
    };

    // Intervalo de geração bem mais lento para poucas pétalas
    const interval = setInterval(createPetal, 1200);

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
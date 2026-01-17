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
      
      // Velocidade reduzida: de 10s a 18s
      const duration = Math.random() * 8 + 10;
      petal.style.animationDuration = `${duration}s`;
      
      const size = Math.random() * 8 + 6;
      petal.style.width = size + 'px';
      petal.style.height = size + 'px';
      
      petal.style.transform = `rotate(${Math.random() * 360}deg)`;
      petal.style.opacity = (Math.random() * 0.4 + 0.3).toString();

      container.appendChild(petal);

      setTimeout(() => {
        petal.remove();
      }, duration * 1000);
    };

    // Intervalo de geração mais lento para combinar com a velocidade
    const interval = setInterval(createPetal, 250);

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
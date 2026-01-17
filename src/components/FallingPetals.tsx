import { useEffect, useRef } from 'react';

const FallingPetals = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const colors = [
      '#ff4655', // Vermelho Valorant
      '#ff0000', // Vermelho Puro
      '#8b0000', // Vermelho Escuro
      '#4b0000', // Vermelho Quase Preto
      '#b22222', // Vermelho Tijolo
    ];

    const createPetal = () => {
      const petal = document.createElement('div');
      petal.className = 'petal';
      
      const size = Math.random() * 12 + 6;
      const color = colors[Math.floor(Math.random() * colors.length)];
      
      petal.style.width = `${size}px`;
      petal.style.height = `${size}px`;
      petal.style.backgroundColor = color;
      
      const startX = Math.random() * 100;
      petal.style.left = `${startX}%`;
      
      const duration = Math.random() * 5 + 7;
      const delay = Math.random() * 5;
      
      petal.style.animation = `fall ${duration}s linear ${delay}s infinite`;
      petal.style.opacity = (Math.random() * 0.4 + 0.3).toString();
      
      container.appendChild(petal);

      setTimeout(() => {
        petal.remove();
      }, (duration + delay) * 1000);
    };

    const interval = setInterval(createPetal, 400);

    for (let i = 0; i < 15; i++) {
      createPetal();
    }

    return () => clearInterval(interval);
  }, []);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 pointer-events-none overflow-hidden z-0"
    />
  );
};

export default FallingPetals;
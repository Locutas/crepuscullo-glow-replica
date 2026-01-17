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
      
      const size = Math.random() * 10 + 5; // Tamanhos um pouco menores para leveza
      const color = colors[Math.floor(Math.random() * colors.length)];
      
      petal.style.width = `${size}px`;
      petal.style.height = `${size}px`;
      petal.style.backgroundColor = color;
      
      const startX = Math.random() * 100;
      petal.style.left = `${startX}%`;
      
      // Aumentado para 12s a 20s para uma queda bem mais lenta
      const duration = Math.random() * 8 + 12; 
      const delay = Math.random() * 5;
      
      petal.style.animation = `fall ${duration}s linear ${delay}s infinite`;
      petal.style.opacity = (Math.random() * 0.3 + 0.2).toString(); // Mais sutis
      
      container.appendChild(petal);

      setTimeout(() => {
        petal.remove();
      }, (duration + delay) * 1000);
    };

    // Reduzida a frequência para combinar com a velocidade mais lenta
    const interval = setInterval(createPetal, 600);

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
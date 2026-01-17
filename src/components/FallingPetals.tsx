import { useEffect, useRef } from 'react';

const FallingPetals = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const colors = [
      '#ff4655', // Vermelho Valorant
      '#ff758f', // Rosa médio
      '#ffb7c5', // Rosa Sakura claro
      '#c9184a', // Carmesim
    ];

    const createPetal = () => {
      const petal = document.createElement('div');
      petal.className = 'petal';
      
      const size = Math.random() * 12 + 6; // Tamanhos variados entre 6px e 18px
      const color = colors[Math.floor(Math.random() * colors.length)];
      
      petal.style.width = `${size}px`;
      petal.style.height = `${size}px`;
      petal.style.backgroundColor = color;
      
      // Posição horizontal inicial
      const startX = Math.random() * 100;
      petal.style.left = `${startX}%`;
      
      // Configurações de animação
      const duration = Math.random() * 5 + 7; // Entre 7s e 12s para uma queda mais natural
      const delay = Math.random() * 5;
      
      petal.style.animation = `fall ${duration}s linear ${delay}s infinite`;
      petal.style.opacity = (Math.random() * 0.4 + 0.3).toString(); // Opacidade entre 0.3 e 0.7
      
      container.appendChild(petal);

      // Limpeza para evitar acúmulo de elementos no DOM
      setTimeout(() => {
        petal.remove();
      }, (duration + delay) * 1000);
    };

    // Frequência maior de pétalas (a cada 400ms)
    const interval = setInterval(createPetal, 400);

    // Criar algumas pétalas iniciais para não começar vazio
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
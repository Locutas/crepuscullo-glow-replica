import { useEffect, useRef } from 'react';

const FallingPetals = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Cores de vermelho mais escuras e profundas
    const colors = [
      '#4a0404', // Vermelho Sangue Escuro
      '#2b0202', // Quase Preto avermelhado
      '#660000', // Vinho
      '#3d0000', // Marrom avermelhado
      '#1a0000', // Vermelho Sombra
      '#2d1618', // Tom de fundo do Badge
    ];

    const createPetal = () => {
      if (!container) return;
      
      const petal = document.createElement('div');
      petal.className = 'petal';
      
      const size = Math.random() * 8 + 4; // Um pouco menores para parecerem mais pesadas/escuras
      const color = colors[Math.floor(Math.random() * colors.length)];
      
      petal.style.width = `${size}px`;
      petal.style.height = `${size}px`;
      petal.style.backgroundColor = color;
      
      const startX = Math.random() * 100;
      petal.style.left = `${startX}%`;
      
      const duration = Math.random() * 10 + 15; // Queda bem lenta
      const delay = Math.random() * 2;
      
      petal.style.animation = `fall ${duration}s linear ${delay}s infinite`;
      petal.style.opacity = (Math.random() * 0.4 + 0.1).toString();
      
      container.appendChild(petal);

      setTimeout(() => {
        petal.remove();
      }, (duration + delay) * 1000);
    };

    // Função para gerar rajadas aleatórias
    let timeoutId: ReturnType<typeof setTimeout>;
    
    const spawnBurst = () => {
      // Cria entre 1 e 4 pétalas de uma vez
      const count = Math.floor(Math.random() * 4) + 1;
      for (let i = 0; i < count; i++) {
        createPetal();
      }
      
      // Define o tempo para a próxima rajada (entre 0.5s e 3s)
      const nextBurst = Math.random() * 2500 + 500;
      timeoutId = setTimeout(spawnBurst, nextBurst);
    };

    spawnBurst();

    // Pétalas iniciais para não começar vazio
    for (let i = 0; i < 10; i++) {
      createPetal();
    }

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 pointer-events-none overflow-hidden z-0"
    />
  );
};

export default FallingPetals;
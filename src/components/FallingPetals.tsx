import { useEffect, useRef } from 'react';

const FallingPetals = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const createPetal = () => {
      const petal = document.createElement('div');
      petal.className = 'petal';
      
      const startX = Math.random() * 110 - 5; // Start from -5% to 105% width
      petal.style.left = startX + '%';
      
      // Speed variation (faster like the reference site)
      const duration = Math.random() * 5 + 6; // 6s to 11s
      petal.style.animationDuration = `${duration}s`;
      
      // Size variation
      const size = Math.random() * 8 + 6; // 6px to 14px
      petal.style.width = size + 'px';
      petal.style.height = size + 'px';
      
      // Random rotation
      petal.style.transform = `rotate(${Math.random() * 360}deg)`;
      
      // Opacity variation
      petal.style.opacity = (Math.random() * 0.4 + 0.4).toString();

      container.appendChild(petal);

      // Remove after animation finishes
      setTimeout(() => {
        petal.remove();
      }, duration * 1000);
    };

    // Initial burst
    for (let i = 0; i < 50; i++) {
      setTimeout(createPetal, Math.random() * 3000);
    }

    // High frequency generation to match density
    const interval = setInterval(createPetal, 150);

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
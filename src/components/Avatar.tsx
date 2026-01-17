"use client";

import React from 'react';

interface AvatarProps {
  imageUrl: string;
  alt: string;
}

const Avatar = ({ imageUrl, alt }: AvatarProps) => {
  return (
    <div className="relative w-56 h-56 mx-auto mb-10 flex items-center justify-center">
      {/* Brilho de Fundo (Glow Ambiental) - Ainda mais sutil */}
      <div className="absolute w-48 h-48 bg-primary/5 blur-[70px] rounded-full pointer-events-none" />
      
      {/* Borda Vermelha Quase Preta */}
      <div className="relative w-44 h-44 rounded-full border-[3px] border-[#1a0000] bg-black/20 flex items-center justify-center overflow-visible shadow-[0_0_15px_rgba(26,0,0,0.6)]">
        
        {/* Imagem que Flutua - Preenchendo quase 100% do espaço interno */}
        <div className="w-[99%] h-[99%] rounded-full overflow-hidden animate-float">
          <img 
            src={imageUrl} 
            alt={alt}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Sombra dinâmica abaixo do avatar */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-24 h-5 bg-black/80 blur-xl rounded-[100%] animate-shadow" />
    </div>
  );
};

export default Avatar;
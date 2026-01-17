"use client";

import React from 'react';

interface AvatarProps {
  imageUrl: string;
  alt: string;
}

const Avatar = ({ imageUrl, alt }: AvatarProps) => {
  return (
    <div className="relative w-56 h-56 mx-auto mb-10 flex items-center justify-center">
      {/* Brilho de Fundo (Glow Ambiental) */}
      <div className="absolute w-48 h-48 bg-primary/20 blur-[60px] rounded-full pointer-events-none" />
      
      {/* Borda Vermelha Vibrante com Brilho */}
      <div className="relative w-44 h-44 rounded-full border-[3px] border-primary bg-black/20 flex items-center justify-center overflow-visible shadow-[0_0_25px_rgba(255,70,85,0.4)]">
        
        {/* Imagem que Flutua */}
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
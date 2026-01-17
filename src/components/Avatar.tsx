"use client";

import React from 'react';

interface AvatarProps {
  imageUrl: string;
  alt: string;
}

const Avatar = ({ imageUrl, alt }: AvatarProps) => {
  return (
    <div className="relative w-56 h-56 mx-auto mb-10 flex items-center justify-center">
      {/* 1. Círculo de Brilho Vermelho de Fundo (Glow difuso) */}
      <div className="absolute w-40 h-40 bg-primary/20 rounded-full blur-[60px] animate-pulse" />

      {/* 2. Avatar Flutuante (Camada de baixo) */}
      <div className="relative w-44 h-44 animate-float z-10 flex items-center justify-center">
        <div className="w-36 h-36 rounded-full overflow-hidden">
          <img 
            src={imageUrl} 
            alt={alt}
            className="w-full h-full object-cover rounded-full"
          />
        </div>
      </div>

      {/* 3. Moldura Vermelha Estática (Camada de cima - Sobreposição) */}
      <div className="absolute w-44 h-44 rounded-full border-[3px] border-primary/40 bg-transparent backdrop-blur-[1px] shadow-[0_0_25px_rgba(255,70,85,0.3),inset_0_0_15px_rgba(255,70,85,0.2)] z-20 pointer-events-none">
        {/* Brilho extra na borda */}
        <div className="absolute inset-0 rounded-full border border-primary/20" />
      </div>

      {/* 4. Sombra dinâmica projetada no fundo */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-24 h-6 bg-black/60 blur-xl rounded-[100%] animate-shadow" />
    </div>
  );
};

export default Avatar;
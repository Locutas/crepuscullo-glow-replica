"use client";

import React from 'react';

interface AvatarProps {
  imageUrl: string;
  alt: string;
}

const Avatar = ({ imageUrl, alt }: AvatarProps) => {
  return (
    <div className="relative w-56 h-56 mx-auto mb-10 flex items-center justify-center">
      {/* Brilho Vermelho de Fundo (Glow Ambiental) */}
      <div className="absolute w-44 h-44 bg-primary/20 blur-[50px] rounded-full pointer-events-none" />
      
      {/* Container Principal do Avatar - Estilo Glassmorphism Circular */}
      <div className="relative w-44 h-44 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md p-2 animate-float z-10 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
        {/* Borda Interna para dar profundidade */}
        <div className="w-full h-full rounded-full border border-white/5 overflow-hidden flex items-center justify-center bg-black/20">
          <img 
            src={imageUrl} 
            alt={alt}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Sombra dinâmica projetada no fundo */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-24 h-5 bg-black/80 blur-xl rounded-[100%] animate-shadow" />
    </div>
  );
};

export default Avatar;
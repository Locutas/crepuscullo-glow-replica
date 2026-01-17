"use client";

import React from 'react';

interface AvatarProps {
  imageUrl: string;
  alt: string;
}

const Avatar = ({ imageUrl, alt }: AvatarProps) => {
  return (
    <div className="relative w-56 h-56 mx-auto mb-10 flex items-center justify-center">
      {/* 1. Elemento de Fundo Estático (A borda fixa com brilho) */}
      <div className="absolute w-40 h-40 rounded-full border-2 border-primary/60 bg-black/20 backdrop-blur-sm shadow-[0_0_50px_rgba(255,70,85,0.3)] flex items-center justify-center">
        {/* Glow interno da borda */}
        <div className="absolute inset-0 rounded-full shadow-[inset_0_0_20px_rgba(255,70,85,0.2)]" />
      </div>

      {/* 2. Avatar Flutuante (Sem borda própria) */}
      <div className="relative w-44 h-44 animate-float z-10 flex items-center justify-center">
        <div className="w-40 h-40 rounded-full overflow-hidden">
          <img 
            src={imageUrl} 
            alt={alt}
            className="w-full h-full object-cover rounded-full"
          />
        </div>
      </div>

      {/* 3. Sombra dinâmica projetada na borda de fundo */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-24 h-6 bg-black/60 blur-xl rounded-[100%] animate-shadow" />
    </div>
  );
};

export default Avatar;
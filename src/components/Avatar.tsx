"use client";

import React from 'react';

interface AvatarProps {
  imageUrl: string;
  alt: string;
}

const Avatar = ({ imageUrl, alt }: AvatarProps) => {
  return (
    <div className="relative w-56 h-56 mx-auto mb-10 flex items-center justify-center">
      {/* Efeito leve de vermelho em volta (Glow ambiental) */}
      <div className="absolute w-48 h-48 bg-primary/20 blur-[40px] rounded-full pointer-events-none animate-pulse" />
      
      {/* Container Circular com Borda */}
      <div className="relative w-44 h-44 rounded-full border-2 border-primary/30 p-1 bg-black/20 backdrop-blur-sm overflow-hidden animate-float z-10">
        <img 
          src={imageUrl} 
          alt={alt}
          className="w-full h-full object-cover rounded-full"
        />
      </div>

      {/* Sombra dinâmica projetada no fundo */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-24 h-6 bg-black/60 blur-xl rounded-[100%] animate-shadow" />
    </div>
  );
};

export default Avatar;
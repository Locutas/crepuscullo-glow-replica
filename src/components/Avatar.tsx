"use client";

import React from 'react';

interface AvatarProps {
  imageUrl: string;
  alt: string;
}

const Avatar = ({ imageUrl, alt }: AvatarProps) => {
  return (
    <div className="relative w-56 h-56 mx-auto mb-10 flex items-center justify-center">
      {/* Brilho de fundo (Glow ambiental) */}
      <div className="absolute w-48 h-48 bg-primary/20 blur-[50px] rounded-full pointer-events-none" />
      
      {/* Container Circular com Borda Estilo 'Alexys' */}
      <div className="relative w-44 h-44 rounded-full border-4 border-white/5 p-1.5 bg-white/5 backdrop-blur-md overflow-hidden animate-float z-10 shadow-2xl">
        <div className="w-full h-full rounded-full overflow-hidden border border-white/10">
          <img 
            src={imageUrl} 
            alt={alt}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Sombra dinâmica projetada no fundo */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-28 h-6 bg-black/60 blur-xl rounded-[100%] animate-shadow" />
    </div>
  );
};

export default Avatar;
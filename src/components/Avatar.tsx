"use client";

import React from 'react';

interface AvatarProps {
  imageUrl: string;
  alt: string;
}

const Avatar = ({ imageUrl, alt }: AvatarProps) => {
  return (
    <div className="relative w-56 h-56 mx-auto mb-10 flex items-center justify-center">
      {/* Brilho Ambiental Suave */}
      <div className="absolute w-40 h-40 bg-primary/10 blur-[60px] rounded-full pointer-events-none" />
      <div className="absolute w-20 h-20 bg-primary/20 blur-[30px] rounded-full pointer-events-none" />

      {/* Avatar Flutuante (Sem borda circular rígida) */}
      <div className="relative w-44 h-44 animate-float z-10 flex items-center justify-center">
        <img 
          src={imageUrl} 
          alt={alt}
          className="w-full h-full object-contain"
        />
      </div>

      {/* Sombra dinâmica projetada no fundo */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-24 h-6 bg-black/60 blur-xl rounded-[100%] animate-shadow" />
    </div>
  );
};

export default Avatar;
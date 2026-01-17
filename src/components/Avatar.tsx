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
      <div className="absolute w-48 h-48 bg-primary/20 blur-[50px] rounded-full pointer-events-none" />
      
      {/* Borda Vermelha Estática - Agora mais justa ao avatar */}
      <div className="relative w-44 h-44 rounded-full border-2 border-primary bg-black/10 flex items-center justify-center overflow-visible shadow-[0_0_25px_rgba(255,70,85,0.4)]">
        
        {/* Imagem que Flutua - Aumentada para preencher quase toda a borda */}
        <div className="w-[96%] h-[96%] rounded-full overflow-hidden animate-float">
          <img 
            src={imageUrl} 
            alt={alt}
            className="w-full h-full object-cover shadow-2xl"
          />
        </div>
      </div>

      {/* Sombra dinâmica que acompanha a flutuação da imagem */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-24 h-5 bg-black/80 blur-xl rounded-[100%] animate-shadow" />
    </div>
  );
};

export default Avatar;
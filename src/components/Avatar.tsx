interface AvatarProps {
  imageUrl: string;
  alt: string;
}

const Avatar = ({ imageUrl, alt }: AvatarProps) => {
  return (
    <div className="relative w-48 h-48 mx-auto mb-14 flex items-center justify-center">
      {/* Círculo Vermelho de Fundo (Glow) */}
      <div className="absolute w-32 h-32 bg-primary/40 rounded-full blur-[60px] animate-pulse" />
      
      {/* Sombra projetada no 'chão' que reage à flutuação */}
      <div className="absolute -bottom-4 left-1/2 w-24 h-4 bg-black/50 blur-xl rounded-[100%] animate-shadow" />
      
      {/* Container do Avatar Flutuante */}
      <div className="relative w-40 h-40 rounded-full p-[2px] bg-white/5 backdrop-blur-sm border border-white/10 shadow-2xl animate-float overflow-hidden group">
        {/* Borda interna escura e sutil */}
        <div className="absolute inset-0 rounded-full border border-black/40 pointer-events-none z-10" />
        
        {/* Imagem do Avatar */}
        <img 
          src={imageUrl} 
          alt={alt}
          className="w-full h-full object-cover rounded-full transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Overlay de brilho sutil */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none" />
      </div>
    </div>
  );
};

export default Avatar;
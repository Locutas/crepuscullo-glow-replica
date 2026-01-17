interface AvatarProps {
  imageUrl: string;
  alt: string;
}

const Avatar = ({ imageUrl, alt }: AvatarProps) => {
  return (
    <div className="relative w-44 h-44 mx-auto mb-12">
      {/* Sombra projetada no chão que escala com a flutuação */}
      <div className="absolute -bottom-6 left-1/2 w-28 h-5 bg-black/60 blur-xl rounded-[100%] animate-shadow" />
      
      {/* Container do Avatar com a animação de flutuação */}
      <div className="relative w-full h-full rounded-full overflow-hidden bg-secondary/40 backdrop-blur-sm border border-white/10 flex items-center justify-center animate-float group">
        {/* Brilho interno sutil */}
        <div className="absolute inset-0 rounded-full border border-white/5 pointer-events-none" />
        
        <img 
          src={imageUrl} 
          alt={alt}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>
    </div>
  );
};

export default Avatar;
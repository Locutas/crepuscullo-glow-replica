interface AvatarProps {
  imageUrl: string;
  alt: string;
}

const Avatar = ({ imageUrl, alt }: AvatarProps) => {
  return (
    <div className="relative w-40 h-40 mx-auto mb-10 group animate-float">
      {/* Sombra projetada abaixo */}
      <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-4 bg-black/40 blur-xl rounded-[100%] transition-transform duration-500 group-hover:scale-110" />
      
      {/* Brilho suave ambiental */}
      <div className="absolute inset-0 rounded-full bg-white/5 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Container do Avatar */}
      <div className="relative w-full h-full rounded-full overflow-hidden border border-white/10 bg-secondary/80 flex items-center justify-center transition-all duration-500 group-hover:border-white/30 group-hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]">
        <img 
          src={imageUrl} 
          alt={alt}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
    </div>
  );
};

export default Avatar;
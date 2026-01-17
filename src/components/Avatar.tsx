interface AvatarProps {
  imageUrl: string;
  alt: string;
}

const Avatar = ({ imageUrl, alt }: AvatarProps) => {
  return (
    <div className="relative w-44 h-44 mx-auto mb-10 group">
      {/* Container simples sem brilho externo */}
      <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white/10 bg-secondary flex items-center justify-center">
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
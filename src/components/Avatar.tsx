interface AvatarProps {
  imageUrl: string;
  alt: string;
}

const Avatar = ({ imageUrl, alt }: AvatarProps) => {
  return (
    <div className="relative w-44 h-44 mx-auto mb-10 group">
      {/* Intense Ambient Glow */}
      <div className="absolute inset-0 rounded-full bg-primary/30 blur-[60px] scale-125 transition-transform duration-500 group-hover:scale-150" />
      
      {/* Outer Border Glow */}
      <div className="absolute inset-0 rounded-full p-[2px] bg-gradient-to-tr from-primary via-primary/50 to-transparent animate-spin-slow" />
      
      {/* Avatar Container */}
      <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-primary/20 bg-secondary/80 flex items-center justify-center">
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
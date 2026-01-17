interface AvatarProps {
  imageUrl: string;
  alt: string;
}

const Avatar = ({ imageUrl, alt }: AvatarProps) => {
  return (
    <div className="relative w-40 h-40 mx-auto mb-8">
      {/* Glow effect */}
      <div className="absolute inset-0 rounded-full bg-primary/40 blur-3xl scale-150" />
      {/* Avatar image */}
      <div className="relative w-full h-full rounded-full overflow-hidden glow-red">
        <img 
          src={imageUrl} 
          alt={alt}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Avatar;

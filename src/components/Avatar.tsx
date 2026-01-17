interface AvatarProps {
  imageUrl: string;
  alt: string;
}

const Avatar = ({ imageUrl, alt }: AvatarProps) => {
  return (
    <div className="relative w-40 h-40 mx-auto mb-6">
      <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl" />
      <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-primary/50 glow-red">
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

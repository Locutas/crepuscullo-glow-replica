interface AvatarProps {
  imageUrl: string;
  alt: string;
}

const Avatar = ({ imageUrl, alt }: AvatarProps) => {
  return (
    <div className="relative w-36 h-36 mx-auto mb-6">
      <div className="absolute inset-0 rounded-full bg-primary/30 blur-2xl scale-125" />
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

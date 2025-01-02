interface CentralEducationImageProps {
  className?: string;
}

const CentralEducationImage = ({ className = "" }: CentralEducationImageProps) => {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100/50 to-green-100/50 rounded-full animate-pulse" />
      <img 
        src="/lovable-uploads/d4fffc11-49bb-4ceb-a907-39b309bcea48.png"
        alt="Education illustration"
        className="relative w-full h-full object-contain opacity-75"
      />
    </div>
  );
};

export default CentralEducationImage;
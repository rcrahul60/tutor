interface CentralEducationImageProps {
  className?: string;
}

const CentralEducationImage = ({ className = "" }: CentralEducationImageProps) => {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100/50 to-green-100/50 rounded-full animate-pulse" />
      <img 
        src="/lovable-uploads/3e46580c-d4d7-49e8-9df0-d6d5869f1979.png"
        alt="Education illustration"
        className="relative w-full h-full object-contain opacity-75"
      />
    </div>
  );
};

export default CentralEducationImage;
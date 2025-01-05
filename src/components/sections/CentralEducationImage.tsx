interface CentralEducationImageProps {
  className?: string;
}

const CentralEducationImage = ({ className = "" }: CentralEducationImageProps) => {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100/50 to-green-100/50 rounded-full animate-pulse" />
      <img 
        src="/lovable-uploads/9cfabade-0c25-488f-aa3f-9c1f416a4c64.png"
        alt="Education illustration"
        className="relative w-full h-full object-cover rounded-2xl"
      />
    </div>
  );
};

export default CentralEducationImage;
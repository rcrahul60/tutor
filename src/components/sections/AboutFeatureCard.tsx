import { LucideIcon } from "lucide-react";

interface AboutFeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  className?: string;
}

const AboutFeatureCard = ({ title, description, icon: Icon, className = "" }: AboutFeatureCardProps) => {
  // Split description into bullet points at each period
  const bulletPoints = description.split('.').filter(point => point.trim().length > 0);

  return (
    <div className={`bg-white/90 backdrop-blur-sm p-6 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 w-[450px] ${className}`}>
      <div className="flex flex-col items-start text-left space-y-4">
        <Icon className="w-8 h-8 text-blue-600" />
        <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
        <ul className="list-disc pl-4 space-y-2">
          {bulletPoints.map((point, index) => (
            <li key={index} className="text-gray-600 leading-relaxed">{point.trim()}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AboutFeatureCard;
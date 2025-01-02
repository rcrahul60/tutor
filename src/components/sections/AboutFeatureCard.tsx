import { LucideIcon } from "lucide-react";

interface AboutFeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  className?: string;
}

const AboutFeatureCard = ({ title, description, icon: Icon, className = "" }: AboutFeatureCardProps) => {
  return (
    <div className={`bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 ${className}`}>
      <div className="flex flex-col items-start text-left space-y-4">
        <Icon className="w-8 h-8 text-blue-600" />
        <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default AboutFeatureCard;
import Link from "next/link";
import {
  Apple,
  FileText,
  Activity,
  Stethoscope,
  AlertTriangle,
} from "lucide-react";
import {
  Card,
  CardTitle,
  CardHeader,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

const services = [
  {
    id: "symptom-checker",
    title: "Symptom Checker",
    description:
      "Get insights into your symptoms with AI-powered analysis and recommendations.",
    icon: Stethoscope,
    color: "bg-blue-500",
    hoverColor: "hover:bg-blue-600",
  },
  {
    id: "medical-report-analyzer",
    title: "Medical Report Analyzer",
    description:
      "Upload and analyze medical reports, lab results, and diagnostic images.",
    icon: FileText,
    color: "bg-purple-500",
    hoverColor: "hover:bg-purple-600",
  },
  {
    id: "nutrition-assistant",
    title: "Nutrition Assistant",
    description:
      "Get personalized nutrition advice and meal planning recommendations.",
    icon: Apple,
    color: "bg-green-500",
    hoverColor: "hover:bg-green-600",
  },
  {
    id: "health-tracker",
    title: "Health Tracker",
    description:
      "Track your health metrics and get insights into your wellness journey.",
    icon: Activity,
    color: "bg-orange-500",
    hoverColor: "hover:bg-orange-600",
  },
  {
    id: "emergency-guide",
    title: "Emergency Guide",
    description:
      "Get immediate guidance for medical emergencies and first aid procedures.",
    icon: AlertTriangle,
    color: "bg-red-500",
    hoverColor: "hover:bg-red-600",
  },
];

const Services = () => {
  return (
    <div className="mb-16" id="services">
      <h2 className="text-3xl font-bold text-center mb-12">
        Choose Your Health Service
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {services.map((service) => {
          const {
            id,
            title,
            description,
            icon: Icon,
            color,
            hoverColor,
          } = service;

          return (
            <Link href={`/chat/${id}`} key={id}>
              <Card className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer border-2 hover:border-primary/20">
                <CardHeader className="pb-4">
                  <div
                    className={cn(
                      "w-16 h-16 rounded-xl flex items-center justify-center mb-4 transition-colors",
                      color,
                      hoverColor
                    )}
                  >
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-semibold">
                    {title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {description}
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Services;

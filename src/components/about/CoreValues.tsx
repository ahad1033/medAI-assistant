import { Brain, Globe, Heart, Shield } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { StaggerContainer, StaggerItem } from "../animation/AnimationWrappers";

import AnimatedSection from "../animation/AnimatedSection";

const values = [
  {
    icon: Heart,
    title: "Patient-Centered Care",
    description:
      "Every feature we build puts the patient first, ensuring accessible and compassionate healthcare guidance.",
  },
  {
    icon: Shield,
    title: "Privacy & Security",
    description:
      "We maintain the highest standards of data protection and medical privacy compliance.",
  },
  {
    icon: Brain,
    title: "Scientific Rigor",
    description:
      "Our AI models are built on peer-reviewed research and validated medical knowledge.",
  },
  {
    icon: Globe,
    title: "Global Accessibility",
    description:
      "Making quality healthcare guidance available to everyone, regardless of location or background.",
  },
];

const CoreValues = () => {
  return (
    <AnimatedSection className="mb-16">
      <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
      <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {values.map((value, index) => (
          <StaggerItem delay={0.3 + index / 5} key={index}>
            <Card className="text-center p-6 border-2 hover:border-primary/20 transition-colors">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </AnimatedSection>
  );
};

export default CoreValues;

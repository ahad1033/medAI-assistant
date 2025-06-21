/* eslint-disable @next/next/no-img-element */
import {
  Card,
  CardTitle,
  CardHeader,
  CardContent,
  CardDescription,
} from "@/components/ui/card";

import { StaggerContainer, StaggerItem } from "../animation/AnimationWrappers";

import AnimatedSection from "../animation/AnimatedSection";

const teamMembers = [
  {
    name: "Dr. Sarah Mitchell",
    role: "Chief Medical Officer",
    description:
      "Board-certified physician with 15+ years in digital health and AI applications in medicine.",
    image:
      "https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    name: "Alex Chen",
    role: "CEO & Co-Founder",
    description:
      "Former Google AI researcher with expertise in healthcare technology and machine learning.",
    image:
      "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    name: "Dr. Maria Rodriguez",
    role: "Head of AI Research",
    description:
      "PhD in Biomedical Informatics, specializing in natural language processing for healthcare.",
    image:
      "https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    name: "James Thompson",
    role: "CTO",
    description:
      "Software architect with 12+ years building scalable healthcare platforms and AI systems.",
    image:
      "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
];

const Team = () => {
  return (
    <AnimatedSection className="mb-16">
      <h2 className="text-3xl font-bold text-center mb-4">Meet Our Team</h2>
      <p className="text-xl text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
        Our diverse team of medical professionals, AI researchers, and
        technology experts work together to advance healthcare through
        innovation.
      </p>
      <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {teamMembers.map((member, index) => (
          <StaggerItem key={index} delay={0.2 + index / 5}>
            <Card className="text-center overflow-hidden pt-0">
              <div className="aspect-square overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-lg">{member.name}</CardTitle>
                <CardDescription className="text-primary font-medium">
                  {member.role}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {member.description}
                </p>
              </CardContent>
            </Card>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </AnimatedSection>
  );
};

export default Team;

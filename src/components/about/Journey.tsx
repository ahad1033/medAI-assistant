import AnimatedSection from "../animation/AnimatedSection";
import { StaggerContainer, StaggerItem } from "../animation/AnimationWrappers";

const milestones = [
  {
    year: "2022",
    title: "Company Founded",
    description:
      "MedAI Assistant was founded with a mission to democratize healthcare through AI.",
  },
  {
    year: "2023",
    title: "First AI Model Launch",
    description:
      "Released our first symptom checker AI, serving over 10,000 users in the first month.",
  },
  {
    year: "2024",
    title: "Medical Advisory Board",
    description:
      "Established partnerships with leading medical institutions and healthcare professionals.",
  },
  {
    year: "2025",
    title: "Global Expansion",
    description:
      "Serving over 50,000 users worldwide with comprehensive AI health services.",
  },
];

const Journey = () => {
  return (
    <AnimatedSection className="mb-16">
      <h2 className="text-3xl font-bold text-center mb-12">Our Journey</h2>
      <div className="max-w-4xl mx-auto">
        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-600"></div>
          <StaggerContainer className="space-y-8">
            {milestones.map((milestone, index) => (
              <StaggerItem
                key={index}
                className="relative flex items-start"
                delay={0.2 + index / 5}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm z-10">
                  {milestone.year}
                </div>
                <div className="ml-8 flex-1">
                  <h3 className="text-xl font-semibold mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Journey;

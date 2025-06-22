import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import AnimatedSection from "../animation/AnimatedSection";
import { StaggerContainer, StaggerItem } from "../animation/AnimationWrappers";

const faqs = [
  {
    question: "Is MedAI Assistant a replacement for my doctor?",
    answer:
      "No, MedAI Assistant is designed to complement, not replace, professional medical care. We provide health information and guidance to help you make informed decisions about when to seek professional medical attention.",
  },
  {
    question: "How accurate is the AI health advice?",
    answer:
      "Our AI is trained on extensive medical datasets and continuously updated with the latest research. However, all advice should be considered as general information and not as a substitute for professional medical diagnosis or treatment.",
  },
  {
    question: "Is my health data secure and private?",
    answer:
      "Yes, we take privacy seriously. All data is encrypted and we comply with HIPAA regulations. We never share your personal health information with third parties without your explicit consent.",
  },
  {
    question: "What should I do in a medical emergency?",
    answer:
      "In case of a medical emergency, always call 911 or your local emergency services immediately. MedAI Assistant is not designed for emergency situations and should not be used as a substitute for emergency medical care.",
  },
];

const FAQ = () => {
  return (
    <AnimatedSection className="mb-16">
      <h2 className="text-3xl font-bold text-center mb-12">
        Frequently Asked Questions
      </h2>

      <StaggerContainer className="max-w-4xl mx-auto space-y-6">
        {faqs.map((faq, index) => (
          <StaggerItem key={index} delay={0.2 + index / 5}>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">{faq.question}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </p>
              </CardContent>
            </Card>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </AnimatedSection>
  );
};

export default FAQ;

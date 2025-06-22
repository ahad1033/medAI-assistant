import { Mail, MessageSquare, Phone } from "lucide-react";

import { Button } from "../ui/button";
import { Card, CardContent } from "@/components/ui/card";

import { StaggerContainer, StaggerItem } from "../animation/AnimationWrappers";

import AnimatedSection from "../animation/AnimatedSection";

const contactMethods = [
  {
    icon: Mail,
    title: "Email Support",
    description: "Get help via email",
    contact: "support@medai.com",
    action: "Send Email",
    href: "mailto:support@medai.com",
  },
  {
    icon: Phone,
    title: "Phone Support",
    description: "Speak with our support team",
    contact: "01636428995",
    action: "Call Now",
    href: "tel:01636428995",
  },
  {
    icon: MessageSquare,
    title: "Live Chat",
    description: "Chat with us in real-time",
    contact: "Available 24/7",
    action: "Start Chat",
    href: "https://www.linkedin.com/in/ahadahamed/",
  },
];

const ContactMethods = () => {
  return (
    <AnimatedSection className="mb-16">
      <h2 className="text-3xl font-bold text-center mb-12">How Can We Help?</h2>
      <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {contactMethods.map((method, index) => (
          <StaggerItem key={index} delay={0.2 + index / 5}>
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <method.icon className="h-8 w-8 text-white" />
                </div>

                <h3 className="text-xl font-semibold mb-2">{method.title}</h3>

                <p className="text-muted-foreground mb-4">
                  {method.description}
                </p>

                <p className="font-medium text-primary mb-4">
                  {method.contact}
                </p>

                <a
                  href={method.href}
                  target={method.action === "Start Chat" ? "_blank" : ""}
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" className="w-full" asChild>
                    <span>{method.action}</span>
                  </Button>
                </a>
              </CardContent>
            </Card>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </AnimatedSection>
  );
};

export default ContactMethods;

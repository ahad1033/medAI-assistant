import { Brain, Lightbulb, Shield } from "lucide-react";
import AnimatedSection from "../animation/AnimatedSection";
import { StaggerContainer, StaggerItem } from "../animation/AnimationWrappers";

const Technology = () => {
  return (
    <AnimatedSection className="mb-16">
      <div className="rounded-2xl p-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Powered by Advanced AI</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our platform leverages cutting-edge artificial intelligence, trained
            on vast medical datasets and continuously updated with the latest
            healthcare research.
          </p>
        </div>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <StaggerItem delay={0.2}>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Machine Learning</h3>
              <p className="text-muted-foreground">
                Advanced ML algorithms trained on millions of medical cases and
                research papers
              </p>
            </div>
          </StaggerItem>

          <StaggerItem delay={0.4}>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">HIPAA Compliant</h3>
              <p className="text-muted-foreground">
                Enterprise-grade security ensuring your health data remains
                private and protected
              </p>
            </div>
          </StaggerItem>

          <StaggerItem delay={0.4}>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Continuous Learning
              </h3>
              <p className="text-muted-foreground">
                Our AI continuously improves through feedback and the latest
                medical research
              </p>
            </div>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </AnimatedSection>
  );
};

export default Technology;

import { ArrowRight } from "lucide-react";

import { Button } from "../ui/button";

import AnimatedSection from "../animation/AnimatedSection";

const CallToAction = () => {
  return (
    <AnimatedSection className="text-center bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-12 text-white mb-8">
      <h2 className="text-3xl font-bold mb-4">
        Ready to Take Control of Your Health?
      </h2>
      <p className="text-sm md:text-xl mb-8 opacity-90">
        Join thousands of users who trust MedAI Assistant for their health
        guidance
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
          Start Free Trial
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
        <Button
          size="lg"
          variant="outline"
          className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-blue-600"
        >
          Schedule Demo
        </Button>
      </div>
    </AnimatedSection>
  );
};

export default CallToAction;

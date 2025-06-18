import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";

import GetStartButton from "./GetStartButton";

const Hero = () => {
  return (
    <div className="text-center mb-16">
      <h1 className="text-4xl md:text-7xl font-bold text-foreground mb-8">
        Your AI-Powered{" "}
        <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
          Health Assistant
        </span>
      </h1>

      <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
        Get instant access to AI-powered health insights, symptom analysis, and
        personalized medical guidance. Your intelligent companion for better
        health decisions.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <GetStartButton targetId="services" className="text-lg px-8 py-6">
          Get Started
          <ArrowRight className="ml-2 h-5 w-5" />
        </GetStartButton>

        <Button variant="outline" size="lg" className="text-lg px-8 py-6">
          Learn More
        </Button>
      </div>
    </div>
  );
};

export default Hero;

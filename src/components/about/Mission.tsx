import { ArrowRight, Award, Stethoscope, Target, Users } from "lucide-react";

import { Button } from "../ui/button";
import AnimatedSection from "../animation/AnimatedSection";

const Mission = () => {
  return (
    <AnimatedSection className="mb-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
            At MedAI Assistant, we believe that everyone deserves access to
            reliable health information and guidance. Our AI-powered platform
            bridges the gap between patients and healthcare professionals,
            providing instant, accurate, and personalized health insights.
          </p>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            We&apos;re not here to replace doctors – we&apos;re here to empower
            individuals with the knowledge they need to make informed health
            decisions and know when to seek professional care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg">
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </div>
        </div>
        
        <div className="relative">
          <div className="bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 rounded-2xl p-8">
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <div className="text-2xl font-bold text-blue-600">50K+</div>
                <div className="text-sm text-muted-foreground">
                  Users Served
                </div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Stethoscope className="h-8 w-8 text-white" />
                </div>
                <div className="text-2xl font-bold text-green-600">1M+</div>
                <div className="text-sm text-muted-foreground">
                  Consultations
                </div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <div className="text-2xl font-bold text-purple-600">98%</div>
                <div className="text-sm text-muted-foreground">
                  Satisfaction
                </div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <div className="text-2xl font-bold text-orange-600">24/7</div>
                <div className="text-sm text-muted-foreground">Available</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Mission;

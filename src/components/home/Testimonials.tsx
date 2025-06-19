import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

import AnimatedSection from "../animation/AnimatedSection";

const testimonials = [
  {
    name: "Sarah Kabir",
    role: "Working Mother",
    content:
      "MedAI Assistant has been a lifesaver for our family. Quick, reliable health insights whenever we need them.",
    rating: 5,
  },
  {
    name: "Dr. Noor Mohammad",
    role: "Family Physician",
    content:
      "I recommend MedAI to my patients for preliminary health guidance. It's accurate and encourages proper medical care.",
    rating: 5,
  },
  {
    name: "Asif Haldar",
    role: "Fitness Enthusiast",
    content:
      "The nutrition assistant and health tracker have transformed how I approach my wellness journey.",
    rating: 5,
  },
];
const Testimonials = () => {
  return (
    <AnimatedSection className="mb-16">
      <h2 className="text-3xl font-bold text-center mb-12">
        What Our Users Say
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <Card
            key={index}
            className="p-6 duration-300 hover:shadow-lg hover:-translate-y-1"
          >
            <CardContent className="p-0">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <p className="text-muted-foreground mb-4 italic">
                {testimonial.content}
              </p>
              <div>
                <div className="font-semibold">{testimonial.name}</div>
                <div className="text-sm text-muted-foreground">
                  {testimonial.role}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </AnimatedSection>
  );
};

export default Testimonials;

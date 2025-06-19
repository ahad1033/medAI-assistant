import { CheckCircle } from "lucide-react";
import {
  Card,
  CardTitle,
  CardHeader,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "../ui/button";

const pricingPlans = [
  {
    name: "Basic",
    price: "Free",
    description: "Perfect for occasional health questions",
    features: [
      "10 AI consultations per month",
      "Basic symptom checking",
      "General health information",
      "Email support",
    ],
    popular: false,
  },
  {
    name: "Pro",
    price: "$19",
    period: "/month",
    description: "Ideal for regular health monitoring",
    features: [
      "Unlimited AI consultations",
      "All health services",
      "Medical report analysis",
      "Priority support",
      "Health tracking & insights",
      "Personalized recommendations",
    ],
    popular: true,
  },
  {
    name: "Family",
    price: "$39",
    period: "/month",
    description: "Complete health solution for families",
    features: [
      "Everything in Pro",
      "Up to 6 family members",
      "Family health dashboard",
      "Emergency contact alerts",
      "Dedicated health advisor",
      "Advanced analytics",
    ],
    popular: false,
  },
];

const Pricing = () => {
  return (
    <div className="mb-16">
      <h2 className="text-3xl font-bold text-center mb-4">Choose Your Plan</h2>
      <p className="text-xl text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
        Select the perfect plan for your health needs. All plans include our
        core AI health services.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {pricingPlans.map((plan, index) => (
          <Card
            key={index}
            className={`relative ${
              plan.popular ? "border-primary shadow-lg scale-105" : ""
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </span>
              </div>
            )}
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-2xl">{plan.name}</CardTitle>
              <div className="mt-4">
                <span className="text-4xl font-bold">{plan.price}</span>
                {plan.period && (
                  <span className="text-muted-foreground">{plan.period}</span>
                )}
              </div>
              <CardDescription className="mt-2">
                {plan.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                className="w-full"
                variant={plan.popular ? "default" : "outline"}
              >
                {plan.price === "Free" ? "Get Started" : "Choose Plan"}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Pricing;

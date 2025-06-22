import Hero from "@/components/shared/Hero";
import Stats from "@/components/home/Stats";
import Pricing from "@/components/home/Pricing";
import Features from "@/components/home/Features";
import Services from "@/components/home/Services";
import HowItWorks from "@/components/home/HowItWorks";
import Testimonials from "@/components/home/Testimonials";
import CallToAction from "@/components/shared/CallToAction";

import { Header } from "@/components/shared/Header";
import { Footer } from "@/components/shared/Footer";

export default function HomePage() {
  return (
    <>
      <Header />

      <div className="container mx-auto px-4 py-8">
        <Hero
          title={
            <>
              Your AI-Powered{" "}
              <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                Health Assistant
              </span>
            </>
          }
          description=" Get instant access to AI-powered health insights, symptom analysis, and
        personalized medical guidance. Your intelligent companion for better
        health decisions."
          primaryBtn={{ label: "Get Started", href: "#services" }}
          secondaryBtn={{ label: "Learn More", href: "/about" }}
        />

        <Services />

        <Features />

        <Stats />

        <HowItWorks />

        <Pricing />

        <Testimonials />

        <CallToAction
          title="Ready to Take Control of Your Health?"
          description="Join thousands of users who trust MedAI Assistant for their health
        guidance"
          primaryBtn={{ label: "Start Free Trial" }}
          secondaryBtn={{ label: "Schedule Demo" }}
        />
      </div>

      <Footer />
    </>
  );
}

import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import Pricing from "@/components/home/Pricing";
import Features from "@/components/home/Features";
import Services from "@/components/home/Services";
import HowItWorks from "@/components/home/HowItWorks";
import Testimonials from "@/components/home/Testimonials";
import CallToActionBlock from "@/components/shared/CallToAction";

import { Header } from "@/components/shared/Header";
import { Footer } from "@/components/shared/Footer";

export default function HomePage() {
  return (
    <>
      <Header />

      <div className="container mx-auto px-4 py-8">
        <Hero />

        <Services />

        <Features />

        <Stats />

        <HowItWorks />

        <Pricing />

        <Testimonials />

        <CallToActionBlock
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

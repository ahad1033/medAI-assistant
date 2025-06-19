import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import Pricing from "@/components/home/Pricing";
import Features from "@/components/home/Features";
import Services from "@/components/home/Services";
import HowItWorks from "@/components/home/HowItWorks";
import Testimonials from "@/components/home/Testimonials";
import CallToAction from "@/components/home/CallToAction";

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

        <CallToAction />
      </div>

      <Footer />
    </>
  );
}

import { Footer } from "@/components/shared/Footer";
import { Header } from "@/components/shared/Header";

import Team from "@/components/about/Team";
import Hero from "@/components/shared/Hero";
import Mission from "@/components/about/Mission";
import Journey from "@/components/about/Journey";
import CoreValues from "@/components/about/CoreValues";
import Technology from "@/components/about/Technology";
import CallToAction from "@/components/shared/CallToAction";

export default function AboutPage() {
  return (
    <div>
      <Header />

      <div className="container mx-auto px-4 py-8">
        <Hero
          title={
            <>
              About{" "}
              <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                MedAI Assistant
              </span>
            </>
          }
          description=" We're on a mission to make quality healthcare guidance accessible
        to everyone through the power of artificial intelligence and
        compassionate care."
        />

        <Mission />

        <CoreValues />

        <Journey />

        <Team />

        <Technology />

        <CallToAction
          title="Ready to Experience the Future of Healthcare?"
          description="Join our community and take the first step towards better health
            management"
          primaryBtn={{ label: "Explore Services", href: "/#services" }}
          secondaryBtn={{ label: "Contact Us", href: "/contact" }}
        />
      </div>

      <Footer />
    </div>
  );
}

import { Footer } from "@/components/shared/Footer";
import { Header } from "@/components/shared/Header";

import Team from "@/components/about/Team";
import Mission from "@/components/about/Mission";
import Journey from "@/components/about/Journey";
import AboutHero from "@/components/about/AboutHero";
import CoreValues from "@/components/about/CoreValues";
import Technology from "@/components/about/Technology";
import CallToActionBlock from "@/components/shared/CallToAction";

export default function AboutPage() {
  return (
    <div>
      <Header />

      <div className="container mx-auto px-4 py-8">
        <AboutHero />

        <Mission />

        <CoreValues />

        <Journey />

        <Team />

        <Technology />

        <CallToActionBlock
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

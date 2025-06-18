import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Hero />

      <Services />
    </div>
  );
}

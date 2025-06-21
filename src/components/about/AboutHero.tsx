import AnimatedSection from "../animation/AnimatedSection";

const AboutHero = () => {
  return (
    <AnimatedSection className="text-center mb-8 py-40 md:py-64 flex flex-col align-center justify-center">
      <h1 className="text-5xl md:text-9xl font-bold mb-6">
        About{" "}
        <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
          MedAI Assistant
        </span>
      </h1>
      <p className="text-sm md:text-xl text-muted-foreground max-w-3xl mx-auto">
        We&apos;re on a mission to make quality healthcare guidance accessible
        to everyone through the power of artificial intelligence and
        compassionate care.
      </p>
    </AnimatedSection>
  );
};

export default AboutHero;

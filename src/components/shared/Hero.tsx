import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

import AnimatedSection from "@/components/animation/AnimatedSection";

type HeroButton = {
  label: string;
  href?: string;
};

interface HeroSectionProps {
  title: React.ReactNode;
  description?: string;
  primaryBtn?: HeroButton;
  secondaryBtn?: HeroButton;
  className?: string;
}

const HeroSection = ({
  title,
  description,
  primaryBtn,
  secondaryBtn,
  className = "",
}: HeroSectionProps) => {
  const renderHeroButton = (
    btn: HeroButton | undefined,
    isPrimary: boolean
  ) => {
    if (!btn?.href) return null;

    const variant = isPrimary ? "default" : "outline";
    const classes = `text-lg px-8 py-6`;

    const isHashLink = btn.href.startsWith("#");

    return isHashLink ? (
      <a href={btn.href}>
        <Button size="lg" variant={variant} className={classes} asChild>
          <span>
            {btn.label}
            {isPrimary && <ArrowRight className="ml-2 h-5 w-5" />}
          </span>
        </Button>
      </a>
    ) : (
      <Link href={btn.href}>
        <Button size="lg" variant={variant} className={classes} asChild>
          <span>
            {btn.label}
            {isPrimary && <ArrowRight className="ml-2 h-5 w-5" />}
          </span>
        </Button>
      </Link>
    );
  };

  return (
    <AnimatedSection
      className={`text-center mb-8 py-40 md:py-64 flex flex-col items-center justify-center ${className}`}
    >
      <h1 className="text-4xl md:text-9xl font-bold text-foreground mb-8">
        {title}
      </h1>

      {description && (
        <p className="text-sm md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
          {description}
        </p>
      )}

      {(primaryBtn || secondaryBtn) && (
        <div className="flex flex-col sm:flex-row w-3/4 md:w-full gap-4 justify-center mx-auto">
          {renderHeroButton(primaryBtn, true)}
          {renderHeroButton(secondaryBtn, false)}
        </div>
      )}
    </AnimatedSection>
  );
};

export default HeroSection;

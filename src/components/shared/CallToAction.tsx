"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

import AnimatedSection from "@/components/animation/AnimatedSection";

type CTAButton = {
  label: string;
  href?: string;
  targetId?: string;
};

interface CallToActionProps {
  title: string;
  description?: string;
  primaryBtn?: CTAButton;
  secondaryBtn?: CTAButton;
  className?: string;
  bcClass?: string;
}

const CallToAction = ({
  title,
  description,
  primaryBtn,
  secondaryBtn,
  className = "",
  bcClass = "",
}: CallToActionProps) => {
  const renderCTAButton = (btn: CTAButton, isPrimary: boolean) => {
    const variant = isPrimary ? "secondary" : "outline";
    const classes = `text-lg px-8 py-6 ${
      !isPrimary
        ? "border-white dark:text-white text-black hover:bg-white hover:text-blue-600"
        : ""
    }`;

    // 🔗 Case 1: Button with href (link to page or section)
    if (btn.href) {
      return (
        <Link href={btn.href} passHref>
          <Button asChild size="lg" variant={variant} className={classes}>
            <span
              className={isPrimary ? "flex flex-row items-center gap-2" : ""}
            >
              {btn.label}
              {isPrimary && <ArrowRight className="ml-2 h-5 w-5" />}
            </span>
          </Button>
        </Link>
      );
    }

    // 🎯 Case 2: Button with targetId (scroll to section)
    if (btn.targetId) {
      const scrollToTarget = () => {
        const target = document.getElementById(btn.targetId!);
        if (target) {
          target.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      };

      return (
        <Button
          size="lg"
          variant={variant}
          className={classes}
          onClick={scrollToTarget}
        >
          <span className={isPrimary ? "flex flex-row items-center gap-2" : ""}>
            {btn.label}
            {isPrimary && <ArrowRight className="ml-2 h-5 w-5" />}
          </span>
        </Button>
      );
    }

    // 🧷 Case 3: Just a plain button (fallback)
    return (
      <Button size="lg" variant={variant} className={classes}>
        <span className={isPrimary ? "flex flex-row items-center gap-2" : ""}>
          {btn.label}
          {isPrimary && <ArrowRight className="ml-2 h-5 w-5" />}
        </span>
      </Button>
    );
  };

  return (
    <AnimatedSection
      className={`text-center bg-gradient-to-r  rounded-2xl p-12 text-white ${className} ${
        bcClass ? bcClass : "from-blue-500 to-purple-600"
      }`}
    >
      <h2 className="text-3xl font-bold mb-4">{title}</h2>
      {description && (
        <p className="text-sm md:text-xl mb-8 opacity-90">{description}</p>
      )}

      {primaryBtn && secondaryBtn && (
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {renderCTAButton(primaryBtn, true)}
          {renderCTAButton(secondaryBtn, false)}
        </div>
      )}
    </AnimatedSection>
  );
};

export default CallToAction;

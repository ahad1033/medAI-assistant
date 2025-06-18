"use client";

import { Button } from "../ui/button";

interface ScrollButtonProps {
  targetId: string;
  children: React.ReactNode;
  className?: string;
  size?: "default" | "sm" | "lg" | "icon";
}

const GetStartButton = ({
  targetId,
  children,
  className,
  size = "lg",
}: ScrollButtonProps) => {
  const scrollToTarget = () => {
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Button size={size} onClick={scrollToTarget} className={className}>
      {children}
    </Button>
  );
};

export default GetStartButton;

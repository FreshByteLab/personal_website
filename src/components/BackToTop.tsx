"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

import { uiText } from "@/content/ui";
import { cn } from "@/lib/cn";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 600);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: reduceMotion ? "auto" : "smooth"
    });
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={cn(
        "fixed bottom-6 right-6 z-50 rounded-full border border-white/10 bg-black/50 px-4 py-2 text-xs font-semibold text-white/80 shadow-glass transition",
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      )}
      aria-label={uiText.backToTop}
    >
      {uiText.backToTop}
    </button>
  );
}

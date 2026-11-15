"use client";
import { MotionConfig } from "framer-motion";
import { createContext, useContext, useEffect, type ReactNode } from "react";
import { ScrollTrigger } from "@/lib/gsap";
import type { Quality } from "@/lib/three/store";
import { useQuality } from "@/lib/utils/useQuality";

const Ctx = createContext<Quality | null>(null);

if (typeof window !== "undefined") {
  const origError = console.error;
  console.error = (...args: unknown[]) => {
    const str = args
      .map((a) => {
        try {
          return typeof a === "string" ? a : JSON.stringify(a);
        } catch {
          return String(a);
        }
      })
      .join(" ");
    if (
      str.includes("Attempted to synchronously unmount a root while React was already rendering") ||
      str.includes("container that has already been passed to createRoot") ||
      // the two scripts in app/layout.tsx are written into the document and run on
      // the first load, before the page is drawn; React points out that a script
      // element would not run on a client render, which is not what they are for
      str.includes("Encountered a script tag while rendering React component")
    ) {
      return;
    }
    origError.apply(console, args);
  };
}

export function QualityProvider({ children }: { children: ReactNode }) {
  const q = useQuality();
  // the hero changes height when the tier resolves (film vs still) → re-measure triggers
  useEffect(() => {
    if (!q) return;
    const id = requestAnimationFrame(() => ScrollTrigger.refresh());
    return () => cancelAnimationFrame(id);
  }, [q]);
  return (
    <Ctx.Provider value={q}>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </Ctx.Provider>
  );
}

/** null until resolved on the client; "static" = no WebGL / reduced motion */
export const useQualityContext = () => useContext(Ctx);

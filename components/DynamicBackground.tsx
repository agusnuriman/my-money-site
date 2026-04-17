"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function DynamicBackground() {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const currentTheme = resolvedTheme || theme;

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none transition-colors duration-1000">
      {currentTheme === "dark" ? (
        /* NIGHT MODE: Stars */
        <div className="absolute inset-0 bg-[#020617]">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="star"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 3}px`,
                height: `${Math.random() * 3}px`,
                // @ts-ignore
                "--duration": `${2 + Math.random() * 3}s`,
                "--delay": `${Math.random() * 5}s`,
              }}
            />
          ))}
          {/* Subtle Moon Glow */}
          <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/10 blur-[120px] rounded-full" />
        </div>
      ) : (
        /* LIGHT MODE: Clouds */
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="cloud"
              style={{
                top: `${10 + Math.random() * 40}%`,
                left: `${-20 + Math.random() * 20}%`,
                width: `${200 + Math.random() * 300}px`,
                height: `${100 + Math.random() * 150}px`,
                // @ts-ignore
                "--duration": `${20 + Math.random() * 40}s`,
                "--delay": `${-Math.random() * 40}s`,
              }}
            />
          ))}
          {/* Subtle Sun Glow */}
          <div className="absolute top-[-10%] left-[-10%] w-[30%] h-[30%] bg-yellow-200/20 blur-[100px] rounded-full" />
        </div>
      )}
    </div>
  );
}

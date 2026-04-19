"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

interface StarData {
  id: string;
  top: string;
  left: string;
  size: string;
  duration: string;
  delay: string;
  moveDuration: string;
}

interface CloudData {
  id: string;
  top: string;
  left: string;
  width: string;
  height: string;
  duration: string;
  delay: string;
}

interface BackgroundState {
  mounted: boolean;
  stars: StarData[];
  clouds: CloudData[];
}

export function DynamicBackground() {
  const { theme, resolvedTheme } = useTheme();
  const [state, setState] = useState<BackgroundState>({
    mounted: false,
    stars: [],
    clouds: [],
  });

  useEffect(() => {
    // Generate values only once on client-side mount
    const stars = Array.from({ length: 70 }).map((_, i) => ({
      id: `star-${Math.random().toString(36).substring(2, 11)}-${i}`,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: `${1 + Math.random() * 3}px`, // 1px to 4px
      duration: `${2 + Math.random() * 4}s`,
      delay: `${Math.random() * 5}s`,
      moveDuration: `${30 + Math.random() * 60}s`, // 30s to 90s to float up
    }));

    const clouds = Array.from({ length: 8 }).map((_, i) => ({
      id: `cloud-${Math.random().toString(36).substring(2, 11)}-${i}`,
      top: `${5 + Math.random() * 50}%`,
      left: `${-30 + Math.random() * 30}%`,
      width: `${150 + Math.random() * 250}px`,
      height: `${80 + Math.random() * 120}px`,
      duration: `${25 + Math.random() * 35}s`,
      delay: `${-Math.random() * 40}s`,
    }));

    requestAnimationFrame(() => {
      setState({
        mounted: true,
        stars,
        clouds,
      });
    });
  }, []);

  if (!state.mounted) return null;

  const currentTheme = resolvedTheme || theme;

  return (
    <div 
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: -10,
        overflow: 'hidden',
        pointerEvents: 'none',
        transition: 'background-color 1000ms'
      }}
    >
      {currentTheme === "dark" ? (
        /* NIGHT MODE: Stars */
        <div style={{ position: 'absolute', inset: 0, backgroundColor: '#020617' }}>
          {state.stars.map((star) => (
            <div
              key={star.id}
              className="star"
              style={{
                top: star.top,
                left: star.left,
                width: star.size,
                height: star.size,
                // @ts-expect-error - CSS custom properties
                "--duration": star.duration,
                "--delay": star.delay,
                "--move-duration": star.moveDuration,
              }}
            />
          ))}
          {/* Subtle Moon Glow */}
          <div style={{ position: 'absolute', top: '-10%', right: '-10%', width: '40%', height: '40%', backgroundColor: 'rgba(59, 130, 246, 0.1)', filter: 'blur(120px)', borderRadius: '9999px' }} />
        </div>
      ) : (
        /* LIGHT MODE: Clouds */
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, #bae6fd, #e0f2fe, #ffffff)' }}>
          {state.clouds.map((cloud) => (
            <div
              key={cloud.id}
              className="cloud"
              style={{
                top: cloud.top,
                left: cloud.left,
                width: cloud.width,
                height: cloud.height,
                // @ts-expect-error - CSS custom properties
                "--duration": cloud.duration,
                "--delay": cloud.delay,
              }}
            />
          ))}
          {/* Subtle Sun Glow */}
          <div style={{ position: 'absolute', top: '-10%', left: '-10%', width: '30%', height: '30%', backgroundColor: 'rgba(254, 240, 138, 0.4)', filter: 'blur(100px)', borderRadius: '9999px' }} />
        </div>
      )}
    </div>
  );
}

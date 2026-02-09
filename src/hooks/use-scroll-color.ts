"use client";

import { useEffect, useState } from 'react';

interface ColorStop {
  color: string;
  position: number; // 0 to 1
}

export function useScrollColor(colorStops: ColorStop[]) {
  const [scrollColor, setScrollColor] = useState(colorStops[0]?.color || '#ffffff');

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPosition = window.scrollY;
      const scrollProgress = scrollPosition / scrollHeight;

      // Find the two color stops we're between
      let currentStop = colorStops[0];
      let nextStop = colorStops[1];

      for (let i = 0; i < colorStops.length - 1; i++) {
        if (scrollProgress >= colorStops[i].position && scrollProgress <= colorStops[i + 1].position) {
          currentStop = colorStops[i];
          nextStop = colorStops[i + 1];
          break;
        }
      }

      // If we're past the last stop, use the last color
      if (scrollProgress >= colorStops[colorStops.length - 1].position) {
        setScrollColor(colorStops[colorStops.length - 1].color);
        return;
      }

      // Calculate the progress between the two stops
      const stopRange = nextStop.position - currentStop.position;
      const progressInRange = (scrollProgress - currentStop.position) / stopRange;

      // Interpolate between the two colors
      const interpolatedColor = interpolateColor(
        currentStop.color,
        nextStop.color,
        progressInRange
      );

      setScrollColor(interpolatedColor);
    };

    handleScroll(); // Initial call
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [colorStops]);

  return scrollColor;
}

function interpolateColor(color1: string, color2: string, progress: number): string {
  // Parse hex colors
  const c1 = hexToRgb(color1);
  const c2 = hexToRgb(color2);

  if (!c1 || !c2) return color1;

  // Interpolate each channel
  const r = Math.round(c1.r + (c2.r - c1.r) * progress);
  const g = Math.round(c1.g + (c2.g - c1.g) * progress);
  const b = Math.round(c1.b + (c2.b - c1.b) * progress);

  return `rgb(${r}, ${g}, ${b})`;
}

function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}

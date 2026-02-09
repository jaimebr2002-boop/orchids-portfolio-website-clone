"use client";

import { useState, useRef, MouseEvent } from "react";
import Image from "next/image";

interface TiltedCardProps {
  imageSrc: string;
  altText: string;
  captionText?: string;
  containerHeight?: string;
  containerWidth?: string;
  imageHeight?: string;
  imageWidth?: string;
  rotateAmplitude?: number;
  scaleOnHover?: number;
  showMobileWarning?: boolean;
  showTooltip?: boolean;
  displayOverlayContent?: boolean;
  overlayContent?: React.ReactNode;
}

export const TiltedCard = ({
  imageSrc,
  altText,
  captionText,
  containerHeight = "400px",
  containerWidth = "400px",
  imageHeight = "400px",
  imageWidth = "400px",
  rotateAmplitude = 12,
  scaleOnHover = 1.05,
  showMobileWarning = false,
  showTooltip = false,
  displayOverlayContent = false,
  overlayContent,
}: TiltedCardProps) => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateXValue = ((y - centerY) / centerY) * -rotateAmplitude;
    const rotateYValue = ((x - centerX) / centerX) * rotateAmplitude;

    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <div className="relative inline-block" style={{ perspective: "1000px" }}>
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="relative cursor-pointer transition-transform duration-200 ease-out"
        style={{
          height: containerHeight,
          width: containerWidth,
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${
            isHovering ? scaleOnHover : 1
          })`,
          transformStyle: "preserve-3d",
        }}
      >
        {/* Card Container */}
        <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
          <Image
            src={imageSrc}
            alt={altText}
            width={parseInt(imageWidth)}
            height={parseInt(imageHeight)}
            className="w-full h-full object-contain"
            priority
          />

          {/* Overlay Content */}
          {displayOverlayContent && overlayContent && (
            <div
              className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 hover:opacity-100 transition-opacity duration-300"
              style={{ transform: "translateZ(20px)" }}
            >
              <div className="text-white text-center font-semibold">
                {overlayContent}
              </div>
            </div>
          )}

          {/* Shine Effect */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `radial-gradient(circle at ${
                ((rotateY + rotateAmplitude) / (rotateAmplitude * 2)) * 100
              }% ${
                ((rotateX + rotateAmplitude) / (rotateAmplitude * 2)) * 100
              }%, rgba(255,255,255,0.3) 0%, transparent 50%)`,
              opacity: isHovering ? 1 : 0,
              transition: "opacity 0.2s ease-out",
            }}
          />
        </div>
      </div>

      {/* Caption */}
      {captionText && (
        <p className="text-center mt-4 text-sm text-muted-foreground">
          {captionText}
        </p>
      )}

      {/* Mobile Warning */}
      {showMobileWarning && (
        <div className="md:hidden mt-4 text-xs text-muted-foreground text-center">
          Best viewed on desktop for full 3D effect
        </div>
      )}

      {/* Tooltip */}
      {showTooltip && isHovering && (
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-black/80 text-white px-3 py-1 rounded text-xs whitespace-nowrap pointer-events-none">
          Move your mouse to tilt
        </div>
      )}
    </div>
  );
};

export default TiltedCard;
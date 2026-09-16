import { motion } from "framer-motion";
import { useState, type MouseEvent } from "react";

interface ImageProp {
  src: string;
  alt?: string;
}

interface InteractiveTiltCardProps {
  image: ImageProp;
  tiltFactor?: number;
  hoverScale?: number;
  borderRadius?: number;
  shadowColor?: string;
  shadowIntensity?: number;
  glareEffect?: boolean;
  glareIntensity?: number;
}

export function InteractiveTiltCard({
  image,
  tiltFactor = 12,
  hoverScale = 1.03,
  borderRadius = 16,
  shadowColor = "rgba(0, 0, 0, 0.35)",
  shadowIntensity = 0.45,
  glareEffect = true,
  glareIntensity = 0.25,
}: InteractiveTiltCardProps) {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [glarePosition, setGlarePosition] = useState({ x: 50, y: 50 });

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
      return;
    }

    const { currentTarget, clientX, clientY } = event;
    const bounds = currentTarget.getBoundingClientRect();
    const x = (clientX - bounds.left) / bounds.width;
    const y = (clientY - bounds.top) / bounds.height;

    setRotation({
      x: (0.5 - y) * tiltFactor,
      y: (x - 0.5) * tiltFactor,
    });
    setGlarePosition({ x: x * 100, y: y * 100 });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotation({ x: 0, y: 0 });
    setGlarePosition({ x: 50, y: 50 });
  };

  const handleMouseEnter = () => {
    if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
      setIsHovered(true);
    }
  };

  return (
    <div
      className="h-full w-full"
      style={{ perspective: "1000px" }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className="relative h-full w-full overflow-hidden"
        style={{
          borderRadius,
          transformStyle: "preserve-3d",
          boxShadow: `0 18px 45px ${shadowColor.replace(/rgba\(([^)]+),\s*[^)]+\)$/, `rgba($1, ${shadowIntensity})`)}`,
        }}
        animate={{
          rotateX: rotation.x,
          rotateY: rotation.y,
          scale: isHovered ? hoverScale : 1,
        }}
        transition={{ type: "spring", stiffness: 220, damping: 22, mass: 0.7 }}
      >
        <img
          src={image.src}
          alt={image.alt ?? ""}
          className="h-full w-full object-cover object-center"
        />
        {glareEffect ? (
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            animate={{
              opacity: isHovered ? glareIntensity : 0,
              background: `radial-gradient(circle at ${glarePosition.x}% ${glarePosition.y}%, rgba(255,255,255,0.8), transparent 45%)`,
            }}
            transition={{ duration: 0.15 }}
          />
        ) : null}
      </motion.div>
    </div>
  );
}
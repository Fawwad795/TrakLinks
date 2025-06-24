import { useRef, useState, useEffect } from "react";

const SpotlightCard = ({
  children,
  className = "",
  spotlightColor = "rgba(255, 255, 255, 0.25)",
  spotlightSize = 200,
}) => {
  const divRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!divRef.current) return;

    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(0.8);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    setOpacity(0.7);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setOpacity(0);
  };

  useEffect(() => {
    if (isHovered && !isFocused) {
      setOpacity(0.7);
    }
  }, [isHovered, isFocused]);
  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden ${className}`}
    >
      <div
        className="pointer-events-none absolute inset-0 transition-all duration-300 ease-out"
        style={{
          opacity,
          background: `radial-gradient(circle ${spotlightSize}px at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 70%)`,
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 transition-all duration-500 ease-out"
        style={{
          opacity: opacity * 0.3,
          background: `radial-gradient(circle ${spotlightSize * 1.5}px at ${
            position.x
          }px ${position.y}px, ${spotlightColor}, transparent 80%)`,
        }}
      />
      {children}
    </div>
  );
};

export default SpotlightCard;

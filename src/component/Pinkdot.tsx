import React, { useState, useEffect } from "react";

const PinkDot: React.FC = () => {
  const [mouseX, setMouseX] = useState<number>(0);
  const [mouseY, setMouseY] = useState<number>(0);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMouseX(event.clientX);
      setMouseY(event.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const dotStyle: React.CSSProperties = {
    position: "fixed",
    top: `${mouseY}px`,
    left: `${mouseX}px`,
    width: "20px",
    height: "20px",
    borderRadius: "50%",
    backgroundColor: "transparent",
    backgroundImage:
      "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='pink'%3E%3Cpath d='M12 21.35l-1.45-1.32C5.53 15.44 2 12.08 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.58-3.53 6.94-8.55 11.54L12 21.35z'/%3E%3C/svg%3E\")",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    zIndex: 9999,
    cursor: "none",
  };

  return <div style={dotStyle} />;
};

export default PinkDot;

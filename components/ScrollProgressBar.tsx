"use client";

import { useEffect, useRef, useState } from "react";

interface MousePos {
  x: number;
  y: number;
}

const ProgressBar: React.FC = () => {
  const progressRef = useRef<HTMLDivElement>(null);
  const percentRef = useRef<HTMLSpanElement>(null);
  const [mousePos, setMousePos] = useState<MousePos>({
    x: 20,
    y: 0,
  });

  // Safe window usage for SSR
  useEffect(() => {
    setMousePos({ x: 20, y: window.innerHeight / 2 });
  }, []);

  const getScrollPercentage = (): number => {
    if (typeof window === "undefined") return 0;
    return (
      (window.scrollY / (document.body.scrollHeight - window.innerHeight)) *
      100
    );
  };

  useEffect(() => {
    let animationFrame: number;

    const updateProgressBar = () => {
      const percent = Math.min(100, Math.ceil(getScrollPercentage()));
      if (progressRef.current) {
        progressRef.current.style.height = `${percent}%`;
      }
      if (percentRef.current) {
        percentRef.current.innerText = `${percent}%`;
      }
      animationFrame = requestAnimationFrame(updateProgressBar);
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    updateProgressBar();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        transform: `translate(${mousePos.x+ 30}px, ${mousePos.y + 20}px)`,
        pointerEvents: "none",
        display: "flex",
        alignItems: "center",
        gap: "10px",
        zIndex: 9999,
      }}
    >
      {/* Scroll bar */}
      <div
        style={{
          width: "5px",
          height: "100px", // fixed track height
          border: "1px solid black",
          borderRadius: "20px",
          overflow: "hidden",
          backgroundColor: "transparent",
        }}
      >
        <div
          ref={progressRef}
          style={{
            width: "100%",
            height: "0%",
            backgroundColor: "black",
            transition: "height 0.1s linear",
          }}
        ></div>
      </div>

      {/* Percentage */}
      <span
        ref={percentRef}
        style={{
          fontSize: "0.8rem",
          userSelect: "none",
        }}
      >
        0%
      </span>
    </div>
  );
};

export default ProgressBar;
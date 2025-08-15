// components/ScrambleText.tsx
"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

type ScrambleTextProps = {
  text: string;
  className?: string;
  scrambleSpeed?: number; // ms delay between scrambles per letter
  onComplete?: () => void;
};

const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

const ScrambleText: React.FC<ScrambleTextProps> = ({
  text,
  className = "",
  scrambleSpeed = 20,
  onComplete,
}) => {
  const [displayText, setDisplayText] = useState<string>("");
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    let currentIndex = 0;
    let scrambled = Array.from(text).map((ch) => (ch === " " ? " " : randomChar(ch)));
    setDisplayText(scrambled.join(""));

    intervalRef.current = setInterval(() => {
      scrambled = scrambled.map((char, i) => {
        if (i < currentIndex || text[i] === " ") return text[i];
        return randomChar(text[i]);
      });

      setDisplayText(scrambled.join(""));

      currentIndex++;
      if (currentIndex > text.length) {
        clearInterval(intervalRef.current!);
        setDisplayText(text);
        if (onComplete) onComplete();
      }
    }, scrambleSpeed);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [text, scrambleSpeed, onComplete]);

  return (
    <motion.span
      className={`${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
    >
      {displayText}
    </motion.span>
  );
};

function randomChar(targetChar: string): string {
  const isUpper = /[A-Z]/.test(targetChar);
  const isLower = /[a-z]/.test(targetChar);

  const pool = isUpper
    ? characters.slice(0, 26)
    : isLower
    ? characters.slice(26, 52)
    : characters;

  return pool[Math.floor(Math.random() * pool.length)];
}

export default ScrambleText;
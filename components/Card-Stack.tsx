'use client';
import { useState, useMemo } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import Image from "next/image";

export type CardData = {
  media: string;
  mediaType: "image" | "video";
  leftText: string;
  rightText: string;
};

type DraggableCardStackProps = {
  cards: CardData[];
};

export default function DraggableCardStack({ cards }: DraggableCardStackProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const x = useMotionValue(0);

  const visibleCards = useMemo(() => {
    return cards.slice(currentIndex, currentIndex + 3);
  }, [cards, currentIndex]);

  const handleDragEnd = (_: any, info: { offset: { x: number } }) => {
    const threshold = 120;
    if (Math.abs(info.offset.x) > threshold) {
      setCurrentIndex((prev) => (prev + 1) % cards.length);
    }
  };

  // Peeking transforms for the second card
  const peekScale = useTransform(x, [-200, 0, 200], [0.95, 0.95, 0.95]);
  const peekY = useTransform(x, [-200, 0, 200], [20, 10, 20]);

  return (
    <div className="relative h-[500px] w-full max-w-xl mx-auto">
      {visibleCards.map((card, index) => {
        const isTop = index === 0;
        const isSecond = index === 1;
        const depth = visibleCards.length - index;
        const baseScale = 1 - index * 0.05;
        const baseY = index * 10;

        const motionStyle = isTop
          ? { x, scale: 1, y: 0, zIndex: 100 }
          : isSecond
          ? { scale: peekScale, y: peekY, zIndex: 100 - depth }
          : { scale: baseScale, y: baseY, zIndex: 100 - depth };

        return (
          <motion.div
            key={currentIndex + index}
            drag={isTop ? "x" : false}
            dragConstraints={{ left: 0, right: 0 }}
            style={motionStyle}
            onDragEnd={isTop ? handleDragEnd : undefined}
            className={`absolute top-0 left-0 w-full h-full rounded-xl overflow-hidden shadow-xl bg-white pointer-events-auto touch-none select-none ${
              isTop ? "cursor-grab active:cursor-grabbing" : "cursor-grab"
            }`}
          >
            {card.mediaType === "image" ? (
              <Image
                src={card.media}
                alt="Card Media"
                fill
                className="object-cover"
                draggable={false}
              />
            ) : (
              <video
                src={card.media}
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
              />
            )}

            <div className="absolute bottom-4 left-4 right-4 flex justify-between text-white text-sm font-medium z-10">
              <span>{card.leftText}</span>
              <span>{card.rightText}</span>
            </div>

            <div className="absolute inset-0 bg-black/10 pointer-events-none" />
          </motion.div>
        );
      })}
    </div>
  );
}
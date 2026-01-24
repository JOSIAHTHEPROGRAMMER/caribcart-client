"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import ListingCard from "../ListingCard"; 

let interval;

export const CardStack = ({ items, offset = 10, scaleFactor = 0.06 }) => {
  const [cards, setCards] = useState(() => [...items]);

  if (!Array.isArray(items) || items.length === 0) return null;

  const startFlipping = () => {
    clearInterval(interval);
    interval = setInterval(() => {
      setCards((prev) => {
        if (prev.length <= 1) return prev;
        const copy = [...prev];
        copy.unshift(copy.pop());
        return copy;
      });
    }, 3000);
  };

  useEffect(() => {
    startFlipping();
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="relative h-90 w-85 md:h-72 md:w-[460px]"
      onMouseEnter={() => clearInterval(interval)}
      onMouseLeave={startFlipping}
    >
      {cards.map((item, index) => (
        <motion.div
          key={item.id ?? `${item.platform}-${index}`}
          className="absolute inset-0"
          style={{ transformOrigin: "top center" }}
          animate={{
            top: index * -offset,
            scale: 1 - index * scaleFactor,
            zIndex: cards.length - index,
          }}
        >
          <ListingCard listing={item} />
        </motion.div>
      ))}
    </div>
  );
};

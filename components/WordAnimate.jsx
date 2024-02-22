"use client";
import { useRef } from "react";
import { useScroll, motion, useTransform } from "framer-motion";

const WordAnimate = ({ text, className }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "start 0.25"],
  });

  const words = text.split(" ");
  return (
    <p className={`flex flex-wrap ${className}`} ref={ref}>
      {words.map((word, index) => {
        const start = index / words.length;
        const end = start + 1 / words.length;
        const opacity = useTransform(scrollYProgress, [start, end], [0, 1]);
        return (
          <span className="mr-1 relative">
            <span className="absolute opacity-30">{word}</span>
            <motion.span style={{ opacity }} key={word + " " + index}>
              {word}
            </motion.span>
          </span>
        );
      })}
    </p>
  );
};

export default WordAnimate;

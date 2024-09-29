import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { wrap } from "popmotion";
import {
  arica,
  victoria,
  amarilla,
  comedor,
  habitacion,
  banio,
  tv,
  arbol,
  bidonagua,
  blurpiesa,
  blurry,
  bolsabasura,
  cables,
  cablesyfierros,
  camas,
  cocinablur,
  cortina,
  exposicion,
  flash,
  impresora,
  pantuflas,
  piesablur,
  pizarrablur,
  robles,
  vickyliving,
} from "public/assets/hospedaje";

const images = [
  {
    src: arica,
  },
  {
    src: victoria,
  },
  {
    src: amarilla,
  },
  {
    src: comedor,
  },
  {
    src: habitacion,
  },
  {
    src: banio,
  },
  {
    src: tv,
  },
  {
    src: arbol,
  },
  {
    src: bidonagua,
  },
  {
    src: blurpiesa,
  },
  {
    src: blurry,
  },
  {
    src: bolsabasura,
  },
  {
    src: cables,
  },
  {
    src: cablesyfierros,
  },
  {
    src: camas,
  },
  {
    src: cocinablur,
  },
  {
    src: cortina,
  },
  {
    src: exposicion,
  },
  {
    src: flash,
  },
  {
    src: impresora,
  },
  {
    src: pantuflas,
  },
  {
    src: piesablur,
  },
  {
    src: pizarrablur,
  },
  {
    src: robles,
  },
  {
    src: vickyliving,
  },
];

const variants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

export const Carousel = () => {
  const [[page, direction], setPage] = useState([0, 0]);

  const imageIndex = wrap(0, images.length, page);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <>
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={page}
          className="absolute max-w-[100vw]"
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
        >
          <Image
            src={images[imageIndex].src}
            width={600}
            height={400}
            alt=""
            className="rounded-xl"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkAAIAAAoAAv/lPAAAAA=="
          />
        </motion.div>
      </AnimatePresence>
      <div className="next " onClick={() => paginate(1)}>
        {"‣"}
      </div>
      <div className="prev" onClick={() => paginate(-1)}>
        {"‣"}
      </div>
    </>
  );
};

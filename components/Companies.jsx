"use client";
import collahuasi from "../public/assets/collahuasi.png";
import techint from "../public/assets/techint.svg";
import teck from "../public/assets/teck.svg";
import kipreos from "../public/assets/kipreos.png";
import habekost from "../public/assets/habekost2.png";
import Image from "next/image";
import TextAnimate from "@/components/TextAnimate";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Companies() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, once: true });
  const defaultAnimation = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 10,
        duration: 0.5,
      },
    },
  };
  return (
    <section className="py-8 sm:py-10 bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* <h2 className="text-center text-2xl font-museomoderno leading-8 text-white">
          Empresas que han confiado en nosotros
        </h2> */}
        <TextAnimate
          once
          text="Empresas que han confiado en nosotros"
          className="text-3xl sm:text-4xl lg:text-5xl mb-10 sm:mb-16 text-center font-museomoderno font-bold tracking-tight text-white"
          Wrapper="h2"
        />
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ staggerChildren: 0.1 }}
          className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5"
        >
          <motion.div
            variants={defaultAnimation}
            className="col-span-2 lg:col-span-1 "
          >
            <Image
            className="max-h-12 w-full object-contain"
              src={collahuasi}
              alt="Collahuasi"
              width={158}
              height={48}
              onContextMenu={(e) => e.preventDefault()}
            />
          </motion.div>
          <motion.div
            variants={defaultAnimation}
            className="col-span-2 lg:col-span-1 "
          >
            <Image
            className="max-h-12 w-full object-contain"
              src={techint}
              alt="Techint"
              width={158}
              height={48}
              onContextMenu={(e) => e.preventDefault()}
            />
          </motion.div>
          <motion.div
            variants={defaultAnimation}
            className="col-span-2 lg:col-span-1"
          >
            <Image
            className="max-h-12 w-full object-contain"
              src={teck}
              alt="Teck"
              width={158}
              height={48}
              onContextMenu={(e) => e.preventDefault()}
            />
          </motion.div>
          <motion.div
            variants={defaultAnimation}
            className="col-span-2 sm:col-start-2 lg:col-span-1"
          >
            <Image
            className="max-h-12 w-full object-contain"
              src={habekost}
              alt="habekost"
              width={158}
              height={48}
              onContextMenu={(e) => e.preventDefault()}
            />
          </motion.div>
          <motion.div
            variants={defaultAnimation}
            className="col-span-2  col-start-2 sm:col-start-auto lg:col-span-1 "
          >
            <Image
            className="max-h-12 w-full object-contain"
              src={kipreos}
              alt="kipreos"
              width={158}
              height={48}
              onContextMenu={(e) => e.preventDefault()}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";
import React from "react";
import Image from "next/image";
import vegies from "/public/assets/img/vegies.png";
import plato from "/public/assets/img/plato.png";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef, useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import useDimension from "../../utils/useDimension";
import FoodCard from "@/components/FoodCard";
import { alimentacion } from "@/utils/index";

const page = () => {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  const ref = useRef(null);
  const { height } = useDimension();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [150, height * -1]);
  const scale2 = useTransform(scrollYProgress, [0, 1], [0, -400]);
  return (
    <section className="bg-gradient-to-r from-gray-900 to-black font-montserrat">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div ref={ref} className="lg:h-screen">
          <motion.h1
            style={{ y: scale2 }}
            className="text-4xl sm:text-6xl lg:text-8xl font-museomoderno text-center font-bold tracking-tight text-white mb-10 transition-transform"
          >
            Nuestros platillos
          </motion.h1>
          <div className="flex justify-center items-center relative lg:mt-40">
            <div className="">
              <Image src={plato} alt="plato" height={533} width={1024}></Image>
            </div>
            <motion.div
              style={{ y: scale }}
              className="flex justify-center items-center absolute w-1/2 mb-44"
            >
              <Image src={vegies} alt="vegies" height={768} width={600}></Image>
            </motion.div>
          </div>
        </div>
        <div className="m-10">
          <div className="w-full">
            <h2 className="text-xl lg:text-6xl text-center font-museomoderno font-bold tracking-tight text-white mb-12 sm:mb-20">
              En Servicios Willka te ofrecemos
            </h2>
          </div>
        </div>
        {alimentacion.map((alimento) => (
          <FoodCard
            name={alimento.name}
            description={alimento.description}
            img={alimento.img}
          />
        ))}
      <div className="sm:mb-96"/>
      </div>
    </section>
  );
};

export default page;

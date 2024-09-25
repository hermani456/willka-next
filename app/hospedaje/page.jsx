"use client";
import Image from "next/image";
import camasazules from "public/assets/hospedaje/camasazules.webp";
import sonrie from "public/assets/hospedaje/sonrie.JPG";
import livingamarilla from "public/assets/hospedaje/livingamarilla.JPG";
import camasrojas from "public/assets/hospedaje/camasrojas.JPG";
import Footer from "@/components/Footer.jsx";
import {
  arica,
  victoria,
  amarilla,
  comedor,
  living,
} from "public/assets/hospedaje";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import FoodCard from "@/components/FoodCard";
import { hospedajes } from "../../utils/index.js";
import { Carousel } from "@/components/Carousel.jsx";

const page = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale7 = useTransform(scrollYProgress, [0, 1], [1, 7]);
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

  const pictures = [
    {
      src: victoria,
      scale: scale4,
      clas: "max-md:top-[25vh] max-md:left-[10vw] w-[45vw] h-[20vh] md:w-[25vw] md:h-[30vh] relative",
      clas2: "w-[25vw] h-[30vh] relative",
    },
    {
      src: camasazules,
      scale: scale5,
      clas: "top-[-5vh] md:top-[-10vh] left-[-27vw] md:left-[-24vw] w-[23vw] h-[20vh] md:w-[20vw] md:h-[38vh]  relative",
      clas2: "top-[-10vh] left-[-25vw] w-[20vw] h-[38vh] relative",
    },
    {
      src: sonrie,
      scale: scale7,
      clas: "top-[-1vh] md:top-[-25vh] left-[29vw] md:left-[21vw] w-[25vw] h-[23vh] md:w-[15vw] md:h-[40vh] relative",
      clas2: "top-[-25vh] left-[24vw] w-[15vw] h-[40vh] relative",
    },
    {
      src: livingamarilla,
      scale: scale6,
      clas: "top-[-27vh] md:top-[-30vh] left-[-2vw] w-[50vw] h-[21vh] md:w-[20vw] md:h-[25vh] relative",
      clas2: "top-[-30vh] left-[1vw] w-[20vw] h-[25vh] relative",
    },
    {
      src: living,
      scale: scale4,
      clas: "w-[25vw] h-[25vh] md:top-[15vh] md:left-[20vw] md:w-[12vw] md:h-[35vh] relative",
      clas2: "top-[15vh] left-[25vw] w-[12vw] h-[30vh] relative",
    },
    {
      src: camasrojas,
      scale: scale7,
      clas: "top-[20vh] left-[-30vw] md:top-[30vh] md:left-[-1vw] w-[25vw] h-[25vh] relative",
      clas2: "top-[30vh] left-[-5vw] w-[25vw] h-[25vh] relative",
    },
  ];
  return (
    <>
      <div className="bg-gradient-to-r from-gray-900 to-black">
        <h1 className="text-4xl sm:text-6xl lg:text-8xl font-museomoderno text-center font-bold tracking-tight text-white py-10">
          Hospedaje
        </h1>
        <div ref={container} className="h-[300vh] relative">
          <div className="sticky top-0 h-screen overflow-hidden">
            {pictures.map(({ src, scale, clas }, index) => {
              return (
                <motion.div
                  key={index}
                  style={{ scale: scale }}
                  className="w-full h-full absolute top-0 flex items-center justify-center"
                >
                  <div className={clas}>
                    <Image
                      src={src}
                      fill
                      alt="Foto hospedaje"
                      className="object-cover rounded-md"
                      placeholder="blur"
                      blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkAAIAAAoAAv/lPAAAAA=="
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-6xl text-center font-museomoderno font-bold tracking-tight text-white mb-12 sm:mb-20">
            En Servicios wilkaka te ofrecemos
          </h2>
          {hospedajes.map((item) => {
            return (
              <FoodCard
                key={item.id}
                name={item.name}
                description={item.description}
                img={item.img}
              />
            );
          })}
          <h2 className="my-14 text-3xl sm:text-4xl lg:text-6xl text-center font-museomoderno font-bold tracking-tight text-white">
            Galeria de Fotos
          </h2>
          <div className="flex items-center justify-center relative min-h-[50svh] overflow-hidden">
            <Carousel />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default page;

"use client";
import Image from "next/image";
import img1 from "public/assets/hospedaje/1.png";
import img2 from "public/assets/hospedaje/2.png";
import img3 from "public/assets/hospedaje/3.JPG";
import img4 from "public/assets/hospedaje/4.JPG";
import img5 from "public/assets/hospedaje/5.JPG";
import img6 from "public/assets/hospedaje/6.JPG";
import img7 from "public/assets/hospedaje/7.JPG";
import img8 from "public/assets/hospedaje/8.JPG";
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
      clas: "max-md:top-[15vh] max-md:left-[29vw] w-[25vw] h-[20vh] md:w-[25vw] md:h-[30vh] relative",
      clas2: "w-[25vw] h-[30vh] relative",
    },
    {
      src: img2,
      scale: scale5,
      clas: "top-[-10vh] left-[-25vw] w-[20vw] h-[20vh] md:w-[20vw] md:h-[38vh]  relative",
      clas2: "top-[-10vh] left-[-25vw] w-[20vw] h-[38vh] relative",
    },
    {
      src: img3,
      scale: scale6,
      clas: "top-[-25vh] left-[24vw] w-[15vw] h-[15vh] md:h-[40vh] relative",
      clas2: "top-[-25vh] left-[24vw] w-[15vw] h-[40vh] relative",
    },
    {
      src: img4,
      scale: scale7,
      clas: "top-[-30vh] left-[1vw] w-[25vw] h-[21vh] md:w-[20vw] md:h-[25vh] relative",
      clas2: "top-[-30vh] left-[1vw] w-[20vw] h-[25vh] relative",
    },
    {
      src: living,
      scale: scale4,
      clas: "w-[25vw] h-[25vh] md:top-[15vh] md:left-[25vw] md:w-[12vw] md:h-[30vh] relative",
      clas2: "top-[15vh] left-[25vw] w-[12vw] h-[30vh] relative",
    },
    {
      src: img6,
      scale: scale9,
      clas: "top-[20vh] left-[-30vw] md:top-[30vh] md:left-[-5vw] w-[25vw] h-[25vh] relative",
      clas2: "top-[30vh] left-[-5vw] w-[25vw] h-[25vh] relative",
    },
    // {
    //   src: img7,
    //   scale: scale9,
    // },
    // {
    //   src: img8,
    //   scale: scale9,
    // },
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
                  className="w-full h-full absolute top-0 flex items-center justify-center img-container"
                >
                  <div className={clas}>
                    <Image
                      src={src}
                      fill
                      alt="Picture of the author"
                      className="object-cover rounded-md"
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-6xl text-center font-museomoderno font-bold tracking-tight text-white mb-12 sm:mb-20">
            En Servicios Willka te ofrecemos
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
        </div>
      </div>
      <Footer />
    </>
  );
};

export default page;

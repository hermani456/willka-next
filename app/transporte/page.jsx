"use client";
import Image from "next/image";
import Footer from "@/components/Footer.jsx";
import FoodCard from "@/components/FoodCard";
import { transporte } from "../../utils/index.js";
import fordTransfer from "public/assets/transporte/ford-transit.avif";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const page = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  return (
    <>
      <div className="bg-gradient-to-r from-gray-900 to-black">
        <h1 className="text-4xl sm:text-6xl lg:text-8xl font-museomoderno text-center font-bold tracking-tight text-white py-10">
          Transporte
        </h1>
        <div ref={ref}>
          <header className="relative h-dvh h-screen flex justify-center text-white font-montserrat">
            <div className="absolute inset-0">
              <motion.div style={{ overflow: "hidden" }}>
                <motion.div style={{ scale }} className="h-[100svh] h-[100vh]">
                  <Image
                    src={fordTransfer}
                    alt="Your image"
                    // sizes="100vw"
                    // fill
                    // width={1920}
                    // height={1080}
                    className="object-cover w-full h-full"
                  />
                </motion.div>
              </motion.div>
            </div>
            <div className="relative flex items-center flex-col justify-center">
              {/* <h2 className="text-4xl sm:text-6xl lg:text-8xl">Titulo</h2> */}
              <motion.p
                style={{ y: scale }}
                className="mx-10 md:mx-36 xl:mx-96 text-md xl:text-xl font-bold bg-white text-black p-5 opacity-50 rounded-xl"
              >
                Descubre la excelencia en transporte con Servicios Willka.
                Nuestros vehículos de primera clase combinados con un enfoque
                total en seguridad te garantizan viajes cómodos y sin
                preocupaciones. Ya sea para traslados corporativos, turísticos o
                personales, confía en nuestra flota y en nuestro compromiso con
                tu bienestar. ¡Reserva tu viaje hoy y experimenta un transporte
                de calidad y confianza!
              </motion.p>
            </div>
          </header>
        </div>
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-6xl text-center font-museomoderno font-bold tracking-tight text-white mb-12 sm:mb-20">
            En Servicios Willka te ofrecemos
          </h2>
          {transporte.map((item) => {
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

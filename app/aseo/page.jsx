"use client";
import Image from "next/image";
import Footer from "@/components/Footer.jsx";
import FoodCard from "@/components/FoodCard";
import { aseo } from "../../utils/index.js";
import aseobg from "public/assets/aseo/aseobg.jpg";
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
          Aseo y Limpieza
        </h1>
        <header
          ref={ref}
          className="relative h-dvh h-screen flex justify-center text-white font-montserrat"
        >
          <div className="absolute inset-0">
            <motion.div className="overflow-hidden">
              <motion.div style={{ scale }} className="h-[100svh] h-[100vh]">
                <Image
                  src={aseobg}
                  alt="Your image"
                  className="object-cover w-full h-full"
                />
              </motion.div>
            </motion.div>
          </div>
          <div className="relative flex items-center flex-col justify-center">
            {/* <h2 className="text-4xl sm:text-6xl lg:text-8xl">Titulo</h2> */}
            <p className="mx-10 md:mx-36 xl:mx-96 text-xl font-bold bg-white text-black p-5 opacity-75 rounded-xl">
              ¡Deja que Servicios Wilko se encargue del aseo para que tú puedas
              disfrutar de un espacio impecable! Nuestro equipo profesional
              ofrece servicios de limpieza y aseo integrales para hogares,
              oficinas, espacios comerciales y más. Con productos de calidad y
              atención a cada detalle, garantizamos un ambiente limpio y fresco.
              ¡Contáctanos para obtener un presupuesto personalizado y descubrir
              cómo hacer tu vida más limpia y fácil!
            </p>
          </div>
        </header>
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-6xl text-center font-museomoderno font-bold tracking-tight text-white mb-12 sm:mb-20">
            En Servicios Wilko te ofrecemos
          </h2>
          {aseo.map((item) => {
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

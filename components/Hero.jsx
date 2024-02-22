"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="bg-gradient-to-r from-gray-900 to-black px-6 pt-14 lg:px-8 font-montserrat min-h-screen min-h-svh"
      id="home"
    >
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            y: -100,
          },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              delay: 0.3,
              duration: 0.5,
            },
          },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mx-auto max-w-2xl py-10 sm:py-36 lg:py-40"
      >
        <div className="text-center">
          <h1 className="text-5xl font-bold font-museomoderno tracking-tight sm:text-7xl bg-gradient-to-r from-orange-700 via-violet-500 to-blue-400 text-transparent bg-clip-text animate-gradient bg-300">
            Servicios Willka
          </h1>
          <p className="mt-6 text-lg leading-8 text-white font-montserrat">
            Ofrecemos soluciones integrales y de alta calidad en{" "}
            <span className="font-bold">
              hospedaje, alimentación, transporte, aseo industrial, seguridad y
              fumigación
            </span>
            , asegurando el bienestar y satisfacción de nuestros clientes,
            mientras garantizamos prácticas sostenibles y éticas en cada uno de
            nuestros servicios.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#contacto"
              className="rounded-md bg-orange-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Contacto
            </a>
            <a
              href="#equipo"
              className="text-sm font-semibold leading-6 text-white hover:text-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Conocenos <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

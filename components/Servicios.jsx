"use client";
import { servicios } from "../utils/index";
import Image from "next/image";
import Link from "next/link";
import { motion, useIsPresent } from "framer-motion";

export default function Servicios() {
  const isPresent = useIsPresent();
  return (
    <section className="bg-blue-950 font-montserrat" id="servicios">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-3xl text-center font-museomoderno font-bold tracking-tight text-white mb-10">
          Nuestros Servicios
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {servicios.map((servicio) => (
            <div key={servicio.id} className="flex justify-center">
              <Link href={servicio.href} scroll={false}>
                <div className="w-80 h-96 max-sm:w-72 bg-gray-900 gap-10 border border-orange-500 rounded-xl shadow-2xl">
                  <div className="p-5 flex flex-col h-full items-center justify-evenly">
                    <div className="">
                      <Image
                        src={servicio.imgSrc}
                        alt={servicio.imgAlt}
                        width={200}
                        height={200}
                        onContextMenu={(e) => e.preventDefault()}
                        className="h-32 w-32 object-cover"
                      />
                    </div>
                    <div className="text-white font-bold">
                      <h2>{servicio.name}</h2>
                    </div>
                    <div className="text-white text-sm">
                      <p>{servicio.description}</p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <motion.div
          initial={{ scaleX: 1 }}
          animate={{
            scaleX: 0,
            transition: { duration: 0.5, ease: "circOut" },
          }}
          exit={{
            scaleX: 1,
            transition: { duration: 0.5, ease: "circIn" },
          }}
          style={{ originX: isPresent ? 0 : 1 }}
          className="fixed right-0 left-0 top-0 bottom-0 bg-blue-800 z-[2]"
        />
      </div>
    </section>
  );
}

"use client";
import { motion } from "framer-motion";
import { equipo } from "../utils/index";
import Image from "next/image";
import TextAnimate from "@/components/TextAnimate";

export default function Example() {
  return (
    <section
      className="bg-gradient-to-r from-gray-900 to-black font-montserrat"
      id="equipo"
    >
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <TextAnimate
          once
          text="Nuestro Equipo"
          className="text-3xl sm:text-4xl lg:text-6xl mb-12 sm:mb-20 text-center font-museomoderno font-bold tracking-tight text-white"
          Wrapper="h2"
        />
        <div className="flex flex-col  flex-wrap">
          {equipo.map((person) => (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                type: "spring",
                bounce: 0.4,
                duration: 0.8,
              }}
              viewport={{ once: true }}
              key={person.name}
              className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8 shadow-lg rounded-xl bg-gray-800 mb-5 p-5 border border-blue-600"
            >
              <div className="w-auto flex flex-col">
                <Image
                  className="h-12 w-12 rounded-full border-2 border-orange-500"
                  src={person.imageUrl}
                  alt="foto de perfil"
                  width={50}
                  height={50}
                  onContextMenu={(e) => e.preventDefault()}
                />
                <div className="flex flex-col">
                  <p className="mt-1 text-sm font-semibold leading-6 text-white">
                    {person.name}
                  </p>
                  <div>
                    <p className="mt-1 text-xs leading-5 text-gray-400 ">
                      {person.email}
                    </p>
                  </div>
                  <p className="text-sm leading-6 text-orange-500">
                    {person.role}
                  </p>
                </div>
              </div>
              <div className="text-md leading-5 text-white self-center w-full">
                <p>{person.quote}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

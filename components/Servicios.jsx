"use client";
import { servicios } from "../utils/index";
import Image from "next/image";
import Link from "next/link";
import TextAnimate from "@/components/TextAnimate";

export default function Servicios() {
  return (
    <section
      className="bg-gradient-to-r from-blue-950 to-black font-montserrat"
      id="servicios"
    >
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <TextAnimate
          once
          text="Nuestros Servicios"
          className="text-3xl sm:text-4xl lg:text-6xl text-center font-museomoderno font-bold tracking-tight text-white mb-12 sm:mb-20 "
          Wrapper="h2"
        />
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {servicios.map((servicio) => (
            <div key={servicio.id} className="flex justify-center">
              <Link href={servicio.href}>
                <div className="w-80 h-96 max-sm:w-72 bg-gray-900 gap-10 border border-orange-500 rounded-xl shadow-2xl cursor-pointer">
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
      </div>
    </section>
  );
}

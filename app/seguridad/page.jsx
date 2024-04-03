"use client";
import Image from "next/image";
import Footer from "@/components/Footer.jsx";
import FoodCard from "@/components/FoodCard";
import { seguridad } from "../../utils/index.js";
import seguridad4 from "public/assets/seguridad/seguridad4.png";
import fordTransfer from "public/assets/transporte/ford-transit.avif";

const page = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-gray-900 to-black">
        <h1 className="text-4xl sm:text-6xl lg:text-8xl font-museomoderno text-center font-bold tracking-tight text-white py-10">
          Seguridad
        </h1>
        <header className="relative h-dvh h-screen flex justify-center text-white font-montserrat">
          <div className="absolute inset-0">
            <Image
              src={seguridad4}
              alt="victoria"
              layout="fill"
              objectFit="cover"
              quality={100}
            />
          </div>
          <div className="relative flex items-center flex-col justify-center">
            {/* <h2 className="text-4xl sm:text-6xl lg:text-8xl">Titulo</h2> */}
            <p className="mx-10 md:mx-36 xl:mx-96 text-xl font-bold bg-white text-black p-5 opacity-75 rounded-xl">
              En Servicios Willka, tu seguridad es nuestra prioridad número uno.
              Nuestros profesionales altamente capacitados en seguridad y
              nuestro sistema de monitoreo avanzado trabajan las 24 horas del
              día para proteger lo que más te importa. Desde guardias de
              seguridad altamente entrenados hasta tecnología de vanguardia para
              el monitoreo en tiempo real, te brindamos tranquilidad y
              protección en todo momento. ¡Confía en nosotros para mantener
              seguro tu entorno!
            </p>
          </div>
        </header>
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-6xl text-center font-museomoderno font-bold tracking-tight text-white mb-12 sm:mb-20">
            En Servicios Willka te ofrecemos
          </h2>
          {seguridad.map((item) => {
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

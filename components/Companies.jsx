'use client'
import collahuasi from "../public/assets/collahuasi.png"
import techint from "../public/assets/techint.svg"
import teck from "../public/assets/teck.svg"
import kipreos from "../public/assets/kipreos.png"
import habekost from "../public/assets/habekost2.png"
import Image from "next/image"

export default function Companies() {
  return (
    <section className="py-8 sm:py-10 bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-2xl font-museomoderno leading-8 text-white">
          Empresas que han confiado en nosotros
        </h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <Image
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 "
            src={collahuasi}
            alt="Collahuasi"
            width={158}
            height={48}
            onContextMenu={(e) => e.preventDefault()}
          />
          <Image
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 "
            src={techint}
            alt="Techint"
            width={158}
            height={48}
            onContextMenu={(e) => e.preventDefault()}
          />
          <Image
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 "
            src={teck}
            alt="Teck"
            width={158}
            height={48}
            onContextMenu={(e) => e.preventDefault()}
          />
          <Image
            className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
            src={habekost}
            alt="habekost"
            width={158}
            height={48}
            onContextMenu={(e) => e.preventDefault()}
          />
          <Image
            className="col-span-2  col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1 "
            src={kipreos}
            alt="kipreos"
            width={158}
            height={48}
            onContextMenu={(e) => e.preventDefault()}
          />
        </div>
      </div>
    </section>
  );
}

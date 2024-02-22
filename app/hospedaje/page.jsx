"use client";
import Image from "next/image";
import img1 from "public/assets/hospedaje/1.jpg";
import img2 from "public/assets/hospedaje/2.JPG";
import img3 from "public/assets/hospedaje/3.JPG";
import img4 from "public/assets/hospedaje/4.JPG";
import img5 from "public/assets/hospedaje/5.JPG";
import img6 from "public/assets/hospedaje/6.JPG";
import img7 from "public/assets/hospedaje/7.JPG";
import img8 from "public/assets/hospedaje/8.JPG";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

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
      src: img1,
      scale: scale4,
      clas: "w-[25vw] h-[24vh] relative",
    },
    {
      src: img2,
      scale: scale5,
      clas: "top-[-10vh] left-[-25vw] w-[20vw] h-[38vh] relative"
    },
    {
      src: img3,
      scale: scale6,
      clas: "top-[-25vh] left-[24vw] w-[15vw] h-[40vh] relative"
    },
    {
      src: img4,
      scale: scale7,
      clas: "top-[-28vh] left-[1vw] w-[20vw] h-[25vh] relative"
    },
    {
      src: img5,
      scale: scale8,
      clas: "top-[15vh] left-[25vw] w-[12vw] h-[30vh] relative"
    },
    {
      src: img6,
      scale: scale9,
      clas: "top-[28vh] left-[-5vw] w-[25vw] h-[25vh] relative"
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
    <div className="my-20">
      <h1 className="text-4xl sm:text-6xl lg:text-8xl font-museomoderno text-center font-bold tracking-tight text-black mb-10 transition-transform">Hospedaje</h1>
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
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit eum accusamus porro quos dignissimos dolorum labore ullam consequuntur illo, sint quo vitae! Sapiente velit quas natus earum labore sunt iusto repellendus maiores perferendis. Rem dolores aperiam repellat, qui alias voluptatum neque sapiente aspernatur illum consectetur. Consequatur atque odit unde magnam, dignissimos vero dolores enim voluptate incidunt eius recusandae voluptas maiores necessitatibus obcaecati exercitationem ipsa impedit? Reiciendis, est. Ducimus repudiandae nobis quisquam. Aliquam corporis odio temporibus consectetur repudiandae at quam. Doloribus eius ea pariatur consequatur necessitatibus nam dignissimos, illum nisi quos. Beatae vitae ullam eos aspernatur possimus ipsum quam non repellendus!</p>
      </div>
    </div>
  );
};

export default page;

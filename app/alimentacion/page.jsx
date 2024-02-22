"use client";
import React from "react";
import Image from "next/image";
import vegies from "/public/assets/img/vegies.png";
import plato from "/public/assets/img/plato.png";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef, useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import useDimension from "../../utils/useDimension";
import TextAnimate from "@/components/TextAnimate";
import WordAnimate from "@/components/WordAnimate";
import FoodCard from "@/components/FoodCard";
import { alimentacion } from "@/utils/index";

const page = () => {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  const ref = useRef(null);
  const { height } = useDimension();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [150, height * -1]);
  const scale2 = useTransform(scrollYProgress, [0, 1], [0, -400]);
  return (
    <section className="bg-gray-900 font-montserrat">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div ref={ref} className="lg:h-screen">
          <motion.h1
            style={{ y: scale2 }}
            className="text-4xl sm:text-6xl lg:text-8xl font-museomoderno text-center font-bold tracking-tight text-white mb-10 transition-transform"
          >
            Nuestros platillos
          </motion.h1>
          <div className="flex justify-center items-center relative lg:mt-40">
            <div className="">
              <Image src={plato} alt="plato" height={533} width={1024}></Image>
            </div>
            <motion.div
              style={{ y: scale }}
              className="flex justify-center items-center absolute w-1/2 mb-44"
            >
              <Image src={vegies} alt="vegies" height={768} width={600}></Image>
            </motion.div>
          </div>
        </div>
        {alimentacion.map((alimento) => (
          <FoodCard
            name={alimento.name}
            description={alimento.description}
            img={alimento.img}
          />
        ))}
        <div>
          <p className="text-blue-950">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            optio quaerat itaque consequatur excepturi nemo architecto ullam
            vero dolor assumenda at alias adipisci officiis tempora, facere
            totam modi laboriosam quia iure aliquam voluptas provident inventore
            laborum? Dolore veritatis odit praesentium maiores numquam voluptas
            ipsum error sunt eius, facere similique dolorem laborum rem
            aspernatur nesciunt quidem corrupti adipisci, minus at aliquid illo
            repellat! Nisi atque ab saepe natus. Similique quod quasi voluptas
            adipisci, quas labore esse ipsa nihil molestiae! Atque voluptatibus
            optio delectus nobis rem neque doloremque animi sequi autem
            blanditiis, perferendis quisquam hic ratione, numquam obcaecati
            ipsam commodi natus dicta, quae quibusdam. Asperiores quod,
            provident amet doloribus ad aliquam sit possimus inventore delectus
            cumque vitae nostrum et dolores obcaecati quis consequatur
            repellendus velit corporis consequuntur earum. Excepturi error vitae
            dolor repudiandae quas ab omnis tempora impedit praesentium placeat,
            odio illo consequuntur maxime eaque ex ipsum id officiis, sed nemo.
            Exercitationem, in? Minus ullam cupiditate quam accusamus.
            Consequuntur eum eius magni consequatur tempora incidunt harum nemo
            nam. Sit ab totam laudantium iure obcaecati praesentium aliquam
            provident est veniam eveniet illo esse vitae impedit, nihil facilis
            officia cum accusamus, rem a corrupti dignissimos soluta odit.
            Consectetur unde ab necessitatibus eos iste accusantium, est ut illo
            sint reiciendis. Fugit, doloribus sit. Ipsum tempore odit
            perferendis corporis magnam expedita quo quasi quibusdam minus natus
            accusamus amet pariatur suscipit quos placeat, quod repudiandae
            dignissimos necessitatibus fuga praesentium adipisci. Harum ipsa
            nulla fuga officia reprehenderit quia atque deserunt omnis assumenda
            expedita dolores itaque doloribus ad, illum incidunt ut veniam iure
            aliquid hic blanditiis, magnam, ducimus placeat dicta. Quos impedit
            incidunt in accusantium repellendus illum minima vitae natus,
            ducimus nesciunt mollitia facere omnis possimus necessitatibus
            aliquid? Quaerat natus, delectus, iste rem dolores unde fugiat animi
            incidunt repellat exercitationem dicta officia molestias enim, vero
            nisi voluptatem reiciendis soluta? Assumenda delectus architecto
            nostrum laudantium id. Veritatis, voluptates. Quos fugit, facere
            voluptatum qui nam, dolores sapiente, distinctio asperiores
            perferendis sint debitis adipisci modi sequi ullam ad dicta ut odio
            facilis inventore. Ipsa numquam iste eum ullam impedit ex et alias
            soluta! Maxime inventore iste qui totam fugiat rerum quae? Magni
            odit alias possimus ipsa quae ipsum deserunt libero, eos nobis, aut
            laboriosam accusamus doloremque, quod quam tempore. Iste tenetur
            culpa omnis exercitationem provident impedit quas cumque eum,
            voluptatem, quasi corporis? Voluptate eveniet hic, voluptas quos
            magni officiis numquam. Voluptas alias dignissimos voluptate,
            excepturi quidem harum odio, autem impedit commodi a iste deserunt
            adipisci, repudiandae est reprehenderit corrupti error obcaecati.
            Dolorem repellat unde explicabo porro voluptatum illum, temporibus
            sequi cumque quod itaque non alias, est quibusdam quaerat magnam
            voluptate accusantium. Labore, culpa, perferendis a eos quasi
            tenetur dicta voluptatem debitis, officiis illum accusamus rem
            atque. Dolor culpa, itaque ullam nihil sequi sunt recusandae maxime
            soluta repellat expedita error nemo cumque earum fuga quibusdam
            animi veritatis architecto excepturi, vero nam? Dolores ratione nam
            blanditiis quis? Hic sunt quas molestiae facere, tempora quae ut
            numquam rem saepe, voluptatibus debitis tempore magni laudantium
            odit pariatur qui suscipit expedita, sed nostrum! Amet rerum aliquid
            deserunt!
          </p>
          <TextAnimate
            Wrapper="p"
            text="hola blabla hola chao blabla"
            className="text-center text-6xl"
            once
          />
          <div className="w-52">
            <WordAnimate
              className={"text-2xl"}
              text="blanditiis quis? Hic sunt quas molestiae facere, tempora quae ut
            numquam rem saepe, voluptatibus debitis tempore magni laudantium
            odit pariatur qui suscipit expedita, sed nostrum! Amet rerum aliquid
            deserunt!"
            />
          </div>
          <div className="h-screen"></div>
        </div>
      </div>
    </section>
  );
};

export default page;

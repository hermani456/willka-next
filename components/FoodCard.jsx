import React from "react";
import Image from "next/image";
import WordAnimate from "@/components/WordAnimate";

const FoodCard = ({ name, description, img }) => {
  return (
    <div
      key={name}
      className="bg-gray-950 text-white tracking-tight leading-6 rounded-xl font-montserrat border border-orange-400 shadow-2xl mb-5 relative overflow-hidden"
    >
      <div className="absolute -top-16 -left-16 w-96 h-96 rounded-full rotate-45 bg-gradient-to-b from-orange-700 to-violet-500 blur-2xl mx-auto opacity-25"></div>
      <section className="flex flex-col lg:flex-row justify-center items-center gap-10 m-5">
        <div className="flex flex-col gap-5 m-5 lg:w-1/2 flex-grow-0">
          <h2 className="text-3xl text-orange-400 font-museomoderno">{name}</h2>
          <WordAnimate text={description} />
        </div>
        <div className="flex justify-center align-center w-full lg:w-1/2 z-10 ">
          <Image src={img} alt={name} height={400} className="rounded-md" />
        </div>
      </section>
    </div>
  );
};

export default FoodCard;

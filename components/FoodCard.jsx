import React from "react";
import Image from "next/image";
import avemayo from "/public/assets/food/avemayo.png";
import WordAnimate from "@/components/WordAnimate";

const FoodCard = ({name, description, img}) => {
  return (
    <div className="bg-gray-950 text-white tracking-tight leading-6 rounded-xl font-montserrat border border-orange-400 shadow-2xl mb-5">
      <section className="flex flex-col md:flex-row justify-center items-center gap-10 m-10">
        <div className="flex flex-col gap-5 m-5 md:w-1/2">
          <div>
            <h2 className="text-3xl text-orange-400 font-museomoderno">
              {name}
            </h2>
          </div>
          <div>
            {/* <p>Ingredientes: </p> */}
            <WordAnimate text={description} />
          </div>
        </div>
        <div className="flex align-center w-1/2">
          <Image src={img} alt="avemayo" height={512} width={400}></Image>
        </div>
      </section>
    </div>
  );
};

export default FoodCard;

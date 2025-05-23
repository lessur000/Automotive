import React from "react";
import styles from "../../../styles/twStyles";
import PrimaryButton from "../../ui/PrimaryButton";
import Ford from "/ford2.png";

const Hero = () => {
  return (
   <div style={{backgroundImage: `url(${Ford})`}} className="h-lvh w-full object-cover bg-center">
     <div className={`absolute top-[20%] md:top-[30%] ${styles.paddings} z-20 w-full`}>
      <div className="space-y-5 max-w-4xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-blue-500 font-bold text-xl sm:text-2xl md:text-xl">
          Car repair
        </h1>
        <p className="text-white font-bold text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight max-w-4xl">
          Auto maintenance, service & repair
        </p>
        <p className="text-white text-sm sm:text-base md:text-lg max-w-2xl">
          We provide reliable, expert auto maintenance and repair services to
          keep your vehicle running smoothly and safely. From routine tune-ups
          to complex diagnostics, our team is here to help.
        </p>
        <PrimaryButton />
      </div>
    </div>
   </div>
  );
};

export default Hero;



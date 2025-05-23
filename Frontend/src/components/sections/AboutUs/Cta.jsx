import React from "react";
import styles from "../../../styles/twStyles";

const Cta = () => {
  return (
    <div className="bg-white mt-70 py-20">
      <div className={`${styles.paddings}`}>
        <span className="uppercase text-gray-500/15 font-bold text-3xl sm:text-5xl md:text-7xl">Our numbers</span>
        <div className="flex flex-col md:flex-row justify-center gap-10 md:gap-20 space-y-5 text-center mt-20">
          <div className="">
            <span className="text-black text-3xl sm:text-5xl md:text-7xl font-bold">
              10<span className="text-blue-500">+</span>
            </span>
            <p className="text-black text-2xl font-bold uppercase">
              Years of service
            </p>
          </div>
          <span className="border border-b-2 border-gray-500 "></span>

          <div className="">
            <span className="text-black text-3xl sm:text-5xl md:text-7xl font-bold">
              50<span className="text-blue-500 uppercase">k</span>
            </span>
            <p className="text-black text-2xl font-bold uppercase">
              happy clients
            </p>
          </div>
          <span className="border border-b-2 border-gray-500"></span>

          <div className="">
            <span className="text-black text-3xl sm:text-5xl md:text-7xl font-bold">
              99<span className="text-blue-500">%</span>
            </span>
            <p className="text-black text-2xl font-bold uppercase">
              customer satisfaction
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cta;

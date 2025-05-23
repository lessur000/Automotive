import React from "react";
import styles from "../../../styles/twStyles";
import Location1 from "/Location.jpg";
import Location2 from "/Location2.jpg";
import { FaLocationDot, IoIosCall } from "../../ui/icons";

const Locations = () => {
  return (
    <div className={`${styles.paddings}  space-y-20`}>
      <div className="mx-auto text-center text-white space-y-5  md:max-w-[600px] ">
        <span className="text-blue-500 uppercase font-semibold text-xl">
          locations
        </span>
        <h1 className="font-extrabold uppercase text-3xl md:text-5xl/tight mx-auto ">
          We have a Car workshop near you
        </h1>
        <p>
          Imperdiet tristique non urna iaculis adipiscing tristique consequat
          quam aliquam imperdiet gravida vestibulum eget amet et id ut.
        </p>
      </div>
      {/* Location1 */}
      <div className="">
        <div className="border border-white flex flex-col md:flex-row  overflow-hidden  md:h-[471px] lg:h-[471px] w-fit mx-auto">
          <div className={`${styles.paddings} text-white space-y-5`}>
            <h1 className="text-2xl md:text-4xl lg:text-6xl font-extrabold uppercase">
              Philippines
            </h1>
            <p className="max-w-[600px] lg:text-xl">
              Mauris id velit sit dignissim faucibus erat quam tincidunt ac
              laoreet malesuada sollicitudin dolor viverra lobortis dolor
              sagittis sed laoreet mi bibendum sit nisi etiam quam nisi eget
              tellus justo ac congue diam rhoncus ac.
            </p>
            {/* icons */}
            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <FaLocationDot size={30} />
                <h6 className="text-3xl">Manila</h6>
              </div>
              <div className="flex items-center gap-4">
                <IoIosCall size={30} />
                <h6 className="text-3xl">#03298</h6>
              </div>
            </div>
          </div>
          <img src={Location1} className="md:w-[300px] lg:w-full h-[300px] md:h-full object-cover" />
        </div>
      </div>

      {/* Location2 */}
      <div className="">
        <div className="border border-white flex flex-col md:flex-row  overflow-hidden h-[700px] md:h-[471px] lg:h-[471px] w-fit mx-auto">
        <img src={Location2} className="md:w-[300px] lg:w-full h-[300px] md:h-full object-cover" />
          <div className={`${styles.paddings} text-white space-y-5`}>
            <h1 className="text-2xl md:text-4xl lg:text-6xl font-extrabold uppercase">
              Philippines
            </h1>
            <p className="max-w-[600px] lg:text-xl">
              Mauris id velit sit dignissim faucibus erat quam tincidunt ac
              laoreet malesuada sollicitudin dolor viverra lobortis dolor
              sagittis sed laoreet mi bibendum sit nisi etiam quam nisi eget
              tellus justo ac congue diam rhoncus ac.
            </p>
            {/* icons */}
            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <FaLocationDot size={30} />
                <h6 className="text-3xl">Manila</h6>
              </div>
              <div className="flex items-center gap-4">
                <IoIosCall size={30} />
                <h6 className="text-3xl">#03298</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Locations;

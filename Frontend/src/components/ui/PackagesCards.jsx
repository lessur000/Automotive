import React from "react";
import { FaCheck } from "../ui/icons";
import { Link } from "react-router-dom";

const PackagesCards = ({ PackagesCardsData }) => {
  return (
    <div className="grid lg:grid-cols-3 gap-4">
      {PackagesCardsData.map((packages) => {
        return (
          <div key={packages.id}>
            <div className="border border-white">
              <img src={packages.image} className="w-full" />
              <div className="text-white m-5 sm:m-10  space-y-10">
                <h6 className="uppercase font-bold text-3xl md:text-3xl xl:text-4xl">
                  {packages.name}
                </h6>
                <p className="font-light">{packages.description}</p>
                <div className="space-y-5">
                  <h4 className="text-xl font-bold uppercase">
                    What is included:
                  </h4>
                  <ul className="list-image flex flex-col space-y-2">
                    {packages.included.map((includes, index) => (
                      <li
                        key={index}
                        className="flex items-center gap-4 text-2xl font-sans"
                      >
                        <FaCheck size={20} className="fill-blue-500" />
                        {includes}
                      </li>
                    ))}
                  </ul>
                  <span className="font-bold text-3xl sm:text-4xl">
                    ₱ {packages.price.toLocaleString()}
                  </span>
                </div>
                <div className="border border-white py-4 px-3 text-center cursor-pointer hover:bg-blue-500">
                  <Link className="uppercase font-semibold text-2xl">Get Started</Link>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PackagesCards;

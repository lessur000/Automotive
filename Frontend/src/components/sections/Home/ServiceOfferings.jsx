
import ServiceCardsData from "../../../data/ServiceCardsData";
import styles from "../../../styles/twStyles";

import PrimaryButton from "../../ui/PrimaryButton";
import ServiceCards from "../../ui/ServiceCards";

const ServiceOfferings = () => {
 
  
  return (
    <>
      <div className={`${styles.paddings} space-y-5 mt-20`}>
        <div className="text-center max-w-[768px] mx-auto uppercase px-4">
          <span className="text-blue-500 font-semibold text-xl">Services</span>
          <h1 className="text-white font-extrabold text-3xl sm:text-5xl mt-5">
            We offer a wide range of car services
          </h1>
        </div>
        <ServiceCards ServiceCardsData={ServiceCardsData}/>
        <div className="flex justify-center mt-20">
        <PrimaryButton />
      </div>
      </div>

      
    </>
  );
};

export default ServiceOfferings;

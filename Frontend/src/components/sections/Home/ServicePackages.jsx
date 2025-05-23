import { Link } from "react-router-dom";
import styles from "../../../styles/twStyles";
import PackagesCards from '../../ui/PackagesCards'
import PackagesCardsData from '../../../data/PackageCardsData'


const ServicePackages = () => {
  return (
    <div className={`${styles.paddings} container mx-auto space-y-20 mt-20`}>
      <div className="flex flex-col lg:flex-row justify-between text-center space-y-5 lg:space-y-0">
        <div className="lg:text-left">
          <span className="text-blue-500 uppercase font-semibold">
            Packages
          </span>
          <h1 className="text-white uppercase font-bold text-2xl sm:text-5xl xl:text-7xl lg:max-w-[500px] xl:max-w-[700px]">
            packages for all types of cars
          </h1>
        </div>
        <Link to={"/AppointmentContact"} className="bg-blue-500 hover:bg-blue-600 uppercase font-semibold text-md l text-white py-3 px-6 h-fit transition-colors inline-flex items-center self-end mx-auto lg:mx-0">
          Schedule an appointment
        </Link>
      </div>
      <PackagesCards PackagesCardsData={PackagesCardsData}/>
    </div>  
  );
};

export default ServicePackages;

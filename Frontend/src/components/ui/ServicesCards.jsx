import { Link } from "react-router-dom";
import ServiceCards from "../../data/ServiceCardsData";
import styles from "../../styles/twStyles";

const ServicesCards = () => {
  return (
    <div className="relative">
      <div className=" absolute -right-45 top-100 uppercase text-gray-500/40 text-9xl -rotate-90">
        Services
      </div>
      <div className={`${styles.paddings} container mx-auto py-10 relative`}>
        <div className="text-white text-center mt-30 space-y-4">
          <h1 className="text-blue-500 uppercase text-2xl">Our Services</h1>
          <h4 className="font-bold uppercase text-3xl md:text-5xl max-w-[500px] mx-auto">
            We have a wide range of services
          </h4>
          <p className="font-light ">
            We are a team of experts in various fields, ready to help you with
            your needs.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mx-auto  pt-30">
          {ServiceCards.map((service) => (
            <div key={service.id}>
              <div className="overflow-hidden rounded-lg relative group">
                {/* gradient with images */}
                <div className="group-hover:scale-105 duration-500 ease-in-out">
                  <div className="absolute top-0 w-full h-full bg-black/50 z-10" />
                  <img
                    src={service.image}
                    alt={service.name}
                    className="h-[500px] w-full object-cover"
                  />
                </div>
                <div className="absolute top-0 py-5 px-5 lg:px-10 z-20">
                  <span className="text-white font-bold text-5xl">
                    0{service.id}
                  </span>
                  {/* Name & Description & Button */}
                  <div className="space-y-10 mt-20 sm:mt-40">
                    <h4 className="text-white font-bold text-3xl lg:text-4xl">
                      {service.name}
                    </h4>
                    <p className="text-white break-all">
                      {service.description}
                    </p>
                    <Link className="border border-white py-2 px-4 text-white uppercase font-semibold hover:bg-white hover:text-black">
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesCards;

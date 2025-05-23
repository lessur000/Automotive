import styles from "../../../styles/twStyles";
import FeaturedCard from "../../ui/FeaturedCard";
import FeaturedCards from "../../../data/FeaturedCardsData";

const HeroBanner = () => {
  return (
    <div className={`${styles.paddings} container mx-auto`}>
      <div className="mt-30 text-center space-y-5">
        <span className="text-blue-500 uppercase font-semibold text-xl sm:text-2xl">
          More About us
        </span>
        <h1 className="text-white uppercase font-bold  text-4xl sm:text-4xl md:text-6xl lg:max-w-[900px] mx-auto">
          wE CARE FOR YOUR VEHICLE AS IF IT WAS OUR OWN
        </h1>
        <p className="text-white uppercase font-light text-sm max-w-[600px] mx-auto">
          Facilisi condimentum convallis sit in pretium est risus ut proin diam
          egestas donec id tempus aliquam tellus consequat lacus suscipit
          pulvinar risus consequat massa ut viverra.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-16 xl:max-w-[1000px] mx-auto">
        {FeaturedCards.map((card, index) => {
          return <FeaturedCard key={index} card={card} />;
        })}
      </div>
    </div>
  );
};

export default HeroBanner;

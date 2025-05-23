import FeaturedCards from "../../../data/FeaturedCardsData";
import styles from "../../../styles/twStyles";
import ServicesCards from "./ServicesCards";

const WhyChooseUs = () => {
  return (
    <>
      <div className="bg-white py-20  relative">
        <div className={`${styles.paddings}`}>
          <div className="text-center max-w-[400px] mx-auto space-y-5">
            <h1 className="text-blue-500 font-semibold uppercase text-xl">
              Why Us
            </h1>
            <h4 className="text-4xl text-black uppercase font-bold">
              Why choosing our services
            </h4>
            <p className="text-xl text-black font-light">
              Imperdiet tristique non urna iaculis adipiscing tristique
              consequat quam aliquam imperdiet gravida vestibulum eget amet et
              id ut.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-10 mt-20">
            {FeaturedCards.map((card, index) => {
              return <ServicesCards key={index} card={card} />;
            })}
          </div>
        </div>
        {/* borderbox */}
        <div className="absolute top-0 -left-4 h-[70px] w-[52%] bg-black transform -skew-x-20 box-border" />
      </div>
    </>
  );
};

export default WhyChooseUs;

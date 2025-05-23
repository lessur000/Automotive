import { IconContext } from "react-icons";

const ServicesCards = ({ card }) => {
  const IconComponent = card.icon;
  return (
    <div className="max-w-[400px] ">
      <IconContext.Provider
        value={{ className: "text-black text-8xl mb-4 mx-auto" }}
      >
        <IconComponent />
      </IconContext.Provider>
      <div className="text-center">
        <h3 className="text-black text-xl md:text-3xl xl:text-2xl font-bold mb-2 uppercase">
          {card.name}
        </h3>
        <p className="text-black mt-7">{card.description}</p>
      </div>
    </div>
  );
};

export default ServicesCards;

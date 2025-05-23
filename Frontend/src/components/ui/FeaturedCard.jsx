import { IconContext } from "react-icons";

const FeaturedCard = ({ card }) => {
  const IconComponent = card.icon;

  return (
    <div className="bg-white/10  p-6 rounded-lg backdrop-blur-sm border border-white/20">
      <IconContext.Provider
        value={{ className: "text-blue-500 text-8xl mb-4 mx-auto" }}
      >
        <IconComponent />
      </IconContext.Provider>
      <div className="text-center">
        <h3 className="text-white text-xl md:text-3xl xl:text-4xl font-bold mb-2 uppercase">
          {card.name}
        </h3>
        <p className="text-white/80 mt-7">{card.description}</p>
      </div>
    </div>
  );
};

export default FeaturedCard;

import { Link } from "react-router-dom";
import styles from "../../../styles/twStyles";
import TeamCardsData from "../../../data/TeamCardsData";
import TeamCards from "../../ui/TeamCards";

const TeamCta = () => {
  return (
    <div className={`${styles.paddings} space-y-5 mt-35  container mx-auto`}>
      <div className="flex flex-col lg:flex-row justify-between text-center space-y-10 lg:space-y-0">
        <div className="text-center mx-auto lg:mx-0 lg:text-left">
          <span className="text-blue-500 uppercase">Our team</span>
          <h4 className="text-white font-bold text-4xl sm:text-5xl md:text-5xl lg:text-6xl uppercase md:max-w-[500px] lg:max-w-[700px]">
            Meet our amazing team of mechanics
          </h4>
        </div>
        <Link to={"/Team"} className="text-white border border-white py-3 px-7 uppercase w-fit h-fit mx-auto lg:mx-0 mt-auto">
          Join our team
        </Link>
      </div>
      <TeamCards TeamCardsData={TeamCardsData}/>
    </div>
  );
};

export default TeamCta;

import { Link } from "react-router-dom";
import Rusgine from "/Logo.png";

const Footer = () => {
  return (
    <div className="container mx-auto border-gray-500/50 border-t-2 ">
      <div className="flex justify-between items-center">
        <Link>
          <img
            src={Rusgine}
            alt="Logo"
            className="w-[100px] sm:w-[130px] h-auto"
          />
        </Link>
        <div>
          <span className="text-white">
            Copyright © Rusgine | Designed by Russel Olaco{" "}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;

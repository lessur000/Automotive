import { Link } from "react-router-dom";
import styles from "../../../styles/twStyles";

const AboutUs = () => {
  return (
    <div
      className={`${styles.paddings} mx-auto text-white text-center md:max-w-[900px] space-y-10 h-[600px] mt-30`}
    >
      <span className="text-blue-500 text-2xl uppercase">About us</span>
      <h1 className="font-bold text-4xl md:text-6xl lg:text-7xl uppercase">
        The story behind our car workshop
      </h1>
      <p>
        At vitae commodo amet libero tortor blandit risus condimet mauris cras
        arcu tortor aenean turpis massa mauris ac mi facilisi cursus aliquam a
        ac maecenas purus amet sapien id suspendisse porttitor tempor at donec
        massa nibh.
      </p>
      <Link to={"/AboutUs"} className="border border-white py-2 px-4 uppercase">
        More about us
      </Link>
    </div>
  );
};

export default AboutUs;

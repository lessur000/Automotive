import styles from "../../../styles/twStyles";
import PrimaryButton from "../../ui/PrimaryButton";

const Hero = () => {
  return (
    <div className={`${styles.paddings} relative z-10`}>
      <div className="mt-10">
        <div className="space-y-5 max-w-[500px] lg:max-w-xl">
          <span className="text-blue-500 uppercase font-semibold">
            About us
          </span>
          <h1 className="text-white uppercase font-bold text-4xl sm:text-6xl">
            About our Services
          </h1>
          <p className="text-white">
            At vitae commodo amet libero tortor blandit risus condimentum
            mauris. cras arcu tortor aenean turpis massa mauris ac mi facilisi
            cursus aliquam a ac maecenas purus amet sapien id suspendisse.
          </p>
          <PrimaryButton />
        </div>
      </div>
    </div>
  );
};

export default Hero;

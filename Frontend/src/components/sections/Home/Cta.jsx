import styles from "../../../styles/twStyles";

const Cta = () => {
  return (
    <div className={`${styles.paddings}`}>
      <div>
        <div className="flex flex-col md:flex-row justify-center gap-10 md:gap-20 space-y-5 text-center">
          <div className="">
            <span className="text-white text-3xl sm:text-5xl md:text-7xl font-bold">
              20<span className="text-blue-500">+</span>
            </span>
            <p className="text-white text-2xl font-bold uppercase">
              Years of service
            </p>
          </div>
          <span className="border border-b-2 border-gray-500 "></span>

          <div className="">
            <span className="text-white text-3xl sm:text-5xl md:text-7xl font-bold">
              50<span className="text-blue-500 uppercase">k</span>
            </span>
            <p className="text-white text-2xl font-bold uppercase">
              happy clients
            </p>
          </div>
          <span className="border border-b-2 border-gray-500"></span>

          <div className="">
            <span className="text-white text-3xl sm:text-5xl md:text-7xl font-bold">
              99<span className="text-blue-500">%</span>
            </span>
            <p className="text-white text-2xl font-bold uppercase">
              customer satisfaction
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cta;

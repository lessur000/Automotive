import { Link } from "react-router-dom";

const PrimaryButton = () => {
  return (
    <div className="flex items-center gap-5">
      <Link
        to={"/AppointmentContact"}
        className="bg-blue-500 uppercase text-white py-2 px-5 text-xs sm:text-xl"
      >
        Schedule an Appointment
      </Link>
      <Link
        to={"/OurServices"}
        className="border border-white uppercase text-white py-2 px-3 text-xs sm:text-xl"
      >
        Browse Services
      </Link>
    </div>
  );
};

export default PrimaryButton;

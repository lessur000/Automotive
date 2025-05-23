import { Link } from "react-router-dom";
import styles from "../../../styles/twStyles";
import Mechanic from "/Mechanic2.jpg";

const AppointmentCta = () => {
  return (
    <div
      className="bg-top-left lg:h- mt-20 relative overflow-hidden bg-cover"
      style={{
        backgroundImage: `url(${Mechanic})`,
      }}
    >
      <div className={`${styles.paddings} flex justify-start`}>
        <div className="space-y-8 max-w-[600px] text-left">
          <span className="text-blue-500 uppercase text-2xl font-semibold block">
            Why us
          </span>
          <h1 className="text-white font-bold text-4xl md:text-7xl leading-tight">
            What makes us
            <br />
            different?
          </h1>
          <p className="text-white font-light text-lg">
            Lorem ipsum dolor sit Appointment consectetur justo scelerisque
            lacinia mollis ultrices sapien vel nisl at ac sollicitudin est risus
            nisl interdum nam enim ac porta eu lacus cum odio vitae arcu enim
            tellus platea in ultrices habitant sit egestas in et massa
            pellentesque morbi non at dui sed imperdiet id natoque porttitor
            eget.
          </p>
          <div className="pt-4">
            <Link to={"/AppointmentContact"} className="bg-blue-500 hover:bg-blue-600  font-semibold text-md md:text-2xl text-white py-4 px-8 ">
              Schedule an Appointment
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentCta;

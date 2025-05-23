import { Link } from "react-router-dom";
import Mechanic from "/Mechanic3.jpeg";

const VisitUs = () => {
  return (
    <div
      style={{ backgroundImage: `url(${Mechanic})` }}
      className="bg-left bg-cover bg-no-repeat h-[500px] md:h-[600px] relative z-0"
    >
      <div className="bg-black/50 absolute top-0 w-full h-full z-10 flex items-center justify-end">
        <div className="text-white z-20 space-y-4 md:space-y-6 max-w-[90%] md:max-w-[600px] px-4 md:px-10 text-left ">
          <span className="text-blue-500 uppercase text-xl md:text-2xl font-semibold block">
            Visit us
          </span>
          <h1 className="text-white font-bold text-3xl md:text-5xl lg:text-6xl leading-tight">
            Get in touch<br />with our team<br />today
          </h1>
          <p className="text-white font-light text-base md:text-lg">
            At vitae commodo amet libero tortor blandit risus<br />
            condimentum mauris cras arcu tortor aenean<br />
            turpis massa color sit amet
          </p>
          <div className="pt-4 md:pt-6">
            <Link to={"/AppointmentContact"} className="bg-blue-500 hover:bg-blue-600 uppercase font-semibold text-xl md:text-2xl text-white py-3 px-6 md:py-4 md:px-8 transition-colors inline-flex items-center">
              Schedule an Appointment
              <span className="ml-2 text-xl md:text-2xl">→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisitUs;
import styles from "../../../styles/twStyles";
import AppointmentForm from "../../forms/AppointmentForm";
import Header from "../../layout/Header";
import Locations from '../../sections/Home/Locations'
import FAQs from "./FAQs";
import Footer from '../../layout/Footer'

const AppointmentContact = () => {
  return (
    <>
      <Header />
      <div className={`${styles.paddings} container mx-auto`}>
        <div className="flex flex-col items-center mt-[15%] space-y-5">
          <span className="text-blue-500 font-bold uppercase text-xl">Schedule an appointment</span>
          <h1 className="uppercase text-white text-5xl font-bold">Get in touch today</h1>
          <p className="text-white font-light max-w-[450px] text-center">
            At vitae commodo amet libero tortor blandit risus condimentum
            mauris. cras arcu tortor aenean turpis massa mauris.
          </p>
        </div>
        {/* Form */}
        <AppointmentForm />
      </div>
      <Locations />
      <FAQs />
      <Footer />
    </>
  );
};

export default AppointmentContact;

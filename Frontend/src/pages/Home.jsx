import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import AboutUs from "../components/sections/Home/AboutUs";
import AppointmentCta from "../components/sections/Home/AppointmentCta";
import Cta from "../components/sections/Home/Cta";
import Hero from "../components/sections/Home/Hero";
import Locations from "../components/sections/Home/Locations";
import ServiceOfferings from "../components/sections/Home/ServiceOfferings";
import ServicePackages from "../components/sections/Home/ServicePackages";
import TeamCta from "../components/sections/Home/TeamCta";
import VisitUs from "../components/sections/Home/VisitUs";

const Home = () => {
  return (
    <>
      <div className="overflow-hidden">
        <Header />
        <Hero />
      </div>
      <Cta />
      <ServiceOfferings />
      <AppointmentCta />
      <AboutUs />
      <VisitUs />
      <TeamCta />
      <Locations />
      <ServicePackages />
      <Footer />
    </>
  );
};

export default Home;

import Header from "../components/layout/Header";
import Cta from "../components/sections/AboutUs/Cta";
import Hero from "../components/sections/AboutUs/Hero";
import HeroBanner from "../components/sections/AboutUs/HeroBanner";
import TeamCta from "../components/sections/Home/TeamCta";
import Hero2 from "/Engine.png";
import Footer from "../components/layout/Footer";

const About = () => {
  return (
    <>
      <Header />
      <main className="pt-20 relative">
        <Hero />
        <img
          src={Hero2}
          className="absolute top-0 right-0 mt-110 sm:mt-115 lg:mt-0 w-full lg:w-[488px] h-[300px] sm:h-[450px] lg:h-[700px] xl:w-[800px] xl:h-[1000px] object-left  object-cover"
          alt="Engine"
        />
      </main>
      <Cta />
      {/* HeroBanner */}
      <div className="relative overflow-hidden">
        <HeroBanner />
        <div className="absolute top-0 -right-4 h-[70px] w-[52%] bg-white transform -skew-x-20 box-border" />
      </div>
      {/* Our team */}
      <TeamCta />
      {/* Footer*/}
      <Footer />
    </>
  );
};

export default About;

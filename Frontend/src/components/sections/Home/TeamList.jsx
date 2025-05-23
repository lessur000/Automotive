import Header from "../../layout/Header";
import TeamMemberCard from "./TeamMemberCard";
import TeamCardsData from "../../../data/TeamCardsData";
import styles from "../../../styles/twStyles";
import Footer from "../../layout/Footer";

const TeamList = () => {
  return (
    <>
      <Header />
      <section className={`${styles.paddings} container mx-auto`}>
        <div className="text-center space-y-5 pt-25 lg:pt-30">
          <h1 className="text-white font-bold uppercase text-4xl md:text-6xl">Our team</h1>
          <p className="text-white font-light text-xl max-w-[650px] mx-auto">
            At vitae commodo amet libero tortor blandit risus condimentum
            mauris. cras arcu tortor aenean turpis massa mauris ac mi facilisi
            cursus aliquam a ac.
          </p>
          <TeamMemberCard TeamCardsData={TeamCardsData} />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default TeamList;

import { useParams } from "react-router-dom";
import Header from "../../layout/Header";
import TeamCards from "../../../data/TeamCardsData";
import styles from "../../../styles/twStyles";
import { FaFacebook, FaInstagram, FaLinkedinIn } from "../../ui/icons";
import Footer from "../../layout/Footer";

const TeamMemberProfile = () => {
  const { name } = useParams();

  const member = TeamCards.find((member) => member.name === name);

  if (!member) {
    return <div className="text-white mt-100">Team Member not Found</div>;
  }

  return (
    <>
      <Header />
      <div className={`${styles.paddings} pt-15`}>
        <div className={`${styles.paddings} bg-white lg:w-1/2 h-auto mx-auto mt-40 py-10`}>
          <div className="pt-5">
            {/* images */}
            <img
              src={member.image}
              alt={member.name}
              className="rounded-full h-[170px] w-[170px] object-cover object-top mx-auto "
            />
            {/* name & social media */}
            <div className="text-center space-y-5 mt-10">
              <h4 className="uppercase font-bold text-4xl">{name}</h4>
              <div className="flex items-center justify-center gap-4">
                <FaFacebook size={30} className="fill-black" />
                <FaInstagram size={30} className="fill-black" />
                <FaLinkedinIn size={30} className="fill-black" />
              </div>
            </div>
            {/* About */}
            <div className="mt-10">
              {/* border */}
              <div className="border-t-2 border-gray-500/50 " />
              <div className="mt-10 space-y-5">
                <h2 className="font-bold uppercase text-4xl">About {name}</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default TeamMemberProfile;

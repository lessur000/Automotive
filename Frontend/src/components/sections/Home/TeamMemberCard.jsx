import { Link } from "react-router-dom";

const TeamMemberCard = ({ TeamCardsData }) => {
  return (
    <div className="grid lg:grid-cols-3 gap-4">
      {TeamCardsData.map((team) => {
        return (
          <div key={team.id}>
            <div className="relative group overflow-hidden">
              {/* Images */}
              <img
                src={team.image}
                className="ww-full h-[700px] object-top object-cover group-hover:scale-125 transition duration-600"
              />
              {/* gradient/button */}
              <div className="absolute hover:bg-black/50 top-0 z-30 w-full h-full flex items-center justify-center duration-600 transition group">
                <Link
                  to={`/Team/${team.name}`}
                  className="bg-white hidden group-hover:block cursor-pointer py-2 px-4 rounded uppercase font-bold"
                >
                  Profile
                </Link>
              </div>
              {/* Name/Position */}
              <div className="absolute inset-0 flex flex-col items-center justify-end pb-5 text-white z-10">
                <div className="text-center space-y-3">
                  <h1 className="font-bold text-4xl uppercase">{team.name}</h1>
                  <span className="font-semibold text-xl uppercase">
                    {team.position}
                  </span>
                </div>
              </div>
              <div className="gradient2"></div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TeamMemberCard;

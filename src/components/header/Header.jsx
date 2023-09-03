import { useContext } from "react";
import { MatchDetailsContext } from "../../context/matchDetailsContext/MatchDetailsContext";

const Header = () => {
  const { matchesDetails, loading } = useContext(MatchDetailsContext);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!matchesDetails.match || !matchesDetails.match.description) {
    return <p>Please wait while we are preparing the data for you!</p>;
  }

  return (
    <section>
      <h1 className="font-bold relative z-10 mb-3">
        {matchesDetails.match.description} PREDICTION, TIPS & STATS
      </h1>
      <div className="bg-main-image bg-cover relative">
        <span className="absolute inset-0 bg-white opacity-80 z-0"></span>
        <div className="p-4 relative z-10 text-center">
          <a
            href="https://footyaccumulators.com/predictions/premier-league"
            className="font-semibold underline"
          >
            Premier League
          </a>
          <p>Full Time</p>
        </div>
        <div className="flex justify-around">
          <div className="flex items-center text-white relative z-10">
            <div>
              <img
                src="https://cdn.fantasyiteam.com/bethub/teams/150x150/4dsgumo7d4zupm2ugsvm4zm4d.png"
                alt="Arsenal badge"
                className="w-28 h-28"
              />
              <p className="text-black text-center font-semibold mt-2">
                Arsenal
              </p>
            </div>
            <p className="text-black bg-white p-1 ml-4">
              {matchesDetails.match.liveData.matchDetails.scores.total.away}
            </p>
          </div>
          <div className="flex flex-row-reverse items-center p-4 text-white relative z-10">
            <div>
              <img
                src="https://cdn.fantasyiteam.com/bethub/teams/150x150/hzqh7z0mdl3v7gwete66syxp.png"
                alt="Fulham badge"
                className="w-28 h-28"
              />
              <p className="text-black text-center font-semibold mt-2">
                Fulham
              </p>
            </div>
            <p className="text-black bg-white p-1 mr-4">
              {matchesDetails.match.liveData.matchDetails.scores.total.away}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;

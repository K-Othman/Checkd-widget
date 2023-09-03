import { useContext } from "react";
import { MatchDetailsContext } from "../../../context/matchDetailsContext/MatchDetailsContext";

const FHCards = () => {
  const { matchesDetails } = useContext(MatchDetailsContext);

  if (
    !matchesDetails ||
    !matchesDetails.match ||
    !matchesDetails.match.liveData ||
    !matchesDetails.match.liveData.lineups
  ) {
    return <p>Please wait while we are preparing the data for you!</p>;
  }

  const yellowHomeCardStat =
    matchesDetails.match.liveData.lineups.home.stats.find(
      (stat) => stat.type === "totalYellowCard" && stat.fh
    );

  const redHomeCardStat = matchesDetails.match.liveData.lineups.home.stats.find(
    (stat) => stat.type === "totalRedCard" && stat.fh
  );

  const yellowAwayCardStat =
    matchesDetails.match.liveData.lineups.away.stats.find(
      (stat) => stat.type === "totalYellowCard" && stat.fh
    );

  const redAwayCardStat = matchesDetails.match.liveData.lineups.home.stats.find(
    (stat) => stat.type === "totalRedCard" && stat.fh
  );

  const homeYellowCards = yellowHomeCardStat
    ? Number(yellowHomeCardStat.fh)
    : 0;
  const awayYellowCards = yellowAwayCardStat
    ? Number(yellowAwayCardStat.fh)
    : 0;

  const homeRedCards = redHomeCardStat ? Number(redHomeCardStat.fh) : 0;
  const awayRedCards = redAwayCardStat ? Number(redAwayCardStat.fh) : 0;

  return (
    <div className="flex justify-between mt-3">
      <div className="flex">
        <div className="flex gap-2 items-center">
          <p>{homeYellowCards}</p>
          <span>
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              height="1em"
              width="1em"
              className="text-yellow-500 text-xl"
            >
              <path d="M20 20H4a2 2 0 01-2-2V6a2 2 0 012-2h16a2 2 0 012 2v12a2 2 0 01-2 2z" />
            </svg>
          </span>
        </div>
        <div className="flex ml-2 gap-2 items-center">
          <p>{homeRedCards}</p>
          <span>
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              height="1em"
              width="1em"
              className="text-red-500 text-xl"
            >
              <path d="M20 20H4a2 2 0 01-2-2V6a2 2 0 012-2h16a2 2 0 012 2v12a2 2 0 01-2 2z" />
            </svg>
          </span>
        </div>
      </div>

      <div className="flex flex-1 justify-end">
        <div className="flex gap-2 items-center">
          <p>{awayYellowCards}</p>
          <span>
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              height="1em"
              width="1em"
              className="text-yellow-500 text-xl"
            >
              <path d="M20 20H4a2 2 0 01-2-2V6a2 2 0 012-2h16a2 2 0 012 2v12a2 2 0 01-2 2z" />
            </svg>
          </span>
        </div>
        <div className="flex ml-2 gap-2 items-center">
          <p>{awayRedCards}</p>
          <span>
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              height="1em"
              width="1em"
              className="text-red-500 text-xl"
            >
              <path d="M20 20H4a2 2 0 01-2-2V6a2 2 0 012-2h16a2 2 0 012 2v12a2 2 0 01-2 2z" />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
};

export default FHCards;

import { useContext } from "react";
import { MatchDetailsContext } from "../../context/matchDetailsContext/MatchDetailsContext";
import { Progress } from "@material-tailwind/react";

const Shots = () => {
  const { matchesDetails } = useContext(MatchDetailsContext);

  if (
    !matchesDetails ||
    !matchesDetails.match ||
    !matchesDetails.match.liveData
  ) {
    return <p>Please wait while we are preparing the data for you!</p>;
  }

  const homeStat = matchesDetails.match.liveData.lineups.home.stats.find(
    (stat) => stat.type === "totalScoringAtt" && stat.value
  );
  const awayStat = matchesDetails.match.liveData.lineups.away.stats.find(
    (stat) => stat.type === "totalScoringAtt" && stat.value
  );

  if (!homeStat || !awayStat) {
    return <p>Possession data not available for this match.</p>;
  }

  const homeShots = Number(homeStat.value);
  const awayShots = Number(awayStat.value);

  const totalShots = homeShots + awayShots;
  const homeShotsPercentage = (homeShots / totalShots) * 100;
  const awayShotsPercentage = (awayShots / totalShots) * 100;

  return (
    <div>
      <div>
        <h3 className="text-center mt-4 mb-1">Shots</h3>
        <div className="flex gap-4">
          <div className="flex-1">
            <span className="flex mb-2">{homeShots}</span>
            <Progress value={homeShotsPercentage} color="amber" />
          </div>
          <div className="flex-1">
            <span className="flex justify-end mb-2">{awayShots}</span>
            <Progress value={awayShotsPercentage} color="green" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shots;

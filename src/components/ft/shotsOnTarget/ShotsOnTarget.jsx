import { useContext } from "react";

import { Progress } from "@material-tailwind/react";
import { MatchDetailsContext } from "../../../context/matchDetailsContext/MatchDetailsContext";

const ShotsOnTarget = () => {
  const { matchesDetails } = useContext(MatchDetailsContext);

  if (
    !matchesDetails ||
    !matchesDetails.match ||
    !matchesDetails.match.liveData
  ) {
    return <p>Please wait while we are preparing the data for you!</p>;
  }

  const homeStat = matchesDetails.match.liveData.lineups.home.stats.find(
    (stat) => stat.type === "ontargetScoringAtt" && stat.value
  );
  const awayStat = matchesDetails.match.liveData.lineups.away.stats.find(
    (stat) => stat.type === "ontargetScoringAtt" && stat.value
  );

  if (!homeStat || !awayStat) {
    return <p>Possession data not available for this match.</p>;
  }

  const homeOnTargetShots = Number(homeStat.value);
  const awayOnTargetShots = Number(awayStat.value);

  const totalShots = homeOnTargetShots + homeOnTargetShots;
  const homeOnTargetShotsPercentage = (homeOnTargetShots / totalShots) * 100;
  const awayShotsOnTargetPercentage = (awayOnTargetShots / totalShots) * 100;

  return (
    <div>
      <div>
        <h3 className="text-center mt-4">Shots on Target</h3>
        <div className="flex gap-4">
          <div className="flex-1">
            <span className="flex mb-2">{homeOnTargetShots}</span>
            <Progress value={homeOnTargetShotsPercentage} color="amber" />
          </div>
          <div className="flex-1">
            <span className="flex justify-end mb-2">{awayOnTargetShots}</span>
            <Progress value={awayShotsOnTargetPercentage} color="green" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShotsOnTarget;

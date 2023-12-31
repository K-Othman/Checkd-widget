import { useContext } from "react";

import { Progress } from "@material-tailwind/react";
import { MatchDetailsContext } from "../../../context/matchDetailsContext/MatchDetailsContext";

const SHCorners = () => {
  const { matchesDetails } = useContext(MatchDetailsContext);

  if (
    !matchesDetails ||
    !matchesDetails.match ||
    !matchesDetails.match.liveData
  ) {
    return <p>Please wait while we are preparing the data for you!</p>;
  }

  const homeStat = matchesDetails.match.liveData.lineups.home.stats.find(
    (stat) => stat.type === "wonCorners" && stat.sh
  );
  const awayStat = matchesDetails.match.liveData.lineups.away.stats.find(
    (stat) => stat.type === "wonCorners" && stat.sh
  );

  if (!homeStat || !awayStat) {
    return <p>Possession data not available for this match.</p>;
  }

  const homeCorener = Number(homeStat.sh);
  const awaycorner = Number(awayStat.sh);

  const totalCorners = homeCorener + awaycorner;
  const HomeCornersPercentage = (homeCorener / totalCorners) * 100;
  const awayCornersPercentage = (awaycorner / totalCorners) * 100;

  return (
    <div>
      <div>
        <h3 className="text-center mt-4">Corners</h3>
        <div className="flex gap-4">
          <div className="flex-1">
            <span className="flex mb-2">{homeCorener}</span>
            <Progress value={HomeCornersPercentage} color="amber" />
          </div>
          <div className="flex-1">
            <span className="flex justify-end mb-2">{awaycorner}</span>
            <Progress value={awayCornersPercentage} color="green" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SHCorners;

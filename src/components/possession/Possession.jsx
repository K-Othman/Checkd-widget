import { useContext } from "react";
import { MatchDetailsContext } from "../../context/matchDetailsContext/MatchDetailsContext";
import { Progress } from "@material-tailwind/react";

const Possession = () => {
  const { matchesDetails } = useContext(MatchDetailsContext);

  if (
    !matchesDetails ||
    !matchesDetails.match ||
    !matchesDetails.match.liveData
  ) {
    return <p>Please wait while we are preparing the data for you!</p>;
  }

  const homeStat = matchesDetails.match.liveData.lineups.home.stats.find(
    (stat) => stat.type === "possessionPercentage" && stat.value
  );
  const awayStat = matchesDetails.match.liveData.lineups.away.stats.find(
    (stat) => stat.type === "possessionPercentage" && stat.value
  );

  if (!homeStat || !awayStat) {
    return <p>Possession data not available for this match.</p>;
  }

  const homePossession = Number(homeStat.value);
  const awayPossession = Number(awayStat.value);

  return (
    <div>
      <div>
        <h3 className="text-center mt-4">Possession</h3>
        <div className="flex gap-4">
          <div className="flex-1">
            <span className="flex justify-end mb-2">{homePossession}%</span>
            <Progress value={homePossession} color="amber" />
          </div>
          <div className="flex-1">
            <span className="flex justify-end mb-2">{awayPossession}%</span>
            <Progress value={awayPossession} color="green" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Possession;

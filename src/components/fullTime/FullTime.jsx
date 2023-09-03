import { useContext } from "react";
import { MatchDetailsContext } from "../../context/matchDetailsContext/MatchDetailsContext";
import { Progress } from "@material-tailwind/react";

const FullTime = () => {
  const { matchesDetails } = useContext(MatchDetailsContext);

  if (!matchesDetails.match) {
    return <p>Please wait while we are preparing the data for you!</p>;
  }
  console.log(
    matchesDetails.match.liveData.lineups.home.stats
      .filter((r) => r.fh && r.type === "possessionPercentage")
      .find((f) => f.fh).fh
  );
  console.log(
    matchesDetails.match.liveData.lineups.home.stats.find(
      (stat) => stat.type === "possessionPercentage" && stat.fh
    ).fh,
    "<<<"
  );
  return (
    <section>
      <div>
        <h3>Possession</h3>
        <div>
          <Progress value={50} color="amber" />
        </div>
      </div>
    </section>
  );
};

export default FullTime;

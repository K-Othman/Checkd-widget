// import { useContext } from "react";
// import { MatchDetailsContext } from "../../context/matchDetailsContext/MatchDetailsContext";

// const Cards = () => {
//   const { matchesDetails } = useContext(MatchDetailsContext);

//   if (
//     !matchesDetails ||
//     !matchesDetails.match ||
//     !matchesDetails.match.liveData ||
//     !matchesDetails.match.liveData.lineups
//   ) {
//     return <p>Please wait while we are preparing the data for you!</p>;
//   }

//   const homeStat = matchesDetails.match.liveData.lineups.home.stats.find(
//     (stat) => stat.type === "totalYellowCard" && stat.value
//   );

//   if (!homeStat) {
//     return <p>Yellow 0</p>;
//     // Handle the case where homeStat is undefined
//     // For example, display a message or assign a default value
//   } else {
//     // Process the data as normal
//     const homeCards = Number(homeStat.value);
//     console.log(homeCards, "!!");
//   }

//   //   const homeCards = matchesDetails.match.liveData.lineups.home.stats;

//   //   const homeStat = homeCards
//   //     ? homeCards.find((stat) => stat.type === "totalYellowCard" && stat.value)
//   //     : 0;
//   const awayStat = matchesDetails.match.liveData.lineups.away.stats.find(
//     (stat) => stat.type === "totalYellowCard" && stat.value
//   );
//   console.log(awayStat, "<<<");

//   if (!homeStat || !awayStat) {
//     return <p>No Data to return</p>;
//   }

//   console.log(matchesDetails.match.liveData.lineups.away.stats, "<<");

//   const hCards = Number(homeStat.value);
//   const awayCards = Number(awayStat.value);
//   console.log(hCards, awayCards, "<<<");

//   return (
//     <div>
//       <div>
//         <p>Yellow {hCards}</p>
//       </div>
//       <div>
//         <p>Yellow {awayCards}</p>
//       </div>
//     </div>
//   );
// };

// export default Cards;

import { useContext } from "react";
import { MatchDetailsContext } from "../../context/matchDetailsContext/MatchDetailsContext";

const Cards = () => {
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
      (stat) => stat.type === "totalYellowCard" && stat.value
    );

  const redHomeCardStat = matchesDetails.match.liveData.lineups.home.stats.find(
    (stat) => stat.type === "totalRedCard" && stat.value
  );

  const yellowAwayCardStat =
    matchesDetails.match.liveData.lineups.away.stats.find(
      (stat) => stat.type === "totalYellowCard" && stat.value
    );

  const redAwayCardStat = matchesDetails.match.liveData.lineups.home.stats.find(
    (stat) => stat.type === "totalRedCard" && stat.value
  );

  const homeYellowCards = yellowHomeCardStat
    ? Number(yellowHomeCardStat.value)
    : 0;
  const awayYellowCards = yellowAwayCardStat
    ? Number(yellowAwayCardStat.value)
    : 0;

  const homeRedCards = redHomeCardStat ? Number(redHomeCardStat.value) : 0;
  const awayRedCards = redAwayCardStat ? Number(redAwayCardStat.value) : 0;

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
      <div></div>
    </div>
  );
};

export default Cards;

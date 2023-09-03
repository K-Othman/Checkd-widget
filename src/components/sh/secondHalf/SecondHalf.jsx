import SHPossession from "../shPoessession/SHPossession";
import SHShots from "../shShots/SHShots";
import SHShotsOnTarget from "../shShotsOnTarget/SHShotsOnTarget";

const SecondHalf = () => {
  return (
    <section className="p-2 pb-5">
      <SHPossession />
      <SHShots />
      <SHShotsOnTarget />
      {/* <FHCorners /> */}
      {/* <FHCards /> */}
    </section>
  );
};

export default SecondHalf;

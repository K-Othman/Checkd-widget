import FHCards from "../fhCards/FHCards";
import FHCorners from "../fhCorners/FHCorners";
import FHPossession from "../fhPossession/FHPossession";
import FHShots from "../fhShots/FHShots";
import FHShotsOnTarget from "../fhShotsOnTarget/FHShotsOnTarget";

const FirstHalf = () => {
  return (
    <section className="p-2 pb-5">
      <FHPossession />
      <FHShots />
      <FHShotsOnTarget />
      <FHCorners />
      <FHCards />
    </section>
  );
};

export default FirstHalf;

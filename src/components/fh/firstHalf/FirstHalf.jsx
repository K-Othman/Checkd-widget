import FHPossession from "../fhPossession/FHPossession";
import FHShots from "../fhShots/FHShots";

const FirstHalf = () => {
  return (
    <section className="p-2 pb-5">
      <FHPossession />
      <FHShots />
      {/* <ShotsOnTarget /> */}
      {/* <Corners /> */}
      {/* <Cards /> */}
    </section>
  );
};

export default FirstHalf;

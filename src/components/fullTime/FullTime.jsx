import Cards from "../cards/Cards";
import Corners from "../corners/Corners";
import Possession from "../possession/Possession";
import Shots from "../shots/Shots";
import ShotsOnTarget from "../shotsOnTarget/ShotsOnTarget";

const FullTime = () => {
  return (
    <section className="p-2 pb-5">
      <Possession />
      <Shots />
      <ShotsOnTarget />
      <Corners />
      <Cards />
    </section>
  );
};

export default FullTime;

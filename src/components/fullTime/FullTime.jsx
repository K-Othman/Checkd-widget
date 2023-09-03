import Possession from "../possession/Possession";
import Shots from "../shots/Shots";
import ShotsOnTarget from "../shotsOnTarget/ShotsOnTarget";

const FullTime = () => {
  return (
    <section className="px-2">
      <Possession />
      <Shots />
      <ShotsOnTarget />
    </section>
  );
};

export default FullTime;

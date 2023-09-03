import { Tab } from "@headlessui/react";
import FullTime from "../FT/fullTime/FullTime";
import FirstHalf from "../fh/firstHalf/FirstHalf";
import SecondHalf from "../sh/secondHalf/SecondHalf";

const Stats = () => {
  return (
    <section className="bg-white">
      <h2 className="text-center font-bold my-3 pt-4">General</h2>
      <div>
        <Tab.Group>
          <Tab.List className="text-center flex justify-center gap-3">
            <Tab className="tab2 rounded-3xl px-3 py-1">Full Time</Tab>
            <Tab className="tab2 rounded-3xl px-3 py-1">1st Half</Tab>
            <Tab className="tab2 rounded-3xl px-3 py-1">2nd Half</Tab>
          </Tab.List>
          <Tab.Panels>
            <Tab.Panel>
              <FullTime />
            </Tab.Panel>
            <Tab.Panel>
              <FirstHalf />
            </Tab.Panel>
            <Tab.Panel>
              <SecondHalf />
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </section>
  );
};

export default Stats;

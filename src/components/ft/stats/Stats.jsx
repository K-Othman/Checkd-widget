import { Tab } from "@headlessui/react";
import FullTime from "../fullTime/FullTime";

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
            <Tab.Panel>Content 2</Tab.Panel>
            <Tab.Panel>Content 3</Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </section>
  );
};

export default Stats;

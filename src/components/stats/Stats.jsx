import { Tab } from "@headlessui/react";

const Stats = () => {
  return (
    <section>
      <h2 className="text-center font-bold">General</h2>
      <div>
        <Tab.Group>
          <Tab.List className="text-center">
            <Tab>Tab 1</Tab>
            <Tab>Tab 2</Tab>
            <Tab>Tab 3</Tab>
          </Tab.List>
          <Tab.Panels>
            <Tab.Panel>Content 1</Tab.Panel>
            <Tab.Panel>Content 2</Tab.Panel>
            <Tab.Panel>Content 3</Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </section>
  );
};

export default Stats;

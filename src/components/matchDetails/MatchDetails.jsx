import { Tab } from "@headlessui/react";

const MatchDetails = () => {
  const defaultTabIndex = 1;
  return (
    <section className="w-[100%] bg-[#F2F3F4]">
      <Tab.Group defaultIndex={defaultTabIndex}>
        <Tab.List className="flex font-bold">
          <Tab className="tab">Overview</Tab>
          <Tab className="tab">General</Tab>
          <Tab className="tab">ARS</Tab>
          <Tab className="tab">FUL</Tab>
          <Tab className="tab">Player</Tab>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel>Content 1</Tab.Panel>
          <Tab.Panel>Content 2</Tab.Panel>
          <Tab.Panel>Content 3</Tab.Panel>
          <Tab.Panel>Content 4</Tab.Panel>
          <Tab.Panel>Content 5</Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </section>
  );
};

export default MatchDetails;

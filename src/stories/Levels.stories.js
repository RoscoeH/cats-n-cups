import React from "react";
import Scaffold from "../components/Scaffold";
import Levels from "../pages/Levels";

export default {
  title: "Pages/Levels",
  component: Levels,
  decorators: [(Story) => <Scaffold>{Story()}</Scaffold>],
};

const Template = (args) => <Levels {...args} />;

export const Default = Template.bind({});
Default.args = {
  levels: [
    { level: "1", stars: 3 },
    { level: "2", stars: 2 },
    { level: "3", stars: 2 },
    { level: "4", stars: 1 },
    { level: "5", stars: 2 },
    { level: "6", stars: 0 },
    { level: "7" },
    { locked: true },
    { locked: true },
    { locked: true },
    { locked: true },
    { locked: true },
  ],
};

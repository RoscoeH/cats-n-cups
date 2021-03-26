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
    { number: "1", stars: 3 },
    { number: "2", stars: 2 },
    { number: "3", stars: 2 },
    { number: "4", stars: 1 },
    { number: "5", stars: 2 },
    { number: "6", stars: 0 },
    { number: "7" },
    { locked: true },
    { locked: true },
    { locked: true },
    { locked: true },
    { locked: true },
  ],
};

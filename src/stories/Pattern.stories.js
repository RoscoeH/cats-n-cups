import React from "react";

import Pattern from "../components/Pattern";

export default {
  title: "Components/Pattern",
  component: Pattern,
};

const Template = (args) => (
  <svg width="64" height="64" style={{ border: "1px solid black" }}>
    <Pattern {...args} />
  </svg>
);

export const Black = Template.bind({});
Black.args = { color: "black" };

export const Blue = Template.bind({});
Blue.args = { color: "blue" };

export const Gray = Template.bind({});
Gray.args = { color: "gray" };

export const White = Template.bind({});
White.args = { color: "white" };

export const Cream = Template.bind({});
Cream.args = { color: "cream" };

export const Amber = Template.bind({});
Amber.args = { color: "amber" };

export const Cinnamon = Template.bind({});
Cinnamon.args = { color: "cinnamon" };

export const Chocolate = Template.bind({});
Chocolate.args = { color: "chocolate" };

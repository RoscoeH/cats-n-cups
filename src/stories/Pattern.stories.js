import React from "react";

import Pattern from "../components/Pattern";

export default {
  title: "Components/Pattern",
  component: Pattern,
};

const Template = (args) => (
  <svg width="64" height="64">
    <Pattern />
  </svg>
);

export const Black = Template.bind({});

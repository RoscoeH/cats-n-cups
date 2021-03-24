import React from "react";
import StarBar from "../components/StarBar";

export default {
  title: "Components/StarBar",
  component: StarBar,
};

const Template = (args) => <StarBar {...args} />;

export const Empty = Template.bind({});
Empty.args = { stars: 0 };

export const Half = Template.bind({});
Half.args = { stars: 1.5 };

export const Full = Template.bind({});
Full.args = { stars: 3 };

export const MoreStars = Template.bind({});
MoreStars.args = { max: 5, stars: 3.5 };

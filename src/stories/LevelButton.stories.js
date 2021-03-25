import React from "react";
import LevelButton from "../components/LevelButton";

export default {
  title: "Components/LevelButton",
  component: LevelButton,
};

const Template = (args) => <LevelButton {...args} />;

export const Locked = Template.bind({});
Locked.args = { level: 9, locked: true };

export const Unplayed = Template.bind({});
Unplayed.args = { level: 8 };

export const OneStar = Template.bind({});
OneStar.args = { level: 7, stars: 1 };

export const TwoStar = Template.bind({});
TwoStar.args = { level: 6, stars: 2 };

export const ThreeStar = Template.bind({});
ThreeStar.args = { level: 5, stars: 3 };

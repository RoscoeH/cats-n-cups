import React from "react";
import LevelButton from "../components/LevelButton";

export default {
  title: "Components/LevelButton",
  component: LevelButton,
};

const Template = (args) => <LevelButton {...args} />;

export const Locked = Template.bind({});
Locked.args = { number: 9, locked: true };

export const Unplayed = Template.bind({});
Unplayed.args = { number: 8 };

export const OneStar = Template.bind({});
OneStar.args = { number: 7, stars: 1 };

export const TwoStar = Template.bind({});
TwoStar.args = { number: 6, stars: 2 };

export const ThreeStar = Template.bind({});
ThreeStar.args = { number: 5, stars: 3 };

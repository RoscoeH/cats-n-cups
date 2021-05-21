import React from "react";
import WiggleText from "../components/WiggleText";

export default {
  title: "Components/WiggleText",
  component: WiggleText,
};

const Template = ({ children, ...args }) => (
  <WiggleText {...args}>{children}</WiggleText>
);

export const Default = Template.bind({});
Default.args = {
  children: "I'm wigglin",
};

export const Title = Template.bind({});
Title.args = {
  children: "Cats in Cups",
  sx: { fontSize: 3 },
};

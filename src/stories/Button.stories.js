import React from "react";
import Button from "../components/Button";

export default {
  title: "Components/Button",
  component: Button,
};

const Template = ({ children, ...args }) => (
  <Button {...args}>{children}</Button>
);

export const Default = Template.bind({});
Default.args = {
  children: "Default",
};

export const Large = Template.bind({});
Large.args = {
  children: "Large",
  large: true,
};

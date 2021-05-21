import React from "react";
import Button from "./Button";

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
  large: false,
  secondary: false,
};

export const Large = Template.bind({});
Large.args = {
  children: "Large",
  large: true,
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: "Secondary",
  secondary: true,
};

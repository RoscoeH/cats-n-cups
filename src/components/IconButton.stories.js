import React from "react";
import IconButton, { ICONS } from "../components/IconButton";

export default {
  title: "Components/IconButton",
  component: IconButton,
  argTypes: {
    icon: {
      control: {
        type: "select",
        options: ICONS,
      },
    },
  },
};

const Template = (args) => <IconButton {...args} />;

export const Default = Template.bind({});
Default.args = { icon: "menu" };

import React from "react";
import WinModal from "../components/WinModal";

export default {
  title: "Components/WinModal",
  component: WinModal,
};

const Template = (args) => <WinModal {...args} />;

export const Default = Template.bind({});
Default.args = { time: "1m 42s", moves: 37, stars: 2.5 };

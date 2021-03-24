import React from "react";
import GameMenu from "../components/GameMenu";

export default {
  title: "Components/GameMenu",
  component: GameMenu,
};

const Template = (args) => <GameMenu {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: [
    { label: "Home", onClick: () => console.log("home") },
    { label: "Levels", onClick: () => console.log("levels") },
    { label: "Restart", onClick: () => console.log("restart") },
  ],
};

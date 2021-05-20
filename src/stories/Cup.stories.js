import React from "react";
import { DndProvider } from "react-dnd";
import { TouchBackend } from "react-dnd-touch-backend";

import Cup from "../components/Cup";

export default {
  title: "Components/Cup",
  component: Cup,
  decorators: [
    (Story) => <DndProvider backend={TouchBackend}>{Story()}</DndProvider>,
  ],
};

const Template = (args) => <Cup {...args} />;

export const Default = Template.bind({});

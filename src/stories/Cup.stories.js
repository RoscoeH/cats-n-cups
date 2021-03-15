import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import Cup from "../components/Cup";

export default {
  title: "Components/Cup",
  component: Cup,
  decorators: [
    (Story) => (
      <DndProvider backend={HTML5Backend}>
        <Story />
      </DndProvider>
    ),
  ],
};

const Template = (args) => <Cup {...args} />;

export const Default = Template.bind({});

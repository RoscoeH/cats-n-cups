import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import Cat, { MOODS } from "../components/Cat";

export default {
  title: "Components/Cat",
  component: Cat,
  argTypes: {
    mood: {
      control: {
        type: "select",
        options: MOODS,
      },
    },
  },
  decorators: [
    (Story) => (
      <DndProvider backend={HTML5Backend}>
        <Story />
      </DndProvider>
    ),
  ],
};

const Template = (args) => <Cat {...args} />;

export const Happy = Template.bind({});
Happy.args = { mood: MOODS.HAPPY };

export const Grumpy = Template.bind({});
Grumpy.args = { mood: MOODS.GRUMPY };

export const Sleepy = Template.bind({});
Sleepy.args = { mood: MOODS.SLEEPY };

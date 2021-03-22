import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import { Cat, MOODS } from "../components/Cat";

export default {
  title: "Components/Cat",
  component: Cat,
  argTypes: {
    size: {
      control: {
        type: "range",
        min: 8,
        max: 512,
      },
    },
  },
  decorators: [
    (Story) => <DndProvider backend={HTML5Backend}>{Story()}</DndProvider>,
  ],
};

const Template = (args) => <Cat {...args} />;

export const Happy = Template.bind({});
Happy.args = { size: 128, legs: true, tail: true, grumpy: false };

// export const Grumpy = Template.bind({});
// Grumpy.args = { mood: MOODS.GRUMPY };

// export const Sleepy = Template.bind({});
// Sleepy.args = { mood: MOODS.SLEEPY };

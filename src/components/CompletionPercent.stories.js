import React from "react";
import CompletionPercent from "./CompletionPercent";

export default {
  title: "Components/CompletionPercent",
  component: CompletionPercent,
};

const Template = (args) => <CompletionPercent {...args} />;

export const InProgress = Template.bind({});
InProgress.args = { percent: 61 };

export const NoProgress = Template.bind({});
NoProgress.args = { percent: 0 };

export const Complete = Template.bind({});
Complete.args = { percent: 100 };

export const CappedAt100 = Template.bind({});
CappedAt100.args = { percent: 111 };

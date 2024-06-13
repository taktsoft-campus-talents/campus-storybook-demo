import { Button } from "./Button";
import { fn } from "@storybook/test";

export default {
  component: Button,
  argTypes: {
    size: {
      control: "select",
      options: ["small", "medium", "large"],
    },
  },
};

export const Primary = {
  args: {
    children: "Hallo Storybook",
    onClick: fn(),
  },
};

export const Secondary = {
  args: {
    children: "Ich bin der Secondary Button",
    variant: "secondary",
  },
};

export const LargeDisabled = {
  args: {
    children: "Mich kann man gar nicht klicken 😥",
    size: "large",
    disabled: true,
    onClick: fn(),
  },
};

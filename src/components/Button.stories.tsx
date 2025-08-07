import type { Meta } from "@storybook/react-vite";
import Button from "./Button";
import { expect, fn, userEvent, within } from "storybook/test";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  args: {
    label: "Click Me",
    onClick: fn(),
  },
};
export default meta;
type Story = typeof meta;
export const Default: Story = {
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button", {
      name: args.label,
    });

    // Click the button
    await step("Click the button", async () => {
      await userEvent.click(button);
    });

    await step("Check if onClick is called", async () => {
      expect(args.onClick).toHaveBeenCalledTimes(1);
    });
  },
};
export const Disabled: Story = {
  args: {
    disabled: true,
  },
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button", {
      name: args.label,
    });

    // Click the button
    await step("Click the disabled button", async () => {
      await userEvent.click(button);
    });

    await step("Check if onClick is not called", async () => {
      expect(args.onClick).not.toHaveBeenCalled();
    });
  },
};

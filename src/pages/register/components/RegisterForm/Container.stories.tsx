import type { Meta, StoryObj } from "@storybook/react-vite";
import { Container as RegisterForm } from "./Container";

const meta: Meta<typeof RegisterForm> = {
  title: "Pages/Register/Components/RegisterForm/Container",
  component: RegisterForm,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof RegisterForm>;
export const Default: Story = {};

import { describe, expect, test, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Presentational } from "../Presentational";
import { useRegisterForm } from "../hooks";

const Template = () => {
  const { checked, form, handelCheck } = useRegisterForm();
  const handleSubmit = vi.fn();

  return (
    <Presentational
      checked={checked}
      form={form}
      handleChecked={handelCheck}
      onSubmit={handleSubmit}
    />
  );
};
describe("TextInput component", () => {
  test("should render the input element correctly", () => {
    render(<Template />);

    const userNameInput = screen.getByPlaceholderText("type username");
    const emailInput = screen.getByPlaceholderText("type email");
    const checkBox = screen.getByRole("checkbox");
    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
    expect(checkBox).toBeInTheDocument();
    expect(userNameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
  });

  test("can maake request by form", async () => {
    const user = userEvent.setup();
    render(<Template />);

    const userNameInput = screen.getByPlaceholderText("type username");
    const emailInput = screen.getByPlaceholderText("type email");
    const checkBox = screen.getByRole("checkbox");
    const button = screen.getByRole("button");

    await user.type(userNameInput, "test");
    await user.type(emailInput, "mail");
    await user.click(checkBox);
    await user.click(button);
  });
});

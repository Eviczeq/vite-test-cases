import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { RegisterForm } from "..";
import userEvent from "@testing-library/user-event";

describe("TextInput component", () => {
  test("should render the input element correctly", () => {
    render(<RegisterForm />);

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
    render(<RegisterForm />);

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

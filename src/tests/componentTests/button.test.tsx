import { describe, expect, test } from "vitest";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import type { ButtonProps } from "../../components/Button";
import Button from "../../components/Button";

describe("Button test", () => {
  const props: ButtonProps = {
    label: "Button",
    onClick: () => alert("Button Clicked"),
    disabled: false,
  };
  const user = userEvent.setup();

  test("Buttonがレンダリングできる", () => {
    render(<Button {...props} />);
    expect(screen.getByRole("button"));
  });

  test("Buttonがクリックできる", async () => {
    render(<Button {...props} />);
    await user.click(screen.getByRole("button"));
  });

  test("Buttonがdisabledのときクリックできない", async () => {
    render(<Button {...props} disabled />);
    const button = screen.getByRole("button");
    await user.click(button);

    expect(button).toBeDisabled();
  });
  test("Buttonのlabelが表示される", () => {
    render(<Button {...props} />);
    expect(screen.getByText("Button"));
  });
});

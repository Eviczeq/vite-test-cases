import { describe, expect, test } from "vitest";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import type { ButtonProps } from "../../components/Button";

describe("Button test", () => {
  const props: ButtonProps = {
    label: "Button",
    onClick: () => alert("Button Clicked"),
    disabled: false,
  };
  const user = userEvent.setup();

  test("Buttonがレンダリングできる", () => {
    render(<button {...props} />);
    expect(screen.getByRole("button"));
  });

  test("Buttonがクリックできる", async () => {
    render(<button {...props} />);
    await user.click(screen.getByRole("button"));
  });

  test("Buttonがdisabledのときクリックできない", async () => {
    render(<button {...props} disabled />);
    const button = screen.getByRole("button");
    await user.click(button);

    expect(button).toBeDisabled();
  });
  test("Buttonのlabelが表示される", () => {
    render(<button {...props} />);
    const button = screen.getByRole("button");
    expect(button).toHaveAttribute("label", "Button");
  });
});

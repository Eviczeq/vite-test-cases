import { describe, expect, test, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import type { ButtonProps } from "../../components/Button";
import Button from "../../components/Button";

describe("Button test", () => {
  const props: ButtonProps = {
    label: "Button",
    onClick: () => console.log("Button Clicked"),
    disabled: false,
  };
  const user = userEvent.setup();

  test("Buttonがレンダリングできる", () => {
    render(<Button {...props} />);
    expect(screen.getByRole("button"));
  });

  test("Buttonがクリックできる", async () => {
    const onClick = vi.fn();
    render(<Button {...props} onClick={onClick} />);
    const button = screen.getByRole("button");

    await user.click(button);

    expect(onClick).toBeCalledTimes(1);
  });

  test("Buttonがdisabledのときクリックできない", async () => {
    render(<Button {...props} disabled />);
    const button = screen.getByRole("button");
    const onClick = vi.fn();

    await user.click(button);

    expect(onClick).toBeCalledTimes(0);
  });

  test("Buttonのlabelが表示される", () => {
    render(<Button {...props} />);
    expect(screen.getByText("Button"));
  });
});

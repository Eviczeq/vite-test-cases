import { describe, expect, test, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import Button from "../../components/Button";

describe("Button test", () => {
  const handleClick = vi.fn();

  test("Buttonがレンダリングできる", () => {
    render(<Button label="Button" onClick={handleClick} />);
    expect(screen.getByRole("button"));
  });

  test("Buttonがクリックできる", async () => {
    const user = userEvent.setup();

    render(<Button label="Button" onClick={handleClick} />);
    const button = screen.getByRole("button");

    await user.click(button);

    expect(handleClick).toBeCalledTimes(1);
  });

  test("Buttonがdisabledのときクリックできない", async () => {
    render(<Button label="Button" onClick={handleClick} disabled={true} />);
    const button = screen.getByRole("button");
    const user = userEvent.setup();

    await user.click(button);

    expect(handleClick).not.toBeCalled();
  });

  test("Buttonのlabelが表示される", () => {
    render(<Button label="Button" onClick={handleClick} />);
    expect(screen.getByText("Button"));
  });

  test("タブでフォーカスできる,エンターキーでクリックできる", async () => {
    render(<Button label="Button" onClick={handleClick} />);
    const button = screen.getByRole("button");
    const user = userEvent.setup();

    await user.tab();
    expect(button).toHaveFocus();

    await user.keyboard("{Enter}");
    expect(handleClick).toBeCalled();
  });
});

import { describe, expect, test, vi } from "vitest";
import type { CheckboxProps } from "../../components/Checkbox";
import userEvent from "@testing-library/user-event";
import Checkbox from "../../components/Checkbox";
import { render, screen } from "@testing-library/react";
import { useState } from "react";

const props: CheckboxProps = {
  label: "label",
  id: "id",
  onChange: vi.fn(),
  checked: false,
  disabled: false,
};

describe("Checkbox test", () => {
  const Element = () => {
    const [checked, setChecked] = useState(false);
    return (
      <Checkbox label="label" id="id" onChange={setChecked} checked={checked} />
    );
  };

  test("Checkboxがレンダリングできる", () => {
    render(<Checkbox {...props} />);

    expect(screen.getByRole("checkbox"));
    expect(screen.getByText("label"));
  });
  test("クリックでonChangeが呼ばれる", async () => {
    const user = userEvent.setup();
    render(<Checkbox {...props} />);
    const checkbox = screen.getByRole("checkbox");

    await user.click(checkbox);

    expect(props.onChange).toBeCalled();
  });

  test("Checkboxのチェックができる", async () => {
    const user = userEvent.setup();
    render(<Element />);
    const checkbox = screen.getByRole("checkbox");

    expect(checkbox).not.toBeChecked();

    await user.click(checkbox);

    expect(checkbox).toBeChecked();
  });
  test("CheckboxDisableのときチェックできない", async () => {
    render(<Checkbox {...props} disabled />);
    const checkbox = screen.getByRole("checkbox");
    const user = userEvent.setup();

    await user.click(checkbox);

    expect(checkbox).not.toBeChecked();
  });
  test("タブでフォーカスできる,エンターキーでクリックできる", async () => {
    render(<Element />);
    const element = screen.getByRole("checkbox");
    const user = userEvent.setup();

    await user.tab();
    expect(element).toHaveFocus();

    await user.keyboard("[Space]");
    expect(element).toBeChecked();
  });
});

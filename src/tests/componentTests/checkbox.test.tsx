import { describe, expect, test } from "vitest";
import type { CheckboxProps } from "../../components/Checkbox";
import userEvent from "@testing-library/user-event";
import Checkbox from "../../components/Checkbox";
import { render, screen } from "@testing-library/react";

describe("Checkbox test", () => {
  const props: CheckboxProps = {
    label: "label",
    id: "id",
  };
  const user = userEvent.setup();

  test("Checkboxがレンダリングできる", () => {
    render(<Checkbox {...props} />);

    expect(screen.getByRole("checkbox"));
  });

  test("Checkboxのチェックができる", async () => {
    render(<Checkbox {...props} />);

    const checkbox = screen.getByRole("checkbox");
    await user.click(checkbox);

    expect(checkbox).toBeChecked();
  });
  test("CheckboxDisableのときチェックできない", async () => {
    render(<Checkbox {...props} disabled />);
    const checkbox = screen.getByRole("checkbox");
    await user.click(checkbox);

    expect(checkbox).not.toBeChecked();
  });
});

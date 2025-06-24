import { describe, expect, test, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import Radio from "../../components/Radio";
import type { RadioProps } from "../../components/Radio";
const handleClick = vi.fn();

const props: RadioProps = {
  label: "男性",
  name: "男性",
  value: "male",
  onChange: handleClick,
};
describe("Radio test", () => {
  test("Radioがレンダリングできる", () => {
    render(<Radio {...props} />);

    expect(screen.getByRole("radio"));
    expect(screen.getByText("男性"));
  });

  test("Radioのチェックができる", async () => {
    render(<Radio {...props} />);
    const user = userEvent.setup();

    const radio = screen.getByRole("radio");
    await user.click(radio);

    expect(props.onChange).toBeCalled();
  });

  test("RadioDisableのときチェックできない", async () => {
    const user = userEvent.setup();

    render(<Radio {...props} disabled={true} />);
    const radio = screen.getByRole("radio");

    await user.click(radio);

    expect(props.onChange).not.toBeCalled();
  });

  test("タブでフォーカスできる,Spaceキーでクリックできる", async () => {
    render(<Radio {...props} name="group" />);
    const radio = screen.getByRole("radio");
    const user = userEvent.setup();

    await user.tab();
    expect(radio).toHaveFocus();

    await user.keyboard("[Space]");
    expect(radio).toBeChecked();
  });
});

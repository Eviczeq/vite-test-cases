import { beforeEach, describe, expect, test, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import Radio from "../../components/Radio";
import type { RadioProps } from "../../components/Radio";

describe("Radio test", () => {
  const user = userEvent.setup();
  const handleClick = vi.fn();
  beforeEach(() => {
    handleClick.mockClear();
  });
  const props: RadioProps = {
    label: "label",
    id: "id",
  };
  test("Radioがレンダリングできる", () => {
    render(<Radio {...props} />);

    expect(screen.getByRole("radio")).toBeInTheDocument();
  });

  test("Radioのチェックができる", async () => {
    render(<Radio {...props} />);

    const radio = screen.getByRole("radio");
    await user.click(radio);

    expect(radio).toBeChecked();
  });

  test("RadioDisableのときチェックできない", async () => {
    render(<Radio {...props} disabled />);
    const radio = screen.getByRole("radio");
    await user.click(radio);
    expect(radio).not.toBeChecked();
  });

  //   test("タブでフォーカスできる,エンターキーでクリックできる", async () => {
  //     render(<Radio {...props} name="group" />);
  //     const radio = screen.getByRole("radio");

  //     await user.tab();
  //     expect(radio).toHaveFocus();

  //     await user.keyboard("{Space}");
  //     expect(radio).toBeChecked();
  //   });
});

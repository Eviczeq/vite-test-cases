import { describe, expect, test, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import { Select, type SelectProps } from "../../components/Select";
import { useState } from "react";
const options = [
  { value: "male", label: "男性" },
  { value: "female", label: "女性" },
  { value: "other", label: "その他" },
];
describe("Select test", () => {
  const Template = (props: {
    disabled?: boolean;
    value?: string;
    onChange?: (value: string) => void;
  }) => {
    const [value, setValue] = useState(props.value ?? "");

    const SelectProps: SelectProps = {
      options: options,
      onChange: setValue,
      name: "hoge",
      disabled: props.disabled ?? false,
      value: value,
    };

    return <Select {...SelectProps} />;
  };
  test("Selectがレンダリングできる", () => {
    render(<Template />);
    const element = screen.getByRole("combobox");
    expect(element).toHaveValue("");

    expect(screen.getByText("選択してください"));
  });

  test("初期値が設定されている", () => {
    render(<Template value="female" />);
    expect(screen.getByRole("combobox")).toHaveValue("female");
  });
  test("onChangevalueが変更される", async () => {
    const user = userEvent.setup();
    render(<Template />);
    const element = screen.getByRole("combobox");
    await user.selectOptions(element, ["female"]);
    expect(element).toHaveValue("female");
  });
  test("disabledで選択できない", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<Template onChange={onChange} disabled={true} />);

    const element = screen.getByRole("combobox");
    await user.selectOptions(element, ["female"]);

    expect(onChange).not.toHaveBeenCalled();
  });
  //   test("タブでフォーカスできる,Keyboardで操作できる", async () => {
  //     const user = userEvent.setup();
  //     render(<Template />);
  //     const element = screen.getByRole("combobox");

  //     await user.tab();
  //     expect(element).toHaveFocus();

  //     await user.keyboard("[Space]");
  //     await user.keyboard("[ArrowDown]");
  //     await user.keyboard("[Space]");

  //     expect(element).toHaveValue("male");
  //   });
});

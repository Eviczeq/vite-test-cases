import { describe, expect, test } from "vitest";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import { useState } from "react";
import { RadioGroup, type RadioGroupProps } from "../../components/RadioGroup";
const options = [
  { value: "male", label: "男性" },
  { value: "female", label: "女性" },
  { value: "other", label: "その他" },
];

describe("RadioGroup test", () => {
  const Template = (_props: Pick<RadioGroupProps, "disabled">) => {
    const [value, setValue] = useState("");
    const props: RadioGroupProps = {
      options: options,
      onChange: setValue,
      name: "hoge",
      disabled: _props.disabled ?? false,
    };
    return (
      <>
        <RadioGroup {...props} />
        <div data-testid="selected-value">{value}</div>{" "}
      </>
    );
  };

  test("RadioGroupがレンダリングできる", () => {
    render(<Template />);

    expect(screen.getByTestId("radio-group"));
  });
  test("クリックの時", async () => {
    const user = userEvent.setup();
    render(<Template />);
    const radio = screen.getByRole("radio", { name: "男性" });
    const valueElement = screen.getByTestId("selected-value");
    expect(valueElement).toHaveTextContent("");
    await user.click(radio);

    expect(radio).toHaveAttribute("value", "male");
    expect(valueElement).toHaveTextContent("male");
  });

  test("Disableの時、クリックできない", async () => {
    const user = userEvent.setup();
    render(<Template disabled />);
    const radio = screen.getByRole("radio", { name: "男性" });
    const valueElement = screen.getByTestId("selected-value");
    await user.click(radio);
    expect(valueElement).toHaveTextContent("");
  });
  test("タブでフォーカスできる,Spaceキーでクリックできる", async () => {
    const user = userEvent.setup();
    render(<Template />);
    const radio = screen.getByRole("radio", { name: "男性" });
    const valueElement = screen.getByTestId("selected-value");
    expect(valueElement).toHaveTextContent("");

    await user.tab();
    expect(radio).toHaveFocus();

    await user.keyboard("[Space]");
    expect(valueElement).toHaveTextContent("male");
  });
});

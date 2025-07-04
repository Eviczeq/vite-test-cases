import { describe, expect, test, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import { useState } from "react";
import { TextInput, type TextInputProps } from "../../components/TextInput";

const INPUT_VALUE = "HOGE";
const INITIAL_VALUE = "";
const PLACEHOLDER_TEXT = "入力して下さい";

const Template = (_props: Partial<TextInputProps>) => {
  const [value, setValue] = useState<string>(INITIAL_VALUE);

  const handleChange = (newValue: string) => {
    if (_props.onChange) {
      _props.onChange(newValue);
    } else {
      setValue(newValue);
    }
  };

  const props: TextInputProps = {
    placeholder: PLACEHOLDER_TEXT,
    value: value,
    onChange: handleChange,
    name: "hoge",
    disabled: _props.disabled,
  };

  return (
    <div>
      <TextInput {...props} />
      <p data-testid="textValue">{value}</p>
    </div>
  );
};

describe("TextInput component", () => {
  test("should render the input element correctly", () => {
    render(<Template />);
    const input = screen.getByPlaceholderText(PLACEHOLDER_TEXT);
    expect(input).toBeInTheDocument();
  });

  test("should update value on user input", async () => {
    const user = userEvent.setup();
    render(<Template />);

    const input = screen.getByRole("textbox");
    const valueElement = screen.getByTestId("textValue");

    expect(input).toHaveValue(INITIAL_VALUE);
    expect(valueElement).toHaveTextContent(INITIAL_VALUE);

    await user.type(input, INPUT_VALUE);
    expect(input).toHaveValue(INPUT_VALUE);
    expect(valueElement).toHaveTextContent(INPUT_VALUE);
  });

  test("should not be interactive when disabled", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();

    render(<Template disabled onChange={onChange} />);

    const input = screen.getByRole("textbox");
    const valueElement = screen.getByTestId("textValue");

    expect(input).toBeDisabled();
    await user.type(input, INPUT_VALUE);
    expect(onChange).not.toHaveBeenCalled();
    expect(valueElement).toHaveTextContent(INITIAL_VALUE);
  });
});

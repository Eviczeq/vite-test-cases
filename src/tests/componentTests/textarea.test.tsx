import { describe, expect, test } from "vitest";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import type { TextareaProps } from "../../components/Textarea";
import Textarea from "../../components/Textarea";

describe("Textarea test", () => {
  const props: TextareaProps = {
    label: "label",
    placeholder: "placeholder",
  };
  const user = userEvent.setup();

  test("Textareaがレンダリングできる", () => {
    render(<Textarea {...props} />);
    expect(screen.getByRole("textbox"));
  });

  test("Textareaの入力ができる", async () => {
    render(<Textarea {...props} />);
    const textarea = screen.getByRole("textbox");
    await user.type(textarea, "Hello World");

    expect(textarea).toHaveValue("Hello World");
  });
  test("Textareaのplaceholderが表示される", () => {
    render(<Textarea {...props} />);
    const textarea = screen.getByRole("textbox");
    expect(textarea).toHaveAttribute("placeholder", "placeholder");
  });
});

import { expect, describe, test, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import Card from "../../components/Card";
import userEvent from "@testing-library/user-event";

describe("CardComponent test", () => {
  const props = {
    title: "title",
    description: "description",
    imageUrl: "imageUrl",
    onClick: () => {
      console.log("clicked");
    },
  };
  const user = userEvent.setup();

  test("titleがレンダリングできるか", () => {
    render(<Card {...props} />);
    expect(screen.getByText("title"));
  });

  test("descriptionがレンダリングできるか", () => {
    render(<Card {...props} />);
    expect(screen.getByText("description"));
  });

  test("imageUrlがレンダリングできるか", () => {
    render(<Card {...props} />);
    expect(screen.getByRole("img"));
  });

  test("buttonがレンダリングできるか", () => {
    render(<Card {...props} />);
    expect(screen.getByRole("button"));
  });

  test("buttonがクリックできるか", async () => {
    const onClick = vi.fn();

    render(<Card {...props} onClick={onClick} />);
    const button = screen.getByRole("button");
    await user.click(button);

    expect(onClick).toHaveBeenCalledTimes(1);
  });

  test("disabledをtureにするとボタンがクリック出来なくなること", async () => {
    const onClick = vi.fn();
    const isDisabled = true;

    render(<Card {...props} onClick={onClick} disabled={isDisabled} />);
    const button = screen.getByRole("button");
    await user.click(button);

    expect(onClick).toHaveBeenCalledTimes(0);
  });
});

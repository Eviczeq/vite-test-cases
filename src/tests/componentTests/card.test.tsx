import { expect, describe, test, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import Card from "../../components/Card";

describe("CardComponent test", () => {
  const props = {
    title: "title",
    description: "description",
    imageUrl: "imageUrl",
    onClick: () => {
      console.log("clicked");
    },
  };
  test("titleがレンダリングできるか", () => {
    render(<Card {...props} />);
    expect(screen.getByText("title")).toBeDefined();
  });

  test("descriptionがレンダリングできるか", () => {
    render(<Card {...props} />);
    expect(screen.getByText("description")).toBeDefined();
  });

  test("imageUrlがレンダリングできるか", () => {
    render(<Card {...props} />);
    expect(screen.getByRole("img")).toBeDefined();
  });

  test("buttonがレンダリングできるか", () => {
    render(<Card {...props} />);
    expect(screen.getByRole("button")).toBeDefined();
  });

  test("buttonがクリックできるか", async () => {
    const onClick = vi.fn();

    render(<Card {...props} onClick={onClick} />);

    const button = screen.getByRole("button");

    await fireEvent.click(button);
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  test("disabledをtureにするとボタンがクリック出来なくなること", async () => {
    const onClick = vi.fn();

    render(<Card {...props} onClick={onClick} disabled />);

    const button = screen.getByRole("button");

    await fireEvent.click(button);
    expect(onClick).toHaveBeenCalledTimes(0);
  });
});

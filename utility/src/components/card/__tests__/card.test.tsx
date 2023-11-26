import { render, screen } from "@testing-library/react";
import { Card, CardProps } from "../card";

describe("Card component", () => {
  const defaultProps: CardProps = {
    imageUrl: "url",
    text: "some-text",
  };

  function renderComponent(props?: Partial<CardProps>) {
    render(<Card {...defaultProps} {...props} />);
  }

  function renderComponentWithChildren(props?: Partial<CardProps>) {
    render(
      <Card {...defaultProps} {...props}>
        <span>children</span>
      </Card>
    );
  }

  it("should render avatar and text", () => {
    renderComponent();
    expect(screen.getByRole("img")).toBeInTheDocument();
    expect(screen.getByText(defaultProps.text)).toBeInTheDocument();
  });

  it("should render with children", () => {
    renderComponentWithChildren();
    expect(screen.getByText("children")).toBeInTheDocument();
  });
});

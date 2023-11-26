import { render, screen } from "@testing-library/react";
import { Avatar, AvatarProps } from "../avatar";

describe("Avatar component", () => {
  const defaultProps: AvatarProps = {
    imgProps: { src: "some-src" },
  };

  function renderComponent(props?: Partial<AvatarProps>) {
    render(<Avatar {...defaultProps} {...props} />);
  }

  it("should render with src attribute", () => {
    renderComponent();
    expect(screen.getByRole("img")).toHaveAttribute(
      "src",
      defaultProps.imgProps.src
    );
  });
});

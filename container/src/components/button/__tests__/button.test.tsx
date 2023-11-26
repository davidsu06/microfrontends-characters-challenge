import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button, ButtonProps } from "../button";
import { ThemeProvider } from "styled-components";
import { theme } from "../../../styles/theme";

describe("Button component", () => {
  const onClickMock = jest.fn();

  const defaultProps: ButtonProps = {
    buttonProps: { onClick: onClickMock },
  };

  function renderComponent(props?: Partial<ButtonProps>) {
    render(
      <ThemeProvider theme={theme}>
        <Button {...defaultProps} {...props}>
          some-text
        </Button>
      </ThemeProvider>
    );
  }

  it("should render with children", () => {
    renderComponent();
    expect(screen.getByText("some-text")).toBeInTheDocument();
  });

  it("should invoke onClick callback", async () => {
    renderComponent();
    const button = screen.getByRole("button");
    await userEvent.click(button);

    expect(onClickMock).toHaveBeenCalled();
  });
});

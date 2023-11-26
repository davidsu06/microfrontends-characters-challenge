import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Main } from "../main";
import {
  disneyModuleId,
  rickAndMortyModuleId,
} from "../../../components/modules";
import { useSwitchLanguage } from "../../../hooks/use-switch-language";
import { ThemeProvider } from "styled-components";
import { theme } from "../../../styles/theme";

jest.mock("../../../hooks/use-switch-language");

const mockUseSwitchLanguage = jest.mocked(useSwitchLanguage);

describe("Main component", () => {
  beforeEach(() => {
    mockUseSwitchLanguage.mockReturnValue({
      switchLanguage: jest.fn(),
    });
  });

  function renderComponent() {
    return render(
      <ThemeProvider theme={theme}>
        <Main />
      </ThemeProvider>
    );
  }

  it("should not render any module initially", () => {
    const result = renderComponent();

    expect(
      result.container?.querySelector(`#${disneyModuleId}`)
    ).not.toBeInTheDocument();
    expect(
      result.container?.querySelector(`#${rickAndMortyModuleId}`)
    ).not.toBeInTheDocument();
  });

  it("should render buttons", () => {
    renderComponent();

    expect(
      screen.getByRole("button", { name: /Rick and Morty/ })
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Disney/ })).toBeInTheDocument();
  });

  it("should show Rick and Morty module after clicking button", async () => {
    const result = renderComponent();

    const rickAndMortyButton = screen.getByRole("button", {
      name: /Rick and Morty/,
    });
    await userEvent.click(rickAndMortyButton);

    expect(
      result.container?.querySelector(`#${rickAndMortyModuleId}`)
    ).toBeInTheDocument();
  });

  it("should show Disney module after clicking button", async () => {
    const result = renderComponent();

    const disneyButton = screen.getByRole("button", {
      name: /Disney/,
    });
    await userEvent.click(disneyButton);

    expect(
      result.container?.querySelector(`#${disneyModuleId}`)
    ).toBeInTheDocument();
  });
});

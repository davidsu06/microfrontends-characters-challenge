import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { LanguageSelector } from "../language-selector";
import { useSwitchLanguage } from "../../../hooks";
import { ThemeProvider } from "styled-components";
import { theme } from "../../../styles/theme";
import { LanguageOption } from "../../../locales/i18nConfig";

jest.mock("../../../hooks/use-switch-language");

const mockUseSwitchLanguage = jest.mocked(useSwitchLanguage);

describe("LanguageSelector component", () => {
  const switchLanguageMock = jest.fn();

  beforeEach(() => {
    mockUseSwitchLanguage.mockReturnValue({
      switchLanguage: switchLanguageMock,
    });
  });

  function renderComponent() {
    return render(
      <ThemeProvider theme={theme}>
        <LanguageSelector />
      </ThemeProvider>
    );
  }

  it("should render the selected language", () => {
    renderComponent();
    expect(screen.getByRole("button")).toHaveTextContent("English");
  });

  it("should render the list of languages", () => {
    renderComponent();
    expect(screen.getAllByRole("listitem").length).toBe(
      Object.values(LanguageOption).length
    );
  });

  it("should call switchLanguage callback when clicking a list item", async () => {
    renderComponent();

    const item = screen.getAllByRole("listitem")[1];
    await userEvent.click(item);

    expect(switchLanguageMock).toHaveBeenCalledWith(LanguageOption.ES);
  });
});

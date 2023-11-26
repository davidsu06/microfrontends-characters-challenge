import { render, screen } from "@testing-library/react";
import { CharacterList } from "../character-list";
import { useLoadCharacters } from "../../../../hooks";
import { mockCharacterItems } from "../../../../tests/mocks";
import { I18nextProvider } from "react-i18next";
import { i18nInstance } from "../../../../locales/i18nConfig";

jest.mock("../../../../hooks");

const mockUseLoadCharacters = jest.mocked(useLoadCharacters);

describe("CharacterList component", () => {
  beforeEach(() => {
    mockUseLoadCharacters.mockReturnValue({
      characters: mockCharacterItems,
      isLoading: false,
    });
  });

  function renderComponent() {
    return render(
      <I18nextProvider i18n={i18nInstance}>
        <CharacterList />
      </I18nextProvider>
    );
  }

  it("should render the list with items", () => {
    renderComponent();
    expect(screen.getAllByTestId("card").length).toBe(2);
  });

  it("should render a spinner when loading", () => {
    mockUseLoadCharacters.mockReturnValue({
      characters: mockCharacterItems,
      isLoading: true,
    });

    renderComponent();
    expect(screen.getByTestId("spinner")).toBeInTheDocument();
  });
});

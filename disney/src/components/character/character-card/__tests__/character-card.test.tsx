import { render, screen } from "@testing-library/react";
import { CharacterCard, CharacterCardProps } from "../character-card";
import { mockCharacterItems } from "../../../../tests/mocks";
import { I18nextProvider } from "react-i18next";
import { i18nInstance } from "../../../../locales/i18nConfig";

describe("CharacterCard component", () => {
  const defaultProps: CharacterCardProps = {
    character: mockCharacterItems[0],
  };

  function renderComponent(props?: Partial<CharacterCardProps>) {
    render(
      <I18nextProvider i18n={i18nInstance}>
        <CharacterCard {...defaultProps} {...props} />
      </I18nextProvider>
    );
  }

  it("should render film value", () => {
    renderComponent();
    expect(screen.getByText(/Film1/)).toBeInTheDocument();
  });

  it("should render tvShow if there is no film value", () => {
    renderComponent({
      character: { ...mockCharacterItems[0], films: [], tvShows: ["Show1"] },
    });

    expect(screen.getByText(/Show1/)).toBeInTheDocument();
  });
});

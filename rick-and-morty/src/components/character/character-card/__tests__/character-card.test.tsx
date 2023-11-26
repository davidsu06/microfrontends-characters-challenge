import { render, screen } from "@testing-library/react";
import { CharacterCard, CharacterCardProps } from "../character-card";
import { mockCharacterItems } from "../../../../tests/mocks";
import { I18nextProvider } from "react-i18next";
import { i18nInstance } from "../../../../locales/i18nConfig";

describe("CharacterCard component", () => {
  const defaultProps: CharacterCardProps = {
    character: mockCharacterItems[1],
  };

  function renderComponent(props?: Partial<CharacterCardProps>) {
    render(
      <I18nextProvider i18n={i18nInstance}>
        <CharacterCard {...defaultProps} {...props} />
      </I18nextProvider>
    );
  }

  it("should render gender value", () => {
    renderComponent();
    expect(screen.getByText(/Male/)).toBeInTheDocument();
  });
});

import { renderHook } from "@testing-library/react";
import { useSwitchLanguage } from "../use-switch-language";
import { LanguageOption, i18nInstance } from "../../locales/i18nConfig";
import { useSwitchLanguage as useSwitchRickAndMortyLanguage } from "rickAndMorty/RickAndMortyModule";
import { useSwitchLanguage as useSwitchDisneyLanguage } from "disney/DisneyModule";

jest.mock("../../locales/i18nConfig");

const mockSwitchLangRickAndMorty = jest.mocked(useSwitchRickAndMortyLanguage);
const mockSwitchLangDisney = jest.mocked(useSwitchDisneyLanguage);

describe("useSwitchLanguage hook", () => {
  const changeLanguageMock = jest.fn();
  const changeRickAndMortyLangMock = jest.fn();
  const changeDisneyLangMock = jest.fn();

  beforeEach(() => {
    i18nInstance.changeLanguage = changeLanguageMock;
    mockSwitchLangRickAndMorty.mockReturnValue(changeRickAndMortyLangMock);
    mockSwitchLangDisney.mockReturnValue(changeDisneyLangMock);
  });

  it("should invoke language switchers", () => {
    const { result } = renderHook(() => useSwitchLanguage());
    result.current.switchLanguage(LanguageOption.ES);

    expect(changeLanguageMock).toHaveBeenCalledWith(LanguageOption.ES);
    expect(changeDisneyLangMock).toHaveBeenCalledWith(LanguageOption.ES);
    expect(changeRickAndMortyLangMock).toHaveBeenCalledWith(LanguageOption.ES);
  });
});

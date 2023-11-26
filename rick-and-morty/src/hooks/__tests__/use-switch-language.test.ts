import { renderHook } from "@testing-library/react";
import { useSwitchLanguage } from "../use-switch-language";
import { LanguageOption, i18nInstance } from "../../locales/i18nConfig";

jest.mock("../../locales/i18nConfig");

describe("useSwitchLanguage hook", () => {
  const changeLanguageMock = jest.fn();

  beforeEach(() => {
    i18nInstance.changeLanguage = changeLanguageMock;
  });

  it("should invoke language switcher", () => {
    const { result } = renderHook(() => useSwitchLanguage());
    result.current(LanguageOption.ES);

    expect(changeLanguageMock).toHaveBeenCalledWith(LanguageOption.ES);
  });
});

import { LanguageOption, i18nInstance } from "../locales/i18nConfig";

export const useSwitchLanguage = () => {
  return (lang: LanguageOption) => i18nInstance.changeLanguage(lang);
};

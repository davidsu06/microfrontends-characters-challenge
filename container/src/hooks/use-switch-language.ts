import { useSwitchLanguage as useSwitchRickAndMortyLanguage } from "rickAndMorty/RickAndMortyModule";
import { useSwitchLanguage as useSwitchDisneyLanguage } from "disney/DisneyModule";
import { LanguageOption, i18nInstance } from "../locales/i18nConfig";

interface UseSwitchLanguage {
  switchLanguage: (lang: LanguageOption) => void;
}

/**
 * This hooks handles language switching for all modules
 */
export const useSwitchLanguage = (): UseSwitchLanguage => {
  const switchRickAndMortyLanguage = useSwitchRickAndMortyLanguage();
  const switchDisneyLanguage = useSwitchDisneyLanguage();

  const switchLanguage = (lang: LanguageOption) => {
    i18nInstance.changeLanguage(lang);
    switchRickAndMortyLanguage(lang);
    switchDisneyLanguage(lang);
  };

  return { switchLanguage };
};

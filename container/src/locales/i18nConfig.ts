import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./en/locale.json";
import es from "./es/locale.json";

export const i18nInstance = i18n.createInstance();

i18nInstance.use(initReactI18next).init({
  resources: {
    en: {
      translation: en,
    },
    es: {
      translation: es,
    },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export enum LanguageOption {
  EN = "en",
  ES = "es",
}

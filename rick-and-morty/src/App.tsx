import React from "react";
import { I18nextProvider } from "react-i18next";
import { Main } from "./components/main/main";
import { i18nInstance } from "./locales/i18nConfig";

export const App = () => {
  return (
    <I18nextProvider i18n={i18nInstance}>
      <Main />
    </I18nextProvider>
  );
};

import React from "react";
import { I18nextProvider } from "react-i18next";
import { ThemeProvider } from "styled-components";
import { Main } from "./components";
import { theme } from "./styles/theme";
import { i18nInstance } from "./locales/i18nConfig";

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <I18nextProvider i18n={i18nInstance}>
        <Main />
      </I18nextProvider>
    </ThemeProvider>
  );
};

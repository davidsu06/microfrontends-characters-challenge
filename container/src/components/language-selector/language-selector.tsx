import React from "react";
import styled from "styled-components";
import { Button } from "../button/button";
import { useTranslation } from "react-i18next";
import { LanguageOption } from "../../locales/i18nConfig";
import { useSwitchLanguage } from "../../hooks";

const BaseDropdown = styled.div`
  position: relative;
  display: inline-block;

  .dropdown-button {
    background-color: ${(props) => props.theme.backgroundColor.bg1};
    color: ${(props) => props.theme.text.color1};
    padding: 1rem;
    font-size: 1rem;
    border: none;
    cursor: pointer;
    border-radius: 0.625rem;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .dropdown-button-arrow {
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 6px solid #fff;
  }

  &,
  .dropdown-content {
    width: 100%;
    max-width: 7rem;
  }

  .dropdown-content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    border-radius: 0.625rem;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .dropdown-content li {
    color: black;
    border-radius: 0.625rem;
    padding: 0.75rem 1rem;
    display: block;
    cursor: pointer;
    font-family: ${(props) => props.theme.text.mainFontFamily};
  }

  .dropdown-content li:hover {
    background-color: #f1f1f1;
  }

  &:hover .dropdown-content {
    display: block;
  }

  &:hover .dropdown-button {
    background-color: ${(props) => props.theme.backgroundColor.bg2};
  }
`;

export const LanguageSelector = () => {
  const { t, i18n } = useTranslation();
  const { switchLanguage } = useSwitchLanguage();

  const lang = i18n.language;
  const languages = Object.values(LanguageOption);

  return (
    <BaseDropdown>
      <Button buttonProps={{ className: "dropdown-button" }}>
        <span>{t(lang)}</span>
        <span className="dropdown-button-arrow" />
      </Button>
      <ul className="dropdown-content">
        {languages.map((value) => (
          <li onClick={() => switchLanguage(value)} key={value}>
            {t(value)}
          </li>
        ))}
      </ul>
    </BaseDropdown>
  );
};

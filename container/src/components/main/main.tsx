import React, { useMemo, useState } from "react";
import styled from "styled-components";
import { DisneyModule, ModuleType, RickAndMortyModule } from "../modules";
import { LanguageSelector } from "../language-selector/language-selector";
import { Button } from "../button/button";
import { useTranslation } from "react-i18next";
import { GlobalStyles } from "../../styles/global-styles";

const ButtonsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const LanguageWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 1rem;
`;

const MainText = styled.h1`
  color: ${(props) => props.theme.text.color1};
  text-align: center;
  font-family: ${(props) => props.theme.text.mainFontFamily};
`;

export const Main = () => {
  const { t } = useTranslation();

  const [moduleType, setModuleType] = useState<ModuleType | undefined>(
    undefined
  );

  const onClickRickAndMorty = () => setModuleType(ModuleType.RickAndMorty);
  const onClickDisney = () => setModuleType(ModuleType.Disney);

  const renderModule = useMemo(() => {
    switch (moduleType) {
      case ModuleType.RickAndMorty:
        return <RickAndMortyModule />;
      case ModuleType.Disney:
        return <DisneyModule />;
      default:
        return null;
    }
  }, [moduleType]);

  return (
    <main>
      <LanguageWrapper>
        <LanguageSelector />
      </LanguageWrapper>
      <MainText>{t("selectCharacters")}</MainText>
      <ButtonsWrapper>
        <Button buttonProps={{ onClick: onClickRickAndMorty }}>
          {t("rickAndMorty")}
        </Button>
        <Button buttonProps={{ onClick: onClickDisney }}>{t("disney")}</Button>
      </ButtonsWrapper>
      {renderModule}
      <GlobalStyles />
    </main>
  );
};

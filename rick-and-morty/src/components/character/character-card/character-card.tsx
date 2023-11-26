import React from "react";
import { Card, Subtitle } from "utility/UtilityModule";
import { CharacterItem } from "../../../models";
import { useTranslation } from "react-i18next";

export interface CharacterCardProps {
  character: CharacterItem;
}

export const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => {
  const { t } = useTranslation();
  const { image, name, gender } = character;

  return (
    <Card text={name} imageUrl={image}>
      <Subtitle>
        {t("Gender")}: {t(gender)}
      </Subtitle>
    </Card>
  );
};

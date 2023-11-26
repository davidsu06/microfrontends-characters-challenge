import React from "react";
import { Card, Subtitle } from "utility/UtilityModule";
import { CharacterItem } from "../../../models";
import { useTranslation } from "react-i18next";

export interface CharacterCardProps {
  character: CharacterItem;
}

export const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => {
  const { t } = useTranslation();

  const { image, name, films, tvShows } = character;
  const subtitle = films[0] ?? tvShows[0];
  const translationKey = films[0] ? "film" : "tvShow";

  return (
    <Card text={name} imageUrl={image}>
      {subtitle ? (
        <Subtitle>
          {t(translationKey)}: {subtitle}
        </Subtitle>
      ) : null}
    </Card>
  );
};

import React from "react";
import styled from "styled-components";
import { List, Spinner } from "utility/UtilityModule";
import { useLoadCharacters } from "../../../hooks";
import { CharacterCard } from "../character-card/character-card";

const SpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CharacterList = () => {
  const { characters, isLoading } = useLoadCharacters();

  if (isLoading) {
    return (
      <SpinnerWrapper>
        <Spinner />
      </SpinnerWrapper>
    );
  }

  return (
    <List>
      {characters.map((character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </List>
  );
};

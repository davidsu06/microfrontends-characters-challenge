import React from "react";
import styled from "styled-components";
import { CharacterList } from "../character/character-list/character-list";

const MainBox = styled.div`
  width: 100%;
  text-align: center;
`;

export const Main = () => {
  return (
    <MainBox>
      <CharacterList />
    </MainBox>
  );
};

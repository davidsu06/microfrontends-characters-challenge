import React from "react";
import styled from "styled-components";

const ListBox = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  list-style: none;
  gap: 1rem;
  padding: 0;
  margin: 1rem;
`;

export const List: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <ListBox>{children}</ListBox>;
};

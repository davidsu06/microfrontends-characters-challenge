import React from "react";
import styled from "styled-components";

const SubtitleBase = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: start;
  font-size: 1em;
  font-weight: 300;
  color: rgb(139 172 218);
  line-height: 1.55em;
  font-family: "Outfit", sans-serif;
`;

export const Subtitle: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <SubtitleBase>{children}</SubtitleBase>;
};

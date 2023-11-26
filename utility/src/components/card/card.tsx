import React from "react";
import styled from "styled-components";
import { Avatar } from "../avatar/avatar";

export interface CardProps {
  imageUrl: string;
  text: string;
}

const ListItem = styled.li`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 400px;
  background-color: rgb(20 37 61);
  border-radius: 1rem;
  padding: 1rem;

  .list-item-wrapper {
    margin-left: 1rem;
    display: flex;
    flex-direction: column;
  }

  .list-item-text {
    color: white;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: start;
    font-size: 1.5rem;
    font-weight: 600;
    font-family: "Outfit", sans-serif;
    line-height: 1.6em;
  }
`;

export const Card: React.FC<React.PropsWithChildren<CardProps>> = ({
  imageUrl,
  text,
  children,
}) => {
  return (
    <ListItem>
      <Avatar imgProps={{ src: imageUrl }} />
      <div className="list-item-wrapper">
        <span className="list-item-text">{text}</span>
        {children}
      </div>
    </ListItem>
  );
};

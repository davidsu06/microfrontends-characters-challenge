import React from "react";
import styled from "styled-components";

const BaseButton = styled.button`
  color: ${(props) => props.theme.text.color1};
  background-color: ${(props) => props.theme.backgroundColor.bg1};
  padding: 0.875rem 1.5rem 1rem;
  display: inline-block;
  font-size: 1.125rem;
  font-family: ${(props) => props.theme.text.mainFontFamily};
  text-align: center;
  border-radius: 0.625rem;
  border: 0;
  cursor: pointer;
  transition: background-color 200ms;
  width: 100%;
  max-width: 11.25rem;

  &:hover {
    background-color: ${(props) => props.theme.backgroundColor.bg2};
  }
`;

export interface ButtonProps {
  buttonProps: React.ButtonHTMLAttributes<HTMLButtonElement>;
}

export const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  children,
  buttonProps,
}) => {
  return <BaseButton {...buttonProps}>{children}</BaseButton>;
};

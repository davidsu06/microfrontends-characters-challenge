import React from "react";
import styled from "styled-components";

export interface AvatarProps {
  imgProps: React.ImgHTMLAttributes<HTMLImageElement>;
}

const Image = styled.img`
  height: 6.25rem;
  width: 6.25rem;
  border-radius: 50%;
  object-fit: cover;
`;

export const Avatar: React.FC<AvatarProps> = ({ imgProps }) => {
  return <Image {...imgProps} />;
};

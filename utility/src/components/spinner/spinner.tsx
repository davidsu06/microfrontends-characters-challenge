import React from "react";
import styled from "styled-components";

export const Spinner = styled.div`
  --border: 1.1em solid rgba(255, 255, 255, 0.2);

  &,
  &:after {
    border-radius: 50%;
    width: 4rem;
    height: 4rem;
  }

  & {
    font-size: 0.625rem;
    position: relative;
    border-top: var(--border);
    border-right: var(--border);
    border-bottom: var(--border);
    border-left: 1.1em solid #ffffff;
    transform: translateZ(0);
    animation: load 1.1s infinite linear;
    margin: 1rem;
  }

  @-webkit-keyframes load {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes load {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

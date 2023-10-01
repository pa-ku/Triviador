import React from "react";
import styled from "styled-components";

const H1 = styled.h1`
  padding-inline: 5px;
  height: 80px;
  display: flex;
  padding-inline: 10px;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: ${props => props.$size};
  @media (max-width: 700px) {
    font-size: 25px;
    width: 100%;
  }
`;

export default function Title({ text,$size }) {
  return <H1 $size={$size}>{text}</H1>;
}

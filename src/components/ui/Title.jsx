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
  @media (max-width: 700px) {
    font-size: 25px;
    width: 100%;
  }
`;

export default function Title({ text }) {
  return <H1>{text}</H1>;
}

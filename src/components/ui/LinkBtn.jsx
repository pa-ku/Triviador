import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const LinkButton = styled(Link)`
  background-color: #239ac5;
  color: #fff;
  text-decoration: none;
  padding: 20px 10px;
  cursor: pointer;
  font-size: 20px;
  background-color: ${(props) => props.$color};
  padding: 1em;
  border: 0px;
  color: #fff;
  font-weight: 600;
  border-radius: 20px;
  border-right: 3px;
  border-bottom: 3px;
  border-style: solid;
  border-color: #136c8d;

  cursor: pointer;
  text-transform: uppercase;
`;

export default function LinkBtn({ text, to, onClick }) {
  return (
    <LinkButton onClick={onClick} to={to}>
      {text}
    </LinkButton>
  );
}

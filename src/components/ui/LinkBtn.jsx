import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const LinkButton = styled(Link)`
background-color: rebeccapurple;
color: #fff;
text-decoration: none;
padding: 20px 10px;
cursor: pointer;
font-size: 20px;
background-color: ${props => props.$color};
padding: 1em;
border: none;

color: #fff;
font-weight: 600;
border-radius: 20px;
text-shadow: 0px 0px 4px  #111;
border: 8px solid  #222;
cursor: pointer;
text-transform: uppercase;
`;

export default function LinkBtn({ text, to }) {
  return <LinkButton to={to}>{text}</LinkButton>;
}

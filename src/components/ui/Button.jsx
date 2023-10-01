import React from "react";
import styled from "styled-components";

const Btn = styled.button`
  font-size: 20px;
  background-color: ${(props) => props.$btnA === true && "#37a332"};
  background-color: ${(props) => props.$btnB === true && "#b13e3e"};
  background-color: ${(props) => props.$btnC === true && "#3e6ac2"};
  background-color: ${(props) => props.$btnD === true && "#9142cd"};
  padding: 1em;
  border: none;
  width: 100%;
  color: #fff;
  font-weight: 600;
  border-radius: 20px;
  border: 0px;
  text-shadow: 0px 0px 4px #111;
  border-bottom: 3px;
  border-right: 3px;
  border-style: solid;

  border-color: ${(props) => props.$btnA === true && "#1b8d15"};
  border-color: ${(props) => props.$btnB === true && "#942323"};
  border-color: ${(props) => props.$btnC === true && "#1947a3"};
  border-color: ${(props) => props.$btnD === true && "#7822ba"};

  cursor: pointer;
  text-transform: uppercase;

  &:hover {
    filter: brightness(1.1);
  }
`;
export default function Button({
  text,
  onClick,
  value,
  name,
  $btnD,
  $btnB,
  $btnC,
  $btnA,
}) {
  return (
    <Btn
      $btnA={$btnA}
      $btnB={$btnB}
      $btnC={$btnC}
      $btnD={$btnD}
      name={name}
      value={value}
      onClick={onClick}
    >
      {text}
    </Btn>
  );
}

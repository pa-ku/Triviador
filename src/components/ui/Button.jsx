import React from 'react'
import styled from 'styled-components'

const Btn = styled.button`
font-size: 20px;
background-color: ${props => props.$color};
padding: 1em;
border: none;
width: 100%;
color: #fff;
font-weight: 600;
border-radius: 20px;
text-shadow: 0px 0px 4px  #111;
border: 8px solid  #222;
cursor: pointer;
text-transform: uppercase;

&:hover{
filter: brightness(1.1);
}
`
export default function Button({text,$color,onClick,value,name}) {
  return (
    <Btn name={name} value={value} onClick={onClick} $color={$color}>{text}</Btn>
  )
}

import React from "react";
import styled from "styled-components";
import Button from "../ui/Button";

export default function TofMode({ onClick,img }) {
  return (
    <>
      <QuestionCtn>
        <Image src={img} alt="" />
      </QuestionCtn>
      <ButtonContainer>
        <Button onClick={onClick} $btnA={true} text={"VERDADERO"} name={"a"} />
        <Button
          onClick={onClick}
          $btnB={true}
          buttonB={true}
          text={"FALSO"}
          name={"b"}
        />
      </ButtonContainer>
    </>
  );
}
const ButtonContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  height: 200px;
  width: 100%;
  gap: 1em;
  padding-inline: 10px;
`;
const QuestionCtn = styled.div`
  width: 100%;
  height: 240px;
  margin-bottom: 10px;
`;

const Image = styled.img`
  object-fit: contain;
  width: 100%;
  height: 240px;
`;

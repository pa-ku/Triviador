import React from "react";
import styled from "styled-components";
import Button from "../ui/Button";

export default function SoundMode({
  onClickSound1,
  onClickSound2,
  onClick,
  btnA,
  btnB,
  btnC,
  btnD,
}) {
  return (
    <>
      <QuestionCtn>
        {/* ■ */}
        <SoundCtn>
          <SoundButton onClick={onClickSound1}>
            <SoundTxt>Pista 1 </SoundTxt>
            <SoundIcon>▶</SoundIcon>
          </SoundButton>
          <SoundButton onClick={onClickSound2}>
            <SoundTxt>Pista 2</SoundTxt>
            <SoundIcon>▶</SoundIcon>
          </SoundButton>
        </SoundCtn>
      </QuestionCtn>
      <ButtonContainer>
        <Button onClick={onClick} $btnA={true} text={btnA} name={"a"} />
        <Button onClick={onClick} $btnB={true} text={btnB} name={"b"} />
        <Button onClick={onClick} $btnC={true} text={btnC} name={"c"} />
        <Button onClick={onClick} $btnD={true} text={btnD} name={"d"} />
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

const SoundCtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  gap: 2em;
`;
const SoundTxt = styled.p`
  color: #fff;
  text-transform: uppercase;
  font-weight: 800;
  font-size: 20px;
`;
const SoundButton = styled.button`
  border-radius: 50%;
  padding: 1em;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: 3px solid white;
  min-width: 150px;
  min-height: 150px;
  cursor: pointer;
  transition: 200ms;

  &:focus * {
    color: #00ff1e;
  }
  &:focus {
    border: 3px solid #00ff1e;
  }
  &:hover {
    filter: brightness(1.5);
  }
`;

const SoundIcon = styled.p`
  font-size: 30px;
  color: #fff;
`;

const QuestionCtn = styled.div`
  width: 100%;
  height: 240px;
  margin-bottom: 10px;
`;

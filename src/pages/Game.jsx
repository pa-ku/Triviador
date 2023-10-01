import React, { useState } from "react";
import Button from "../components/ui/Button";
import LinkBtn from "../components/ui/LinkBtn";
import styled from "styled-components";
import { data } from "../data";

export default function Home() {
  const [index, setIndex] = useState(0);
  const find = data[index];
  const [result, setResult] = useState();
  const [gameOver, setGameOver] = useState(false);

  const playHint = async (hint) => {
    const importRes = await import(hint); // make sure the path is correct
    var audio = new Audio(importRes.default);
    try {
      await audio.play();
    } catch (err) {
      console.log("Failed to play, error: " + err);
    }
  };

  function handleButton(e) {
    const answer = e.target.name;
    const res = find.respuesta;

    if (answer == res) {
      setResult("Correcto!");
      setTimeout(() => {
        setResult("");
      }, 1000);
    } else {
      setResult("Incorrecto!");
      setTimeout(() => {
        setResult("");
      }, 1000);
    }

    if (index < data.length - 1) {
      setIndex((prevIndex) => prevIndex + 1);
    } else {
      setTimeout(() => {
        setGameOver(true);
      }, 1000);
    }
  }

  return (
    <>
      <Wrapper>
        <Container>
          {gameOver === false && (
            <>
              <Title>{find.pregunta}</Title>
              <QuestionCtn>
                {find.type === "sound" && (
                  <>
                    <SoundCtn>
                      <SoundButton onClick={() => playHint(find.pista1)}>
                        <SoundTxt>Pista 1 </SoundTxt>
                        <SoundIcon>▶</SoundIcon>
                      </SoundButton>
                      <SoundButton onClick={() => playHint(find.pista2)}>
                        <SoundTxt>Pista 2</SoundTxt>
                        <SoundIcon>▶</SoundIcon>
                      </SoundButton>
                    </SoundCtn>
                  </>
                )}

                {find.type !== "sound" && <Image src={find.img} alt="" />}
              </QuestionCtn>
              <ButtonContainer>
                {find.type === "quiz" && (
                  <>
                    <Button
                      onClick={handleButton}
                      $btnA={true}
                      text={find.a}
                      name={"a"}
                    />
                    <Button
                      onClick={handleButton}
                      $btnB={true}
                      text={find.b}
                      name={"b"}
                    />

                    <Button
                      $btnC={true}
                      onClick={handleButton}
                      text={find.c}
                      name={"c"}
                    />
                    <Button
                      $btnD={true}
                      onClick={handleButton}
                      text={find.d}
                      name={"d"}
                    />
                  </>
                )}

                {find.type === "tof" && (
                  <>
                    <Button
                      onClick={handleButton}
                      $btnA={true}
                      text={"VERDADERO"}
                      name={"a"}
                    />
                    <Button
                      onClick={handleButton}
                      $btnB={true}
                      buttonB={true}
                      text={"FALSO"}
                      name={"b"}
                    />
                  </>
                )}
                {find.type === "sound" && (
                  <>
                    <Button
                      onClick={handleButton}
                      $btnA={true}
                      text={find.a}
                      name={"a"}
                    />
                    <Button
                      onClick={handleButton}
                      $btnB={true}
                      text={find.b}
                      name={"b"}
                    />
                    <Button
                      onClick={handleButton}
                      $btnC={true}
                      text={find.c}
                      name={"c"}
                    />
                    <Button
                      onClick={handleButton}
                      $btnD={true}
                      text={find.d}
                      name={"d"}
                    />
                  </>
                )}
              </ButtonContainer>
              <StatusTxt>{result}</StatusTxt>
            </>
          )}

          {gameOver === true && (
            <>
              <Title>{"GAME OVER"}</Title>
              <LinkBtn text={"HOME"} to={"/"} />
            </>
          )}
        </Container>
      </Wrapper>
    </>
  );
}

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

const Wrapper = styled.div`
  display: flex;

  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  height: 100vh;
  @media (max-width: 700px) {
    align-items: center;
    justify-content: start;
    height: 0px;
  }
`;
const Container = styled.div`
  max-width: 460px;
`;

const ButtonContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  height: 200px;
  width: 100%;
  gap: 1em;
  padding-inline: 10px;
`;

const Title = styled.h1`
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

const StatusTxt = styled.p`
  color: #999;
  font-size: 18px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

import React, { useState } from "react";
import Button from "../components/ui/Button";
import LinkBtn from "../components/ui/LinkBtn";
import styled from "styled-components";
import { data } from "../data";
import SoundMode from "../components/modes/SoundMode";
import TofMode from "../components/modes/TofMode";
import QuizMode from "../components/modes/QuizMode";

export default function Home() {
  const [index, setIndex] = useState(0);
  const find = data[index];
  const [result, setResult] = useState("");
  const [gameOver, setGameOver] = useState(false);
  const [resultSection, setResultSection] = useState(false);

  function handleButton(e) {
    const answer = e.target.name;
    const res = find.respuesta;

    if (answer == res) {
      setResult("Correcto!");
      setResultSection(true);
    } else {
      setResult("Incorrecto!");
      setResultSection(true);
    }
    if (index < data.length - 1) {
      setIndex((prevIndex) => prevIndex + 1);
    } else {
      setTimeout(() => {
        setGameOver(true);
      }, 1000);
    }
  }

  function handleNextBtn() {
    setResult("");
    if (index < data.length - 1) {
      setIndex((prevIndex) => prevIndex + 1);
    } else {
      setTimeout(() => {
        setGameOver(true);
      }, 1000);
    }
  }
  const playHint = async (hint) => {
    const importRes = await import(hint); // make sure the path is correct
    var audio = new Audio(importRes.default);
    try {
      await audio.play();
    } catch (err) {
      console.log("Failed to play, error: " + err);
    }
  };

  return (
    <>
      <Wrapper>
        <Container>
          {gameOver === false && (
            <>
              <Title>{find.pregunta}</Title>
              {find.type === "quiz" && (
                <QuizMode
                  img={find.img}
                  onClick={handleButton}
                  btnA={find.a}
                  btnB={find.b}
                  btnC={find.c}
                  btnD={find.d}
                />
              )}

              {find.type === "tof" && (
                <TofMode onClick={handleButton} img={find.img} />
              )}

              {find.type === "sound" && (
                <SoundMode
                  onClickSound1={() => playHint(find.pista1)}
                  onClickSound2={() => playHint(find.pista2)}
                  pista2={find.pista2}
                  onClick={handleButton}
                  btnA={find.a}
                  btnB={find.b}
                  btnC={find.c}
                  btnD={find.d}
                />
              )}
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

const StatusTxt = styled.p`
  color: #999;
  font-size: 18px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

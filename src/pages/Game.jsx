import React, { useState, useEffect } from "react";
import Button from "../components/ui/Button";
import LinkBtn from "../components/ui/LinkBtn";
import styled from "styled-components";
import { data } from "../data";
import { Navigate } from "react-router-dom";


export default function Home() {
  const [index, setIndex] = useState(0);
  const find = data[index];
  const [result, setResult] = useState();
  const [arrIndex, setDrrIndex] = useState(0);
  const [gameOver, setGameOver] = useState(false);

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
              <ImageCtn>
                <Image src={find.img} alt="" />
              </ImageCtn>
              <ButtonContainer>
                {find.type === "quiz" && (
                  <>
                    <Button
                      onClick={handleButton}
                      $color={"#37a332"}
                      text={find.a}
                      name={"a"}
                    />
                    <Button
                      onClick={handleButton}
                      $color={"#b13e3e"}
                      text={find.b}
                      name={"b"}
                    />
                    <Button
                      onClick={handleButton}
                      $color={"#3e6ac2"}
                      text={find.c}
                      name={"c"}
                    />
                    <Button
                      onClick={handleButton}
                      $color={"#9142cd"}
                      text={find.d}
                      name={"d"}
                    />
                  </>
                )}

                {find.type === "tof" && (
                  <>
                    <Button
                      onClick={handleButton}
                      $color={"#37a332"}
                      text={"VERDADERO"}
                      name={"a"}
                    />
                    <Button
                      onClick={handleButton}
                      $color={"#b13e3e"}
                      text={"FALSO"}
                      name={"b"}
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

const ImageCtn = styled.div`
  width: 100%;
  height: 240px;
  margin-bottom: 10px;
`;

const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

const StatusTxt = styled.p`
  color: #999;
  font-size: 18px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

import { React, useContext } from "react";
import styled from "styled-components";
import Title from "../components/ui/Title";
import LinkBtn from "../components/ui/LinkBtn";
import { GameContext } from "../components/context/GameContext";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 80vh;
`;

export default function Home() {
  const { setGameOn } = useContext(GameContext);
  return (
    <>
      <Wrapper>
        <Title text={"TRIVIADOR"} />
        <LinkBtn
          onClick={() => setGameOn(true)}
          text={"START GAME"}
          to={"/game"}
        />
      </Wrapper>
    </>
  );
}

import React from "react";
import styled from "styled-components";
import Title from "../components/ui/Title";
import LinkBtn from "../components/ui/LinkBtn";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export default function Home() {
  return (
    <>
      <Wrapper>
        <Title text={"TRIVIADOR"} />
        <LinkBtn text={"START GAME"} to={"/game"} />
      </Wrapper>
    </>
  );
}

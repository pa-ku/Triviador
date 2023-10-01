import Game from "./pages/Game";
import "./style.css";
import styled from "styled-components";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import GameOver from "./pages/GameOver";
import { useContext } from "react";
import {GameContext} from './components/context/GameContext'

function App() {
  const { gameOn } = useContext(GameContext);
  console.log(gameOn);
  return (
    <>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route index path="*" element={<Home />} />
        <Route path="/game" element={gameOn ? <Game /> : <Home />} />
        <Route path="/gameover" element={<GameOver />} />
      </Routes>
    </>
  );
}

export default App;

import Game from "./pages/Game";
import "./style.css";
import styled from "styled-components";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import GameOver from "./pages/GameOver";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<Game />} />
        <Route path="/gameover" element={<GameOver />} />
      </Routes>

    </>
  );
}

export default App;

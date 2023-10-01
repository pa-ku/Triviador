import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { GameProvider } from "./components/context/GameContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GameProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </GameProvider>
  </React.StrictMode>
);

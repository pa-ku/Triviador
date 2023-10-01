import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { HashRouter } from "react-router-dom";
import { GameProvider } from "./components/context/GameContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <HashRouter>
    <GameProvider>
        <App />
    </GameProvider>
      </HashRouter>
  </React.StrictMode>
);

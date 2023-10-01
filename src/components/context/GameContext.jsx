import { createContext } from "react";
export const GameContext = createContext();

export function GameProvider({ children }) {
  return <GameContext.Provider value={"name"}>{children}</GameContext.Provider>}


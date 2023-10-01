import { createContext, useState } from "react";
export const GameContext = createContext();

export function GameProvider({ children }) {
  const [gameOn, setGameOn] = useState(false);

  return (
    <GameContext.Provider value={{setGameOn, gameOn}}>
      {children}
    </GameContext.Provider>
  );
}

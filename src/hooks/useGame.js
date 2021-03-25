import { useState, useEffect } from "react";
import { Game } from "../core/game";

import { game } from "../core/state";

export function useGame() {
  const [state, setState] = useState(game.get());

  useEffect(() => {
    const unsub = game.subscribe(setState);
    return () => unsub();
  }, []);

  const load = (level) => {
    const newGame = new Game();
    newGame.loadLevel(level);
    game.set(newGame);
  };

  return [state, load];
}

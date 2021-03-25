import { useState, useEffect } from "react";

import { Game } from "../core/game";
import Observable from "../core/observable";

export const game = new Observable(new Game());
game.get().loadLevel(1);

export function useGame() {
  const [state, setState] = useState(game.get());

  useEffect(() => {
    const unsub = game.subscribe(setState);
    return () => unsub();
  }, []);

  return state;
}

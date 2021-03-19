import { useState, useEffect } from "react";

import { Game } from "../Game";
import Observable from "../observable";

export const game = new Observable(new Game(3, 3));

export function useGame() {
  const [state, setState] = useState(game.get());

  useEffect(() => {
    const unsub = game.subscribe(setState);
    return () => unsub();
  }, []);

  return state;
}

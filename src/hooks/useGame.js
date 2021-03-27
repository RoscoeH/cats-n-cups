import { useState, useEffect, useMemo, useCallback } from "react";

import { Game } from "../core/game";
import { game } from "../core/state";

export function useGame(level) {
  const load = useCallback((level) => {
    const newGame = new Game();
    newGame.loadLevel(level);
    game.set(newGame);
  }, []);

  useMemo(() => level && load(level), [load, level]);

  const [state, setState] = useState(game.get());

  useEffect(() => {
    const unsub = game.subscribe(setState);
    return () => unsub();
  }, [level]);

  return [state, load];
}

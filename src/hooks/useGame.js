import { useCallback } from "react";
import { useMemo } from "react";
import { useState, useEffect, memo } from "react";
import { Game } from "../core/game";

import { game } from "../core/state";

export function useGame(level) {
  useMemo(() => {
    if (level) {
      game.get().loadLevel(level);
    }
  }, [level]);
  const [state, setState] = useState(game.get());

  useEffect(() => {
    const unsub = game.subscribe(setState);
    return () => unsub();
  }, [level]);

  const load = useCallback((level) => {
    const newGame = new Game();
    newGame.loadLevel(level);
    game.set(newGame);
  }, []);

  return [state, load];
}

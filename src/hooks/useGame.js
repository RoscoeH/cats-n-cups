import { useMemo, useCallback } from "react";

import { Game } from "../core/game";
import { AVAILABLE_LEVELS } from "../core/levels";
import { game } from "../core/state";

export function useGame(level) {
  const load = useCallback((level) => {
    const newLevel = level || game.get().level;
    const newGame = new Game();

    if (AVAILABLE_LEVELS.includes(level)) {
      newGame.loadLevel(newLevel);
    }

    game.set(newGame);
  }, []);

  useMemo(() => level && load(level), [load, level]);

  return [game.get(), load];
}

import { useState, useEffect } from "react";

import { game } from "../core/state";

export function useGame() {
  const [state, setState] = useState(game.get());

  useEffect(() => {
    const unsub = game.subscribe(setState);
    return () => unsub();
  }, []);

  return state;
}

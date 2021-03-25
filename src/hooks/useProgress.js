import { useState, useEffect } from "react";

import { progress } from "../core/state";

export default function useProgress() {
  const [state, setState] = useState(progress.get());

  useEffect(() => {
    const unsub = progress.subscribe(setState);
    return () => unsub();
  }, []);

  return state;
}

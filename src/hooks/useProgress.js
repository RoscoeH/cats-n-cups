import { useState, useEffect } from "react";
import { initProgress } from "../core/progress";

import { progress } from "../core/state";
import useStorage from "../hooks/useStorage";

export default function useProgress() {
  const [state, setState] = useState(progress.get());
  const [{ data, isLoading }] = useStorage("progress");

  useEffect(() => {
    const unsub = progress.subscribe(setState);
    return () => unsub();
  }, []);

  useEffect(() => {
    if (data) {
      progress.set(data);
    }
  }, [data]);

  useEffect(() => {
    if (!data && !isLoading) {
      progress.set(initProgress());
    }
  }, [data, isLoading]);

  const setProgress = (newProgress) => progress.set(newProgress);

  return [state, setProgress];
}

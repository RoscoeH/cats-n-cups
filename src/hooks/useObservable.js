import { useState, useEffect } from "react";

export function useObservable(o) {
  const [value, setValue] = useState(o.get());

  useEffect(() => {
    const unsub = o.subscribe(setValue);
    return () => unsub();
  }, [o]);

  return [value];
}

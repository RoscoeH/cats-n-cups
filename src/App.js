/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import useDimensions from "react-use-dimensions";

import Grid from "./components/Grid";
import Dock from "./components/Dock";
import Header from "./components/Header";
import CustomDragLayer from "./components/CustomDragLayer";

import { Game } from "./Game";
import { useState, useEffect, useMemo } from "react";

const MAX_SIZE = 128;

function App() {
  const [ref, { width }] = useDimensions();
  const game = useMemo(() => new Game(3, 3), []);
  const [numCats, setNumCats] = useState(game.cats);

  useEffect(() => game.observe(setNumCats), [game]);

  console.log("num cats", numCats);

  const cellSize = Math.min(width / 4, MAX_SIZE);
  console.log(cellSize);
  return (
    <div className="App" ref={ref} sx={{ maxWidth: "720px", margin: "0 auto" }}>
      <CustomDragLayer size={cellSize} />
      <Header game={game} />
      <Grid game={game} size={cellSize} />
      <Dock game={game} size={cellSize} />
    </div>
  );
}

export default App;

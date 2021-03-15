import logo from "./logo.svg";
import Cat from "./components/Cat";
import Cup from "./components/Cup";
import Dock from "./components/Dock";

import { Game } from "./Game";
import { useState, useEffect, useMemo } from "react";

function range(n) {
  return [...Array(n).keys()];
}

function App() {
  const game = useMemo(() => new Game(3, 3), []);
  const [numCats, setNumCats] = useState(game.cats);

  useEffect(() => game.observe(setNumCats), [game]);

  console.log("render app");
  console.log("num cats", numCats);
  return (
    <div className="App">
      <div>
        {range(game.rows).map((row) => (
          <div style={{ display: "flex" }}>
            {range(game.cols).map((col) => {
              const cat = game.cats.find(
                (cat) => cat.x === col && cat.y === row
              );
              return (
                <Cup x={col} y={row} game={game}>
                  {cat && <Cat id={cat.id} mad={cat.mad} />}
                </Cup>
              );
            })}
          </div>
        ))}
      </div>
      <Dock game={game} />
    </div>
  );
}

export default App;

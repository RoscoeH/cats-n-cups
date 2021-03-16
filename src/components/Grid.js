/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import Cat, { MOODS } from "./Cat";
import Cup from "./Cup";

function range(n) {
  return [...Array(n).keys()];
}

const Grid = ({ game, size }) => (
  <div sx={{ margin: "0 auto" }}>
    {range(game.rows).map((row) => (
      <div key={row} style={{ display: "flex", justifyContent: "center" }}>
        {range(game.cols).map((col) => {
          const cat = game.cats.find((cat) => cat.x === col && cat.y === row);
          return (
            <Cup
              key={row * game.cols + col}
              x={col}
              y={row}
              game={game}
              size={size}
            >
              {cat && (
                <Cat
                  id={cat.id}
                  color={cat.color}
                  mood={cat.mad ? MOODS.GRUMPY : MOODS.HAPPY}
                  cupped
                />
              )}
            </Cup>
          );
        })}
      </div>
    ))}
  </div>
);

export default Grid;

/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import Cup from "./Cup";
import { useGame } from "../hooks/useGame";
import { range } from "../core/utils";

const BlankCell = ({ size }) => (
  <div sx={{ width: `${size}px`, height: `${size}px` }} />
);

const Grid = ({ size }) => {
  const game = useGame();
  return (
    <div sx={{ margin: "0 auto" }}>
      {range(game.rows).map((row) => (
        <div key={row} style={{ display: "flex", justifyContent: "center" }}>
          {range(game.cols).map((col) =>
            game.grid[row][col] !== null ? (
              <Cup key={row * game.cols + col} x={col} y={row} size={size} />
            ) : (
              <BlankCell key={row * game.cols + col} size={size} />
            )
          )}
        </div>
      ))}
    </div>
  );
};

export default Grid;

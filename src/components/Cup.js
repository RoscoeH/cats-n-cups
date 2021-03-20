/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { useDrop } from "react-dnd";

import Cat, { MOODS } from "./Cat";
import { ItemTypes } from "../constants";
import { useGame } from "../hooks/useGame";
import { useObservable } from "../hooks/useObservable";

const Cup = ({ x, y, size }) => {
  const game = useGame();
  const [cell] = useObservable(game.grid[y][x]);
  const cat = cell && cell.get();
  const [{ isOver }, drop] = useDrop(
    () => ({
      accept: ItemTypes.CAT,
      drop: (item) => {
        game.moveCat(item.id, item.pos, { x, y });
      },
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
      }),
    }),
    []
  );
  return (
    <div ref={drop} sx={{ position: "relative" }}>
      <div
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: "1",
        }}
      >
        {cat && (
          <Cat
            id={cat.id}
            color={cat.color}
            mood={MOODS.HAPPY}
            x={x}
            y={y}
            size={size}
            cupped
          />
        )}
      </div>
      <svg
        width={size || 128}
        height={size || 128}
        viewBox="0 0 56 56"
        sx={{ opacity: isOver ? 0.8 : 1 }}
      >
        <path
          d="M8.00002 24H40C44.4183 24 48 27.5817 48 32C48 36.4183 44.4183 40 40 40H37.8595C35.093 44.7824 29.9223 48 24 48C15.1634 48 8 40.8366 8 32L8.00002 31.9747V24ZM39.5038 35.9695C39.6664 35.9896 39.832 36 40 36C42.2092 36 44 34.2091 44 32C44 29.7909 42.2092 28 40 28V32C40 33.3702 39.8278 34.7002 39.5038 35.9695Z"
          sx={{ fill: "cup" }}
          transform="translate(4 4)"
        />
      </svg>
    </div>
  );
};

export default Cup;

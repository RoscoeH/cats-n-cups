/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { useDrop } from "react-dnd";

import { ItemTypes } from "../constants";
import Cat, { MOODS } from "./Cat";

const Dock = ({ game, size }) => {
  const [{ canDrop }, drop] = useDrop(() => ({
    accept: ItemTypes.CAT,
    drop: (item) => {
      game.returnCat(item.id);
    },
    collect: (monitor) => ({
      canDrop: !!monitor.canDrop() && !monitor.isOver(),
    }),
  }));

  return (
    <div
      ref={drop}
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        border: "1px solid",
        borderColor: "border",
        borderRadius: 16,
        minHeight: "128px",
        m: "16px",
      }}
    >
      {game.cats.map((cat) =>
        cat.x == null && cat.y == null ? (
          <div sx={{ margin: "-8px", display: "inline-block" }}>
            <Cat
              key={cat.id}
              id={cat.id}
              color={cat.color}
              mood={MOODS.SITTING}
              size={size}
            />
          </div>
        ) : (
          <div key={cat.id} sx={{ width: "64px", height: "64px" }} />
        )
      )}
    </div>
  );
};

export default Dock;

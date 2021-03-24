/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { useDrop } from "react-dnd";

import { ItemTypes } from "../core/constants";
import Cat, { MOODS } from "./Cat";
import { useGame } from "../hooks/useGame";

const Dock = ({ size }) => {
  const game = useGame();

  const [{ canDrop }, drop] = useDrop(() => ({
    accept: ItemTypes.CAT,
    drop: (item) => {
      if (item.pos) {
        game.returnCat(item.pos);
      }
    },
    collect: (monitor) => ({
      canDrop: !!monitor.canDrop() && monitor.isOver(),
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
        borderColor: canDrop ? "dark" : "border",
        borderRadius: 16,
        minHeight: "128px",
        m: "16px",
      }}
    >
      {game.cats.map((cat) => {
        const { id, color } = cat.get();
        return (
          <div
            key={id}
            sx={{
              margin: "-8px",
              display: "inline-block",
            }}
          >
            <Cat id={id} color={color} mood={MOODS.SITTING} size={size} />
          </div>
        );
      })}
    </div>
  );
};

export default Dock;

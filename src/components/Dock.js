/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { useDrop } from "react-dnd";
import { ItemTypes } from "../constants";
import Cat, { MOODS } from "./Cat";

const Dock = ({ game }) => {
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
      width="100%"
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        border: "1px dashed",
        borderColor: "dark",
        borderRadius: 16,
        p: "16px",
        minHeight: "128px",
      }}
    >
      {game.cats.map((cat) =>
        cat.x == null && cat.y == null ? (
          <Cat key={cat.id} id={cat.id} color={cat.color} mood={MOODS.SLEEPY} />
        ) : (
          <div key={cat.id} sx={{ width: "64px", height: "64px" }} />
        )
      )}
    </div>
  );
};

export default Dock;

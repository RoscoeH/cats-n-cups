import React from "react";
import { useDrop } from "react-dnd";
import { ItemTypes } from "../constants";

import Cat from "./Cat";

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

  const undockedCats = game.cats.filter(
    (cat) => cat.x === null || cat.y === null
  );
  return (
    <div
      ref={drop}
      style={{
        display: "flex",
        border: "1px solid black",
        borderRadius: 64,
        padding: 8,
        height: 128,
        backgroundColor: canDrop ? "gray" : "transparent",
      }}
    >
      {undockedCats.map((cat) => (
        <Cat key={cat.id} id={cat.id} />
      ))}
    </div>
  );
};

export default Dock;

import React from "react";
import { useDrop } from "react-dnd";
import { ItemTypes } from "../constants";

const Cup = ({ children, x, y, game }) => {
  const [{ isOver }, drop] = useDrop(
    () => ({
      accept: ItemTypes.CAT,
      drop: (item) => {
        game.moveCat(item.id, x, y);
      },
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
      }),
    }),
    []
  );
  return (
    <div
      ref={drop}
      style={{
        borderRadius: 999,
        border: `1px solid ${isOver ? "blue" : "black"}`,
        padding: 8,
        margin: 8,
      }}
    >
      {children || <div style={{ width: 64, height: 64 }}></div>}
    </div>
  );
};

export default Cup;

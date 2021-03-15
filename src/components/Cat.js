import React from "react";
import { useDrag } from "react-dnd";
import { ItemTypes } from "../constants";

/**
 * Your Component
 */
export default function Cat({ id, mad }) {
  const [{ isDragging }, dragRef] = useDrag(
    () => ({
      type: ItemTypes.CAT,
      item: { id },
      collect: (monitor) => ({
        isDragging: !!monitor.isDragging(),
      }),
    }),
    []
  );
  return (
    <div
      ref={dragRef}
      style={{
        opacity: isDragging ? 0.5 : 1,
        width: "64px",
        height: "64px",
        borderRadius: 64,
        backgroundColor: mad ? "red" : "blue",
        color: "rgba(173,216,230,1)",
        textAlign: "center",
        lineHeight: "64px",
        fontSize: 24,
      }}
    >
      {id}
    </div>
  );
}

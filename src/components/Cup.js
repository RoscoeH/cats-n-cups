/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
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
    <div ref={drop}>
      <svg width="48" height="48">
        <path
          d="M8.00002 24H40C44.4183 24 48 27.5817 48 32C48 36.4183 44.4183 40 40 40H37.8595C35.093 44.7824 29.9223 48 24 48C15.1634 48 8 40.8366 8 32L8.00002 31.9747V24ZM39.5038 35.9695C39.6664 35.9896 39.832 36 40 36C42.2092 36 44 34.2091 44 32C44 29.7909 42.2092 28 40 28V32C40 33.3702 39.8278 34.7002 39.5038 35.9695Z"
          sx={{ fill: "cup" }}
        />

        {children}
      </svg>
    </div>
  );
};

export default Cup;

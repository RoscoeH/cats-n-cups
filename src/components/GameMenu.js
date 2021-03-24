/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { motion, useCycle } from "framer-motion";

import IconButton from "./IconButton";
import Button from "./Button";

const ITEM_HEIGHT = 48;
const ITEM_OFFSET = 56;
const TOGGLE_VARIANTS = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.1,
      staggerDirection: -1,
    },
  },
};
const ITEM_VARIANTS = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-200%" },
};

const GameMenu = ({ items = [] }) => {
  const [open, toggleOpen] = useCycle(false, true);

  return (
    <div sx={{ display: "relative" }}>
      <IconButton icon={open ? "close" : "menu"} onClick={() => toggleOpen()} />
      <motion.ul
        sx={{
          listStyle: "none",
          p: 0,
          m: 0,
          "& > *:not(:last-child)": {
            mb: 2,
          },
        }}
        initial={false}
        variants={TOGGLE_VARIANTS}
        animate={open ? "open" : "closed"}
      >
        {items.map(({ label, onClick }, index) => (
          <motion.li
            sx={{
              display: "table",
              position: "absolute",
              top: ITEM_OFFSET + index * ITEM_HEIGHT,
              zIndex: 10,
            }}
            key={index}
            variants={ITEM_VARIANTS}
          >
            <Button onClick={onClick}>{label}</Button>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};

export default GameMenu;

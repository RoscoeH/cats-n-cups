/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { motion, useCycle } from "framer-motion";

import IconButton from "./IconButton";
import Button from "./Button";

const TOGGLE_VARIANTS = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {},
};
const ITEM_VARIANTS = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-200%" },
};

const GameMenu = ({ items = [] }) => {
  const [open, toggleOpen] = useCycle(false, true);

  return (
    <div>
      <IconButton icon={open ? "close" : "menu"} onClick={() => toggleOpen()} />
      <motion.ul
        sx={{
          listStyle: "none",
          p: 0,
          m: 0,
          mt: 2,
          "& > *:not(:last-child)": {
            mb: 2,
          },
        }}
        variants={TOGGLE_VARIANTS}
        initial="closed"
        animate={open ? "open" : "closed"}
      >
        {items.map(({ label, onClick }) => (
          <motion.li
            sx={{ display: "table" }}
            key={label}
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

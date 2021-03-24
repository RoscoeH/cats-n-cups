/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { InlineIcon } from "@iconify/react";
import roundMenu from "@iconify/icons-ic/round-menu";
import roundClose from "@iconify/icons-ic/round-close";

const ICON_DATA = {
  menu: roundMenu,
  close: roundClose,
};
export const ICONS = Object.keys(ICON_DATA);

const DEFAULT_SIZE = 32;
const PADDING = 4;

const IconButton = ({ icon, size = DEFAULT_SIZE }) => {
  const iconSize = size - 2 * PADDING;
  return (
    <button
      sx={{
        bg: "dark",
        color: "light",
        border: "none",
        p: 0,
        width: size,
        height: size,
        borderRadius: 999,
        outline: "none",
        "&:hover": {
          bg: "hover",
        },
        "&:active": {
          bg: "light",
          color: "dark",
          boxShadow: "inset 0 0 0 2px",
        },
      }}
    >
      <InlineIcon icon={ICON_DATA[icon]} width={iconSize} height={iconSize} />
    </button>
  );
};

export default IconButton;

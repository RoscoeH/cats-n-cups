/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";

import theme from "../core/theme";

const SIZE = 64;
export const COLORS = Object.keys(theme.colors.cat);

const Pattern = ({ color, ...props }) => (
  <rect
    x="0"
    y="0"
    width={SIZE}
    height={SIZE}
    sx={{ fill: color ? `cat.${color}` : "cat.black" }}
    {...props}
  />
);

export default Pattern;

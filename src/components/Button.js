/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";

const Button = ({ children, large, ...props }) => (
  <button
    sx={{
      boxSizing: "border-box",
      fontFamily: "body",
      fontWeight: "bold",
      fontSize: large ? 1 : 0,
      letterSpacing: large ? 2 : 1,
      textTransform: "uppercase",
      bg: "dark",
      color: "light",
      border: "none",
      borderRadius: 999,
      px: large ? 4 : 3,
      py: large ? 3 : 2,
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
    {...props}
  >
    {children}
  </button>
);

export default Button;

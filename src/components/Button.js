/** @jsxImportSource theme-ui */
import { useThemeUI } from "theme-ui";
import { motion } from "framer-motion";

const Button = ({ children, large, secondary, ...props }) => {
  const { theme } = useThemeUI();
  const { light, dark, star, shadow } = theme.colors;
  return (
    <motion.button
      sx={{
        boxSizing: "border-box",
        fontFamily: "body",
        fontWeight: "bold",
        fontSize: large ? 1 : 0,
        letterSpacing: large ? 2 : 1,
        textTransform: "uppercase",
        bg: secondary ? "transparent" : "dark",
        borderRadius: 999,
        px: large ? 4 : 3,
        py: large ? 3 : 2,
        color: secondary ? dark : light,
        outline: "none",
        "&:hover": {
          color: secondary ? dark : star.gold,
        },
      }}
      initial={{
        boxShadow: `0 ${large ? 8 : 4}px 0 0 ${secondary ? shadow : star.gold}`,
        border: secondary ? `1px solid ${shadow}` : "none",
      }}
      whileHover={{
        borderColor: dark,
        boxShadow: `0 ${large ? 8 : 4}px 0 0 ${secondary ? dark : star.gold}`,
      }}
      whileTap={{
        borderColor: dark,
        boxShadow: `0 0px 0 0 ${secondary ? dark : star.gold}`,
        translateY: large ? 8 : 4,
      }}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;

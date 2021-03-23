/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { motion } from "framer-motion";

const DEFAULT_HEIGHT = 4;
const DEFAULT_DURATION = 4;

const WiggleText = ({
  children,
  height = DEFAULT_HEIGHT,
  duration = DEFAULT_DURATION,
  ...props
}) => (
  <span {...props}>
    {children.split("").map((char, index) => (
      <motion.span
        key={index}
        sx={{ display: "inline-block", whiteSpace: "pre" }}
        initial={{ translateY: 0 }}
        animate={{ translateY: [height, -height, height] }}
        transition={{
          duration: DEFAULT_DURATION,
          ease: "easeInOut",
          loop: Infinity,
          delay: index * 0.3,
        }}
      >
        {char}
      </motion.span>
    ))}
  </span>
);

export default WiggleText;

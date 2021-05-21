/** @jsxImportSource theme-ui */
import { motion } from "framer-motion";

const DEFAULT_HEIGHT = 4;
const DEFAULT_DURATION = 1;

const WiggleText = ({
  children,
  target = "translateY",
  min = -DEFAULT_HEIGHT,
  max = DEFAULT_HEIGHT,
  duration = DEFAULT_DURATION,
  ...props
}) => {
  return (
    <span {...props}>
      {children.split("").map((char, index) => (
        <motion.span
          key={index}
          sx={{ display: "inline-block", whiteSpace: "pre" }}
          animate={{
            [target]: [max, min, max],
          }}
          transition={{
            duration: DEFAULT_DURATION,
            ease: "easeInOut",
            repeat: Infinity,
            delay: index * 0.1,
          }}
        >
          {char}
        </motion.span>
      ))}
    </span>
  );
};

export default WiggleText;

/** @jsxImportSource theme-ui */
import { Styled, useThemeUI } from "theme-ui";
import { InlineIcon } from "@iconify/react";
import roundLock from "@iconify/icons-ic/round-lock";

import StarBar from "./StarBar";
import { motion } from "framer-motion";

const LevelButton = ({ number, stars = null, locked, onClick, ...props }) => {
  const { theme } = useThemeUI();
  return (
    <motion.button
      sx={{
        fontFamily: "body",
        bg: "light",
        border: "1px solid",
        borderRadius: 8,
        p: 0,
        width: 72,
        height: 72,
        outline: "none",
      }}
      initial={{
        color: theme.colors.shadow,
        borderColor: theme.colors.shadow,
        boxShadow: "0 4px 0 0",
      }}
      whileTap={{
        translateY: 4,
        boxShadow: "0 0px 0 0",
      }}
      whileHover={{
        color: theme.colors.hover,
        borderColor: theme.colors.hover,
      }}
      {...props}
      onClick={() => !locked && onClick()}
    >
      {locked ? (
        <InlineIcon
          icon={roundLock}
          width="24"
          height="24"
          sx={{ color: "cup" }}
        />
      ) : (
        <div>
          <Styled.h2 sx={{ color: "dark" }}>{number}</Styled.h2>
          <StarBar
            stars={stars}
            size={20}
            color={stars ? "star.gold" : "star.brown"}
          />
        </div>
      )}
    </motion.button>
  );
};

export default LevelButton;

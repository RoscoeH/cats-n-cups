/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import { useHistory } from "react-router";
import { motion } from "framer-motion";

import useProgress from "../hooks/useProgress";
import { useGame } from "../hooks/useGame";
import LevelButton from "../components/LevelButton";

const variants = {
  in: {
    transition: {
      staggerChildren: 0.1,
      staggerDirection: -1,
    },
  },
  out: {
    transition: {
      staggerChildren: 0.1,
      staggerDirection: -1,
    },
  },
};

const childVariants = {
  in: {
    opacity: 1,
    y: "0vh",
  },
  out: {
    opacity: 0,
    y: "10vh",
    transition: {
      ease: "easeIn",
    },
  },
};

export const Levels = ({ levels, onLevelClick }) => (
  <motion.div
    sx={{ maxWidth: "360px", m: "0 auto" }}
    variants={variants}
    initial="out"
    animate="in"
    exit="out"
  >
    <motion.div variants={childVariants}>
      <Styled.h1 sx={{ textAlign: "center" }}>Levels</Styled.h1>
    </motion.div>
    <motion.div
      variants={childVariants}
      sx={{
        display: "grid",
        gridRowGap: "24px",
        gridColumnGap: "8px",
        gridTemplateColumns: "repeat(auto-fill, minmax(72px,1fr))",
      }}
    >
      {levels &&
        levels.map((level, i) => (
          <motion.div
            key={i}
            custom={i}
            // variants={buttonVariants}
            sx={{ textAlign: "center" }}
          >
            <LevelButton
              {...level}
              onClick={() => onLevelClick(level.number)}
            />
          </motion.div>
        ))}
    </motion.div>
  </motion.div>
);

export default function LevelsPage() {
  const history = useHistory();
  const [progress] = useProgress();
  const [, newGame] = useGame();

  function handleLevelClick(level) {
    newGame(level);
    history.push(`/play/${level}`);
  }

  return <Levels levels={progress} onLevelClick={handleLevelClick} />;
}

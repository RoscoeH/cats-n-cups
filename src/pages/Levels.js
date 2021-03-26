/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import { useHistory } from "react-router";
import { motion } from "framer-motion";

import useProgress from "../hooks/useProgress";
import { useGame } from "../hooks/useGame";
import LevelButton from "../components/LevelButton";

const inValues = { opacity: 1, y: "0vh" };
const outValues = { opacity: 0, y: "-10vh" };
const stagger = { staggerChildren: 0.1 };
const staggerLevels = { staggerChildren: 0.025 };
const ease = { ease: "easeOut" };
const parentVariants = {
  in: { transition: stagger },
  out: { transition: stagger },
};
const variants = {
  in: {
    ...inValues,
    transition: ease,
  },
  out: {
    ...outValues,
    transition: ease,
  },
};
const levelsVariants = {
  in: {
    transition: { ...ease, ...staggerLevels },
  },
  out: {
    transition: { ...ease, ...staggerLevels },
  },
};

export const Levels = ({ levels, onLevelClick }) => (
  <motion.div
    sx={{ maxWidth: "360px", m: "0 auto" }}
    variants={parentVariants}
    initial="out"
    animate="in"
    exit="out"
  >
    <motion.div variants={variants}>
      <Styled.h1 sx={{ textAlign: "center" }}>Levels</Styled.h1>
    </motion.div>
    <motion.div
      variants={levelsVariants}
      sx={{
        display: "grid",
        gridRowGap: "24px",
        gridColumnGap: "8px",
        gridTemplateColumns: "repeat(auto-fill, minmax(72px,1fr))",
      }}
    >
      {levels &&
        levels.map((level, i) => (
          <motion.div key={i} variants={variants} sx={{ textAlign: "center" }}>
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

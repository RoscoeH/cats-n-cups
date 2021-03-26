/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import { useHistory } from "react-router";
import { motion } from "framer-motion";

import useProgress from "../hooks/useProgress";
import LevelButton from "../components/LevelButton";

const variants = {
  in: { transition: { staggerChildren: 0.1 } },
  out: { transition: { staggerChildren: 0.1 } },
};
const childVariants = {
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
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
          <div sx={{ textAlign: "center" }}>
            <LevelButton
              {...level}
              onClick={() => onLevelClick(level.number)}
            />
          </div>
        ))}
    </motion.div>
  </motion.div>
);

export default function LevelsPage() {
  const history = useHistory();
  const [progress] = useProgress();

  function handleLevelClick(level) {
    history.push(`/play/${level}`);
  }

  return <Levels levels={progress} onLevelClick={handleLevelClick} />;
}

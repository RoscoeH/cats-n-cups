/** @jsxImportSource theme-ui */
import { Themed } from "theme-ui";
import { useHistory } from "react-router";
import { motion } from "framer-motion";

import useProgress from "../hooks/useProgress";
import LevelButton from "../components/LevelButton";
import { Helmet } from "react-helmet-async";
import CompletionPercent from "../components/CompletionPercent";
import { getCompletionPercent } from "../core/progress";

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

export const Levels = ({ levels, percent, onLevelClick }) => (
  <motion.div
    sx={{ maxWidth: "360px", m: "0 auto" }}
    variants={variants}
    initial="out"
    animate="in"
    exit="out"
  >
    <Helmet>
      <title>Levels</title>
    </Helmet>
    <motion.div
      variants={childVariants}
      sx={{ display: "flex", justifyContent: "space-between" }}
    >
      <div sx={{ flex: "1 1 33%" }} />
      <Themed.h1 sx={{ textAlign: "center" }}>Levels</Themed.h1>
      <div
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flex: "1 1 33%",
        }}
      >
        {percent > 0 && <CompletionPercent percent={percent} />}
      </div>
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
          <div key={i} sx={{ textAlign: "center" }}>
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

  return (
    <Levels
      levels={progress}
      percent={getCompletionPercent(progress)}
      onLevelClick={handleLevelClick}
    />
  );
}

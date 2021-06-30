/** @jsxImportSource theme-ui */
import { useMemo } from "react";
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion";

import { generateColors } from "../core/utils";
import useProgress from "../hooks/useProgress";
import { Cat } from "../components/Cat";
import { Cup } from "../components/Cup";
import Button from "../components/Button";
import WiggleText from "../components/WiggleText";
import CompletionPercent from "../components/CompletionPercent";
import { getCompletionPercent } from "../core/progress";

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

const Home = () => {
  const history = useHistory();
  const [progress] = useProgress();
  const colors = useMemo(() => generateColors(3), []);
  const completionPercent = useMemo(() => getCompletionPercent(progress), [
    progress,
  ]);
  return (
    <motion.div variants={variants} initial="out" animate="in" exit="out">
      <motion.div variants={childVariants} sx={{ textAlign: "center", pt: 3 }}>
        <WiggleText sx={{ fontSize: [3, 4] }}>Cats in Cups</WiggleText>
      </motion.div>
      <motion.div
        variants={childVariants}
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <div sx={{ display: "flex", justifyContent: "center" }}>
          <Cup>
            <Cat
              id="1"
              color={colors[0].color}
              faceColor={colors[0].faceColor}
              tail
            />
          </Cup>
          <Cup>
            <Cat
              id="2"
              color={colors[1].color}
              faceColor={colors[1].faceColor}
              mad
              tail
            />
          </Cup>
        </div>
        <Cat id="3" color={colors[2].color} faceColor={colors[2].faceColor} />
      </motion.div>
      <motion.div
        variants={childVariants}
        initial="out"
        animate="in"
        exit="out"
        sx={{ textAlign: "center" }}
      >
        <div sx={{ py: 2 }}>
          {completionPercent > 0 && (
            <CompletionPercent percent={completionPercent} />
          )}
        </div>
        <Button
          large
          sx={{ textAlign: "center" }}
          onClick={() => history.push("/levels")}
        >
          Play
        </Button>
      </motion.div>
    </motion.div>
  );
};

export default Home;

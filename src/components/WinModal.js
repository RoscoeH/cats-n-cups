/** @jsxRuntime classic */
/** @jsx jsx */
import { Styled, jsx } from "theme-ui";
import { useHistory } from "react-router";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

import Button from "./Button";
import StarBar from "./StarBar";
import { formatTime } from "../core/utils";
import { completeLevel } from "../core/progress";
import { useGame } from "../hooks/useGame";
import useProgress from "../hooks/useProgress";
import useStorage from "../hooks/useStorage";

const StatHeader = ({ children }) => (
  <td sx={{ textAlign: "right", fontWeight: "bold", pr: 2 }}>{children}</td>
);
const StatData = ({ children }) => {
  return <td sx={{ textAlign: "left", width: "64px" }}>{children}</td>;
};

const variants = {
  hidden: { opacity: 0, y: -10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const WinModal = ({ time, moves, stars }) => {
  const [game] = useGame();
  const [progress, setProgress] = useProgress();
  const history = useHistory();
  const [, setData] = useStorage("progress");

  const timeControls = useAnimation();
  const movesControls = useAnimation();
  const starsControls = useAnimation();
  const buttonsControls = useAnimation();

  const sequenceAnimation = async () => {
    await timeControls.start("visible");
    await movesControls.start("visible");
    await starsControls.start("visible");
    await buttonsControls.start("visible");
  };

  useEffect(() => {
    const newProgress = completeLevel(progress, game.level, game.stars);
    setProgress(newProgress);
    setData(newProgress);

    const timeout = setTimeout(sequenceAnimation, 500);
    return () => clearTimeout(timeout);
  });

  return (
    <div
      sx={{
        display: "inline-block",
        borderRadius: 32,
        bg: "light",
        color: "shadow",
        boxShadow: "0 0 16px",
        py: 3,
        px: 4,
        zIndex: 100,
      }}
    >
      <div
        sx={{
          color: "dark",
          textAlign: "center",
          "& > *:not(:last-child)": {
            mb: 2,
          },
        }}
      >
        <Styled.h2>You Win!</Styled.h2>
        <table sx={{ margin: "0 auto" }}>
          <tbody>
            <motion.tr
              variants={variants}
              initial="hidden"
              animate={timeControls}
            >
              <StatHeader>time</StatHeader>
              <StatData>{formatTime(time)}</StatData>
            </motion.tr>
            <motion.tr
              variants={variants}
              initial="hidden"
              animate={movesControls}
            >
              <StatHeader>moves</StatHeader>
              <StatData>{moves}</StatData>
            </motion.tr>
          </tbody>
        </table>
        <motion.div
          variants={variants}
          initial="hidden"
          animate={starsControls}
        >
          <StarBar stars={stars} />
        </motion.div>
        <motion.div
          variants={variants}
          initial="hidden"
          animate={buttonsControls}
        >
          <Button large sx={{ mb: 2 }}>
            Next
          </Button>
          <div>
            <Button secondary onClick={() => history.push("/levels")}>
              Levels
            </Button>
            <Button secondary onClick={() => history.go(0)}>
              Retry
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default WinModal;

/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { useParams } from "react-router";
import useDimensions from "react-use-dimensions";
import { motion } from "framer-motion";

import Grid from "../components/Grid";
import Dock from "../components/Dock";
import Header from "../components/Header";
import WinModal from "../components/WinModal";
import CustomDragLayer from "../components/CustomDragLayer";
import { useGame } from "../hooks/useGame";
import { useObservable } from "../hooks/useObservable";
import useProgress from "../hooks/useProgress";

const MAX_SIZE = 112;

const transition = { duration: 0.2, ease: "easeIn" };
const variants = {
  in: {
    opacity: 1,
    transition,
  },
  out: {
    opacity: 0,
    transition,
  },
};

export const Play = ({ game }) => {
  useProgress();
  const [ref, { width }] = useDimensions();
  const [solved] = useObservable(game.solved);
  const cellSize = Math.min((width || MAX_SIZE) / game.cols, MAX_SIZE);

  return (
    <motion.div
      variants={variants}
      initial="out"
      animate="in"
      exit="out"
      ref={ref}
      sx={{
        overflow: "hidden",
      }}
    >
      <CustomDragLayer size={cellSize} />
      <Header />
      <Grid size={cellSize} />
      <Dock size={cellSize} />
      {solved && (
        <WinModal
          time={game.time.get()}
          moves={game.moves.get()}
          stars={game.stars}
        />
      )}
    </motion.div>
  );
};

export default function PlayPage() {
  const { level } = useParams();
  const [game] = useGame(level);
  return game.level ? <Play game={game} /> : <div />;
}

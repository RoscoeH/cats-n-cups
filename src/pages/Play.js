/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import useDimensions from "react-use-dimensions";

import Grid from "../components/Grid";
import Dock from "../components/Dock";
import Header from "../components/Header";
import WinModal from "../components/WinModal";
import CustomDragLayer from "../components/CustomDragLayer";
import { useGame } from "../hooks/useGame";
import { useObservable } from "../hooks/useObservable";

const MAX_SIZE = 112;

const Play = () => {
  const [ref, { width }] = useDimensions();
  const game = useGame();
  const [solved] = useObservable(game.solved);
  const cellSize = Math.min((width || MAX_SIZE) / game.cols, MAX_SIZE);

  return solved ? (
    <div
      sx={{
        display: "flex",
        justifyContent: "center",
        pt: 5,
      }}
    >
      <WinModal
        time={game.time.get()}
        moves={game.moves.get()}
        stars={game.stars.get()}
      />
    </div>
  ) : (
    <div ref={ref}>
      <CustomDragLayer size={cellSize} />
      <Header />
      <Grid size={cellSize} />
      <Dock size={cellSize} />
    </div>
  );
};

export default Play;

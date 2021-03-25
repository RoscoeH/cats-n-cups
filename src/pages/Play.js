/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { useLayoutEffect, useEffect } from "react";
import { useParams } from "react-router";
import useDimensions from "react-use-dimensions";

import Grid from "../components/Grid";
import Dock from "../components/Dock";
import Header from "../components/Header";
import WinModal from "../components/WinModal";
import CustomDragLayer from "../components/CustomDragLayer";
import { useGame } from "../hooks/useGame";
import { useObservable } from "../hooks/useObservable";

const MAX_SIZE = 112;

export const Play = ({ game }) => {
  console.log(game);
  const [ref, { width }] = useDimensions();
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
        stars={game.stars}
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

export default function PlayPage() {
  const { level } = useParams();
  console.log("level", level);
  const [game] = useGame(level);
  console.log(game);

  // useLayoutEffect(() => {
  //   load(level);
  //   console.log("loaded");
  // }, [load, level, game]);

  return game.level ? <Play game={game} /> : <div />;
}

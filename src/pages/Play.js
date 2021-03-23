/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import useDimensions from "react-use-dimensions";

import Grid from "../components/Grid";
import Dock from "../components/Dock";
import Header from "../components/Header";
import CustomDragLayer from "../components/CustomDragLayer";

const MAX_SIZE = 128;

const Play = () => {
  const [ref, { width }] = useDimensions();
  const cellSize = Math.min(width / 4, MAX_SIZE);
  return (
    <div ref={ref}>
      <CustomDragLayer size={cellSize} />
      <Header />
      <Grid size={cellSize} />
      <Dock size={cellSize} />
    </div>
  );
};

export default Play;

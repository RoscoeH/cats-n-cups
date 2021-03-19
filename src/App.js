/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import useDimensions from "react-use-dimensions";

import Grid from "./components/Grid";
import Dock from "./components/Dock";
import Header from "./components/Header";
import CustomDragLayer from "./components/CustomDragLayer";

const MAX_SIZE = 128;

function App() {
  const [ref, { width }] = useDimensions();
  const cellSize = Math.min(width / 4, MAX_SIZE);

  return (
    <div className="App" ref={ref} sx={{ maxWidth: "720px", margin: "0 auto" }}>
      <CustomDragLayer size={cellSize} />
      <Header />
      <Grid size={cellSize} />
      <Dock size={cellSize} />
    </div>
  );
}

export default App;

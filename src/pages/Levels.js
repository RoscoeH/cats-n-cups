/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import { useHistory } from "react-router";

import useProgress from "../hooks/useProgress";
import { useGame } from "../hooks/useGame";
import LevelButton from "../components/LevelButton";

export const Levels = ({ levels, onLevelClick }) => (
  <div sx={{ maxWidth: "360px", m: "0 auto" }}>
    <Styled.h1 sx={{ textAlign: "center" }}>Levels</Styled.h1>
    <div
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
    </div>
  </div>
);

export default function LevelsPage() {
  const history = useHistory();
  const { levels } = useProgress();
  const [, newGame] = useGame();

  function handleLevelClick(level) {
    newGame(level);
    history.push(`/play/${level}`);
  }

  return <Levels levels={levels} onLevelClick={handleLevelClick} />;
}

/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Styled } from "theme-ui";

import useProgress from "../hooks/useProgress";
import LevelButton from "../components/LevelButton";

export const Levels = ({ levels }) => {
  return (
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
              <LevelButton {...level} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default function LevelsPage() {
  const { levels } = useProgress();
  return <Levels levels={levels} />;
}

/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Styled, Button } from "theme-ui";
import { InlineIcon } from "@iconify/react";
import roundLock from "@iconify/icons-ic/round-lock";

import StarBar from "./StarBar";

const LevelButton = ({ level, stars = null, locked }) => (
  <Button variant="level">
    {locked ? (
      <InlineIcon
        icon={roundLock}
        width="24"
        height="24"
        sx={{ color: "cup" }}
      />
    ) : (
      <div>
        <Styled.h2 sx={{ color: "dark" }}>{level}</Styled.h2>
        <StarBar
          stars={stars}
          size={20}
          color={stars ? "star.gold" : "star.brown"}
        />
      </div>
    )}
  </Button>
);

export default LevelButton;

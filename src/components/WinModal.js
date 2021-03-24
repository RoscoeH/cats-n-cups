/** @jsxRuntime classic */
/** @jsx jsx */
import { Styled, jsx } from "theme-ui";

import Button from "./Button";
import StarBar from "./StarBar";

const StatHeader = ({ children }) => (
  <td sx={{ textAlign: "right", fontWeight: "bold", pr: 2 }}>{children}</td>
);
const StatData = ({ children }) => (
  <td sx={{ textAlign: "left" }}>{children}</td>
);

const WinModal = ({ time, moves, stars }) => (
  <div
    sx={{
      display: "inline-block",
      borderRadius: 32,
      color: "shadow",
      boxShadow: "0 0 16px",
      py: 3,
      px: 4,
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
        <tr>
          <StatHeader>time</StatHeader>
          <StatData>{time}</StatData>
        </tr>
        <tr>
          <StatHeader>moves</StatHeader>
          <StatData>{moves}</StatData>
        </tr>
      </table>
      <StarBar stars={stars} />
      <Button large>Next</Button>
      <div>
        <Button secondary>Levels</Button>
        <Button secondary>Retry</Button>
      </div>
    </div>
  </div>
);

export default WinModal;

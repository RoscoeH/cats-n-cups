/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";

const Header = ({ game }) => (
  <div
    sx={{
      bg: "dark",
      color: "light",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      height: 5,
      px: 4,
    }}
  >
    <button>&lt; back</button>
    <div sx={{ textAlign: "right" }}>
      <div>{`${game.moves} moves`}</div>
      <div>{game.time}</div>
    </div>
  </div>
);

export default Header;

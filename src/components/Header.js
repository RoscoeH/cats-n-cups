/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { useHistory } from "react-router";

import { useGame } from "../hooks/useGame";
import { useObservable } from "../hooks/useObservable";

const Header = () => {
  const history = useHistory();
  const game = useGame();
  const [moves] = useObservable(game.moves);
  const [time] = useObservable(game.time);

  return (
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
      <button onClick={() => history.push("/")}>&lt; back</button>
      <div sx={{ textAlign: "right" }}>
        <div>{`${moves} moves`}</div>
        <div>{time}</div>
      </div>
    </div>
  );
};

export default Header;

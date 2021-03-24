/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { useHistory } from "react-router";

import { useGame } from "../hooks/useGame";
import { useObservable } from "../hooks/useObservable";
import GameMenu from "./GameMenu";

const Header = () => {
  const history = useHistory();
  const game = useGame();
  const [moves] = useObservable(game.moves);
  const [time] = useObservable(game.time);

  const menuItems = [
    { label: "Home", onClick: () => history.push("/") },
    { label: "Levels", onClick: () => history.push("/levels") },
    { label: "Restart", onClick: () => history.go(0) },
  ];

  return (
    <div
      sx={{
        color: "dark",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: 5,
        px: 3,
      }}
    >
      <GameMenu items={menuItems} />
      <div sx={{ textAlign: "right" }}>
        <div>{`${moves} moves`}</div>
        <div>{time}</div>
      </div>
    </div>
  );
};

export default Header;

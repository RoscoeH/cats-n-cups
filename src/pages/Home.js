/** @jsxRuntime classic */
/** @jsx jsx */
import { Styled, jsx } from "theme-ui";
import { useHistory } from "react-router-dom";

import { Cat } from "../components/Cat";
import { Cup } from "../components/Cup";
import Button from "../components/Button";

const Home = () => {
  const history = useHistory();
  return (
    <div>
      <Styled.h1 sx={{ textAlign: "center" }}>Cats in Cups</Styled.h1>
      <div
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <div sx={{ display: "flex", justifyContent: "center" }}>
          <Cup>
            <Cat id="1" color="blue" tail />
          </Cup>
          <Cup>
            <Cat id="2" color="brown" mad tail />
          </Cup>
        </div>
        <Cat id="3" color="amber" />
      </div>
      <div sx={{ textAlign: "center" }}>
        <Button
          large
          sx={{ textAlign: "center" }}
          onClick={() => history.push("/levels")}
        >
          Play
        </Button>
      </div>
    </div>
  );
};

export default Home;

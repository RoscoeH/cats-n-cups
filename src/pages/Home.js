/** @jsxRuntime classic */
/** @jsx jsx */
import { useHistory } from "react-router-dom";
import { Styled, jsx } from "theme-ui";

import Button from "../components/Button";

const Home = () => {
  const history = useHistory();
  return (
    <div>
      <Styled.h1 sx={{ textAlign: "center" }}>Cats in Cups</Styled.h1>
      <div sx={{ textAlign: "center" }}>
        <Button
          large
          sx={{ textAlign: "center" }}
          onClick={() => history.push("/play")}
        >
          Play
        </Button>
      </div>
    </div>
  );
};

export default Home;

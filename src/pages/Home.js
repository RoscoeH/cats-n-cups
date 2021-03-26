/** @jsxRuntime classic */
/** @jsx jsx */
import { Styled, jsx } from "theme-ui";
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion";

import { Cat } from "../components/Cat";
import { Cup } from "../components/Cup";
import Button from "../components/Button";

const variants = {
  in: {
    // opacity: 1,
  },
  out: {
    transition: {
      staggerChildren: 0.1,
      staggerDirection: -1,
      ease: "easeIn",
    },
  },
};

const childVariants = {
  in: {
    opacity: 1,
    y: "0vh",
  },
  out: {
    opacity: 0,
    y: "10vh",
    transition: {
      ease: "easeIn",
    },
  },
};

const Home = () => {
  const history = useHistory();
  return (
    <motion.div variants={variants} initial="in" animate="in" exit="out">
      <motion.div variants={childVariants}>
        <Styled.h1 sx={{ textAlign: "center" }}>Cats in Cups</Styled.h1>
      </motion.div>
      <motion.div
        variants={childVariants}
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
      </motion.div>
      <motion.div variants={childVariants} sx={{ textAlign: "center" }}>
        <Button
          large
          sx={{ textAlign: "center" }}
          onClick={() => history.push("/levels")}
        >
          Play
        </Button>
      </motion.div>
    </motion.div>
  );
};

export default Home;

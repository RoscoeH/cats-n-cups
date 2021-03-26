/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Home from "./pages/Home";
import Levels from "./pages/Levels";
import Play from "./pages/Play";
import Scaffold from "./components/Scaffold";

function App() {
  return (
    <Router>
      <Scaffold>
        <Route
          render={({ location }) => (
            <AnimatePresence initial={false} exitBeforeEnter>
              <Switch location={location} key={location.pathname}>
                <Route path="/play/:level">
                  <Play />
                </Route>
                <Route path="/levels">
                  <Levels />
                </Route>
                <Route path="/">
                  <Home />
                </Route>
              </Switch>
            </AnimatePresence>
          )}
        />
      </Scaffold>
    </Router>
  );
}

export default App;

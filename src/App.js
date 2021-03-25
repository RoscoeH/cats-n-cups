/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Levels from "./pages/Levels";
import Play from "./pages/Play";
import Scaffold from "./components/Scaffold";

function App() {
  return (
    <Router>
      <Scaffold>
        <Switch>
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
      </Scaffold>
    </Router>
  );
}

export default App;

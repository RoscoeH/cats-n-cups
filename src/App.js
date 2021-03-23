/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Play from "./pages/Play";

function App() {
  return (
    <Router>
      <div className="App" sx={{ maxWidth: "720px", margin: "0 auto" }}>
        <Switch>
          <Route path="/play">
            <Play />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

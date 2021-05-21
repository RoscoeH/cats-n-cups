/** @jsxImportSource theme-ui */
import { HelmetProvider } from "react-helmet-async";
import { DndProvider } from "react-dnd";
import { TouchBackend } from "react-dnd-touch-backend";
import { ThemeProvider } from "theme-ui";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import theme from "./core/theme";
import Home from "./pages/Home";
import Levels from "./pages/Levels";
import Play from "./pages/Play";
import Scaffold from "./components/Scaffold";

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider theme={theme}>
        <DndProvider
          backend={TouchBackend}
          options={{ enableMouseEvents: true }}
        >
          <Router>
            <Scaffold>
              <Route
                render={({ location }) => (
                  <AnimatePresence exitBeforeEnter>
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
        </DndProvider>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;

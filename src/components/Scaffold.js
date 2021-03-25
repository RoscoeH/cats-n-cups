/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";

const Scaffold = ({ children }) => (
  <div className="App" sx={{ maxWidth: "720px", margin: "0 auto", px: 2 }}>
    {children}
  </div>
);

export default Scaffold;

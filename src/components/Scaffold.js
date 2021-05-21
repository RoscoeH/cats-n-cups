/** @jsxImportSource theme-ui */
import Head from "./Head";

const Scaffold = ({ children }) => (
  <div className="App" sx={{ maxWidth: "720px", margin: "0 auto", px: 2 }}>
    <Head />
    {children}
  </div>
);

export default Scaffold;

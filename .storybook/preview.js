import { HelmetProvider } from "react-helmet-async";
import { MemoryRouter } from "react-router-dom";
import { ThemeProvider } from "theme-ui";
import theme from "../src/core/theme";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => <HelmetProvider>{Story()}</HelmetProvider>,
  (Story) => <ThemeProvider theme={theme}>{Story()}</ThemeProvider>,
  (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
];
